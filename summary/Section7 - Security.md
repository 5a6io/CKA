# 🍨 Section7 - Security

## Kubernetes Security Primitives


클러스터를 보호하기 위해 어떤 위험 요소와 어떤 조치를 취해야 하는가?


kube-apiserver는 kubernetes 내 모든 운영의 중심. kube control utilty를 통해서 또는 API에 직접 접근하여 상호작용하며, 이를 통해 거의 모든 작업을 수행할 수 있음.


API server  자체 접근 제어. 두 가지 결정 필요. 누가 클러스터에 접근할 수 있는가? 무엇을 할 수 있는가?


Authentication

- Files - Username and Passwords
- FIles - Username and Tokens
- Certificates
- External Authentication provides - LDAP
- Service Account

일단 클러스터가 액세스를 얻으면 권한 부여 체계에 의해 무엇을 할  수 있는지 정의됨.


권한 부여는 사용자가 특정 권한을 가진 그룹에 연결되는 role-based access contorls를 사용하여 구현됨.


Authorization

- RBAC Authorization
- ABAC Authorization
- Node Authorization
- Webhook Mode

구성 요소 사이의 cluster와의 모든 소통은 TLS 암호화를 사용하여 보호됨.


## Authentication


내부 구성 요소 간의 통신을 부호하고 인증 및 승인 메커니즘을 통해 클러스터에 대한 관리 접근성을 확보하여 클러스터를 보호하는 방법.


serviceaccount는 kubernets가 관리 가능.


모든 user의 접근은 API 서버에서 관리. 


모든 요청은 Kube API 서버를 통해 이루어짐. Kube API 서버는 요청을 처리하기 전에 인증함.


Kube API 서버는 어떻게 인증하는가?

- Files - Username and Passwords
- FIles - Username and Tokens
- Certificates

위 세 가지를 사용하여 인증 가능.


또 다른 방법으로는 LDAP, Kerberos 등 과 같은 third party 인증 프로토콜에 연결하는 것.


CSV파일에 일련의 사용자 목록과 비밀번호를 생성하여 사용자 정보의 출처로 사용 가능.


비밀번호, 사용자 이름, 사용자 ID 세가지 컬럼을 가짐.


파일 이름을 Kube API 서버에 옵션으로 전달. Kube API server 서비스와 다양한 옵션 기억하기


`--baic-auth-file` 에 명시해야 하며 Kube API server를 재시작해야 함.


Kubeadm tool을 사용해서 클러스터를 설정하면 `/etc/kubernetes/manifests/kube-apiserver.yaml`을 수정해야 함.


파일을 업데이트하면 Kubeadm tool은 자동적으로 Kube API server를 재시작.


API 서버에 접근하는 동안 기본 인증서를 사용하여 증명하기 위해 사용자와 비밀번호를 다음과 같이 curl 명령어에 명시


```bash
curl -v -k https://master-node-ip:6443/api/v1/pods -u "user1:password123"
```


그룹 세부 정보가 포함된 네 번째 열을 사용하여 사용자를 특정 그룹에 할당할 수 있음.


정적 비밀번호 파일 대신에 정적 토큰 파일을 가질 수 있음.


Kube API server에 토큰 인증 파일을 옵션으로 넘김. `--token-auth-file=user-token-details.csv`


인증할 때 토큰은 다음과 같이 요청에 대한 bearer token을 지정.


```bash
curl -v -k https://master-node-ip:6443/api/v1/pods --header "Authorization: Bearer <token>
```


→ 안전하지 않은 방식


Kubeadm 설정에서 위와 같은 작업 시도 시 볼륨 마운트를 고려하여 인증 파일을 전달해야 함.


## TLS in Kubernetes


세 가지 유형 인증서

- 서버에 구성된 server certificate
- CA 서버에 구성된 root certificate
- 클라이언트에 구성된 client certificate

주로 public key는 `.crt` 나 `.pem` 확장자명 사용.


private key는 주로 `.key` 확장자명 사용.


노드들 간의 모든 통신은 안전해야 하며 암호화되어야 함.


모든 서비스와 클라이언트 간의 모든 상호작용은 안전할 필요가 있음.


예를 들어, kubectl 유틸리티를 통해 Kubernetes 클러스터와 상호작용하는 관리자는 Kubernetes API에 직접 접근하면서 보안 TLS 연결을 설정해야 함.


Kubernetes 클러스터 내의 모든 구성 요소들 간의 소통은 보호되어야 할 필요가 있음.


두 가지 주요 요구사항은 클러스터 내의 모든 다양한 서비스가 서버 인증서를 사용하고 모든 클라이언트가 클라이언트 인증서를 사용하여 자신이 누구인지 확인하는 것.


Server Certificates for Servers

- Kube-API server: apiserver.crt apiserver.key
- ETCD server: etcdserver.crt, etcdserver.key
- Kubelet server: kubelet.crt, kubelet.key

Client Certificates for Clients

- admin: admin.crt, admin.key
- Kube-scheduler: scheduler.crt, scheduler.key
- Kube-controller: controller.crt, controller.key
- Kube-proxy: kube-proxy.crt, kube-proxy.key

각각 키 쌍을 가지고 있음.


Kube-API server는 ETCD 서버와 통신함. 그러므로 ETCD 서버 입장에서 보면 Kube-API server는 클라이언트임. 같은 키를 사용해도 되지만 새로 만들 수 있음.


또한 Kube-API server는 각 노드 위 kubelet과도 통신함. kubelet 입장에서 보면 kube api server는 클라이언트임. 마찬가지로 같은 키를 사용해도 되지만 새로 만들 수도 있음.


이 모든 인증서에 서명하려면 인증 기관이 필요함.


Kubernetes는 클러스터에 대한 최소한 하나의 인증 기관이 있어야 함. 하나 이상 가질 수 있음. 한 개는 클러스터 내 모든 구성 요소에 대한 것. 또 다른 것은 ETCD에 대한 것.


## TLS in Kubernetes - Certificate Creation


```bash
openssl genrsa -out ca.key 2048 # 키 생성
openssl req -new -key ca.key -subj "/CN=KUBERNETES-CA" -out ca.csr # 인증서 서명 요청
openssl x609 -req -in ca.csr -signkey ca.key -out ca.crt # 서명 인증서
```

> admin user

```bash
openssl genrsa -out admin.key 2048 # 키 생성
openssl req -new -key damin.key -subj "/CN=kube-admin" -out admin.csr # 인증서 서명 요청
openssl x609 -req -in admin.csr -CA ca.crt -CAkey ca.key -out admin.crt # 서명 인증서
```


CA 키 쌍으로 인증서에 서명. → 클러스터 내에서 유효한 인증서가 됨.


admin이 kubernetes 클러스터를 인증하는 데 사용할 인증서.


키와 인증서 쌍을 생성하는 이 전체 과정은 새로운 사용자를 위한 사용자 계정을 만드는 것과 비슷함.


certificate는 증명된 User ID, key는 패스워드와 비슷함.


Kube API 서버에 액세스하는 다른 모든 구성 요소에 대한 클라이언트 인증서 생성도 위와 동일한 과정을 따름.


Kube-scheduler는 Kubernetes contro plane의 일부로 시스템 구성 요소이다. 그러므로 이름에 keyword인 시스템을 접두사로 붙여야 한다. kube controller manager도 마찬가지로 keyword인 시스템을 접두사로 붙인다.


API server, kubelet에 대한 세 클라이언트 인증서도 위와 같은 과정으로 만듦. 


REST API 호출에서 사용자 이름과 비밀번호 대신 이 인증서를 사용할 수 있음.


옵션으로 key, certificate, CA certificate를 명시할 수 있음.


```bash
curl https://kube-apiserver:6443/api/v1/pod \
--key admin.key --cert admin.crt
--cacert ca.crt
```


다른 방법으로는 이러한 모든 매개변수를 `kubeconfig.yaml`로 옮기는 것.


이 안에 API 서버 엔드포인트 세부 정보, 사용할 인증서 등을 명시.


