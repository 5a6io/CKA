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
openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt # 서명 인증서
```

> admin user

```bash
openssl genrsa -out admin.key 2048 # 키 생성
openssl req -new -key damin.key -subj "/CN=kube-admin" -out admin.csr # 인증서 서명 요청
openssl x509 -req -in admin.csr -CA ca.crt -CAkey ca.key -out admin.crt # 서명 인증서
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


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/feaa57d9-69a1-477b-90eb-075854919446/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D6X7JRY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6vtTlaj7P%2F3%2B84Rz5CKyNM7icIr7UbKtTrFLgWHMZoAiEAilMN84yXyLhml8ggb1ffOMnQfmLQKZKBhkVV12vK7qsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDC1I0VTwiyl%2Bv5wuWircAyoSZCpBoUGTNBhV5Vl3DhzdfeHGvObj6vwWVtjMygUPsEojNqt0M%2BAydIFJ3ko8QIqGeXycK6uiBqnzzaZ8Xx0XDYf4xjNNlO4jlAlG%2B39O7ilG1K7x3rtxeCsjDBW4ymfDAqL5xa0ybSg4v0Hw%2B3IQXkEAsEb%2BVYM%2Be1QldthiC2bmWKXI2bPbakotY4Aj%2Fz%2BqMpqBKsO3lBK3IMY7ut6HIPIVuFgYHi9IDSPVBoNoCUlQ%2BybW%2FghWjmRS24MUIC8d7dJiGNGPZA%2Fe2tvkGFyVjVPPsGJnHlwDdhSwC0Qz4oMGLx13afBcUPsQHHr3OKoqFlDir1K1EsVii7WWXVNtEYxdPZMwJ5eTcONYRI81bOt2pum0%2F1%2FDrchN4YriYT5p%2Fgdscx0XloZsJHgFYr963v2S5cHvSY%2Fb%2B2PARARebaIU27vgFOB1YgSwHKPT0aAUAuYmaTyUYGuz54SuKs5uE75G6GwQCY360a2nARj5Mcr6etdhgkGY4wmQE%2Ft%2BkNI4ZkVaeBdeDUuvPm33jnrsY2TLVDPgBdd01dsAJr5O5Xy%2FNU65HetB36q51OgI%2BLs4PlTImD3VI7KFiwY4vtfWJ0%2BAtnnGWlZrFcnxeogYy84lhYUJly2uGaQ%2BMMXQ7cAGOqUB2tNjyfzEm8hpsS7g76UlM8wR0ZE2fEw04kj59Maj9t4Yzml21sS20Ua6DC5iJbq3T6599TjdyQf9v2BVvhqGpDU9ukptevk5umRVaT4Qhx3kVE9yJo2ckjTcPFYTq1YvUiGExHSreGXvTsy4nEsNZap3Z7NxZgSa%2F%2B3Zh91374latYJRmvFeely05JLdfcN3mPmKO8FVwdkQaHV5RrDlBmIj%2FJ3Z&X-Amz-Signature=3690a68991db29d2fb0609882306731694c4e542e062f7a0a9cc1fc92834e2d4&X-Amz-SignedHeaders=host&x-id=GetObject)


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


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/10644a35-55c2-4521-88c9-6839c45c9ad6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPO77KPZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCErqa5u%2Ble4rqQwMiLvECAgnlvlc25M2C4HJH1K%2BfEnAIhAIEU%2FaR2wjM5oc961Vmyiyo9mbG3e8qObvonhy9GTE4fKv8DCF8QABoMNjM3NDIzMTgzODA1IgyIMdXNshyU8GzfxGgq3ANIGbydT5XUc%2F9QXKdPmKEB64pMb8cRYRSpLjUC16cHINB04T8DRF%2B39eJLoiCLHMj8ezWJs4ok03sF%2BZchSgBGUl5a%2BF%2FnoxUabc95F9pGDXui3rB8J33cg8eAW81ASIeyOszONxrQ14h%2FWpIkp44vpIUH4zlCglDj95GJccJxgwhYC%2F3CGTBleT2TxEJTkNNwZewLnGbSSzPCTa3nG%2Bw8Wt%2FJ0ViN5j27IY8nHNVkYNn85Nt8vycr5kbIRWDLzjAf0ih8yPft%2F8W7VkZ1OLrDveul3AyIGJF2AOJmMZdMgChtw7FTTt5mREeVZwNFFoCxlX1BWa6apEHk80y6Z7rkEBkereSkEPERtXrGXY%2FD0oKnv7vEMkfa4sdEBvv87M44jWRIlLAj%2BP2Q30KVihURG93FPrvgH35o8ga%2Byewcrj6hA4%2F15pTInx1v%2FBiaRT7PgJQ3m%2F7CO3dQA3QYLQLZWtPHo0MqJUWQ5IgxcO3BVL924aoCer0cSdQ07%2BgADyVacZEL0PKZY2gd2YPLBN8IRVEDUwmadgchkg%2BO92sL2wHLPF47DHQINyRk8iEy8LnziP86LZ%2FwYX853QZlVTpuB%2Fc1YisfcJPRC4%2BkmyNnIITrGW7IQIMWV5MTSTCy0O3ABjqkAeyXk%2BpGMaJm6TKvepzjtKg8UjII06XqvGdIUKUm1dPGUGM0HnUy5yo79C4Xa4EPewUPGX76DP66YWRLpji31vnedUZ6Vh2ztDxqJ7cyx7AmvZDR%2BAgCL0Rl3CfNEIfx%2FdMSPPqS3K0Up9%2FXnwMw5JD9aFZBZce9s7NkDLHUy4ZfLm1pQGQRJcyTl7Q%2Bb%2BHTTmzanyqOSuoyIyMEJjbU5L3hmaYz&X-Amz-Signature=add2d3ffaa9c54e74d8b4519ddca1046609ba3b25f6785137da27838cd134762&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8dc7f1cd-62b8-488f-876e-bcde2373bb27/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3X7DI4H%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRpvEo5LOfjwXiozYpwQaVXhzUU%2B5uiR1KskbN569SkwIhAOaIEpI6g2vQZERgVBElS%2FEyT3Dee4AN%2Blpc8Em1qgITKv8DCF8QABoMNjM3NDIzMTgzODA1IgznFNajnW5BsmWcHIIq3AMdfj8n%2BB1frMNwUZ9cj6TNKsZV3Py2GjpIlKBuJ13951zlZh1sBLVptlcaMNj4rqg6cm3lZzygpipx4rpIc7cpB2l01P26%2F9LM72IsgMwGG5hFGxpgdMlozd5BBdQn%2B10hfVvDoz1sXNlq5u%2BFNWRPB54dk%2F5ftJEzPSFPPVCOsn%2B3L4mH3vLJ%2F%2BgEA6zOofU7vGaKbM2EqxgBBWwmJIWb3zWrflV%2FmtRwveTOjgNGJUcHmJrOyIf5sQSC7jbejsp5JoKEQ7gz7vPIgHza3y2TxgO54%2BRgexL8lr6qRAMdgPEwWjb0Vp8fHICZh%2FS7H9bV7KBEtMd6LJLGXAnDeAhkEjsWryltOEP3sO6skDw1i2QnBqZOuyBgr%2Fj3bhu562uqV21pwW2jZDsMQ7vlWm9Et4WldsbXnzV2K92I8AsSJwxk75n8E5wKN7m%2FqkSh5mBc6EjPuVrKp9orlNXwRIJhftqzGbprTDYB%2FA%2BuIkgLrKDQ%2Fa1jAknXKsTUY%2FPtWuxsiLQuVh4RR66s4we8wEVpVDKZpGOJwt6FF1whLcc%2FB6TbGSdoMHHdOoLQjRnunHetW62XMsS21bV3e9V9h9jKj8vqrTqZdMSGitteeX1r3xIhPLRepP%2FF8gOX%2BzDkz%2B3ABjqkATHfYO7IeLiav0gz7fjrv24NfsOCU2F69q47UhGksA9Gd%2B7mg8BhYwVooKP4zhjaWFCJvECWwmtPEsdxBEqybb8ldav2m3Es4MlHPYNMs97cp5fOvMZSpFD2x3SrDOn7vL24XNGA4Akaqk8bTmIlc2O%2Bl6RUFj5Z%2BU0KSMOpX5PMRmDtAA6iqh%2BKHV%2BEtnXY57MaP6kybZA4aFL%2FOB5ZHhT6aqps&X-Amz-Signature=8f086a6b0afeaa7da8b913aa17492eaec0ccf1697838ec29f347526398ad44e8&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/cb6d8fc6-de37-49d4-ae22-27d35fd6cabf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VZWM2MI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATYUmqRmtw9%2B960WTaEWVPEt4yaSOAx7KNBXhlCSvvuAiEAoES4ZqZBaJhfPPolqPS8eZuFOTp9Ep%2FSQaaibD1edUMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHh7uLvDQtWrXF4GCircA3unlnTLQWByJkEoVe9oBxpAG0O6lAwtBM6X6JIUq00YptheVVerFof324gLd%2FLW%2Fp4Udf08aLEgv1whGadGnmK5eAd%2BphNpVwxFMCeQifeJi2dvGYhJ39waZzKF3tZU1QXR%2FzDpPO1E6mf0iIJqqifJhIVeGb4Ou9WBQv5zRgMVFbCYfPp99Yg3vgdoGn24Ed7SdMWkGSxfR1STnl4UXBaNnMKVdYQSkN5jNLtpwLOijdB7biUVBxptE0tWb7tJsHBvaaMUfSMT4692ssK%2BWYUvjNgWV4fwJJtGixrRcieWUhNHJ8BhGRIrnCrexapW4KrI%2FxCNffXsUQ5fV%2B6efUg3J99l%2BATBuV7vanLlsxw7s%2FG%2Fegm3las1hflogEXYwJ%2FjZ1qpZ5AP2wL4G8Yg7X7zikvnJg7JS2XzeuR8NB7QVvvWhr5fFRkEqWgRD5Ox%2FgOmH2Gn08niQElOGQk%2FFrwiXywycnQ9twfRrqyIOC%2BpXAMyuyB9VCr5%2FzPqXeXqJnkAdcwoXK8GxlBJNFd1jxVkCKiD6QXUPLNOAgTvcUvg%2BRS3v7W%2B%2BWyFRZjROFlbQYnBwvEpstYY%2FBMeeAxiEuS08%2FSzDdgwtDiyLq9vN6KZhEgto6clAdBAp3x8MIzR7cAGOqUB47oveVrn%2BYg0dO63UDJS6eChhFBkrTBL6%2BY%2FBhTvJ%2FUwkeOOUG%2Bj0OLWdhgtXkrIKJxy9eLpHlE2O2yvuArKaJekuQle7E51hqip5CJqqozi8RFrOF6quFvcZHTC1RUWDYxS9rdn6eRQczPbJR05IYjsB5%2F13bhQKttXfCv7Iyjty5myohpNu2I9TwQTpKbbJP8Otj8XFoE0Fgx6WmXxPwsrShED&X-Amz-Signature=f82ba56250630552a48d2cd2a00a743c70627d1ed78c914cb49a819b9f12290b&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```bash
    # wc -l 은 줄 수를 출력하므로 -1한 것이 답.
    kubectl get roles --all-namespaces | wc -l
    ```

4. kube-system 네임스페이스에 kube-proxy role이 부여된 resource는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8a815837-d7ea-41b3-a083-8df4c0eecdff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VX5P7DC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvqmkbw%2BtmVQmRBn8VI22d6uLbdVacD0eZbA1bjs0s5AiEAplOzScjsEk2ISfJdlKQ1%2Fz3ROQLUMSc6jUre0bfEK1Iq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPLXLKexzx%2FDJ%2BdEzCrcA84A%2Ff2G5vbhPFWk5RbadC51xjbTFtausbKfttDE4dZzt%2BSm19sHHOM4%2FsiWn5W%2BgI0HVigytEfgJP7TNr6PqMf3%2FNn6jRiGQ%2F6lk8a97Giyzunl5DJLdS3ZYbgx1n7nf1%2BXLzB9lLViERoAmW6xdg10pbCZl7x1OgIYmxsiD9ycLmOCHP3GEDn1vxEBM4IbkRyKt66YxTG3Yf7rxQ39U3CVyeiLelZVX5QVP0UGRvuR3BqlrGjFGvffQ%2FQ8egsXotxjc44cMV7HGpCXEwuK9rY4ht3nxqwFF9m94iaMuqTv8EH3CoTzGNqM%2FO1W%2BN6zxtktHb5VVoketwcTChi0SDv%2FQHCRM9b2g67SPDGLre9zrIMMddK9M%2FzPse5z9XtbVVGJWH6iE%2F90Ik%2F%2BzTmdzG%2FSvF8us%2FOHGbaBNCCARj15iQXp47KQp7bxETbEl5jkWRcOYoooJ%2B%2FA8wTiE2zOX9lgC8glTH1l7v7gARLPrEvwmG7e%2BcOu%2BZvtlb9WYzqovolSP8YQnrTjjYk4IIIYrImcyq3%2B8rsWqU%2BNej3TdqzLCrVr2OElTTmcorw5n6Msm7tRz3n1GKjkNp4RFKyHsnud%2BmBlVgyPUwyYYpjcZfcT%2BlZxwMxasMBE34lGMMzQ7cAGOqUBXNDITHGLNxfB1hp9vo9B9F%2BMTjYxWuXciSY%2B2APQCaV1iBY5f0X2I2KBFdZMI8TNSW%2FTbR5%2B%2BYKc740keSCB3eKuCwRXDTCRXrU7KDJCF%2FN4S5UNaZaI2l7SyywrjSv81kVo%2BLNDxxbfVo5S8z989Wb3A1Vrq5oin2Li%2Fs%2FVQmAS3SlmiuA4wRnTmxyvWHpcBTG15BaPza4EY0E7%2BFRTsYbKLBJY&X-Amz-Signature=e7c030a15e9dcb739522785c991c2e509839c5d134c7575eb2187e1fac59b9d8&X-Amz-SignedHeaders=host&x-id=GetObject)

5. configmap에 어떤 action을 할 수 있는가?
6. 주어진 문장에서 옳은 것은?

    kube-proxy role can get details of all configmap object by the name kube-proxy only


    kube-proxy role은 kube-proxy 이름으로만 모든 configmap 객체의 세부 정보를 얻을 수 있음.

7. kube-proxy role이 어느 계정에 할당되는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/54e0a2d5-09b0-4613-9a26-fb1465ea0001/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMPHTCX%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrOb0Z9k4m8WgYWs7LE3f7szGqjkTSl7KX8vVPtz8goAiBNq0PlFcal9KM3IGFK70GsaTaR3Crf7vu4kyBcstf6Iir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIME5sYNgp3n96cVWZJKtwDkmoXXDruMO%2F2R3da2MZLxpy1yvwzo3OAp%2FG9w6sQjZzJYY6y3vyhzNvZQ%2FR2xl061ypWlfjb439nswo%2FRy5vjTcuatujjvTZMrUoJC1NKZhH4tB9AYhEsZjRlERVC1dPcNBW%2BGbIbEAcD4YkIixDv6pEeVsxDP4A%2BTBwnq3SVr%2B4z5XbmcGFmRqraxMC%2BZfQ4oFg7QIWGmo44SnXm5PPTzWd7pB2zYQ5E6JNDMZVJ5JQ0rJtFpYF1pi27%2BAwE4E3EtjX4vFUoUM6n4L855whmy4JD7vLOeuldi3DiZa1Zf%2FcQmn%2FS1x2xXo9Xcbv0DBwtl%2BmOjtSvLCcCmVD6sGstgb1S1hFgEhQe%2BeoQIFEC%2FsycmoFcrDG81%2FJhFUNMoVY1BYf9k0OtSMSPw3dHtFDLTorRJR9RUUlpDJ1gVQTEmqk5hbSwAS%2F6FW1FV6dcJLIpffmhuXa%2FN782Ft7Jk2dRS2FR9%2BovSpwSwGOoUWzQwxUy8vYB58Ym8OWTNWd5EZGWqoPH965M5tWVfffIPXODHGiPiRUZOZE6yYl5F8CYmfGUZAdPdWZ7lu97OasgLPfopTpGAKhO13%2F8Q37OJSw%2Bo%2FDKBDqGTty830d2omHfPk21KW5GbDETOY53Kgw7dDtwAY6pgE4M48TPHwFyC1nou40G3xnQUuug6V2bCTjDrpB%2BHcZqVxqc%2FEZuknT62q23k4Mx1oigKkX%2BoKW5r1BE%2BEjyqfBs0FWn7AWfRhksr180XbcR0TpkT%2F6iya2rZ9nEJ4oLluBdLtLR8S1qnjXo7jBS9sKV2ZdVf5RL%2BfxXBmR64EmxOhLqqITaWfl5mbPvIWOcAdObc7hUbw6zgPpgfoTxHKkxzAiaeWM&X-Amz-Signature=b1748496d47dae4bfceda8bae911391c5d476557b96e8fdfc4024e61378cc058&X-Amz-SignedHeaders=host&x-id=GetObject)