클라이언트가 서버에[서 보낸 인증서를 검증하거나 그 반대의 경우 모든 인증 기관의 공인 인증서 사본이 필요하다.


웹 애플리케이션의 경우 사용자의 브라우저 내에 설치되어있다.


다양한 구성 요소들이 서로 검증하기 위해 Kubernetes에서는 모두 CA의 루트 인증서 사본이 필요함.


인증서를 가진 서버나  클라이언트를 구성할 때마다 CA 루트 인증서도 명시할 필요가 있음.


ETCD server는 고가용성 환경에서와 같이 여러 서버에 걸쳐 클러스터로 배포할 수 있음.


클러스터에서 다른 멤버 간의 의사소통을 보호하기 위해 추가적인 peer 인증서를 생성해야 함.


일단 인증서가 생성되면 ETCD 서버가 시작되는 동안 인증서를 지정. 서버 키를 지정하는 키 및 인증 파일 옵션이 있음. peer 인증서를 지정하는 다른 옵션도 있음.


ETCD 서버에 연결된 클라이언트가 유효한지 확인하려면 CA 루트 인증서가 필요함.


`kubernetes`, `kubernetes.default`, `kubernetes.default.svc`, `kubernetes.default.svc.cluster.local`  → IP 주소로도 불림. Kube API 서버를 실행하는 호스트 또는 이를 실행하는 pod의 IP 주소.


모두 Kube API server에 대해 생성된 인증서에 존재해야 함. → Kube API 서버를 참조하는 것들이 유효한 연결을 설정할 수 있음.


대신할 이름을 어떻게 명시하는가? → openssl config file을 생성해야 함. OpenSSL.cnf 파일을 생성하고 `[alt_names]` 부분에 대신할 이름을 명시. IP 주소 뿐만 아니라 DNS 이름도.


인증서 서명 요청을 생성할 때 이 구성 파일을 옵션으로 전달.


마지막으로 CA 인증서와 키를 사용하여 인증서 서명. → Kube API server 인증서가 생김.


API 서버가 ETCD 및 kubelet 서버와 클라이언트로 통신할 때 사용하는 API 클라이언트 인증서를 고려함.


인증서들의 위치는 Kube API 서버 실행 파일 또는 서비스 구성 파일로 전달됨.


먼저 모든 구성 요소가 클라이언트를 검증하기 위해 CA 인증서가 필요한 것을 기억하기 위해서CA 파일이 전달되어야 함.


그리고 tls cert 옵션에 API server인증서를 명시. CA파일로 ETCD 서버와 다시 연결하기 위해 Kube API 서버에서 사용하는 클라이언트 인증서도 명시.


마지막으로 kubelet과 연결하기 위한 Kube API 서버 클라이언트 인증서 명시.


kubelet 서버는 각 노드에서 운영하는 ACTPS API 서버로, 노드 관리를 담당. API 서버가 노드를 모니터링하고 이 노드에서 어떤 포드를 예약할지에 대한 정보를 보내기 위해 소통하는 것.


클러스터 내 각 노드는 키 인증서 쌍이 필요함.


인증서 이름은 어떻게 되는가? 각 노드의 이름을 가짐. node01, node02와 같이.


일단 인증서가 생성되면 kubelet config 파일에 작성. root CA 인증서를 명시하고 Kubelet 노드 인증서를 명시.


클러스터 내 각 노드마다 해야 함.


클라이언트 인증서의 경우는? API 서버가 어떤 노드를 인증 중인지 알고 적절한 권한 세트를 제공해야 하므로 올바른 형식의 이름 필요.


노드는 kube-scheduler와 같이 시스템의 구성  요소 이기 때문에 키워드인 system으로 시작해야 함. 그리고 그 뒤에 node:노드 이름이 옴.


API server는 어떻게 올바른 권한 집합을 주는가? admin user에 대한 그룹 이름 명시하면 admin user는 관리자 권하는 갖음. 따라서, 노드도 마찬가지로 시스템 노드라는 그룹에 추가하면 됨.


일단 인증서가 생성되면 앞과 마찬가지로 kube config파일로 이동.


## View Certificate Details


환경에 인증서와 관련된 여러 이슈 발생. → 클러스터 전체의 모든 인증서를 요청 받음.

> organization, expiration, issuer 등을 어떻게 구하는가?

kubeadm이 설정한 환경에서 /etc/kubernetes/manifests/kube-apiserver.yaml 찾음.


API 서버를 시작하는 데 사용된 명령은 사용하는 모든 인증서에 대한 정보를 갖고 있음.


각 용도로 사용되는 인증서 파일을 확인하고 적어두기 → 다음, 각각의 인증서 내부를 살펴 해당 인증서에 관해 더 상세하게 보기. → 인증서를 디코딩하고 세부 사항 살피기. 


```bash
openssl x509 -in /etc/kubernetes/pki/apiserver.crt -text -noout
```


kube-apiserver의 경우 대체하는 이름이 많기 때문에 전부 있는지 살펴야 함.


그런 다음 인증서의 유효성 섹션을 확인해 유효 기간 만료일을 확인하고 인증서 발급자(증명서를 발행한 CA) 확인.


kubeadm은 kubernetes ca라고 함. 모두 다른 인증서의 정보를 확인하려면 위와 같은 절차를 따르면 됨.


확인할 것 → 올바른 이름과 대체 이름, 조직, 올바른 발행인에 의해 발행되고 인증서가 만료되지 않았는지 확인.


인증서 요구사항은 쿠버네티스 문서 페이지에 상세하게 나옴.


문제가 생기면 로그를 살펴봐야 함.


```bash
journal -u etcd.service -l
```


처음부터 혼자 클러스터를 설정하고 서비스가 OS에서 Native Services로 구성돼 있다면 운영체제 로깅 기능을 이용한 서비스 로그를 봄.


kubeadm으로 클러스터를 설정하면 다양한 구성 요소가 포드로 배포됨. → 로그를 보면 kube control 로그 명령과 Pod 이름이 있음.


Kube API server나 ETCD 서버와 같은 핵심 구성 요소가 다운되면 kube control 명령이 동작하지 않음.


이런 경우 docker로 가서 로그를 가져와야 함.


docker ps -a 명령으로 모든 컨테이너를 목록화하고 Docker 로그를 확인해 컨테이너 ID를 입력함.


## Practice Test - View Certificates

1. kube-apiserver에 사용된 인증서 파일

    ```bash
    cat /etc/kubernetes/manifests/kube-apiserver.yaml
    .➡️--tls-cert-file=/etc/kubernetes/pki/apiserver.crt
    ```

2. ETCD 서버에 클라이언트로 kube-apiserver를 인증하기 위해 사용되는 인증서

    ```bash
    cat /etc/kubernetes/manifests/kube-apiserver.yaml
    .➡️--etcd-certfile=/etc/kubernetes/pki/apiserver-etcd-client.crt
    ```

3. kubelet 서버에 kubeapi-server를 인증하기 위해 사용된 키

    ```bash
    cat /etc/kubernetes/manifests/kube-apiserver.ya
    ➡️--kubelet-client-key=/etc/kubernetes/pki/apiserver-kubelet-client.key
    ```

4. ETCD 서버에 사용된 ETCD 서버 인증서

    ```bash
    cat /etc/kubernetes/manifests/etcd.yaml
    ➡️--cert-file=/etc/kubernetes/pki/etcd/server.crt
    ```

5. ETCD server에 제공하기 위해 사용된 ETCD 서버 CA Root 인증서
etcd 서버는 자체 CA를 가질 수 있음. 그래서 kube-api server에서 사용된 것과 다를 수 있음.

    ```bash
    cat /etc/kubernetes/manifests/etcd.yaml
    ➡️--trusted-ca-file=/etc/kubernetes/pki/etcd/ca.crt
    ```

6. Kube API 인증서에 구성된 CA(Common Name)은?

    ```bash
    openssl x509 -in /etc/kubernetes/pki/apiserver.crt -text -noout
    .➡️ Subject: CN = kube-apiserver
    ```

7. Kube API Server 인증서를 발행한 CA의 이름이 무엇인가?

    ```bash
    openssl x509 -in /etc/kubernetes/pki/apiserver.crt -text -noout
    .➡️ Issuer: CN = kubernetes
    ```

8. Kube API Server 인증서에 구성된 대체 이름이 아닌 것.

    ```bash
    openssl x509 -in /etc/kubernetes/pki/apiserver.crt -text -noout
    .➡️X509v3 Subject Alternative Name: DNS: controlplane, DNS: kubernetes, DNS:kubernetes.default, DNS:kubernetes.default.svc, DNS:kubernetes.default.svc.cluster.local, IP Address:172.20.0.1, IP Address:192.168.242.173
    ```

9. ETCD 서버 인증서에 구성된 CN은?

    ```bash
    openssl x509 -in /etc/kubernetes/pki/etcd/server.crt -text -noout
    ➡️Subject: CN = controlplane
    ```

10. 발행된 일자로부터 Kube-API Server 인증서는 얼마나 유효한가? 1년

    ```bash
    openssl x509 -in /etc/kubernetes/pki/apiserver.crt -text -noout
    ➡️Validity
    			Not Before: Mar 6 09:36:46 2025 GMT
    			Not After : Mar 6 09:41:46 2026 GMT
    ```

11. 발행된 일자로부터 Root CA 인증서는 얼마나 유효한가? 10년

    ```bash
    openssl x509 -in /etc/kubernetes/pki/ca.crt -text -noout
    ➡️Validity
    			Not Before: Mar 6 09:36:46 2025 GMT
    			Not After : Mar 4 09:41:46 2035 GMT
    ```

12. kubectl이 갑자기 응답을 멈춤. 최근에 수정된 /etc/kubernetes/manifests/etcd.yaml 파일 확인 후 수정

    ```bash
    vi /etc/kubernetes/manifests/etcd.yaml
    ➡️--cert-file=/etc/kubernetes/pki/etcd/server-certificate.crt 수정
    ➡️--cert-file=/etc/kubernetes/pki/etcd/server.crt
    ```

13. kube-api server가 다시 멈춤. kube-api server로그를 보고 주 이유를 알아내서 고치기.

    ```bash
    crictl ps -a | grep kube-apiserver # 컨테이너 번호 가져오기
    crictl logs --tail=2 e0cde15b70f4e
    vi /etc/kubernetes/manifests/kube-apiserver.yaml
    ➡️--etcd-cafile=/etc/kubernetes/pki/etcd/ca.crt # 수정
    ```


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/feaa57d9-69a1-477b-90eb-075854919446/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665URHWRSL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKMiCtr%2Bk%2BMtEdr30cO7BsAY9EDGbe%2BEksGucL3puLcwIgOfukgQYifWRupYfx9%2B3PPMd4sTi3JwMhxJmsyLxSDRIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOUp0ZWRAw4Lc1xoZCrcA1ptfTTQImm6aKtEWhiABWnY8jieHaPNKg3pca4rBVbAzw%2FczfZJmZvaIV2JQTqtQiBLqT2bq8EKUV4A8sQN%2BrtA1ibMi2gHCPrk4qMEumq%2F5qBTfGLvhLWUq%2FYa9ro8dVXqAUJyaiTdyIahSojOqIQWLDBsJ1tI0ajjb%2FQzw%2FHmwSgRxfxs3boZkNu8VTl8haA1ugVilkLVFxrBGkDvhEy6pK1c7nZ3BpuaFVaV7Aw73mRvMiT%2BIp5PubEvHC0fPIVxgYwDwNz%2B3mY2YARortNzU4Yg3EvIpzGvGniVKKhxSfzywgMYBM%2F0JxhkoaSZ1vwUyrQK3sjKvq1qDYFuCNulttBTo6FSKy9eyrMLCLUHGo27JIpHH4UoPK75BSYI2pl9lYRC8f5pVYY39So99nrNgRJxKsw4FQ8VNCTMiJbAGcWzH1vZBY7ZbkKNrWzIBgd0VfnbSMZ7HciW3r8Kq8EyPvjO9g9IWKQcIKm2U2Je6a4RB%2FN1TLbNC%2FePRwmZeImmiTapAa7JsuKPUISQk5gmnNfmeiHP4exlLAKygSBKEaZ9%2FDCTP9iqjiOpH9KmQK83Pxg6a7OD6zGPlViLXFMqYmP5cli9d6xQhkOzgUQllgkvDcGO%2FO245oXuMLrY2r4GOqUBZQ4I1rlEW%2BbKgmPS7TJy1VeZ2Oha0tX5A8%2FuMuqa8RThcq8jg653bl2%2FH5Wn%2BT420kweD%2Bx8YdjgfZFoQzppG1%2BwuHeYOvIAlBxjpk%2B50BZWNpuiDAk3Z6NqjVZ%2FpRa0zdK30xsfEhhPGlFKqkG9p6IwWJs5goZ1lOeVzLh1wVAvWb85SCtZ1BefMwdBXa9dp%2F2pDDwgCgcYvicncGjhHiZ1nGlq&X-Amz-Signature=3772e81700f4ac28c97823065411fbc45b90f0cc0529ac14ac38eda35d820899&X-Amz-SignedHeaders=host&x-id=GetObject)


## Certificates API


내가 유일한 클러스터 관리자 → 팀에 새 관리자가 들어옴. → 키와 인증서 파일 한 쌍 필요. → 개인 키를 만들어서 인증서 요청을 나에게 보냄. → 내 CA 서버로 가져가서 서버의 개인키와 루트 인증서를 사용하여 서명함. → 서명한 것을 새 팀원에게 전달.


인증서 유효 기간이 끝날 때마다 위 과정 수행.


CA 서버는 무엇인가?


CA는 우리가 생성한 키와 인증서 파일 한 쌍. 이 파일 쌍에 접근할 수 있는 사람은 누구든 쿠버네티스 환경에 대한 인증서에 서명 가능. → 파일들을 안전한 환경에 보호해야 함. → 이것이 CA 서버.


인증서 키 파일은 해당 서버에 안전하게 저장됨. 인증서에 서명하고 싶을 때마다 해당 서버에 로그인 해야만 가능.


현재는 kubernetes master node 자체에 인증서가 배치돼 있음. master node는 CA server임. kubeadm tool은 같은 작업 수행.


CA 파일 쌍을 생성하여 master node에 저장.


수동적으로 요청을 서명했지만, 사용자가 증가하고 팀이 성장함에 따라 인증서 서명 요청을 관리하고 만료되면 인증서를 재생성하는 자동화된 방법 필요.


Kubernetes는 내장된 certificates API가 있음.


certificates API를 가지고 API 요청을 통해 쿠버네티스에 직접 인증서 서명 요청을 보냄.


관리자가 마스터 노드에 로그인하여 직접 인증서를 서명하는 대신 인증서 요청을 받으면 CertificateSigningRequest라는 Kubernetes API 객체를 생성.


객체가 생성되면 클러스터 관리자는 모든 인증서 서명 요청이 볼 수 있음.


요청은 kubectl  명령어를 사용하여 쉽게 검토하고 승인할 수 있음.


인증서를 추출하여 사용자와 공유 가능.

> 만드는 방법

```bash
openssl genrsa -out jane.key 2048
openssl req -new -key jane.key -subj "/CN=jane" -out jane.csr # CSR 객체 생성
```


CertificateSigningRequest 객체는 일반적인 필드가 있는 manifest 파일을 사용하여 다른 Kubernetes 객체와 마찬가지로 생성됨.


request field는 사용자가 보낸 인증서 서명 요청을 지정. 일반 텍스트로 명시하면 안 됨. Base64를 사용하여 암호화해야 됨. 그리고 요청을 보냄


객체가 생성되면 모든 인증서 서명 요청은 `kubectl get csr` 명령어를 실행하여 관리자가 볼 수 있음.


새 요청을 확인하고 `kubectl certificate approve` 명령어를 실행하여 요청을 승인함.


Kubenetes는 CA 키 쌍을 사용하여 인증서를 서명하고 유저에 대한 인증서를 생성. 이를 추출하여 사용자와 공유함.


yaml형식으로 출력하면 certificate 부분은 이전과 마찬가지로 base64 인코딩 형식.


디코딩하려면 텍스트를 가져와서 Base64 유틸리티의 디코딩 옵션 사용. → 평문 형식을 제공. end user와 공유 가능.


인증서와 관련된 작업을 실제로 어떤 구성 요소가 담당해서 하는가?


모든 인증서 관련 작업은 controller manager에 의해 수행됨.


controller manager를 자세히 보면 CSR-Approving, CSR-Signing 등으로 불리는 것이 있음. 이것들이 이러한 구체적인 작업을 수행.


인증서에 서명해야 하는 사람이 있다면 CA 서버와 루트 인증서와 개인 키가 필요하다는 것을 알고 있음. 컨트롤러 관리자 서비스 구성에는 이를 지정할 수 있는 두 가지 옵션이 있음.


```bash
--cluster-signing-cert-file=/etc/kubernetes/pki/ca.crt
--cluster-signing-key-file=/etc/kubernetes/pki/ca.key
```


## Practice Test - Certificates API

1. akshay.csr 파일의 내용을 가지고 akshay 이름을 가진 CertificateSigningRequest 객체 생성.

    CSR을 생성할 때 signerName이라는 추가 필드도 추가해야 한다는 점에 유의하세요. API 서버에 대한 클라이언트 인증을 위해 내장된 서명자 kubernetes.io/kube-apiserver-client 를 사용합니다.


    명령어로 생성할 수 없음. 그러므로 yaml 작성 필요.


    ```yaml
    apiVersion: certificates.k8s.io/v1
    kind: CertificateSigningRequest
    metadata:
      name: akshay
    spec:
      groups:
      - system:authenticated
      request: < the base64 encoded value of the csr file >
      signerName: kubernetes.io/kube-apiserver-client
      usages:
        - client auth
    ```

2. 새로 생성한 CSR 객체의 상태
3. CSR Request 승인

    ```bash
    kubectl certificate approve akshay
    ```

4. 클러스터에서 이용가능한 CSR request 수. approved와 pending 포함
5. 정기 점검 중 새 CSR 요청이 있다는 것을 깨달음. 요청의 이름은?
6. 들어온 요청을 인지하지 못함. CSR 이 무슨 그룹에 접근을 요청하는가? yaml로 출력하여 확인.

    ```bash
    kubectl get csr agent-smith -o yaml
    ➡️spec:
        groups:
        - system:masters
        - system:authenticated
    ```

7. 요청 거절.

    system:masters는 모든 권한을 가지고 있음. 그러므로 요청을 거절.


    ```bash
    kubectl certificate deny agent-smith
    ```

8. 새 CSR 객체 삭제

## KubeConfig


API 서버에 의해 검증되어 사용자를 인증함. kubectl 명령어를 사용하면서 어떻게 할 수 있는가?


`--server` , `--client-key` , `--client-certificate` , `--certificate-authority`옵션을 사용하여 정보를 똑같이 명시할 수 있음. → 매번 하는 것은 번거로운 작업.


kubeconfig 라 불리는 configuration file로 정보를 옮김. 그리고 kubeconfig 옵션을 사용하여 파일을 명시.


기본적으로 kubectl 도구는 사용자 홈 디렉토리 아래에 있음. `$HOME/.kube/config`디렉토리 아래에 config라고 지어진 파일은 찾음.


만약 kubeconfig file이 없으면 kubectl 명령어에 파일 경로를 지정할 필요 없음.


kubeconfig 파일은 특정 형식으로 되어 있음.


config 파일은 세 부분을 가짐. clusters, users, contexts


Clusters는 내가 접근할 수 있는 다양한 kubernetes 클러스터들.


개발 환경, 테스트 환경, 프로덕션 환경, 다른 클라우드 제공 업체 등을 위한 다중 클러스터를 가짐. 


Users는 이러한 클러스터에 접근할 수 있는 사용자 계정. 이러한 유저들은 클러스터마다 다른 권한을 가질 수 있음.


Contexts는 이것들을 결합함. 어떤 사용자 계정을 사용하여 어떤 클러스터에 접근할지 정의.


예를 들어, 프로덕션에서 admin  계정을 사용하여 프로덕션 클러스터에 접근하기 위한 context를 생성할 수 있음. 혹은 개발자의 자격 증명으로 Google에 설정한 클러스터에 액세스하여 내가 만든 애플리케이션 배포를 테스트하고 싶을 수 있음. → 클러스터에서 새로운 사용자를 만들거나 어떤 종류의  사용자 접근 권한을 설정하는 것이 아님.


기존 권한을 가진 기존 사용자를 사용하여 어떤 클러스터에 접근할 사용자를 정의하고 있음. → 실행하는 모든 kubectl 명령에 사용자 인증서와 서버 주소를 지정할 필요가 없음.


명령의 서버 사양은 클러스터 섹션으로 이동. 관리 사용자의 키와 인증서가 사용자 섹션에 들어감.


kube playground cluster에 접근할 kube admin user를 사용하도록 명시한 컨텍스트 생성.


kubeconfig 파일은 yaml 형식. 클러스터용, 컨텍스트용, 사용자용으로 세 부분이 있음. 각각 배열 형식. 같은 파일 내에 다중 클러스터, 사용자나 컨텍스트 명시 가능.


객체를 만들 필요가 없음. kubectl 명령어에 의해 읽히고 필요한 값만 사용.


[bookmark](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/)


[bookmark](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)


각 클러스터에 여러 네임스페이스 구성될지도 모름 → 특정 네임스페이스로 바꾸기 위해 context를 구성할 수 있는가?


```yaml
contexts:
- name:
  context:
    cluster:
    user:
    namespace:
```


인증서를 명시할 다른 방법이 있음. 첫 번째 방법은 경로로 지정한느 것. 두번째는 `certificate-authority` 필드를 사용하는 대신 `certificate-authority-data` 필드를 사용하고 base64로 인코딩한 값을 사용. 


## Practice Test - KubeConfig

1. 현재 환경에 위치한 default kubeconfig 파일은 어디에 있는가?

    /root/.kube/config

2. 기본 config 파일에 정의된 클러스터 수
3. 기본 config 파일에 정의된 사용자 수
4. 기본 config 파일에 정의된 context 수
5. 현재 context에 구성된 사용자

    ```yaml
    contexts:
    - context:
        cluster: kubernetes
        
    user: kubernetes-admin
    ```

6. 현재 기본 kubeconfig 파일에서 정의된 클러스터의 이름은?

    ```yaml
    clusters:
    - cluster:
        certificate-authority-data: <Encoded Data>
        server: <Server Address>
      
    name: kubernetes
    ```

7. my-kube-config라는 이름을 가진 새 kubeconfig 파일 생성. /root에 위치. 그 파일에 정의된 클러스터 수
8. my-kube-config에 구성된 context 수
9. `research` context에 구성된 사용자는?
10. `aws-user` 를 위해 구성된 client-certificate 파일의 이름은?
11. my-kube-config 파일에 설정한 현재 context는?

    ```yaml
    contexts:
    - name: test-user@development
      context:
        cluster: development
        user: test-user
    
    - name: aws-user@kubernetes-on-aws
      context:
        cluster: kubernetes-on-aws
        user: aws-user
    
    - name: test-user@production
      context:
        cluster: production
        user: test-user
    
    - name: research
      context:
        cluster: test-cluster-1
        user: dev-user
    ```

12. `test-cluster-1`에 접근하기 위해 `dev-user`를 사용하고 싶음. 현재 context에 접근할 수 있도록 권한 설정.

    올바른 context가 확인되면 `kubectl config use-context` 명령 사용.


    ```bash
    kubectl config --kubeconfig=my-kube-config use-context dev-user@test-cluster-1
    ```

13. kubectl 명령마다 kubeconfig file옵션을 명시하고 싶지 않음. default kubeconfig file로 my-kube-config 파일 설정. 기존의 ~/.kube/config를 덮어쓰지 않고 모든 부분을 지속. 재부팅 및 셀 세션에서 구성 변경 사항이 지속되는지 확인.

    ```bash
    vi ~/.bashrc
    ➡️export KUBECONFIG=/root/my-kube-config 추가
    source ~/.bashrc
    ```

14. `research`로 context를 설정한 채로 클러스터에 접근 시도. 문제 발생. 해결 하기

    `kubectl get pods`를 실행하여 오류 찾기. 모든 사용자 인증서는 `/etc/kubernetes/pki/users`에 저장됨.


    원인:


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/10644a35-55c2-4521-88c9-6839c45c9ad6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OOVAEWD%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD%2F%2Fs8NYC3%2FtEeEzwSZ%2FYfvvztzOGclktr02oyOO8zNwIhAKLq%2Bi0oKbjn5RH0cxlm64YfVlniKlJLwPBlycfCJF1dKv8DCC8QABoMNjM3NDIzMTgzODA1Igxr0Th%2Fanq%2B2uIZaf0q3AP%2FElBObX0cNP60bsKncdx3BRe%2BV9tgQrH%2Byzj36ps0yt0GPl1AJehtb%2BBl3QkYBtC6Uc0XmUaUGMVuHnlLn%2BPK%2FEaUyUtcW4S9DJ%2Fm%2BB4MeKnsMF1zZEIHuum%2FmeG5d87Uj86OgVjY1E0ddOqa2%2BDEd30TYTSFsGAdhPKiZE7dHcfig3AoVajWnQL%2BAK1qCWVIbV2VQVfznIXuzgFfddMb%2FOTugZzmPleBsbNO9JQt4Vdbf%2BmoICySMoXu8y66RIi3Sk7vUy%2FWLdCi1eo7aoUFRm1ayiLKQ4y0V1Fm%2BWq9wo2X8tLIWTQnlMgzzL4hGkYDPmX2Kv%2BbpDOIuXYYqEzX%2FGh0dZ%2Fz7v%2Bo8FfO%2FjtJZFmOjvMRHHHPFy16tJOq49Jy2ErgaRLRPBsXVSSAX0LiswGWc9L7%2FbCUytb0qAgOXYAshAagA9h7SO6z6OEatlMzKdmno8F%2F59bi4ZYfuxml50mffvLH6kotKqzMAfRXVZcxIgeRIpab3WYrNRDD3OMsVo8JvKaTj4iTJKBaobexCsHSl5fb4D7WJ8M6EwGcFOnXUiSzH4p7zzSKH36P2CZTQm12jtD3r0JNN0DYJ9Ezs1pgIYI9Axm78LWkFzcsvKd77p4i3K7nbnZToTCYpdu%2BBjqkAU7muaGOwtBwgvZ5kAs6wpaFCQZq97wcifrvB1g0sxxN8U%2BloIfq%2BrY%2BoZVB01wtE1br%2Fk4v418138BtRMETcK%2BqWq78p8HcP3NHBKBRlSvfxvOVWpcySmiezLSDOZgSTkjenZQ7idE2fYyWhAEnFAOED1IpUTSCgRhQcGbf3%2BbhYJElk5cjinTJ5IQ0eAsAarmKysFEJiFjpmH0964x5X0%2FJCfM&X-Amz-Signature=d7d603d5c118a7c88e5d498b9f2be27fae851c11673e50700f3be6874ccfada9&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```yaml
    - name: dev-user
      user:
        client-certificate: /etc/kubernetes/pki/users/dev-user/developer-user.crt
        client-key: /etc/kubernetes/pki/users/dev-user/dev-user.key
       
        ⬇️ 수정
        
    - name: dev-user
      user:
        client-certificate: /etc/kubernetes/pki/users/dev-user/dev-user.crt
        client-key: /etc/kubernetes/pki/users/dev-user/dev-user.key
    ```