8. dev-user 사용자 생성. User의 세부 정보가 kubeconfig에 추가됨. user에 부여된 권한 관찰. default 네임스페이스에 list pods를 할 수 있는지 확인.

    ```bash
    kubectl auth can-i get pods --as dev-user
    ```


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/0b1c42ae-2023-4508-a739-bcaee8156d7d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7N3AXWU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB2A7GCqc3zbnfCVrx4BmtceIZfgAUi959SmvsmJdGmAiBsk6iHT1KOrb%2FjP3zfoan4NhQXfEcqVNBTdBz%2B1n2VrCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM3X5M6%2F3%2FqE5ZlaU%2FKtwDebz%2BBI6HAgztoJMG98YVVikPrXtOobWCCWDdpf7vENZzaocuGIgb%2BF4GIK%2FkuoxWd8HDbA0TImGEp7Gt9DxPWdCeTD43qOUOmx3gBSjDAbJZMU3IPNAcbjqEYD98AT5HVK86N6OuL5sA5XjztbRh4UvWFFxtQ4lPz8HjQRE7%2BdjiaQuCFm5SGVuijEvDRuC0SjrIocqtCobEpGsISSgqYf49LUOvmfdddz%2B0bIzQDN2Qrc3grWbsKHPu2eTSo64Cgqpaj44l66oTTF8NtvrMhEA4j6WN2ZEt3%2B6a8fvqKoWPZc8%2FobNUgH4JOb31%2F4Qqfgnzt4F3H3qD9pljZjuZ4qxVvnd3VHD36F%2FQSsDZ7QG8MpmA4V%2B7yCsU5OZrJyHOZ1OSoE7hTqQZs30eVhem6cy4oEBQoNals%2F76oobUXZ9piWGt9A%2BETmWCN4qTSjP8B4SH9O0z%2BENBIWsugdvSCI0gUpxYQXK14VAEf0o81GOW3Wv2QZ8L7MAJGBSPce7N0ZYm2wfNCakUL5EUl9EIRtkCjj7iIDQ3rJg3K8juIqqAJ%2F6npCVuetbqfU4wTGxgVpTeem3XLxAIsnI0wIkgaVjCbxWSVigtT%2BdvpjDgvlOLQ%2BcEMFEos5QBZ2Mw6s%2FtwAY6pgH1SIPnJdqJQrRrLphTfskVpRTNbNFshQQ%2BIr67fjfFD5kOzkzw0IuVsEX596DdiXiMpayenqRt6b5baw4naopay85C7CvpSW45ByFD07X2%2FNBtFN3Z2Pd31QSG25VmqZJJW3k5k1S0ZfQj1RbJ8iuhVNaabQMEi8nRbdnn7AyrQfOKPRJCOe8iwMifvlKsBjn0JL6sTYYWh7uhvZupJfqCsPl5ptqH&X-Amz-Signature=a98025c23ffd763469d0a56aa7107201766db9f54c913304bbdb47f7fc872728&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b19a7bed-8e3c-4bd2-9f67-86fba0324a8e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKNQYTF7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC79jS%2FbqxkwQkuEmd1b%2BTFCd%2BGyguqfNlhKGCI4t3kxAiEAkp5mQkkiC12yaIgEAu%2B8UXNSJmY7EQOQVSQpTLlwYYAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMGCAYZ%2FASVBfZiY3SrcAwOLLJVpiOCMFpi5ycy0NxzvsOS581dEBFMecNxaLnM8Qq3q48Unb2zA1gNMm%2BpVo5lZRNf3bm5eoSyW93EE6N%2BXLFC09TRMIO2eUoNo8YjZl2bd8E9zx03KYXjwspMrtLy%2BhjE0VsWZZlLIXlRWX5HytWhEvZ0rvCbBr2QQ3m0qOTiPq0fwWY%2FxtqlmkgbMPLcul8OqQmSvDAAtnf7H1HrYKATxCxzsMsJlcDIjn054hmlKeRwxF1vlG8Ne75SyMRbysN7N8xqXE4xaMOjfsd2IcSCPgqIw4ZRXl3obZBdWpl1fHNgBVIW6XZhQTOui0%2Bpn7LTQdYJV6fx6I8IlaCqnsVyAHtKZrNFIzegMljYHUWYOX0O4f8%2B3zK6jCj78CjUbAUb8DIolZpEqvOs6rAFhdg1bg3gv0oAsfjJY8UPn1uoCuMajC7Vy5ik0TuiKgZiybI2UTy8%2Fa31pE%2FbwJOmWhmjMop8qQwfasdJgkC2hzb3%2FitU7RRDpMNOQuLVeNbki4zSKRJQiuT6SNoah3n0m9W7mCYsyJ%2FUKhMx34RWn3xzwawv8QW6dVSaFdkv6%2F3p1KhizkGEvuTTRFBsqYWUaFTadulpjTRszgQOzGujoB%2BNkVHLvblCfCbePMObP7cAGOqUBl2ObrJ8BiT7XhBdjamDi78r%2FbKiMrMSU%2F25wJn07J9X4pzLRG2WHqLU6pBxcbpMRVgcHl3GbJRGQJTq45LeWSGWQUEkVKdj4ckG7KTsDgsTHdxidAoX%2B%2BAfHmpsMOpyzFt3oYn8OakZhrcUEW2wsucpFLQubWYoMRk1faPArbW9ohiC2mrylKML5Y0FzMDhqzIVwEtDKuLM88wmmpUwB1ZsZlq9X&X-Amz-Signature=04a856bc78995f7032dd9babfa3a302ea2b1813a33db1cac6a5b0e1b0026768a&X-Amz-SignedHeaders=host&x-id=GetObject)

3. dashboard application 배포. deployment 관찰. deployment가 사용하는 이미지는?
4. dashboard 상태는? 성공적으로 로드된 pod 세부 정보를 갖고 있는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/21e35c7e-f93c-495a-8768-11ef51201564/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHH775JP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1mboB3YyvtcbC80Z3vltgWoinl6ezx5IhA90NPPY3zAiEAqVAUn9kQmunOUz5kB83zTbPBqJYQzppAXAWpqs5V3soq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFgCBrQAntZ8Nj11LircA8YsQzmdo%2FXj1unE6Ctx%2BbhmTPIL0zX2zE1Bm6mQCKXf0H115XdubQo1enxFIdw1%2FBkWUV5HRYslHs2mina6Z2%2Bn07sBt06NZEyQXUVPXy%2FeJEvFJVtnk7ayMO4Zbi2q9K5h0%2FCv41SdzetCVYQ%2F7i%2FBcGnKaUKUoeyXxmJ%2By4OdQ8BDi9uaodvoX5xXHLnx95xNla2XwA3%2FdmfEzLC3u7Ucgohsuc92I%2BOLkgQLdVvkTMkB6TDL%2BgE%2BdWUZb9oBR4MwUu7UrC2pP%2BCobaBlPhiOZt%2BdF4W8To1DSAn9wqhfnBfZwLTRuPINBkO8e8rBhBUjWxPz9LK1HITc15eRqMbgUG0lbpej%2FyVQVkWBoA6rs3m6WdjUkW3moZVQDG5zlXx%2FfHHtqzDEr4ejnZosTMsC3UdnuUiZ9nglLKu92RvuEqLk0zMft7PB%2BorGAQGEISYj0I%2F8A8Hyt%2FCKkwGTr6VVnc24h%2B2U%2FMDMffk7nig7z7%2BL1inDwVTgBLEny3OsUVP3xciXp%2F1fGrSrmlqvOzzpvRgOliHvY13PDNcphLgrRzZfZWhThBxjcGlVXs9I%2BhIfU4CHPro52mw6N7Y1a2aASa48kqvq1KFbgF7gpE3MkwG%2FXqCLMQ2ku92hMOXP7cAGOqUBfvS0ZUCMZgJ75hAwfTLqgnwr92w4qze8ljq%2FQIWxGolUH%2FEmw%2BTpr8MU39p1KkoPbY7G9KgC5KmJj80SWAO6DRycwBya6OW24JY%2FZRaCTpl0V0s1Ep%2F8WdjWl08%2BTmK%2BNGK4lB8feS3y9agpV86yBrPXMDK1poF9BcIPshrVJqlpPCIuz7SoqJxHBRuXYlw69GSmpsQo0Gs%2BH6IUEUKT1PMYqe2g&X-Amz-Signature=85b7e297b56745770bdf86d468528a7d5cd94397c4475b556505e0e7b5f4eda8&X-Amz-SignedHeaders=host&x-id=GetObject)

5. dashboard application은 어떤 유형의 계정을 사용하여 Kubernetes API를 쿼리하는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/7d4a5407-3552-4911-b8e4-141dbefd74f0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWYPXIZN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5dQ6DMshr5xAt7H6OE%2BlPug2cQGtC0rO%2BmTg3ZvogewIhAIQTz9wMWEDp5MXuTo09RQSM%2BTLQTdrHPxfBq8Yp4OogKv8DCF8QABoMNjM3NDIzMTgzODA1IgwE8zFfY2Gx%2FBR60Qkq3AN5V1n0jHVHBCv4I6o5uozrdvLJcKjL5v1IjI6WkrkRuGHHFcarWyQt35GBw0ND7GaSXJxBIuYBEPuRaeOSBwu8vVxSZNa9LRYv84UEmd2lleSNJVgJf53iY76SM5n1fE7mfE4Sh4sikrPIAY4qA8iYDOY5zTPXv%2BAuKi2jd8X1cccQzKYwx5DV1tqCUli7gpw%2F7DoBimUwXhTOX8V1fKieKP47PezYB3dJ1D3W6gSgrXWUEJHofkEd1OsuxA3m%2FjC33L76LaREHeN9DuEqP2KbkN%2BvF4pbV7jT7lV0UfA3JDkq0ltKRqlS5aZ0OxyOwr5kaMViVKZQsNUW9VtMoam55bBbQEyCb5W2cgpoXSoUJgvUxc7dlPCwqmfbYemU6nBPNei7CXiSGAQdWJkiC%2Fuyxz17CDK3LSuCUlastIcmzqKED5Tzf%2BYB3NDx3Krp7qIzeJeTh3xDtJQbOjZfZgdzTcu6FZPlfJ7HSIA%2FkACLDGUnsC0RUgMN12%2BGdByPuhiHo%2F2A4j3yMy5WZyPE%2F7S%2BLO0aJ7Tu69K3gyZJzgGXNqluPPdfOMd8xB2gy1%2B8Zs1UaPUPkP5y93RJbolhyl2VaEUBZ%2Fd0aLJ5TfN3YxqX8R7gcfA1R%2F5MQjBm7TCd0O3ABjqkAW%2BWiPXiavMAdpQLqESkFxuD1S4CLWZE0LjVmxUuoAnLrBv%2Fbs2pkkuEYz65XAMPcI%2FXK2qdK6lkpngivW2EnByGyOB1%2BlNgIi5FtRfsIGhl2PALm%2Fz9VfYf2rOY%2BscOrnaABmGcnCLK6uNyVst%2FnRvgWuW3fNtg1O%2FCJMvYfYrXA4hW5D16nMhqY04WMqEUd9c6VreXBtHpLrZMYtI9vPwEE892&X-Amz-Signature=b10f7b1a1b619fd756cfdb91d19a49e66f38f36a2cd993690b583d607642091c&X-Amz-SignedHeaders=host&x-id=GetObject)