## API Groups


Kubernetes API는 목적에 따라 여러 그룹으로 그룹화됨. 예를 들어, API를 위한 그룹, health를 위한 그룹, metics과 log를 위한 그룹 등이 있음.


version API는 클러스터의 버전 보는 데 사용됨.


메트릭 및 상태 API는 클러스터의 상태를 모니터링하는 데 사용됨.


로그는 third-party logging 애플리케이션과 통합하여 사용됨.


API는 core group과 named group으로 분류됨.


core group은 이름, 공간, pod, replication controller, 이벤트와 포인트, node, binding, pv, pvc, conflict map, secret, svc 등 모든 핵심 기능이 존재하는 곳.


named group API는 더 체계적이고 앞으로 이러한 명명된 그룹을 통해 모든 새로운 기능이 제공. app, extension, networking, storage, authentication, authorizstion 등을 위한 그룹이 있음.


앱 내에는 deployment, replica set, stateful set이 있음.


networking 내에 network policy를 가짐.


인증서는 CSR을 가짐.


```bash
curl http://localhost:6443 -k | grep "name"
```


경로 없이 포트 6443에서 Kube API 서버에 접속하면 사용 가능한 API 그룹이 나열됨. 그런 다음 명명된 API 그룹 내에서 지원되는 모든 리소스 그룹을 반환. 


cURL을 통해 API에 직접 액세스하려면 인증 메커니즘을 지정하지 않았기 때문에 버전과 같은 특정 API를 제외하고는 액세스가 허용되지 않음.


```bash
curl http://localhost:6443 -k \
--key admin.key \
--cert admin.crt \
--cacert ca.crt
```


인증서 파일을 명령어에 전달하여 API에 인증해야 함.


kubectl proxy clinet로 시작하는 방법도 있음.


kubectl proxy 명령은 8001 포트에서 프록시 서비스를 로컬로 실행하여 kube 구성 파일의 자격 증명과 인증서를 사용하여 클러스터에 액세스함. → curl에 명시할 필요 없음.


kube proxy ≠ kubectl proxy


kube proxy는 클러스터 내 여러 노드에서 pod와 서비스 간의 연결을 가능하게 하는 데 사용됨.


반면에 kubectl proxy는 Kube API 서버에 접근하기 위해 kubectl 유틸리티로 생성된 ACTP proxy 서비스.


kubernetes의 모든 리소스는 서로 다른 API 그룹으로 그룹화됨.


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8dc7f1cd-62b8-488f-876e-bcde2373bb27/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OFL2ZJ5%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAKG1vq4ZUGbBOV%2BOUK%2FnNBfVNSaI4FuZuF9dGabgPbAiAE%2FjTt8QttnK4B3qAL2%2BvI6%2B60FxsosJsbwpToTGJvgir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMnnSaoLxtIq68%2B%2BGSKtwD%2FQkOrK0alra5sp5n%2BgOs9%2FyVqBkZWS7XgXeOZpAXc6v%2BYBT%2B1oPhlysDEzvU7DoiisdrrqmjPd4wkORtq8t5wwJTN4XVupzqSSUy2Ac9rryB5n3GpZTlY2HRFKP5PliQlOGyfg7cbvrC0CnMEtNC2wmvdNKWpdFxnTMZj6nT5UHCMebqC%2BMIL%2FEKWrJP4kZt7pwSQGXkh68RPQfkIUuO26cm9%2BF2mikMjvmQjA1HG3%2BLWRitZb%2BLrMQrxG60BWNmete2Wmp2eBi9Z2BJgrbYe6RYNGz%2Fw%2BTV4VlREeBt9JfGfkiIPP3P56gwYXschSUTEeAaOuMeKEDoZtnGKh9DC%2BN1PNZQ6UPuHi8ErRRNZl5y97rJckmJud59BS%2B6KbMqy%2BAJm4OvF3ZeIC1XS6xkqon3E9Jq6hfGuLQzRaggnLYS%2BlzGEPBwcPRwbVhx5iW1Avhf%2Bcvz3Dnk1KQ0u0Qne3p84y0NmR8rsW6nEZ7YQ2H7qzptI4%2BgcVgiQ9AG%2FhY0NhUaI10M2fZ1hGQ9pSdyxsL%2FLiuqqrM1nXJp3CnO%2B3%2BiQIpKcwDkdu5R1KnUJBd8dDtkj9wtiFTdKimwb22XwVPhiTkxETK4O3v6zO5Vi1d4ZygAxVPxk7%2Bwu0ow3tjavgY6pgE5DB9CzLyLu6dNscxnL0KKCDtFZ3bcHrnFlKXpgLX4ehk2BNfaFIzrvcMfSPhia3fqWzN2QXMEIaRkDDbNF4Ntv38NlCt2Oh5stnlLqIN6Xn5jmId0INI6ybk8XEfYkGK73K6lBoc5Bard2J4Q9kbd5lvt1kMl%2F%2B5bPA0Iw6cEyoMNgwwZHlS05BxrVxrHwC0OO455lACtbOeH2Ln%2BZ65LXcnKAgBQ&X-Amz-Signature=7e0f1246b4cd1091d1bc7f3b8b164ed944acd4385ef32a3dda304c871b38a753&X-Amz-SignedHeaders=host&x-id=GetObject)


## Authorization


kubernetes가 지원하는 다양한 authorization 체계가 있음.

- node authorization
- attribute-based authorization
- role-based authorization
- webhook

kubelet은 노드의 상태와 같은 노드 정보를 Kube API server에 보고한다. → 이러한 요청은 Node Authorizer에 의해 처리됨.


시스템 노드 이름과 시스템 노드 그룹의 일부를 가진 사용자로부터 오는 요청은 노드 권한 부여자에 의해 승인됨. 이러한 권한이 부여되면 kubelet에 대한 권한이 필요.


ABAC(Attribute-based authorization)는 사용자 또는 사용자 그룹을 일련의 권한과 연결하는 것. 각 파일에 각 사용자와 그룹에 대한 정책 정의 파일을 생성. 보안을 추가하거나 변경할 때마다 수동적으로 정책 파일을 수정하고 kube api server를 재시작해야 함. ABAC는 관리하기 어려움.


RBAC(Role-based-access control)은 만들기 쉬움. 필요한 권한 세트를 가진 역할을 만든 다음 해당 역할에 연결. 접근 권한에 변경이 필요할 때마다 역할을 수정하면 즉시 반영됨. Kubernetes 클러스터 내에서 접근을 관하는 표준적인 접근 방식.


모든 authorization 체계를 아웃소싱하고 싶다면?


예를 들어, Open Policy Agent는 승인 제어 및 승인을 돕는 third-party 도구. Kubernetes가 사용자와 접근 요구 사항에 대한 정보를 가지고 Open Policy Agent에 API 호출을 하도록 함. Open Policy Agent가 사용자를 허용할지 여부를 결정하도록 할 수 있음.


Always Allow와 Always Deny 모드가 있음. Always Allow는 승인 확인 없이 모든 요청을 승인함. Always Deny는 모든 요청 거절. 모드는 어디에 구성하는가? 기본적으로 무엇으로 작동하는가? 한 번에 여러 개를 가질 수 있는가? 여러 개의 인증이 구성되어 있는 경우 어떻게 작동하는가?


Kube API 서버의 인증 모드 옵션을 사용하여 설정됨. 옵션을 명시하지 않으면 기본적으로 Always Allow로 동작. 여러 모드를 사용하고자 하는 경우 쉼표로 구분하여 됨. 여러 모드가 구성된 경우, 요청은 지정된 순서대로 각 모드를 사용하여 승인됨.


```bash
--authorization-mode=Node,RBAC,Webhook
```


NODE, RBAC, WEBHOOK 순으로 권한이 주어진 경우, 먼저 Node Authorizer에 의해 요청이 처리된다. Node Authorizer는 오직 node request만 처리하고 나머지는 deny한다. 모듈이 요청을 deny할 때마다 다음으로 넘어간다. role-based access control module은 확인하고 사용자 권한을 부여한다. 권한 부여가 완료되고 사용자는 요청된 객체에 접근 가능.


따라서 요청을 거부할 때마다 체인의 다음 요청으로 이동하며, 모듈이 요청을 승인하는 즉시 더 이상 확인이 이루어지지 않고 사용자에게 권한이 부여됨.


## Role Based Access Controls(RBAC)


Role 객체 생성. 


API version에 rbac.authorization.k8s.io/v1, kind에 role을 설정하고 이름을 지은 후 rule을 명시하여 role 정의 파일 생성.


rule 세가지 부분으로 나뉨. API Groups, resources, works.


Core group에 대해 API group  부분으로 빈칸으로 남길 수 있음.


접근 가능하도록 역할에 부여하고 싶은 resources를 작성.


action은 list, get, create, delete 등 수행할 수 있는 action 정의. 


RoleBinding 객체는 사용자에 역할을 연결.


kind는 RoleBinding이고 두 부분으로 나뉨. subjnject 사용자 상세정보 명시.


roleRef는 생성된 역할의 세부 정보 제공.


```yaml
roleRef:
  kind: Role
  name: developer
  apiGroup: rbac.authorization.k8s.io
```


kubectl create를 사용해서 role binding 생성. role과 role binding은 namespace 범위에 속함. 그러므로 예를 들어 dev user는 지금 기본 네임스페이스에 있는 pod와 config map에 접근 가능. 다른 네임스페이스 내에 접근하도록 하고 싶으면 definition file을 작성하면서 metadata 내에 namespace 명시.


생성된  role을 보려면 `kubectl get roles`를 실행.


role binding을 보려면 `kubectl get role bindings` 실행


role에 대한 자세한 정보를 보려면 `kubectl describe role <role 이름>`


실행하면 리소스와 각 리소스에 대한 정보를 볼 수 있음.


마찬가지로 role binding도 `kubectl describe role bindings`를 실행하면 존재하는 role binding에 대한 정보를 볼 수 있음.


클러스터 내 특정 리소스에 접근할 수 있는지 확인하고 싶다면 어떻게 해야 하는가?


`kubectl auth` `can-i` `create deployments` `deployment`를 생성할 수 있는지 확인


 예를 들어 사용자가 작업을 수행하기 위해 필요한 권한 세트를 생성하는 임무를 맡았다고 가정. 하지만 수행한 작업이 제대로 작동하는지 테스트하고 싶음. 그것 테스트하기 위해 권한을 부여 받을 필요가 없음. 대신 as user 옵션을 가지고 같은 명령어 사용 가능.


 `kubectl auth can-i create deployments --as dev-user` 


같은 네임스페이스 내에 Pod와 같은 리소스에 사용자가 접근하도록 할 수 있음. 한 단계 내려가서 특정 리소스에 단독으로 접근할 수 있도록 할 수 있음.


예를 들어, blue, green, orange, purple, pink 5개 pod가 동일한 네임스페이스에 있음. 사용자가 pod에 접근할 수 있도록 하려고 함. 단 모든 파드는 아님.


`resourceNames` field에 rule을 추가함으로써 orange와 blue pod에만 접근하도록 제한할 수 있음.


## Practice Test - RBAC

1. 환경을 점검하고 클러스터에 구성된 인증 모드를 식별.

    kube-apiserver 설정을 확인.


    ```yaml
    - --authorization-mode=Node,RBAC
    ```

2. default 네임스페이스에 존재하는 role 수.
3. 모든 네임스페이스에 존재하는 role 수.

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/cb6d8fc6-de37-49d4-ae22-27d35fd6cabf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7HETHNL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIth0iyj3iZZjyusIyApwB2V0a4AioTaQGuizQc4V2HQIgb3UlvgtK%2Bs%2F2rcjs%2FKuTRJ27uaKbbYeV44Af%2FsYqmygq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNOajBcc0fSd7qpoyircAwGHdDtGHz%2BHxRBKM0569JSLlEGt%2FKMLn6tEjcKsRodPg0Y7vHr9ovTZK0dBSI8CSgggstbtooqT1iggBzzXXTN5WsXvQlOa0Vd1SDFFYm0D%2FOAF1yEbpOFlTvUmmf%2BP%2FUoIpv8kKz1CU%2FcLWIZh4KRU3NBw2InJOinoyweXWKwakkJMb6J9PyzZP4UA99cbP5iU%2FNf39b6li1lEf7pxmMM8sLaxJfqKcXCPe%2B0N0APtMPlAwKOfaMbXEg1ubVUcMwkCSyQnyZuin1bVpQzGhn%2F6mmVB4CrE4wpDtpo7KWyMBALugiDKV9x1cb%2F33PpSUlFovoV250QTLZcB%2FTDOhq0BoDQRb6xq5qjj7Rv%2BYaI8reVWTWfyVVatrC5IA4XDzGNKRN8ElG%2Ba4Y1sPnIYKrqFfBXzjaUFKpzuvu08MxTzdyG2O1Zcse2RJc5hw6IAlVEdeLNAOjbkDAlkguyuES%2BGLIT%2Foqko%2BJakwuTwA%2F36qTLb6Ou3P3gpnaIx%2BANpLhN0ByMl4Rq3g4WtOEr01txhWEnEPLabd71cENmI0Vew3Y4JAfZdvc8PkwaqoAyTn5e2lb6xMMHQErGr34XwbJGCBsDK8O%2Be60ylGzoce%2BXRsbK6ltpPQM%2Bk5%2Fa1MOrY2r4GOqUB1G6Ka5DZSDsqw9lH%2F8Rwj3yw4mEPpHCSspNegk9z%2B7ZwlY7c1mwmJx5OYfFuIhLpAcqG2XWZoNdph2FB0tbk4S7cARrLN2fPuyJti8CRcegKEQ6e%2BMbsqSGVtY5sQvxfeoFFSiaUgEgXAiRxtFeBTNS6uF5X04ZWOrBSxej7Ze5pvovnYxVM6WTrCP%2Bz%2F9LDcIu15tECfOYpLm75TS%2BMt%2F1DqS8d&X-Amz-Signature=9e2b766026a421fa217ccf6cf014eb25168654bfe7d6d1902ad9c9bbbd568f7f&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```bash
    # wc -l 은 줄 수를 출력하므로 -1한 것이 답.
    kubectl get roles --all-namespaces | wc -l
    ```

4. kube-system 네임스페이스에 kube-proxy role이 부여된 resource는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8a815837-d7ea-41b3-a083-8df4c0eecdff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMO7UZNZ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICL6eehNJhsOGaO5wEs7NJaRywhPrgSMmBz9FrqdF454AiEA0ga1iY35%2FWHaENXJ3jAUGlsDgPftU6tnXqYI8Qrcv74q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMoX7Dihqex2vAYhcSrcA%2Fut15i7x79Trrqkgq4AfwL72MnKU9GF%2Bu2RmkIzJbsnoM7ebF8V9fL28c1VYPaPZMR%2BtaydHRJGesibj3pzcqTTm%2F161KRT1Zw37i7yKepa3qFBLrQLF145Xsmhusg5EJOVG%2FqDBIbzA2VYGB%2Bz7ecMYpb5kgpRZ2uYSkEeRQA1RLUa1gv76Up2ggM%2F6DfZq1lqRP3w0PVWpsh7MSw7FrgAygXOcObFr9ij7DvAEyybfeSg0j%2BRxRb4agaeB8FsqcOrwT5WKc2ZxU0u1NtVlFrCHqHYHFULEufxfaAta7siKLsWEqzbDykwt9l0tUURpw7JvDYuwmRim1UdSrvgqukJUhNp5RhWlz8RafqVgocG%2FZXxW7LaYd9TVsMJWSctfLT%2BcRvGc1MQ2kV%2BDFwdB3d0TCd%2BniZjnKaXxr%2FO9%2Fymp7Tvf%2FX%2B3ZadhmJmi9X0h3DXyzqySGJ2MDbvI%2BfvWRm%2B7svCFHfOXI8IxoGRviu0k2clXF99E7PLiiJf6WPXKf9fFhzR9PJtTHTYk62nZNY1CVLoAUIzG1IAuxSTtkVHf7wLLwbnNzElO%2BrIrRznzK6eaoYSn9ZWpZBcEIspgXDYmh2CbsdjLi6Kcq2pibrSud8iv3QH5TbY16FHMMrY2r4GOqUBIbdtvDGnH%2BvQtDq5IgSpfxWDOpnIOtlqHsB5ZxrLT2LQkVfrBjWI2YlS3B5aOvZ8%2FGz5kE26M8ycQzfa%2FBBoE2cQI3NqHO4%2FJWsz5oDKqdI0Ecsdnn%2F5riQf8HSA9a71okr%2BdZy4%2FWZcezRn50tYpcU%2BPWt0mtowjrK6j6tH5SJJWFc7cEKuiZWmsRayDJl1XMPXT9Np4qzsq5n0DfNitqqdix1M&X-Amz-Signature=0b39b012f672790a0e84378b38a03b2739c20b5feca9c96a98156b59bad85ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

5. configmap에 어떤 action을 할 수 있는가?
6. 주어진 문장에서 옳은 것은?

    kube-proxy role can get details of all configmap object by the name kube-proxy only


    kube-proxy role은 kube-proxy 이름으로만 모든 configmap 객체의 세부 정보를 얻을 수 있음.

7. kube-proxy role이 어느 계정에 할당되는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/54e0a2d5-09b0-4613-9a26-fb1465ea0001/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZJ6KHE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCiqjkwJOqurusXfYG7LXNiL4nZmHj50SvSf%2Bs31966AiEA3VzxUzwEHm3PqnO%2FmUxQQzVOT%2BPz10ymJIrlmvRz1oUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCAdLoEADgL6WOuNrircAzg3lSCUOpluIJ4rD4vZJ1x2o2F6w72IRWGn8rY3cpbsNr4yPO7xUbkBbcuHmTYEMlaUgMysepqOP6x5yvC9doYnJ%2BmtZP06YR%2Fclk2eofwPqhQFgz%2FJ7omE1tbIftjsr5l4INqnMns57bcw4utl4xWxeVfsyp3ftQfe9%2BfmLU9rBsw7Cb%2F9mm8cRsLit4Ft1WsAVcLo%2FmyQxiMz%2B6N%2FKRu5lPRsI1HCctp%2FiCa25R0KTIgCZ5ukUUslGzfO9RXqXA586BdWxsRGgBRAI8QIpFc4Aodtt2iFK6xpKCZFXiL62nFO8XDyMjbS3Vdizp2m8GuVw%2BpekfqLI8cexkQLVjHulT%2Bsfg7%2F05zfq5%2FLWYmAs2tSw%2FNIE1tFjBYngdFf1HcUftgbIxl%2FEbRsD944LH%2B4e5A1Owl0MHrynf93ucgQ8xCCqxqnueoQ8%2F9uHjddJzVzwH6ae3YHQM2Gjbiun5u6VscovuRnvWVvRd7OvIfBsooukbH8iGGK1TPZxZyqFIitLepzGwm4bzJW2pkUg1BgdEcVWVjYLX1XcmqRTHTkqax1%2BRwEpz4Zbf8lbXRb5lKT3QZaTPYp2KPacRJoHXFM9%2Fr8D5wbyugi08NGcVdDvD9bDTpe8s2xhUy6MJzY2r4GOqUBpUUV8Vjek3nbrHDPgo7PTTbTKcKC%2BO1ApJYF73oQzmwEH6pVu7KjlAPdCj3ss67wnwRxS2PN3JZaZ2C0Z2Ek%2B7bHQaYMqAfApZkdngTe479Y7tjxZSbDahsuGU6t3lC3VDjuDdZVxqZdWP3NvizAgQueWx5YdHgTyLGOY%2BxN4Bl4IWeYly6EyZ1u2sNZi3J3fNvjIVeolcURoMdbnmA8v7hFV7OS&X-Amz-Signature=a451e3c110129d85d14cb8b743bbd966f73e9974aae3b11a2ab9535ae6e43bec&X-Amz-SignedHeaders=host&x-id=GetObject)

8. dev-user 사용자 생성. User의 세부 정보가 kubeconfig에 추가됨. user에 부여된 권한 관찰. default 네임스페이스에 list pods를 할 수 있는지 확인.

    ```bash
    kubectl auth can-i get pods --as dev-user
    ```


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/0b1c42ae-2023-4508-a739-bcaee8156d7d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ5SBIUV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD84n1YwHNsqrTZ%2F%2B04ArxAhGvG%2F2mUkX967npSNWYguAIgXUV%2F1UBkDnQCjX6cD2NIAkj7g4PSwlENr8F2%2BAPCUesq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCYhs%2B06RcOibU24RCrcA5o7RsHfJmmTKoz3FKtuChekCmXMev7MIPeqGE3ycvomS15%2B6Gk1nrlhCTbnzC4Mz3E8%2FfGSJ6PXfUTQ%2Frm%2BrWYn%2BT2weN2gy8G5G8v%2BYnaIxrk%2F0eLRPR05LYp8l%2Fcud55saNlIfYsx3BKrN4kKFe16MqmUPVEv6hdlgkJg2njLuEEzyR%2BfLHxHq%2BUSJiS%2Bav2hoKrw75s%2BC%2BCc1Y5EGgYrf1gOVl1TcVYhNI0SbX2zez8RKXQGkM8ujYgmtQzhVCrohuEt7oTdGQ5YrVX7iCQ71jimvWewPpRKTAVQLLBSzMRuEcpXLrcmdxWQnbtSV6IRp4PFYIXsoCETuYocJkMMVKZmZxaT4XdEsE8noThMYcORr%2FhGprjsg%2BIUF%2FSqEZxtT2CCXyZSj9GQ32OHERSAau%2FHKsfpS8ysg42gmZ9nE89oxRP%2FwzBs5oNCTDvb0yJVRMnIy%2BzWotILlUf3FArkco2A11fmguD5jdheqjno%2BgR6DReNZzcNnDCTrViThBI7vRbDRWgRhA1SLGRhAyWuLP5mOlcj8et6YrQ4OPbOhiSv4b%2F8EMpVV2ESjCZombmM443DDkmsOjpn6Bf3Q86z6RhtZF2Qsx6HgpCdmcHnJ0IBoMTpQ7FCrdGIMJLy2r4GOqUBCPLPUfqzurUOfP4lWOO2yna9CAXSA0gMzpwnAiqvgJ0K32LKBL2W7pfDKsaz%2By5moqHOL56C%2BCyIz7FOM3bsGFEXkssWNx2w1uV7JPeO%2BmJIzO9a25rxzsQx2ytN30htvWECtkHDiL60mdUkhvb8ws2MboLzUgf37NwOOnChZthXdsatKlt%2BIojplH9UuZBiF%2FM0YrsduglMzPGu69kEPi31jZ2x&X-Amz-Signature=57a6cc0856dc713e9685fcb4128803d7d4063485be65e68908d166e28d0d53cc&X-Amz-SignedHeaders=host&x-id=GetObject)