6. Kubernetes API를 쿼리하는데 Dashboard application이 사용하는 account는?
7. Dashboard application pod를 관찰하고 그것 위에 마운트된 service account 확인하기
8. pod 내에서 사용 가능한 service account 인증서는 어디에 위치했는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/90031244-a1cf-4874-8238-fe8c3798d305/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIIZM4SR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjtPudNarlWvtyQ286QVXWVl6ZjkntOR5B0pWV9uX1tAiEA9hGXrsykC7PilLOT8NvzsrSQNttBrWwn9IUR8PaOft8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIDb1fVCGTb9XUP7gyrcAxaKYmTWktE1lg3SsR1%2F0%2FLXlgvvtU6H9fw3kFc%2Fp4GF6CoxjiFDDsAz7xWDZVT1c13VQeo7cDPFqEuAmXlzJmOO8VFMkM2jIiIc8pVrr3800vMQfHfnjIOOXofGPOoK0b4p6W7xn15V0FnGNKGgaahOpet9DXPtokiypKsh731xEKD8VLvy3tmJOECmnZPWuz3G1%2Bl1fYvLIHUyPERqakFRBRfSJo0oQtqLQxzAaMMFkAp7Bu2vSMLJvMOjbi4l%2FqBI%2FTTAnhe%2FBHY7idmnZMQNYVgHZ%2BqeW4%2FpEmc3UJcdVRo2cr09b5%2F5oGAZZXSPzG2q%2B3PvjJOXqsbfsPX4sCDUAAvXSd8KZlsuTri770Dx%2BejIcnN%2FlAFSjfz34thakvejAdbbVVV%2FYOcv05I0vbkeP1pvTpZpwO7IQHXv6tmZHJfO6J5%2Be7iLIT%2BTlDWt71WE036M2LjCcNODdR5d%2BnxExSUwOd%2F4xZueV2X5VMUgiVdjA6%2Blm1jm1qJ%2FhpMwhys7cj%2BOPDlTIH%2F6%2B55RycJogd6fI9Dpii51ZQ2imzU4rpwzIeuwd6X%2FWSAfH%2BXM6Tk2WGaHEh26Nab6nXAD7QIOhVVOfQHtV%2FAdRFOASsOFAr8zuRosHuS6%2F%2B7uMKPQ7cAGOqUBuJ%2FZkNywy%2FB%2BwkPm%2F3RT3zexdHVR%2BbI2yPsMnNqX4RbF79GPrGZJhXidTV7ZCS7MajjQx1ku%2FTICOfgDdFPWSvlfdEwxnYlGP%2FAD7EVApE%2BtfxCaCXboEDPJxSAM5BFhrtVeeL0i2PXhneu7GnIHjUWLDJhFwLO8hOwuil8O6nxFn6c%2Be0NEkWxQW7S5Xu6JfFJnsMS53Ehs87DfMVZ%2BtJ7ddN3p&X-Amz-Signature=c0f882ed89bc81652eebd2fe4c8dd14bc82f2f54742e9e83f5bd99099a313ae9&X-Amz-SignedHeaders=host&x-id=GetObject)

9. 애플리케이션은 Kubernetes에 인증하기  위한 생성된 올바른 권한을 가진 service account 필요함. default service account는 제한된 접근을 가짐. `dashboard-sa` 라는 이름을 가진 service account 생성.

    ```bash
    kubectl create serviceaccount dashboard-sa
    ```

10. dashboard application의 UI에서 access token 넣기. 새롭게 생성된 service account에 대한 authorization token 생성하고 생성된 token을 복사해서 UI의 token 필드에 token 붙여넣기

    ```bash
    kubectl create token dashboard-sa
    ```


    dashboard-sa service account에 대한 token이  생성됨.


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/6b5ccc86-02be-4794-98b8-6ddf6a01cd07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYKLY75S%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeduvcC%2Fenbcm7Kd7Fm8C0RI383fWPHC10nJ3W6V1aEQIhAJzFsm1%2BeJ%2FxSILEqUneIITebwEW6c0UZvqA8FByRY3gKv8DCF8QABoMNjM3NDIzMTgzODA1IgxkAZElTF0RGwtcKEsq3ANJf%2BNnPx4o4Zh0d%2FIfAy%2Bum55lzg1v5QJOzgayLRpmxo6ve7zsAIxNrTztqBiBJFLcRYGYj6FvePEzDM%2BjLUIt4QJQud6eB2db7zYARpAC68SvlfTjn0mmZmSszcRCv6fWfTmnQur244fr7YfoxrHHZcRJuEVpF0g5gKhSF7vEveihn71Mli%2FE67bUMZaMPpLcfcCutb3pVnIRpZlJJSllkuhEML7knpNwnCbfaMMY4of%2FP5HYThDUXqxF5bIMPdXvCptrtKPJ85sdQd%2BwmgAmCgsjkMoXJeE5Xfa5dCp2L8gigYJrui7mMd59IDj5e1KIiOR1Q7hCeuZ0%2BrGmOuZuADYfE3YSFL73DyEp4c2L6KLqL8pG3rXt4Vs8j9CsTPeqQbMhe2S%2FxTh6zfjv7YtU30slyLuGWFQ0frpds3i1oKoloweEuCAQyqHfTBf9K9r%2Fvo8chyax%2Fq883m0Osza4pWCvxvthbX6vFC6u4aE6zpm5Hg53hn2DguPgPJM2qZilvo58pVeF5Vv3NrUm9BqzSa3K7%2B%2Bchj2EUo8ubwnxbgOqgSKckz2ez%2F4AxrKdhbNNfhqPdYkfjaQyTuTcMhosSeyhEanXuFWgMkTUkNu%2FWa6Q1B%2FllqhxwtEe%2FzCj0O3ABjqkASWCNrYtnoPdOp6070Voj2s5PLJbLqaAj7D0SJaIxefxLvs%2FMRuLlfmIhmJ5vq%2BNtp%2FGi%2Fj1R%2BwMOSbFXE8UaRYzKc%2Bnc4ycv6ihsAF9t2NflFDCzSKQ1nmSDBCiMna%2Fs%2BpEKpoRnZe8VwGcBhl4iuoTJegXb6nj9ZC5C7O0dbHjdDQg%2FMw4v8XmzmLNDR4pTKyBfv9VM%2FPjeobr2TVKuyOh%2F4ka&X-Amz-Signature=976d47f4db47cd85c83e2fba5313fd3e7d04e28c1139ce8ed9c97c0858e13838&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/03b8d9a1-823a-4f5a-aab8-e9a63822e005/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQFOCUY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtN1DIQPbx9eQ53Ob7bAYNBnI%2BJYkI0XfZ9Rsd2XLxFAiBCNbBua7fQOMqSEWLBWm7xcAK4mgbcxeYghm5g%2B0z0Fir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMOkWrGIg8%2BSXd6LlWKtwDaLZAJVKFwdEikItP%2Bcxe5pk%2FZrzURjGvUqtLrL8KXTDA1TYzJln4Sgf9cXvDtLNUQ%2BUQTi3iDIZoLCJuDt%2Fx8fIxQs9QjenbneVoDqZgyPACxg0OTmGFf2AhT1M%2BcN3rFkZ%2BNXV%2FYIo4aAvckSoLEmXXioQZF11GS0UgU9fdoY1aRhfBOTprdEbOM8S13FhZOmKOmR%2Bu31x6%2FWKdkSQqRz%2FVmhDnm6rqLuKF5hxgmNpB8z94ECFugWO5UEHQafu1BrfOrMzStUWAD9AwsIK%2BZVa8kXkE%2Febh54CfR17cDQlXWTURlnyoGg8QIq0eabmnrrAYuhC%2BuI6NCEt7IP%2FBK3MDaGtfYGk2Xivx7oaSzSgE5KZZgQFuzAIbCxsOOP989vYscye9owUUoJdvqFNLs0pLVYS7nWa6aDBkP9gPStCJOBdgqV8%2FUydR1BvZy9JC13d24i2q3GusatXEMTbe4LCj4TJ4hTrcklVQxGwzVkdkKDrfIzhjOtAPM58g0vVs7vzWu847%2F6nFl6gM0hIM%2F6i7erR3mic%2BWzYRne9a7DDhNCJQwBewEh%2FsWk7mNw7y4PeSuvIpMQ0QkRTs7a4hA1KlY5TixBhE%2FO2LpalWeiCC0Ru8oZSmKhAeQdEwj9DtwAY6pgEVEktTcjDYu0ezK4U7v5A3%2BAbRMLHQroHdF61GPGJf4f6l5aLXIGLFNebilgSiXZVbLFoFebHY3cGyeoEQd4YPFpQjT1djjNTXI2pJIT%2FHcGolN9HrEeYPvZA1XWszK67KJ431EZr99KfPB7HCltXF003Z5N%2FgNqKYnqBAv7F8I%2BRgIxvs%2FhJrJnDRZbscQamt23H3duCVGyr4xITX%2FF5D1mHcRD3m&X-Amz-Signature=b80e7f24826289acc01e37cac245223165d152918c19e6e545e5d9fa7b894ccb&X-Amz-SignedHeaders=host&x-id=GetObject)


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