9. default namespace에서 Pod를 create, list와 delete를 할 수 있도록 dev-user에 필요한 role과 role binding 생성.

    Role: developer


    Role Resources: pods


    Role Actions: list


    Role Actions: create


    Role Actions: delete


    RoleBinding: dev-user-binding


    RoleBinding: Bound to dev-user


    ```yaml
    apiVersion: rbac.authorization.k8s.io/v1
    kind: Role
    metadata:
      name: developer
      namespace: default
    rules:
    - apiGroups: [""] # "" indicates the core API group
      resources: ["pods"]
      verbs: ["create", "delete", "list"]
    ```


    ```bash
    kubectl create role developer --verb=create,delete,list --resource=pods
    ```


    ```yaml
    apiVersion: rbac.authorization.k8s.io/v1
    # This role binding allows "jane" to read pods in the "default" namespace.
    # You need to already have a Role named "pod-reader" in that namespace.
    kind: RoleBinding
    metadata:
      name: dev-user-binding
      namespace: default
    subjects:
    # You can specify more than one "subject"
    - kind: User
      name: dev-user # "name" is case sensitive
      apiGroup: rbac.authorization.k8s.io
    roleRef:
      # "roleRef" specifies the binding to a Role / ClusterRole
      kind: Role #this must be Role or ClusterRole
      name: developer # this must match the name of the Role or ClusterRole you wish to bind to
      apiGroup: rbac.authorization.k8s.io
    ```


    ```bash
    kubectl create rolebinding dev-user-binding --role=developer --user=dev-user
    ```

10. dev-user를 위해 blue 네임스페이스에 새로운 역할과 역할 바인딩 세트가 생성. 그러나 developer는 blue 네임스페이스에서 dark-blue-app pod의 세부 정보를 얻을 수 없음.

    문제를 조사하고 해결. 필요한 역할과 역할 바인딩을 만들었지만 뭔가 잘못된 것 같음.


    ```bash
    kubectl edit role developer -n blue
    ```


    ```yaml
    rules:
    - apiGroups:
      - ""
      resourceNames: blue-app ➡️ dark-blue-app 으로 수정
    ```

11. dev-user에 blue 네임스페이스에서 deployments를 생성하도록 권한 부여.

    api group에 “apps”에 대해 추가하는 것 기억하기.


    ```bash
    kubectl edit role developer -n blue
    ```


    ```yaml
    rules:
    - apiGroups:
      - ""
      resourceNames: dark-blue-app
      resources:
      - pods
      verbs:
      - get
      - watch
      - create
      - delete
    # 추가
    - apiGroups:
      - "apps"
      resources:
      - deployment
      verbs:
      - get
      - watch
      - create
      - delete
    ```


## Cluster Roles and Role Bindings


리소스는 네임스페이스와 클러스터 범위로  분류됨.


namespaced ➡️ pods, replicasets, jobs, deployments, services, secrets, roles, rolebindings, configmaps, pvc


cluster scoped ➡️ nodes, pv, clusterroles, clusterrolebindings, certificatesigningrequests, namespaces


role과 rolebinding은 namespace에 생성됨.


네임스페이스를 명시하지 않으면 기본 네임스페이스에 생성됨.


보고, 지우고, 업데이트하려면 올바른 네임스페이스를 명시해야 함.


클러스터 범위의 리소스들은 네임스페이스를 명시하지 않음.


`kubectl api-resources --namespaced=true` , `kubectl api-resources --namespace=fasle` 


node나 pv같은 클러스터 범위의 리소스의 경우 어떻게 사용자에게 권한을 부여하는가?


cluster role은 role과 같음. cluster admin role은 cluster 관리자 권한을 제공하기 위해 만들 수 있음. 유사하게 storage 관리자 role은 pv와 pvc를 만들도록 storage admin 권한을 부여하기 위해 생성.


cluster role binding role과 사용자를 연결하기 위한 객체.


## Practice Test - Cluster Roles and Role Bindings

1. 클러스터에 정의된 clusterrole의 수
2. 클러스터에 존재하는 clusterrolebinding 수
3. cluster-admin cluster role은 어떤 네임스페이스의 일부인가?

    Cluster Roles are cluster wide and not part of any namespace

4. cluster-admin role은 무슨 user/group에 바인딩 되었는가?

    ```yaml
    kubectl describe clusterrolebinding cluster-admin
    
    Name:         cluster-admin
    Labels:       kubernetes.io/bootstrapping=rbac-defaults
    Annotations:  rbac.authorization.kubernetes.io/autoupdate: true
    Role:
      Kind:  ClusterRole
      Name:  cluster-admin
    Subjects:
      Kind   Name            Namespace
      ----   ----            ---------
      Group  system:masters
    ```

5. cluster-admin role에 부여된 권한의 레벨은?

    ```yaml
    kubectl describe clusterrole cluster-admin
    Name:         cluster-admin
    Labels:       kubernetes.io/bootstrapping=rbac-defaults
    Annotations:  rbac.authorization.kubernetes.io/autoupdate: true
    PolicyRule:
      Resources  Non-Resource URLs  Resource Names  Verbs
      ---------  -----------------  --------------  -----
      *.*        []                 []              [*]
                 [*]                []              [*]
    ```


    Perform any action on any resource in the cluster

6. michelle이라는 새 유저가 팀에 합류. 클러스터에서 node에만 집중할 것. node에 접근할 수 있도록 cluster role과 cluster role binding 생성.

    ```bash
    kubectl create clusterrole node-admin --resource=nodes --verb="*"
    
    kubectl create clusterrolebinding node-admin-binding --clusterrole=node-admin --user=michelle
    ```

7. michelle은 이제 storage도 담당. storage에 접근할 수 있도록 clusterrole과 clusterrolebinding 생성.

    ClusterRole: storage-admin


    Resource: persistentvolumes


    Resource: storageclasses


    ClusterRoleBinding: michelle-storage-admin


    ClusterRoleBinding Subject: michelle


    ClusterRoleBinding Role: storage-admin


    ```bash
    kubectl create clusterrole storage-admin --resource=persistenvolumes,storageclasses --verb="*"
    
    kubectl create clusterrolebinding michelle-storage-admin --clusterrole=storage-admin --user=michelle
    ```


## Service Accounts


service account는 authentication, authorization, role-based access controle 등 다른 보안과 연결되어 있음.


kubernetes에는 두 가지의 account가 있음.

- user account - 사람. 관리 업무를 수행하기 위해 클러스터에 접근하는 관리자나 애플리케이션 배포 등 클러스터에 접근하는 개발자
- service account - 기계. kubernetes 클러스터와 상호 작용하기 위해 사용하는 계정.

```bash
kubectl create serviceaccount <NAME>
```


service account를 만들면 자동적으로 token이 생성됨.


service account 토큰은 외부 애플리케이션이 Kubernetes API를 인증할 때 사용해야 하는 것. 그러나 secret 객체에 저장됨.


service account를 생성했을 때 먼저 service account  객체가 생성되고 service account에 대한 토큰이 만들어짐. 그리고 secret 객체가 만들어지고 secret 객체 내부에 토큰이 저장됨. secret 객체는 service account와 연결됨.


토큰을 보면 kubectl describe secret을 실행함으로써 secret객체를 볼 수 있음.


이 토큰은 Kubernetes API에 위험 호출을 할 때 authentication bearer token으로 사용 가능.


예를 들어, curl을 사용하여 Kubernetes API risk call을 할 때 authorization header로 bearer token을 제공할 수도 있음. 맞춤 대시보드 애플리케이션의 경위, 토큰을 복사하여 필드에 붙여넣어 대시보드 애플리케이션을 인증. 


어떻게 service account를 만들고 사용하는가?
→ rbac 체계를 사용하여 service account를 만들고 올바른 권한을 할당할 수 있음. 그리고 service account token을 내보내고 Kubernetes API를 인증하기 위해 third party 애플리케이션을 구성하기 위해 사용 가능.


third party 애플리케이션이 쿠버네티스 클러스터 자체에 호스팅한다면?


예를  드렁, 커스텀 쿠버네티스 대시보드 애플리케이션이나 프로메테우스 애플리케이션을 쿠버네티스 클러스터 자체에 배포할 수 있음.


이런 경우, service account token을 내보내고 그것을 사용하도록 third party 애플리케이션을 구성하는 전체 과정은 third party 애플리케이션을 호스팅하여 pod 내부 볼륨으로 service token secret을 자동적으로 마운팅함으로써 간단하게 만들 수 있음.


Kubernetes API에 접근하기 위한 토큰은 이미 pod 내부에 위치함. 그리고 애플리케이션이 쉽게 읽을 수 있음. 수동적으로 줄 필요❌


기본적으로 존재하는 service account가 있음.


쿠버네티스에서 모든 네임스페이스에 대해 default라는 service account가 자동적으로 생성됨.


pod가 생성될 때마다 service acount와 token이 자동적으로  volume으로 pod에 마운트됨.


대시보드 이미지를 사용하여 pod definition file이 있다고 가정.


definitinon file에 secret이나 volume 마운트가 명시되지 않음.


그러나 pod가 생성될 때 kubectl describe pod를 실행하여 세부정보를 모면 볼륨이 자동적으로 default token 이라는 이름을 가진 secret으로부터 생성될 것을 볼 수 있음.


secret token은 /var/run/secrets/kubernetes.io/serviceaccount에서 마운트됨. pod 내부에서 ls 를 실행하면 세 개의 파일로 마운트된 secret을 볼 수 있음.


실제 토큰이 있는 것은 파일의 명명된 토큰.


file 내용을 보면 Kubernetse API를 위해 사용되는 토큰을 볼 수 있을 것.


기본 service account는 제한적임. 기본적인 Kubernetes API 쿼리만 실행하도록 허락함. 


다른 service account을 사용하려면 service account 필드를 포함하도록 pod definition file을 수정하고 새 service account를 지정.


기존 pod의 service account를 수정할 수 없음. 삭제하고 재생성해야 함. 그러나 deployment의 경우 pod definition file을 변경하면 배포를 위한 새로운 롤아웃이 자동으로 실행되므로 service account를 수정할 수 있음. 그래서 올바른 service account를 가지는 새 파드를 삭제하고 재생하도록 관리함.


pod spec 부분에서 `automountServiceAccountToken` 필드에 false를 설정함으로써 자동적으로 service account가 마운트되지 않도록 할 수 있음.


1.24 버전부터 service account를 생성할 때, 더 이상 자동적으로 secret이나 token access secret을 생성하지 않음. 필요하다면 service account에 대한 token을 생성하기 위해 service account의 이름을 뒤에 붙여서 kubectl create token을 실행해야 함.


정의된 만료기한이 있음. limit을 명시하지 않으면 기본 1시간.


1.24 이후 버전에도 만료기한이 없는 토큰을 이전 방식의 secret을 만들고 싶다면 metadata 부분의 annotation 내에 지정된 service account 이름의 kubernetes.io/service-account-token으로 secret 객체를 만들면 됨.


> secret 객체, service account token을 사용하기 보다  request API를 권장. 만료되지 않는 service account token과 달리 더 안전하고 lifetime이 제한되어 있기 때문.


## Practice Test -  Service Accounts

1. 기본 네임스페이스에 존재하는 service account 수
2. 기본 service account가 사용하는 secret token은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b19a7bed-8e3c-4bd2-9f67-86fba0324a8e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WTZ3KN4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwOrHEbx7iuFFkLsbsRZempyal0O9yGEdlQgYuuGXHAAiAbKIpzXhSRkeAGx0Jj9zVHCmD3tCsVYHd2ChhndxzifCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMI1Odmo%2Fh6MiMK1lCKtwDAGpBzxlHTbLGtQcVqOwmcczt%2BQt%2FmLbdstQ5sJUfWTQ%2BgZAK4%2BVXGxr4VtPreLtQUEnsGqSo9NRWzF709wOC%2B4Z5cn00FCeH0%2BpCElGTV6%2FJCM6VcLfFTg05WtX1G%2BZY7w%2FdplRE1ObKAY5mZYoRdVotQZ643QtA92v1YMVLizCbNz8V0IflmwmJlJB0tEckCqpqLbzE5uvprkU0FyPZt0XttcdmF1Fm7g%2B%2BZJ55i38gHg6ObUDQNxwWZwMoNvg31zWC%2BpJFSXRv95c%2FZy7KiA%2FeSt59K1FABdYz3LbDgY3xGhgCxsu0yQS2tY0zIMCz%2FqkgxNMjUzhxgDfGv4Vm4keoTjXI0W4PY1Pxw8P7V%2FK4nawyUxQJr9X0Dnxck%2F56ogliPpaTZH6OJMG4C%2Fll%2BlRK54M%2BYax7W5pgtvP3cHi7h1NfWeY2qdXlHf5vzUZjFgjOO1FewJVqBA31sgr7z%2FfaXe5FnNpYkh9T%2BxHUmhZ921x5GMhynuXxlQpZKkMYc0NTy8AMHRVnxJ%2BVicme%2F%2BMaibVUBLlxA1Zi%2B9WbanS1jA5aJOPuMhK%2FNJbuPW5RuK5tNSPIKcvDtGgEiPjx0opxDzfQKTWuhixBst2Ue4Qo2X1eduaxu1KIq9YwvtjavgY6pgHlmqb%2FveHmSSQ68yNuC%2F45GtkQX8ZQcRj6BhV8jarHJBs%2BwfJfPzAW%2FZjgPQuv6pSju6zxbqGn9%2FSuxTw6OI1C45Frjlea34ko6OO5WIQRch6Z%2BRDklDXmJHav5vFrU0GAtLso7kvjtRD5I4quPym%2FaD7wW6b6t3zOmG0oHEngFFiEuyfrZQBUbXMPRnXqxtkPMSefd%2BMkLxhX2YJ6MS5DeSptqdWx&X-Amz-Signature=c00ce5f49ad62fb41041c8d344cb53dd5a8092b4faed6b8c2313cd27cc802815&X-Amz-SignedHeaders=host&x-id=GetObject)

3. dashboard application 배포. deployment 관찰. deployment가 사용하는 이미지는?
4. dashboard 상태는? 성공적으로 로드된 pod 세부 정보를 갖고 있는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/21e35c7e-f93c-495a-8768-11ef51201564/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLISISH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsXfG4hAfJeW5dP3IbOW3uZTjotpWGQetEsEtsHls4WQIgLXyz2OPTDVVb3oWKQZC5jseSx9U2oJ1OrEHeG6r9Wygq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNLdcPud5hrXxFq%2BDyrcA3aTTiNgxlKeOc9%2BXVS7avPxrGgS3hH5CHl3kTgIiCfQkRjWMRz%2F72%2BgIl56LxQ7SYytQheNAzmy4u5jBfvvwQOhVDZrriboApzWy3PIy8TEastxNcag9BSShnE%2B2U8LhQrK%2FXPPCr8hyHmW%2FJD7%2F%2Fl8ii5RWnwSXjAc3DxinmTf0HafCB01SutlIRw0W4w5DeqjHPXba8KPDWsms8uEbds6tIZehsz7xtVTVLI0UxIgndobb9CM1GkMONeFvtBn6e0a2Uas2HXCDAtOyOyb2XDA2Ichk6NNyQOVoa9MIUaooxrX8ik1DSaNI5BNAsTk52p6n3Lw%2BqY758gv2awSZ32%2BXit944KmNA2q99H1YBJSKpxU15q8Jpq2cZK%2BGEuSU88pTM7WsbZHGeZBQh8qIp%2BNf7AM3%2B6a2ulH6v6ZNIfGRxOZBbigLFB%2FLBFn8b4FgHD2zsQoJt1ddB1Nex0MCdDD4v2csndNtOnRsClqtRV4pfNBjn0XILSbcIjwtD3uiF%2BbBr2Tk6TIej1VODwuA%2BvqCbmwwh4guuhM2YFBQ%2Fa9hk15rcHhi8kr0mtvKRmrO8f%2FJXWoVC7GGSIOgcJX%2BwnGYiAbFBEDWQ441gr8EPSXmNzC7RWd4wQ%2B8a0XMLjY2r4GOqUBTWP1L2qCo2sS752R97JHgu93r1i6r%2FTkvLCDRYPuJ%2FPQgw4nQ%2FGqSqGZlzn3CMfq7V6sZFCBbA8%2B4dd6Kx7ZJUpyqPEKUydRElJjsa%2BakqOWq7RTp5eC9dCXKjBnD0Eoo0wB8QFpHQ86lGTWAKHi%2BMZ0vl0%2FoL6t2P9FV78RLuKjY%2FUFYC5FHlu%2BanPH6xIgmMEMzUvnycto1OcJHddsfKErut5m&X-Amz-Signature=bb50e17a73e448712f93939684c64b54e4412e3ca2001eddcdb8e9c1d2939113&X-Amz-SignedHeaders=host&x-id=GetObject)

5. dashboard application은 어떤 유형의 계정을 사용하여 Kubernetes API를 쿼리하는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/7d4a5407-3552-4911-b8e4-141dbefd74f0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VXZZOS%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiRoJUqGcHydkb87032GOzyswvaxOh4FCE5EWxGIS60AIhANkUGAbGNxOP7rcAXbmy%2FonghSBledWcXUbCfmOfHvMZKv8DCC8QABoMNjM3NDIzMTgzODA1IgyVLGTogVI2fCB%2FbFoq3ANbqySikJ9Xri00zSfrUFonqeHhTBWLl76Kii6GC2No9bnbMt2bXgJPp6KvkEp8xvqZ4%2BaqWCsSOmk4aVyZAGnwxrfWURDJXGkYLXngk6xU9y0M9wrZCIn2v%2Bu3xI6eTrQ11AtdRJYeExOXWVyZsqInL8yGl7K7ulT7vvPGburMUV3lE84WC8HaOQhhggrKUTnqSpOedTiRvvQcCDHiuLMMHIaqycPqlDOGWiQh14uGJmlKZfNJhO9l4BtCDzHkessL8ZVV%2BWPTCRqWOLBa50%2F0%2BYTxyvFekIxEYoGFenOht1JYKOt8Dmv4Q5YFosCydKlcf0N8h8Hkj9FSioxN4XX4XWzS6%2BxvbpLYE70otq2yskhmtIA%2B5%2BPzipdXvpHVdEmNrzMRocA5xxsA0XALSPb4McU4QzqHkkn5hRRNKXVcn%2FmBZQFKLUYF%2BWWcI%2FqgWkpr9D0YQSoS352oBay1pEMY4C3%2B8MqTYLK%2F51%2BMlsNGQZBgjLtNSX1v0RwsLyQGqpnUIMy6TE0eQ6llfynItDMDWGboZX5dNB%2FAW3NbhHB7%2BfYcaNqXcuN332sSV13xQ0Gr6WQQqztHT62yAeJTzXY10ohVAUdqyeB0R1Op33QzUF7sd%2FNmSJsAgyK8gzCQptu%2BBjqkAYkFzStlJKNC5Wp0UgQcxBJL2CVGdhuVTVIa7f8dtXHm%2F1XUPahAPt6me9g%2BxLG1dCAeLfZTlJ7445%2Fq3X4Hk2qETVrx8NW%2BKEDQiGixipmPeLBv%2BHDpznJd1a7VATM344AQxsQ5AfHLyZIGYv7iEDYdDjV%2BU3EMq%2FvkTqhuPG49zLFrp%2BF0DvNEQuDTzPB0KbKYw5YqBOr5%2F5Qy1q3RVCaYVVgy&X-Amz-Signature=e77581d1d4786907db7da31c2e57ae053aa8a3a2ed901f10e410f787c30a9704&X-Amz-SignedHeaders=host&x-id=GetObject)

6. Kubernetes API를 쿼리하는데 Dashboard application이 사용하는 account는?
7. Dashboard application pod를 관찰하고 그것 위에 마운트된 service account 확인하기
8. pod 내에서 사용 가능한 service account 인증서는 어디에 위치했는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/90031244-a1cf-4874-8238-fe8c3798d305/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN7HQATJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpAzRCkiz6XKrcaECVgU9IDA10u2%2Bnrz3vD2wT25Dx%2BAIhAOkpMYISNLcrPV7xXeQfv%2B%2FeYsnzZXYHYKsK1AuYGCehKv8DCCwQABoMNjM3NDIzMTgzODA1IgylamqWna%2B4jMyhFHcq3AO3YQr2BJ5GAf%2Fpo5pjDC%2BwZ1URq9NpmwcBA0DRjknCo07epEmUfHw7hC9oSeaMwZd7C5m8eWZ6%2BmJisn3I%2FHHOBZrCTtUffbUlVjs7lEvcLNIA4duQ5blgxkIu7jgaetWWIbdEJ0m7jU5L07U8pdYQ1uYti15xCh46zisBEc0QlUWtCNCihnlZU5AxgUl2UZ94CfWxjdwJAQ%2FWOWSVjILn65P9jwGleq3chYEmGyW0THtioeMP1C9wY%2B9Caoij749EsFsjotOMpioB0Rc9CWsZ%2F6uq2bYUrBO%2FJF6wjT%2FauPmWvIX%2Fj7yZVWcC6nAdY24X9pQ9cCdTtNZ1s1lDGJMgCdNPyZMWmn52nCteK6Y2bB4QGSUyDV3jQTbuN6rWozcRLRtOI7p%2FSZD%2BtH%2F34LTnJVNLCuUFaoBxFuughntWGR2PeD9dZfpMyrUKW1pPTlP0T0svBNmHhjdC63xn5ahdYzLmHt94hyKcQxZUCvbJ1A06Mu%2FGbjliG111pt7fkg8dm2Whp2feA1LK6BmWieHSDRlCG2c7dotnYG4UXeDKKBb0GEx7OsYOLcJp9dvKi2fyZ14TWVUktepEL8Qo6zKRM1%2B1oQrCKRM8YVDeyTmkazB8tR%2BTIu44N%2FPPHDDn2Nq%2BBjqkAZT%2FEIK3zhWJZ%2BH3W7KbomghFz30NexJvblDpXBUxqk%2F5eCCA83Ul2hlQBoYnD5OBSLHizfwbVb6%2FGNbfGA9nd6gvjoEi8yUELjJSYPeYqHO%2BX%2BKcjCg%2FktIMhl6az8oBK6D80akp1imk6lfUjQri%2BzF3vjSBSNMwlQMt0appSHXFF%2B3QC5SFeGcjsGqFy%2BAUaI7L0%2BIXti%2FQzCphHS5%2F8XPIX5M&X-Amz-Signature=a8d255e813a9deffb9b49ba4273adcbc409d2790dafbd6fd5643768b04f0b844&X-Amz-SignedHeaders=host&x-id=GetObject)

9. 애플리케이션은 Kubernetes에 인증하기  위한 생성된 올바른 권한을 가진 service account 필요함. default service account는 제한된 접근을 가짐. `dashboard-sa` 라는 이름을 가진 service account 생성.

    ```bash
    kubectl create serviceaccount dashboard-sa
    ```