[Security In Docker](https://docs.docker.com/engine/security/)


Docker가 설치된 호스트 → 호스트에는 여러 운영 체제 프로세스, 도커 데몬 자체, SSH 서버 등과 같은 자체 프로세스가 실행 중임.


```yaml
docker run ubuntu sleep 3600
```


을  실행. 가상 머신과 달리 컨테이너는 호스트로부터 완전히 분리❌.


컨테이너와 호스트는 같은 커널 공유.


컨테이너는 리눅스에서 네임스페이스를 사용해 분리됨.


호스트에는 네임스페이스가 있고 컨테이너에는 자체 네임스페이스가 있음.


컨테이너가 실행하는 모든 프로세스는 실제로 호스트 자체에서 실행되지만 자체 네임스페이스에서 실행됨.


도커 컨테이너는 자체 네임스페이스에 있으며 자체 프로세스만 볼 수 있음.


외부나  다른 네임스페이스에서는 아무것도 볼 수 없음. → Docker 컨테이너 내에서 프로세스를 나열하면 프로세스 ID가 1인 sleep 프로세스가 표시됨. → Docker 호스트의 경우, 자체 프로세스 뿐만 아니라 하위 네임스페이스에 있는 프로세스도 시스템의 또 다른 프로세스로 볼 수 있음. → 호스트 위 프로세스를 나열하면 sleep 명령을 포함한 프로세스 목록이 표시되지만 프로세스 ID는 다름. → 이는 프로세스가 서로 다른 네임스페이스에서 서로 다른 프로세스 ID를 가질 수 있기 때문이며, 이는 Docker가 시스템 내에서 컨테이너를 분리하는 방식임.


> Docker 호스트 내에서 ps aux를 했을 때 방금 올린 컨테이너가 PID 1로 떠 있음. 그러나 외부에서 ps aux를 한 경우 방금 올린 컨테이너 이외에도 다른 컨테이너 볼 수 있음. 이 때, 방금 올린  컨테이너는 1이 아닌 다른 PID를 가짐. → 프로세스가 서로 다른 네임스페이스에서 서로 다른 프로세스 ID를 가질 수 있기 때문. Docker가 시스템 내에서 컨테이너를 분리하는 방식임.


docker 호스트는 user  집합 있음. → root user, 많은 root가 아닌 user


기본적으로 docker는 root user로 컨테이너 내에서 프로세스 실행.


컨테이너 내부와 외부 모두 프로세스는 루트 사용자로 실행됨.


루트 유저로 컨테이너 내의 프로세스를 실행하고 싶지 않으면 Docker run 명령어에 user 옵션을 사용하여 새 user ID를 명시해야 함.


```bash
docker run --user=1000 ubuntu sleep 3600
```


다른 방법으로는 user security를 실행. → 도커 이미지 자체에 생성 시 정의.


```docker
FROM ubuntu
USER 1000
```


```bash
docker build -t my-ubuntu-image .
docker run my-ubuntu-image sleep 3600

ps aux
USER   PID %CPU %MEM   ....
1000     1  0.0  0.0   ....
```


루트 유저로 컨테이너를 실행할 때 무슨 일이 발생할까? 호스트 위 루트 유져와 컨테이너 내 루트 유저가 같을까? 컨테이너 내부의 프로세스가 루트 사용자가 시스템에서 할 수 있는 일을 할 수 있는가? 만약 그렇다면 위험하지 않을까?


→ 도커는 컨테이너 내 루트 유저의 능력을 제한하는 일련의 보안 기능을 구현.
컨테이너 내 루트 유저는 호스트 위 루트 유저와 같지 않다. → 이를 구현하기 위해 도커는 리눅스 기능을 사용.


파일 수정, 파일 권, 접근 제어, 프로세스 생성 또는 삭제, 그룹 ID 나 사용자 ID 설정, 두 네트워크 포트 바인딩, 네트워크 브로드캐스팅, 네트워크 포트 제어, 호스트 재부팅, 시스템 시계 조작 등등 시스템에 제한 없는 접근을 가짐. → 리눅스 시스템 상 기능들. /usr/include/linux/capability.h 에서 확인 가능.


기본적으로 도커는 일련의 제한된 기능을 가진 컨테이너를 실행. → 컨테이너 내에서 실행되는 프로세스는 호스트를 재부팅하거나 호스트 또는 동일한 호스트에서 실행 중인 다른 컨테이너를 방해할 수 있는 작업을 수행할 권한이 없음.


이 동작은 재정의하고 사용 가능한 권한보다 더 많은 권한을 제공하려면 Docker 실행 명령에서 cap add 옵션을 사용.


```bash
docker run --cap-add MAC_ADMIN ubuntu
```


cap drop 옵션ㅇ르 사용하여 권한을 낮출 수도 있음.


```bash
docker run --cap-drop KILL ubuntu
```


또는 모든 권한을 활성화한 상태에서 컨테이너를 실행하려면 권한 플래그 사용.


```bash
docker run --privilieged ubuntu
```


## Security Contexts


Pod 혹은 컨테이너 레벨에서 보안 설정을 구성하도록 선택할 수 있음.


pod 레벨에서 구성하려면 파드 내 모든 컨테이너가 보안 설정을 가지고 있어야 함.


파드와 컨테이너 둘 다 설정하려면 컨테이너 상 설정이 파드의 설정보다 우선시됨.


```yaml
apiVersion: v1
kind: Pod
metadata:
  name: web-pod
spec:
  
securityContext:


    
runAsUser: 1000

  containers:
    - name: ubuntu
      image: ubuntu
      command: ["sleep", "3600"]
```


spec 부분 아래에 security context라는 필드 추가.  runAsUser 옵션을 사용하여 사용자 ID 설정.


컨테이너 레벨과 같은 구성을 설정하기 위해서는 기능을 추가하는 것처럼 컨테이너 세부 사항 아래에 적으면 됨.


```yaml
apiVersion: v1
kind: Pod
metadata:
  name: web-pod
spec:
  containers:
    - name: ubuntu
      image: ubuntu
      command: ["sleep", "3600"]
      
securityContext:


        
runAsUser: 1000

        
capabilities:

          
add: ["MAC_ADMIN"]
```


capabilites 옵션을 사용하고 파드에 추가하기 위해 일련의 capabilities를 명시. 


> capabilities는 pod 레벨이 아닌 container 레벨에서만 지원.


## Practice Test - Security Contexts

1. ubuntu-sleeper pod 내에 sleep process를 실행하는 데 사용되는 사용자가 무엇인가?

    사용자가 명시되지 않아. root로 추정.


    > ```bash  
    > kubectl exec ubuntu-sleeper --whoami  
    > ```  
    >   
    > 위 명령어를 실행하여 pod를 실행하는 데 사용되는 사용자를 알아내기.

2. user ID 1010을 가진 sleep process를 실행하도록 ubuntu-sleeper pod 수정.

    securityContext를 바꾸려면 Pod를 지우고 새로 시작해야 함.


    Pod가 빠르게 삭제되지 않으면 `--force` 옵션 사용.


    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: web-pod
    spec:
    # 추가
      securityContext:
        runAsUser: 1010
    ```

3. `multi-pod.yaml` 파일이 주어짐. `web` container의 프로세스는 어떤 사용자로부터 시작되었는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/d07eb7fa-de69-4daf-9adc-044d0532d5c0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OWGJAEA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgSN7E%2FaF64FUzUsJO4cJIxa9HK1P37BybWwMBtjXBQgIgNhI2MSvoOlMclPUNjsJlT3e%2BpuGUY6w%2Bpt%2Fc%2Fj5l00Qq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGh0p9AvmtLsMxIX0yrcA1vMWjvDM0kQbVdwla6WW8rhihy6uNdfVeoY6%2F0KgLfyQiPNQFRDESFsUU97tpruoVqdUlBtuA%2BcChtD881S5SzpjsvTaSvbW%2Fp7bc%2B1gNJallcMzGJ%2FIeomdcx3nqVW5f23Ug%2B4NQFiWfiJVYrc0anaaOiXi2t6Vj%2FOLUT4GNUNrkRJOKu9yrJswdGZRVbFWwbeGpA6RbOvmnNyi%2FD2Pg6hsrjkDLVO%2Fw3OedcFpPHwgQeDBngoUnmMtJ%2BBKlPWXZw3bxfR%2BLPG1JBmjkNuN7SUcdUXMkFKmgiwXutvZkSya8RDRzDiLGT3YzKewi1sx%2BPkTDTKM7xWEojZ%2FZacwS7vhYnQOGIrR59XkTydtRA7JN3hHz4BImHkPZGUVPhyfxlWrx0XsmRnXQDVeFRqpFzGWlLSyvOu0N%2FzaY%2FJEHpcnMc0ETrBPtL6Fuz%2Fq5U6gL6tyOIh395T42Eb7xIKKFRno%2F0XJIJwmyS77C8tVSiRhcynijjlw1BoMxkSxa9I%2Fx5fDRm%2F%2BLCNJ8wLb4MnCOHel4KJ2T9l%2BBcoT6587NXbYRzsovQyy4mDFCeU9fwCmCdBO%2Bvgduk9PrzPJqy5UZbxIp8PpSFx36nu57u4FFGPF5SWLQclJzUXA8WUMKDQ7cAGOqUB5QOBH1SEnZLe%2Fu5Rr6jRqsEpJDexXXgC2cSBGW87OaKZ38mVu5hz3nzrtLCNrH6gY1IAih2xUmlrXWnccfAhO%2FkzCj8aXgzQkD3ZLrwbZouXCyCLrcr2ZyNB%2FwuDluRXVN9iGlsUJogf1nEHu6q5PHcZE6%2B2aCoU8yDkWTS1PWvyZt6TGwrrHolxcG4PYKIoLi0k73h7G9tpY2mwKDrmT0LYDUEA&X-Amz-Signature=ad58107130613b7e3338d8af50d79fedf353bdbfe4fbb4ae6010155e85dbf24c&X-Amz-SignedHeaders=host&x-id=GetObject)


    컨테이너 아래에 정의한 것이 우선 적용되므로 1001이 아닌 1002.

4. sidecar 컨테이너의 프로세스는 어떤 사용자로부터 시작되는가?

    1001 → container 아래에 정의된 것이 없으므로 Pod 레벨에 정의된 1001이 적용됨.

5. SYS_TIME 기능을 가지고 root 사용자로 시작하도록 ubuntu-sleeper를 업데이트.

    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: web-pod
    spec:
    # 추가
      securityContext:
        runAsUser: 1010
    ```


    아래와 같이 변경.


    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: ubuntu-sleeper
      namespace: default
    spec:
      containers:
      - command:
        - sleep
        - "4800"
        image: ubuntu
        name: ubuntu
        
    securityContext:
    
          
    capabilities: 
    
            
    add: ["SYS_TIME"]
    ```

6. NET_ADMIN 기능도 활용하도록 업데이트.

    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: ubuntu-sleeper
      namespace: default
    spec:
      containers:
      - command:
        - sleep
        - "4800"
        image: ubuntu
        name: ubuntu
        
    securityContext:
    
          
    capabilities: 
    
            
    add: ["SYS_TIME", "NET_ADMIN"]
    ```


## Network Policy


[NetworkPolicy](https://kubernetes.io/docs/concepts/services-networking/network-policies/)

- Ingress : 사용자로부터 오는 트래픽
- Egress : 사용자로부터 나가는 트래픽

Kubernetes에서 네트워킹을 위한 전제 조건 중 하나는 어떤 솔루션을 구현하든 Pod들이 route와 같은 추가 설정 없이 서로 통신할 수 있어야 한다는 것.


모든 Pod는 Kubernetes 클러스터의 노드 전체에 걸쳐 있는 가상 사설 네트워크에 있으며, 기본적으로 해당 목적을 위해 구성된 IP 또는 Pod 이름이나 서비스를 사용하여 서로 도달 가능.


Kubernetes는 기본적으로 클러스터 내의 다른 Pod나 서비스로의 트래픽을 허용하는 모든 허용 규칙으로 구성되어 있음.


예를 들어, 프론트엔드 웹 서버, 서버 API, 데이터베이스를 배포했다고 가정.


프론트 엔드 웹 서버가 데이터베이스 서버와 직접적으로 통신하는 것을 원하지 않는다면? → Network Policy 설정. API 서버에서만 DB 서버에 트래픽을 허용하도록. 정책이 생성되면 Pod의 모든 트래픽은 차단하고 지정된 규칙에 부합하는 트래픽만 허용.


네트워크 정책을 어떻게 적용하고 연결하는가?
→ Pod에 ReplicaSet이나 Service를 연결하듯이 label과 selector를 이용.

> NetworkPolicy

```yaml
podSelector:
  matchLabels:
    role: db
```

> DB

```yaml
labels:
  role: db
```


policy type 아래에 ingress를 허용할지 egress를 허용할지 둘 다 허용할지 명시하면 됨.


위 예시의 경우 ingress만 추가.


```yaml
policyTypes:
- Ingress
ingress:
- from:
  - podSelector:
      matchLabels:
        name: api-pod # DB pod와 통신하려는 Pod 라벨.
  ports: # DB port
  - protocol: TCP
    port: 3306
```

> Network Policy yaml

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: db-policy
spec:
  podSelector:
    matchLabels: # Policy와 연결할 Pod의 라벨
      role: db 
  policyTypes:
  - Ingress
  ingress:
  - from: # DB pod와 통신하려는 Pod 라벨.
    - podSelector:
        matchLabels:
          name: api-pod 
    ports: # DB port
    - protocol: TCP
      port: 3306
```


Policy type에 ingress나 egress가 있는 경우에만 ingress와 egress가 적용됨.


즉, ingress만 정의된 경우 ingress 트래픽만 차단. 모든 egress 트래픽은 영향을 받지 않음.


policyTypes에 ingress인지 egress인지 작성하지 않으면 차단 안 됨.


네트워크 정책은 Kubernetes 클러스터에 구현된 네트워크 솔루션에 의해 시행되며, 모든 네트워크 솔루션이 네트워크 정책을 지원하는 것은 아님.


지원하는 네트워크 정책 : kube-router, Calico, Romana, Weave-net → 영상 녹화 시점 기준. 아래 사이트 참고.


[Declare Network Policy](https://kubernetes.io/docs/tasks/administer-cluster/declare-network-policy/)


## Developing network policies


데이터베이스 Pod를 보호하는 것이 목표. API Pod를 제외한 어떤 파드도 접근할 수 없음. 3306 포트만 허용.

> DB의 in/out을 막기.

Pod의 모든 트래픽을 막도록 하는 network policy와 연결.


그러나 데이터베이스의 3306 포트는 API Pod와 통신할 수 있어야 함. → 이 부분은 추후 구성.


DB Pod의 관점에서 보면 API Pod로 부터 트래픽이 들어오도록 해야 함. → 이것은 Ingress. API Pod가 DB Pod에 query를 수행하고 결과가 다시 Pod로 돌아감.


Pod로 돌아가기 위한 별도의 규칙이 필요한가? ❌. 들어오는 트래픽을 허용하면 해당 트래픽에 대한 응답이나 응답이 자동으로 반환됨. 별도의 규칙 필요 없음. 이 경우, Ingress 규칙만 필요함.


요청하는 곳이 어디인지 방향에 대해서만 생각하면 됨. 응답은 고려하지 않아도 됨.


그러나 이 규칙이 DB Pod가 API Pod에 연결하거나 API 요청을 할 수 있다는 것을 의미하지는 않음. → Egress 트래픽이므로 Egress 규칙을 정의해야 함. 그러므로 허용되지 않음.


policyTypes가 Ingress이면 ingress라 불리는 부분에 다중 규칙을 명시할 수 있음.


각 규칙은 from과 port 필드가 있음.


from은 DB Pod로 통과할 수 있는 트래픽의 출발지. 여기서는 PodSelector를 사용하여 API 파드의 라벨을 작성.


port는 들어오도록 허용하는 포트 번호. 이 경우 protocol은 TCP이고, port는 3306임.


이렇게 하면 API Pod를 제외한 모든 트래픽이 DB Pod로 들어올 수 없음.


```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: db-policy
spec:
  podSelector:
    matchLabels:
      role: db
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          name: api-pod 
    ports:
    - protocol: TCP
      port: 3306
```


클러스터에 같은 라벨을 가지고 있지만 다른 네임스페이스에 있는 여러 API Pod가 있다면?


dev, test, prod 환경에 대한 네임스페이스가 있다고 가정.


각 환경의 같은 라벨을 가진 API Pod가 있음.


현재 정책은 일치하는 라벨이 있는 네임스페이싀 모든 Pod가 DB Pod에 도달할 수 있도록 허용함.


우리는 Prod 네임스페이스의 API Pod만 들어오도록 허용해야 함. → podSelector와 함께 namespaceSelector라 불리는 selector를 새로 추가.


matchLabels 아래에 라벨을 작성. 이것이 동작하려면 먼저 namespaceSelector가 있어야 함.


```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: db-policy
spec:
  podSelector:
    matchLabels:
      role: db
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          name: api-pod
      
namespaceSelector:

        
matchLabels:

          
name: prod

    ports:
    - protocol: TCP
      port: 3306
```


podSelector가 아닌 namespaceSelector만 있다면 어떻게 되는가?


이 경우 이전에 사용했던 web Pod와 같은 지정된 네임스페이스 내의 모든 pod는 데이터베이스 Pod에 도달할 수 있지만 이 네임스페이스 외부의 pod는 통과할 수 없음.


Kubernetes 클러스터 외부 어딘가에 백업 서버가 있음. 이 서버가 DB Pod에 연결되도록 허용하고 싶다고 가정. → 백업 서버가 Kubernetes 클러스터에 배포된 Pod가 아니기 때문에 트래픽을 정의하는 데 사용하는 podSelector와 namespaceSelector 필드가 작동하지 않음.


그러나 우리는 백업 서버의 IP 주소를 알고 있음. NetworkPolicy에 특정 IP 주소로부터 들어오는 트래픽을 허용하도록 설정할 수 있음.


IP block이라고 알려진 새 유형을 추가.


IP block은 IP 주소의 범위를 명시할 수 있도록 함.


```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: db-policy
spec:
  podSelector:
    matchLabels:
      role: db
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          name: api-pod
      namespaceSelector:
        matchLabels:
          name: prod
    - ipBlock:
        cidr: 192.168.5.10/32
    ports:
    - protocol: TCP
      port: 3306
```


이러한 것들은 개별적인 규칙으로 통과될 수도 있고 하나의 규칙으로 통과될 수도 있음.


첫 번째 규칙은 podSelector와 namesapceSelector를 함께 두는 것.


두 번째 규칙은 ipBlock


이것은 OR처럼 동작. 즉, 첫 번째 규칙인지 두 번째 규칙인지 기준에 맞는 트래픽을 통과시킴.


그러나 첫 번째 규칙은 일부를 선택. 즉, 출발지로부터 트래픽이 두 가지 기준을 모두 충족해야 통과 가능. 따라서 API Pod의 라벨이 일치하는 Pod에서 들어와야 하며 해당 Pod는 prod 네임스페이스에 있어야 함. 이것은 AND처럼 동작.


namespaceSelector앞에 `-`를 추가하여 이들을 분리한다면? 두 규칙은 개별 규칙이 됨. 즉, 첫번째 규칙은 같은 네임스페이스에서 API pod의 라벨과 맞는 모든 Pod로 들어오도록 허용. 그리고 두 번째 규칙은 prod 네임스페이스 내 모든 Pod로부터 들어오는 트래픽 허용. 그리고 ipBlock을 가짐. → 세 개별 규칙을 가짐.


이 세가지 규칙이 있으면 거의 모든 곳에서 DB Pod로 오는 트래픽이 허용됨.


작은 변화가 큰 영향을 미칠 수 있음.


> 💡 요구사항에 따라 규칙을 어떻게 구성할 수 있는지 이해하는 것이 중요.


예를 들어, 백업 서버가 백업을 시작하는 대신 backup server로 backup을 푸시하는 agent가 db-pod 위에 있다고 가정.


우리는 Egress를 정의해야 함. 먼저, policyTypes에 Egress를 추가. 정책을 정의하기 위해 engress section 추가. egress에는 from 대신 to.


to 아래에 podSelector, namespaceSelector, ipBlock과 같은 selector 정의.


이 경우 백업 서버가 외부에 있으므로 ipBlock 사용. 서버에 대한 cidr 작성.


요청이 전송될 포트는 80이므로 80으로 포트 지정.


```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: db-policy
spec:
  podSelector:
    matchLabels:
      role: db
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          name: api-pod
      namespaceSelector:
        matchLabels:
          name: prod
    - ipBlock:
        cidr: 192.168.5.10/32
    ports:
    - protocol: TCP
      port: 3306
  egress:
  - to:
    - ipBlock:
        cidr: 192.168.5.10/32
    ports:
    - protocol: TCP
      port: 80
```


DB Pod에서 지정된 주소로의 외부 백업 서버로 전송되는 트래픽을 허용.


## Practice Test - Network Policy

1. 환경에 정의된 Network Policy 수는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/341c6d2c-44cf-49c2-9405-38fc9796d812/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP5YQULJ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVeNjBAyMbj0xnK6ctjABS%2FN9qvIpRQjNQ4D3QguuheAiEAsqOIaWVH1NmBNMGVmqZJcrLTFvDdTcX%2B6YERpCfozBcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFyu23dE4LkPK5xwbircA0hKuQ6PZEdVNun%2B9TZH27maYb2WNdpCxknAhWPydAKyJ30TyY7Btx5riurw7by20do280JFAzmV%2BXHgCfySibwyzlMHlZCBWlLglCEy83PJ%2BS35rBzMHdoH%2F8Tcnhc2bLjFgbkStmrNR152CEmODg3Y%2BQc%2Bop%2BXysCc1csMaqTzoMg75XiVB69tfr5UO0QK0F544KCpHvCdXWO46AQdZ%2BIK3MWQYSmMyc3o2W4oDHV3Q9mFqlJ%2BvgXBrmjnM8ESuKRQUMxlFQHPwpCDRDwe7d%2BX0AXMzTQbMKbxy3Xi1YboNUXbcKaXqGu352y7X3o9LCX4kzYoYe4N13ZTEL9IP1Od1lw%2F13Fb%2FlRE7e%2F7c5zk%2FZILXaQoO8zgbwt8yXO4v7I9tNnVHpVSCT2UhcYvO74IHXNFuLQ0tiklHLjJ2lr9jnoMQcEjVPXHk3sl45u8aUu2X45uNnneSp25qlkXiKomHEuC8hPgknykrlvQfyaFCH6R3GuvKbijXq6YivKZQkWhdhoTF2uppLrF4QDk6wqu8V1LH%2BVUIfXZLTe0aqd1HW4p1BH05VvQFnHLwhXHQmdKgLM23XjLZosFZAti01Lh4RgCdIj%2FjwycGQ2KLetRkt81yY5VuVoee0vuMObP7cAGOqUBs4IkfbxC8tZTHaaYhZ0i%2BaB3b1svdGtbJFMxaMYC%2BI3LzWKYXPc%2F%2B6CFpTPlCO5o5%2BpkYogQzIsIHIrEL85wD5%2BN%2FVrhLpsoStxzUgZtde2m%2Bnf8eQ0SXDmoxpU0xBKwaTMO4v5hOVzp4k9yX8zdKGJc0eE5OHw%2FF58qNQfKjqliotWyo41Lf3lKCOGmAMPslI%2F%2FGB421kI7iubS4FwKg70M3C7x&X-Amz-Signature=20f55f944ec3fad482bc287cd17a976ac5c6cd3f2a49e9d0315e7bd024ffbe3e&X-Amz-SignedHeaders=host&x-id=GetObject)

2. NetworkPolicy의 이름은?
3. NetworkPolicy가 적용된 Pod는?
4. NetworkPolicy는 어떤 유형의 트래픽을 다루도록 구성되었는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/10463981-272a-47c5-bdc9-6449c95a3fed/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RHZLCJA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdKuQNnSwAhrcez4M4ihcpLpQ7PJzSREgpfNUH0s0zggIhAIWSvX3Fb%2FrU9dPq4Jsfr10lV9ow467bsZosRDuIb%2BG4Kv8DCF8QABoMNjM3NDIzMTgzODA1Igx1ToqIMJ0n3uEkbsAq3ANCKzbOcwa%2B0jlFItCKnO2NWhIibPZCzUPRzZflRKMGbDXZ%2Fm5XK1bo%2B29W822hwSvaOUPsoEt2OmZ%2FRY9KiYhVdMYTdUcufzc4DX0LEtZtFWvcUR028%2Fss3CPfBlem66mb1zjck%2BHGP2xZM1X8u5lubi%2FGsBskPmztPZtrcCLESC5ztFe7X4rXOdgWk9g7ek0knSdDGnxeZKc0FDtL8%2FRM7DovYzcHUEpUsO%2BPC4ZJdjVryk%2BYcO2i61zKEK7EPQ0%2BIzyJCktf4wu%2F3fj3SxHTsOQi1b8Nn6wFMDZiW%2FZiJtHNDKUB2zOR%2BJ3vzh95DBoTZanH0XqoT8qfdsKYBadpY4JHUKxafPXvQJZJIj9ONXL4FaWsHggo6aJ39oNyHd8r%2BaJLE0F7W8EDwgpEvJYjhdJ7uGeZ0JRZXBZ172qcwFQDuW661Zzt82Uiq4LYhQkA5SAd7q0afnshvkBS%2BRnbnXNBh05yTRuHh3Q%2FCczaeRVkd%2B0Am7BffDs5prmgzC%2FxO6XCFAT5eL0tIy5UpapxfBz4fyZFZgqw1M%2BznKv6XxXlFNCuvRHNGX7AnteEqxFReAntCVHEF%2FuqVALjsI0c%2BfqJhhGqZP2xs4lRdfexzSz4Q6%2Bh%2FAG%2FOWWTYTCf0O3ABjqkAba5e4CgILAEMnr%2F5%2BULmpnp%2BXAMUe2U%2FDsGxr84SeQzj48f2gYhq3%2B6Kw9eYnhTo9k3XoAhr%2FBjXi5PgX4B7LLyu2cEven3R9DeWG8Ppmz3drYpHFIjy%2By1RxjrRSKodZvv2eyYstJjvuMQLmgkrnshBSCBXUcdvIlE%2FeWe1gyGVN4pMs68CaeBgC8ScQcngkbHla9osSd5v6VKj71b4NiPpotz&X-Amz-Signature=06fb3964af6f30b728f11ab7dff47805c593c094eca98735fb08ebad83c6e888&X-Amz-SignedHeaders=host&x-id=GetObject)

5. NetworkPolicy로 구성된 규칙의 영향은?

    Traffic From Internal to Payroll Pod is allowed.

6. NetworkPolicy에 구성된 규칙의 영향은?

    Internal Pod can access port 8080 on Payroll Pod

7. payroll-service의 8080에 접근하기 위해 UI를 사용하여 연결 테스트를 수행.

    Only Internal application can access payroll service.


    Internal application → payroll-service 8080 → Success!


    External application → payroll-service 8080 → timed out

8. payroll-service의 8080에 payroll-service에 접근하기 위해  접근하기 위해 내부 애플리케이션의 UI를 사용하여 연결 테스트 수행.

    Successful


    Internal application → external-service 8080 → Success!

9. Internal 애플리케이션으로부터 payroll-service와 db-service로만 트래픽을 허용하도록 networkpolicy 생성.

    Policy Name: internal-policy


    Policy Type: Egress


    Egress Allow: payroll


    Payroll Port: 8080


    Egress Allow: mysql


    MySQL Port: 3306


    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: NetworkPolicy
    metadata:
      name: internal-policy
    spec:
      podSelector:
        matchLabels:
          name: internal
      policyTypes:
      - Egress
      egress:
      - to:
        - podSelector:
            matchLabels:
              name: payroll
        ports:
        - protocol: TCP
          port: 8080
      - to:
        - podSelector:
            matchLabels:
              name: mysql
        ports:
        - protocol: TCP
          port: 3306
    ```


## Custom Resource Definition(CRD)


Deployment 정의 파일이 있다고 가정.


deployment를 생성할 때 kubernetes는 deployment 생성하고 ETCT 데이터 저장소에 그것의 정보를 저장. → deployment를 생성할 수 있음. deployment를 나열하고 상태를 봄. 그리고 delete 명령을 실행해서 삭제할 수 있음.


이 모든 것은 ETCD 데이터 저장소에서 deployment 객체 즉,리소스를 목록으로 만들고 수정하는 것 뿐.


그러나 deployment를 생성할 때 deployment에 정의된 replicas의 수와 동일할게 pod 생성. → 누구 담당? → deployment controller 담당. deployment controller는 kubenete에 내재되어 이미 사용 가능하기 때문에 만들 필요가 없음. → controller는 백그라운드에서 실행되는 프로세스. 관리해야 할 리소스의 상태를 지속적으로 모니터링.


배포를 생성, 업데이트 또는 삭제할 때, 우리가 수행한 작업과 일치하도록 클러스터에 필요한 변경 사항을 적용함.


우리가 deployment 객체를 생성할 때 controller는 replicaset을 생성함. →  controller의 일.


replica set, deployment, jobs, cron jobs, statefulset, namespace 등등 클러스터에서 이용가능한 리소스 중 일부, 이러한 객체의 상태를 모니터링하고 클러스터에서 예상대로 상태를 유지하기 위해 필요한 변경을 수행하는 컨트롤러가 있음.


클러스터에 다중 Pod를 배치하기 위해 deployment를 생성하는 것처럼, flight ticket을 예약하기 위해 flight ticket이라는 객체 생성하고자 함.


```yaml
apiVersion:  flights.com/v1
kind: FlightTicket
metadata:
  name: my-flight-ticket
spec:
  from: Mumbai
  to: London
  number: 2
```


ETCD 데이터 저장소에서 flight ticket 객체를 생성하거나 삭제할 예정, 실제로 항공권을 예약하는 것은 아님. → 우리는 이것이 실제로 항공권을 예약하길 원함.


book-flight.com/api 라는 API가 있음. → flight ticket 예약을 요청할 수 있음.


항권 예약하기 위해 FlightTicket 객체를 만들 때마다 이 API를 어떻게 부르는가? → 컨트롤러가 필요함.


flight ticket controller를 만들 것. Go로 작성됨. → FlightTicket 리소스의 생성이나 삭제를 관찰할 것. → 우리가 리소스를 생성할 때 book flight ticket API가 연결. → 리소스를 삭제할 때, 예약을 삭제하도록 API 요청 보냄.


FlightTicket 객체는 custom resource, 실제 FlightTicket을 예약하기 위해 API를 호출하여 작성한 컨트롤러를 custom controller라고 함.


지금 FlightTicket이라는 객체를 만드려고 하면 error 메세지가 생김 → [flight.com/v1](http://flight.com/v1) 이라는 버전 내에 FlightTicket이라는 종류와 일치하는 것이 없음. → Kubernetes API에서 원하는 리소스를 구성하지 않고(먼저 Kubernetes에게 FlightTicket 객체를 생성할 수 있도록 해야 한다고  말하지 않고) 단순히 원하는 리소스를 만들 수 없음.


우리가 원하는 리소스를 만들 수 있도록 정의해야 함.


custom resource definition(CRD)이라고 알려진 것이 필요. CRD를 사용하여 Kubernetes에게 앞으로 FlightTicket이라는 종류의 객체를 만들고 싶다고 말할 것. CRD는 apiVersion, kind, metadata, spec을 가지는 유사한 객체.


```yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: flighttickets.flights.com
spec:
# namespace 범위로 관리되는지 cluster 전체로 관리되는지.
  scope: Namespaced
  group: flights.com # API version에 제공하는 API group
  names: # 해당 API version에 있는 리소스
    kind: FlightTicket
    singular: flightticket # singular과 plural을 정의해야 함.
    plural: flighttickets  # kubectl 명령어를 실행했을 때 보일 리소스 유형.
    shortnames: # short version의 이름 제공 가능.
      - ft
    versions:
      - name: v1
        served: true
        storage: true
    schema:
      openAPIV3Schema:
        type: object
        properties:
          spec:
            type: object
            properties:
              from:
                type: string
              to:
                type: string
              number:
                type: integer # 최솟값과 최댓값 같은 validation도 number 아래에 정의 가능.
                minimum: 1
                maximum: 10 # 사용자가 범위 이내의 값을 입력하지 않으면 리소스는 생성되지 않고 오류 메시지 반환.
```


plural은 Kubernetes API 리소스에서 사용되는 것.


`kubectl api-resources`  명령어를 실행하면 plural 형식으로 보여짐.


각 리소스는 수명 주기의 다양한 단계를 거치면서 여러 버전으로 구성 가능. 예를 들어, 새로운 리소스 유형이라면 그것을 도입할 것. v1 버전을 만들기 전 alpha 또는 beta 버전부터 시작.


동일한 리소스에 대해 여러 버전이 구성된 경우 API 서버를 통해 어떤 버전이 제공되는지 선택해야 하며, 어떤 버전이 storage 버전인지 정의해야 함. 여러 버전이 있는 경우, storage 버전으로 표시할 수 있는 버전은 한 개 뿐.


schema 명시 → shema는 객체를 생성할 때 spec 부분 아래에 지정할 수 있는 모든 파라미터를 정의.


custom  resource definition을 생성하면 이제 flight ticket 객체를 생성하고 가져오거나 삭제할 수 있음.


CRD를 사용하여 Kubernetes에서 원하는 종류의 리소스를 생성하고 스키마를 지정하고 검증을 추가할 수 있음. 그러나 이러한 리소스를 생성하여 ETCD에 저장할 수 있을 뿐. 이것에  대한 controller가 없으므로 이러한 리소스에 대해 실제로 아무런 영향을 미치지 않음.


## Custom Controllers


ETCD에서 객체의 상태를 모니터링 하고 FlightTicket bookd API를 요청하여 FlightTicket을 예약, 편집 또는 취소 등의 작업을 수행. → 컨트롤러가 필요.


컨트롤러는 루프에서 실행되는 모든 프로세스 또는 코드로, Kubernetes 클러스터를 지속적으로 모니터링하고 특정 객체가  변경되는 이벤트를 청취함. 여기서는 FlightTicket. 


Python을 잘 안다고 가정. Kubernetes API 서버에 kubernetes API 객체를 조회하는 코드를 Python으로 작성할 수 있음. 그런 다음 변경 사항을 확인하고 API에 추가로 요청하여 시스템을 변경 가능. 그러나 파이썬에서 컨트롤러를 개발하는 것은 API 호출 비용이 많이 들 수 있음. 자체적으로 큐잉 및 캐싱 메커니즘을 만들어야 하기 때문에 어려울 수 있음.


Kubernetes Go 클라이언트와 함께 Go로 개발하면 Contorller를 쉽고 정확하게 구축하는 데 도움이 되는 캐싱 및 큐 메커니즘을 제공하는 공유 정보 제공자와 같은 다른 라이브러리를 지원 가능.


Custom Controller는 어떻게 만드는가?


kubernetes에 sample-controller라는 이름을 가진 Github repository가 있음. 먼저 클론하고 사용자 지정 코드로 controller.go를 수정. 그리고 빌드 및 실행.


controller.go 코드를 커스터마이징했다고 가정. 코드 내 어딘가에서 항공편 예약 API와 항공권 예약을 위해 요청 중. 코드 빌드 및 실행 중. 실행할 때 Controller가 Kubernetes API를 인증하는 데 사용할 수 있는 kubeconfig 파일을 지정. → 제어 프로세스가 로컬에서 시작되어 FlightTicket 객체가 생성되는 것을 지켜보고 필요한 요청을 할 수 있음.


Controller가 준비되면 배포 방법을 결정할 수 있음. 매번 그것을 빌드하고 실행하고 싶지 않음. docker image에 custom controller을 묶을 수 있음. 그리고 pod나 deployment로 kubernetes 클러스터 내부에 실행하도록 선택.


시험에 나온다면 custom resource를 구축하고 custom resource 정의 파일을 하용하는 데 질문이 있을 수 있음. 아니면 이미 존재하는 기존 컨트롤러와 함게 작동하도록 할 수도 있음. → 1차 시험에서 나옴.


## Operator Framework


CRD와 custom controller는 현재 별개의 개체. CRD와 CRD를 사용하는 리소스를 수동적으로 생성해야 함. 그리고 controller를 pod나 deployment 형태로 배포해야 함.


그러나 operator framework를 사용하여 단일 개체로 배포되도록 두 개체를 묶을 수 있음.


flight operator를 배포하여 CRD와 리소스를 내부적으로 생성하고 deployment로 custom controller를 배포.


이제 operator framework는 이 두 가지 요소를 단순히 배포하는 것 이상의 역할을 함.


가상 많이 사용하는 operator 중 etcd operator가 있음.


Kubernetes 내에서 ETCD Cluster를 배포하고 관리하는 데 사용됨. ETCD Cluster CRD와 ETCD 클러스터 리소스에 대해 모니터링하고 Kubernets  클러스터 내에 ETCD를 배포하는 custom controller가 있음.


그러나 CRD를 생성하기만 하면 ETCD 클러스터의 백업뿐만 아니라, 백업 복구 등 훨씬 많은 작업을 할 수 있음.


operator에는 이러한 추가 작업을 수행하는 추가 코드인 Backup과 Restore라는 Operator가 있음.


Kubernetes Operator는 특정 애플리케이션을 관리하기 위해 일반적으로 인간 운영자가 수행하는 작업을 수행. 예를 들어, 설치, 유지보수, 재해 시 백업 수행하고 복원하며, 애플리케이션에 발생할 수 있는 모든 문제를 해결하는 등의 방법을 사용.


모든 operator는 OperatorHub에서 이용 가능. install 버튼을 누르면 설치 방법을 알 수 있음. 3단계에 걸쳐 쉽게 설치 가능.