10. dashboard application의 UI에서 access token 넣기. 새롭게 생성된 service account에 대한 authorization token 생성하고 생성된 token을 복사해서 UI의 token 필드에 token 붙여넣기

    ```bash
    kubectl create token dashboard-sa
    ```


    dashboard-sa service account에 대한 token이  생성됨.


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/6b5ccc86-02be-4794-98b8-6ddf6a01cd07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633Q2CFCI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUQSlIWdOkPV%2BzSBVyEuCuXIhme9hSbaVwqjKvurbSWQIhAKfCtKazwJUC2M2pFCGxluDYVTDgwFgZjruco0jx7%2FPYKv8DCCwQABoMNjM3NDIzMTgzODA1IgzCauP%2BzipcARLiGJMq3APMJEsmXl1sdCjKYF6ea7%2F7Yi5fByNzl5PIrx9W7KGHxlQJ8E9unrdQWhOHXrCrvFXNTOQR5sDYnL%2BX5d3CQ3f4GwyEKFBMffLKm%2FfrnkM0bWrnMpt1vAos4LG4Kfvn9ONJfRJIumD7yhMeEiqlTTO8Bp06vkHi337BjNt4HYdV3ZGqmw4Ec%2BjeSwnyFFyXQxim%2BvKL9LzU9QNShi0IbDt1dKXme%2FxWHn77t%2BweWIWLsccr84xbpPYl96D2OdxLv6pasLnC%2FWeV8hbAGNfycYWFdfvpoInXvvAXdbxLcBAMPDnY1S1Yc1jxsUXlzpP26LGrupt8dcYck3hlCsP%2F2zsvFqyQVnQ1Wsrq1S2KenBSeOWlC0g1gIqVgxhLjjN%2F1KrTvtU2D6e636KpRLdqUAwpwXoWoPZiH%2FBPFy9IF42idvaSvpeVS79kEHNNmcClLFBArfY6m0GnJ0kziLXooq9rkSj4XubTbHDUdMcB5YV%2Fs3K0RhJtu8CxRBFxt6vpTg%2BvFFg96qFOA2lM8%2FKJiGKoeSbTS%2FwHhSOEn98SQOGpA8d1MTNDRcKEsnzLbDeLZKoDI5cYReOeUOt%2FU7UwAlw9VoB2jmBteGxD7nbeljiSZ5SkZs3JdnNKgU%2BfUzC%2B2Nq%2BBjqkASj2hb17pq3Pabu7JMi4BIGWkLLblhqCk929YlbyH9Qzpx5IaF7UtR1xgU%2Ft83Ru83vGhqG84leDQ64GaPqtyFpfRF5VceRX59RLaZ4TpOnB9bMVrjOlDswFbd7xbeuCVX2ITWUGzlEKXVmZebxaRPtbDdxTuI8vpruiqGxksIiLIJEkXsBt5RTMAhTJRRCu9y5Ni8hamvx5%2Be7PKSBM4sMetnPb&X-Amz-Signature=4f1c1f6d1bb7bfe6e93f43cd38dad26d752828bb9813759badef8d0e34db8945&X-Amz-SignedHeaders=host&x-id=GetObject)

11. 매번 token을 복사 붙여넣기 할 필요 없음. dashboard application은 secret mount 위치로부터 token을 읽도록 프로그래밍됨. 그러나 현재 default service account가 마운트됨. 새롭게 생성된 service account를 사용하여 deployment 업데이트

    ```yaml
    kubectl edit deployment web-dashboard
    
    template: 
      metadata: 
      ...
      spec:
        serviceAccountName: dashboard-sa # 추가
      ...
    ```


    ```bash
    kubectl set serviceaccount deployment web-dashboard dashboard-sa
    ```


    dashboard yaml 파일 수정 또는 kubectl set으로 가능.

12. dashboard application UI를 refresh하고 자동적으로 나열된 Pods가 표시되어야 함. 이번에는 토큰을 수동적으로 입력할 필요 없음.

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/03b8d9a1-823a-4f5a-aab8-e9a63822e005/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYBZZGTZ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZlI4D9sEQm0FG%2BYD%2BYA4VGubzCEjZyMWDyCwzfyHJQAiEAgxRpd80J1E8eTC7U9LvmYl87tSsvEwisH3tR2xKZ1Woq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBR7WTlr1rU9exSGFircAyPPyDTBFSprwcqakel9SufOIzEOgmWuKKh1ZsWi%2FMeKpzz7OL%2FDCoJi7jImHwr9sGjl6POX7hQlJyl1CWbXUjwfUgq7vCu3q2e7StRs2JgZQKy6p3%2Fm5PrVGiAHOBbU4uSgzc19iCu4HLVjp7Pod1L2QuGN7%2Bn24saD4jp%2FyzvLbIHZ17tq%2FVIBX58Cjm%2FFN7%2BxqXSl99sFBknRQNN3e4C7exTmYi6fIn6i1%2BMC9vCzkkUHDSgVovgBV4MflvCPBB8roTs7czjXMsBbcukySIlV5oo8j7CRHjh7k7LPsosRDxHiZbnBFOK1jcXXwaiyLyNaPr175Xo%2BOReaTDUi%2BSzHrUBgPSwp8mLh4mzmSc9Ix9RB2XFIrWiSvketmfn9SkalUUD%2BN%2B2jk9M5bJo1j06PkxSmOYRmSixUoXwhCLlurumUIVECISfFSFBwvyv%2FXSGVXwpOsFaVAfOyzfO3pDAvsDmZzfVTDzt2aCqh1RYiD21oYl%2Fr3IqiBFECTAIYMK4Y0WKocG7pW8KumU8Ppp36v4RYfgCV17os5%2B8pdRbbSPxtGK2JhHc2I3k%2FvsAFh5TESgW5zHEsId8VrIa6ImAqoSy3gsQGR%2BTBQIjhTx3iS84gwq53ptf9C%2BllMPKX274GOqUBy76w3%2BVm%2FDQqVbmM%2BdfJQA3k6hFkdMi%2BgDScoxZYIeNM3jWj%2BoE%2F8OtJGT9uyjzturvGvOLWYkaKR5BQPXJA%2Bkq5LBFd3N2bP3TBN2IRGCfle9jSQYZmQ6blTnY20pwELLXlmhBI5oc75vaI%2Fe3lunScNN63Njle6a%2F%2FRtVoVn%2BfozErNl0vREDPvHdEtkbvLee%2FFY5%2Fu6m9Vy1mYi4Z5NKYM%2BUD&X-Amz-Signature=c7efd70ec2a4b50607ac4e9169837f599fcf2a9f89192fae7bc50bcd0c4a0924&X-Amz-SignedHeaders=host&x-id=GetObject)


## Image Security


맨 앞에는 사용자나 계정 이름을 나타냄. 그러므로 라이브러리를 추측할 수 있기 때문에 user나 account 이름을 명시하면 안 됨.


라이브러리는 도커 공식 이미지가 저장된 default account의 이름.


계정을 만들고 그 아래에 저장소나 이미지를 만든다면, 비슷한 패턴을 사용할 것. 


라이브러리 대신 회사 이름이나 이름을 사용할 것.


위치를 명시하지 않으면 Docker Hub라는 docker default registry로 추측되는 곳에서 이미지를 가져옴. DNS 이름은 docker.io. 그 registry는 모든 이미지가 저장된 곳.


새 이미지를 생성하거나 업데이트할 때마다 registry에서 이미지를 넣고 registry에서 그것을 가져와 매번 애플리케이션을 배포.


많은 registry가 있음. google의 registry는 gcr.io. 클러스터에서 종단 간 테스트를 수행하는 데 사용되는 것과 같은 많은 Kubernetes 관련 이미지가 저장되어 있음. 이것들은 모두 누구나 다운로드하고 접근할 수 있는 공개적으로 접근 가능한 이미지. 사내에 애플리케이션이 내장되어 있어 대중에게 공개 되어서는 안 되는 경우, 내부 사설 레지스트리를 호스팅하는 것이 좋은 해결책이 될 수 있음.


많은 cloud service provider들이 기본적으로 private registry를 제공.


이러한 솔루션 중 어느 것이든, 도커 허브의 레지스트리든, 구글의 레지스트리든, 내부 개인 레지스트리든, 저장소를 비공개로 설정하여 자격 증명 집합을 사용하여 접근할 수 있도록 할 수 있음.


도커 관점에서 개인 이미지를 사용하여 컨테이너를 실행하려면 docker login 명령어를 실행하여 private registry로 로그인해야 함. 인증서 입력. 성공하면 개인 레지스트리에서 이미지를 사용하여 애플리케이션 실행. pod 정의 파일에 개인 레지스트리의 이미지를 사용하려면 이미지 이름을 개인 레지스트리의 전체 경로로 대체.


어떻게 인증을 실행해야 하는가? 어떻게 개인 registry에 접근하여 자격 증명을 얻는가?


쿠버네티스 내에서 이미지가 worker node에서 docker 실행 시간에 의해 당겨지고 실행된다는 것을 알고 있음. worker node에서 자격 증명을 docker 실행 시간에 어떻게 전달하는가? 이를 위해 먼저 자격 증명이 포함된 secret 객체를 만듦. secret 타입은 docker registry이며 그것을 regcred라고 함.


docker registry는 docker 인증서를 저장하기 위해 내장된 secret 유형.


```yaml
kubectl create secret docker-registry regcred \
--docker-server=<docker server> \
--docker-username=<docker username>\
--docker-passoword=<docker password>\
--docker-email=<docker email>
```


레지스트리 서버 이름, 레지스트리에 액세스할 사용자 이름, 비밀 번호, 사용자의 이메일 주소를 지정.


pod 정의 파일에서 `imagePullSecrets` 에 secret 명시.


pod를 만들 때, kubernetes나 worker node 위 kubelet은 이미지를 가져오기 위해 secret으로부터 인증서를 사용. 


## Practice Test - Image Security

1. docker registry를 위해 어떤 secret을 선택해야 하는가?

    docker-registry

2. 클러스터에 실행 중인 애플리케이션이 있음. 애플리케이션이 사용 중인 이미지는?
3. 내부 개인 레지스트리에서 애플리케이션의 수정된 버전을 사용하도록 함. myprivateregistry.com:5000에서 새 이미지를 사용하여 deployment의 이미지를 업데이트

    ```yaml
    kubectl edit deployment web
    
    containers:
    - image: myprivateregistry:5000/nginx:alpine
    ```

4. 새 이미지로 생성된 Pod는 성공적으로 실행 중인가? No
5. registry에 접근하기 위해 요구되는 인증서를 가진 secret 객체를 생성.

    Name: private-reg-cred


    Username: dock_user


    Password: dock_password


    Server: myprivateregistry.com:5000


    Email: dock_user@myprivateregistry.com


    Secret: private-reg-cred


    Secret Type: docker-registry


    ```bash
    kubectl create secret docker-registry private-reg-cred \
    --docker-server=myprivateregistry.com:5000 \
    --docker-username=dock_user \
    --docker-password=dock_password \
    --docker-email=dock_user@myprivateregistry.com
    ```

6. private rigistry에서 이미지를 가져오기 위해 새 secret으로부터 인증서를 사용하도록 deployment 구성.

    ```yaml
    kubectl edit deployment web
    
      ...
    spec:
      imagePullSecrets:
      - name: private-reg-cred
      containers:
      ...
    ```

7. pod 상태 확인.

## Pre-requisite - Security in Docker


컨테이너가 실행하는 모든 프로세스는 실제로 호스트 자체에서 실행되지만 자체 네임스페이스에서 실행됨.


도커 컨테이너는 자체 네임스페이스에 있으며 자체 프로세스만 볼 수 있음.


외부나  다른 네임스페이스에서는 아무것도 볼 수 없음. → Docker 컨테이너 내에서 프로세스를 나열하면 프로세스 ID가 1인 sleep 프로세스가 표시됨.


Docker 호스트의 경우, 자체 프로세스 뿐만 아니라 하위 네임스페이스에 있는 프로세스도 시스템의 또 다른 프로세스로 볼 수 있음. → 호스트 위 프로세스를 나열하면 sleep 명령을 포함한 프로세스 목록이 표시되지만 프로세스 ID는 다름. → 이는 프로세스가 서로 다른 네임스페이스에서 서로 다른 프로세스 ID를 가질 수 있기 때문이며, 이는 Docker가 시스템 내에서 컨테이너를 분리하는 방식임.


## Security Contexts


## Practice Test - Security Contexts


## Network Policy


## Developing network policies


## Practice Test - Network Policy


## Kubectx and Kubens - Command line Utilities


## Custom Resource Definition(CRD)


## Custom Controllers


## Operator Framework

