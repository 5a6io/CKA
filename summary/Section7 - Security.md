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


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/feaa57d9-69a1-477b-90eb-075854919446/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ORX62WK%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T140942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC2LZfqQlW38RLVMo2HucMgcJ%2FVKjxOHSRXANwb7%2BODdgIhAPZG3DAlcap2jE8G5ChFDlXZDL%2FL3mDccvlgnUeKkJkiKv8DCHcQABoMNjM3NDIzMTgzODA1Igw0K9fGilXlN1a4Onwq3AMgzzbk%2BsaiS8JRSI3op%2FZJ7VWH7i9qxKIYBLhrs1GOXWr%2BNinw1TC%2FwRzBwOQNUffoj%2B%2F0RboJAi6%2FFgdk5RYtXTZKbnN6rVzdSIeH6vDtkuU6pqB%2F5KSPoLF5JftlpPKh4oD%2Bwv6d2UbCph96QWUqA3vX5XqIiDmBDM5fi%2Bi7b8vTMzXLxQ%2FsEjb4ZyK4xWRu7cfpYSXVm3O6%2B4QLnVq3vsFOO53ZlO5OOun%2FIm9JsQ5hRfPfyVN9rr19KfiLavwIlEvnr%2FxcG2fGX6GHPu%2B0aGNpvc7Z%2B11XuRfBn2XRW2%2Fz6NO%2FPKi9Siyhpfjm9MBkuLIy6UcD2j8tWRJ%2BlHvzmtpcqPGD0tuJ9nTu%2BgL9ks7NGyS6xlWZ4IisYrbsXQtcS93swF%2FQ1y8eSzSS%2BMd9fmKfPfP1zRnmNIP9m7cIZy8r0W4X2lh0fzrukjumalV0ykoUbRt%2F1PNeWsf2RbfEsdqBQnSCgxthXXd0%2B56IuvLCDWZU971qMom60ijDxFki1R137CIKSjf8lLStnduiMNAY98C%2FEqBaNRayOQXHodO1p6pRKFUcWV8Igg%2FsJSnMrDFtxsckzEhnGUuzVcjYVrHge%2FFU%2BB7cNqI%2Bmu4lJUlV05pkjkhxndkg9DCBnuu%2BBjqkAYy1n2BCgANarhzyFAq5pHxWRIHD36FjybzJL6y9f0yCGFvlncF%2BN8SVC7EceTj3hbb1qB3uocW8SSI1p%2B8qYwz6jdJZzo4yp9ByzF4rYlF45JWAGx8ax5utMosqeexyDmlLyfYtkyXCjRORUp7q5Z0iC0m2iRKbZAl0hr0hcr0%2BCwDp4dlmNNyQJM6OMQnT2xzV6jUmlhJBj4hy9MAStaKK1OqW&X-Amz-Signature=d1bb2520bad3f4c168d7a391e3923d0ef4aeeac3313339f69c2692d376f4662b&X-Amz-SignedHeaders=host&x-id=GetObject)


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


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/10644a35-55c2-4521-88c9-6839c45c9ad6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKM32HH6%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCrCnoDVIKq9T7F%2FH1qOmX9%2FynVsDZE7TJ7AJc3q5MEwgIhANlfiFYv6CsfpTkDM5j00T8M9QdM20%2BnA1GNw4qEtiI%2BKv8DCHcQABoMNjM3NDIzMTgzODA1Igzh31t5%2F0nrBtAHafoq3APvzgKOobrY2Pm%2FunNltZpYnsgBN5o8sg2oPmXDBTzC6Pz2vgCSSepNJi8iyjI9TgvOTpJpGrm57NfB1BRQ%2BdP6Zu8rNBOtIrt%2FpSJuspYPDS4E%2B4WodbwH6bsmxe6MHyz75AlgfW6sT7c5I71bQy0sxwWvygmpwmECIaNGDk1yH89xayn14NvWuXK07ajhUw84XHnZOM8Ya%2BEjwQz%2FGj8wA27oMWw8iE80JKmpAWdAb46WZf9aNB4IDxAyhCx7Ax1mig8ayB6aqoSF4UM46D1h%2FV04qeureU2gIWMwc4MpCfRlurbtGROw8YAdlkzR92m6bbAlIHdL1TLN96UX2UoopcdCi0JlAkaNB9wPZKSgxj3o3kdkDMRdKWiNKnaPphtO6ysMw8DHvyvBoElxu8pWAdvHSsR0CzpiFDENFNGnsjyn%2Fj4wf9UT8KO5weybg2ocv7Pj7LcpTYnfNfRsZoueDK0W4tRxPhWBlYhFVKFuD%2FPhlg8k9WM%2BpgqR5%2Bm1p1Jp8cc0B82d%2BQ6cO44dXcyX4197v2SZM3J80iKb7WMIqdgECbVscXvlAnMZ6Z1hoWNZjLHvfhyom1N0hjgsQc6J9vlPVwOrPIkjNFB9NqR%2FcZcJ3fmzhCbn1UFgkjC3nuu%2BBjqkAbXpuvuy4WvugRoo43AxHc31YOwL2kYOlgAG%2Fm2Yn4EXSJg6lOXAI17Ulrq7WuBLhXpqFmZYFTyPrYAw1vtPZKXmLCLESMzZiVoh6AqogNS%2B97nOiFPeyPfkPPfzQXuTRopFqfxuu0dPOWsAnYzmYiv3sfPAi%2B5eHX2%2BSCnmM31gM5kbGRM8ST180V7rYxo6qwFtcaJ62TFGcY7vUfbB7fRcwqyE&X-Amz-Signature=f41d0c13d348cda6d0421882c4aeb6fdd6b59c3643357632c5d314804b45f4fb&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8dc7f1cd-62b8-488f-876e-bcde2373bb27/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4GOQFNJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIH6hlcp6mlnAKD1rnzfbh%2BQgeBWE8LLUzamQHtNJKUYwAiA501%2Bv%2BhJOfjvs%2BzV%2FoBqFrCq%2BfyytxklAVy%2BAds0C5Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMa1uuiXZA7CrAbKaGKtwDrVAo7pP%2BffX7mIerZUqF%2BGq%2Bf6nI%2BaqV4AsZcL8plwzYFODPI8Z4FqVPZDYtewhTme9HLtgMJSBqhK8TAUv3B0g3U8HzTtzIOKQXQo3bxvJPbcCBDP3f4Lafux6qMoEif3Zjgr1KTpGWlM1T4W%2BwkfOtdKkyBh76NSto%2FDqM%2B65JSfyQjP4kQRuc1Z0YxIvJYJr%2Fs8RgeLb%2BH91jcbFynxcNfFWH8GGtV649CQ7cBEWFpBoyBZhzSQwd940t2QVrFYJTcU3ajZQZQaV6bxxC6n45kz9IDKoFo0oTLfMrO2dVNAWce9H3N4rCeYzszfb7qWvjVavqREjIcUj%2BfSAdDEx71YrSkK241x8TCKll523HCvB3Gkg7ZDn85ABbrJ6kn%2BQPacw%2BRFpMHiob5ZgzD4cb%2BNkhTyjBnjDfC0NrJLuxwPAIoG0zg4BExX1m%2BgDznuecd4o7mvPh6mFAaKmBKOk0uUGOy9BDQTHICSfHY%2FFpPaJ8jg4UvhdqMkf%2Bqy7bu3mB53JhhXK5PB28%2BADPtE9RAdQUj0jlEai08KkFSq6yJZk%2FkQ507iobfiSmOH2bpWvjwR5LeoMEYLdtMDLqTXmQMDVu%2B2V9WxE5Hd1xOMiG%2Ft0PfTdYjYQ2iMAw353rvgY6pgEdvJtS2B4w%2FLxUgbThoIoh7a4v80s1R07uUK9zNWUI3x5plG6Xp8kYCeWERACg6QucmhtW%2FOKA4Ajyp%2Bm7XpIONJoUVM44GVMUq7Q81Z6FqAoeabWSARm9SAmJ4N3SXxHZFWFc%2BFVW%2F2pJjuyzTFtN5e69f9F%2BbXHgkAv%2FmNYt%2Fs8IKxL9cO8oAiHSmh4lsVgygzS3ToosRzG5WWW%2FYRi1Vu7AYQVF&X-Amz-Signature=b400f61b48746bb3001883fe9505f37eb09400c75a9e9022ed3bbac9d2bc6d4f&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/cb6d8fc6-de37-49d4-ae22-27d35fd6cabf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN5C2J6K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFR53EyrarOLk7qNugd5cQq%2BiXzsqnP1JycSrlKV3FD%2FAiEA%2Fevglbv4FVsAirXLMDZ%2BCtr3Ma9sdglP5GwiTg3ojaYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKGh6crvar0LiCu4uCrcAx71ohewwt4qpyD4P3yRiQf68QLlMKTCSdrzIjd8fxytLlqe2LdKfIpoTi9692cFANSe4CkbtFA0lgwgapg7I7fZXkuUjM6TX6WmH2uJPe3nMTWzfROMUCnznpurbyFDoybuGfrgFgJXE%2BOO%2B7OksE%2Fo5mmPrmVvXTqqEaLUX3JnVc8E9cULIeqQesSv%2FAetXNjt9ipAsYvQZKdtD4nL6e5zUofNSZW1wg%2BbFJWmXt%2F5MOZeAOoD7wFSViwiulReS0ytEXG9nFVDW%2B3A%2B3zMHLXT9LsGSuCcGrk%2BbsJnToAMJr9ye3Jny4bikE%2F%2F6xuw4%2BEq9f3rNMk94cfCMKikpsSJtrVPyX6XxE6FK9RulUolKhOevj%2F9Yzw4zbSDA8rzewFLbBZRAwtQa5oDZooXjVZwmJ2ZT9fe1f8A1Trs56fMuWAu%2BWZgC7zuTPzYKOojH4%2B9FbcG6kPubpmN6qSnBiN1iHnMsZaggjwwFir13Pxegw%2F6WVwx6tNc2sARvZe2fBq2TteiF2y85XdMgOFcQcU3JbCTrltkPzCCu3lVvT9K8QsTg3TF7k0B5ZKYIF2Z9dLEMNhLZdoZ5ZGQXI%2FxI5W3HSUM7C8JqyMmL%2F0o8XUtff6%2BFxAWGO5wCN6AMPed674GOqUB2TENbkUOHxLnciIY%2BRqpyrzy2tnBtjxCU2Tk4CCILStKmvS%2FIo1LArlF8KqEUkyhYVbT6j4pX%2BwWh5vz2vi69dMrzcKk84EXDN0NXrvpfIWwv60V0xuUVC1zRKZiuxzh1uUk6fhTd4FuifFnYG%2F7wRfF3jDWyFYG0ZuzS9K2Po2QoruxSdeCkduvWnckMDLmH0rgIcl1sySRNcSdfdUurGDYNn7P&X-Amz-Signature=b55d4c219a86bbc52bde0c812fd12beafd0aa9115f522bbcdd5572dc52cb1886&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```bash
    # wc -l 은 줄 수를 출력하므로 -1한 것이 답.
    kubectl get roles --all-namespaces | wc -l
    ```

4. kube-system 네임스페이스에 kube-proxy role이 부여된 resource는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8a815837-d7ea-41b3-a083-8df4c0eecdff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFVHCFA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICW7hLIYBc8dyw%2Btr7bMBG64EKuWSGUzvzn3yKVmSx9sAiB2IL6gaaBMwbnn%2Fnm8pilORULvgA4IQ41QXXLkZv3mRCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMIMXL8m6f6piwLyZkKtwDDH3BiyiIsuNiTg3cXiTUMrf%2BERQHN%2FzaNAERJ1yxwSxC4GH14PO8xjpsO8leot0Mx6hQudKdO9%2B3mPnJVDqWVDU6t7jvZGdV2Hf5aaEbPRNDTuOM0x9PgdRIkawZQtBzPccvWUZqcFDKF5KXPHQpQ1d3HtAcE7Ze%2B3JsTMiD9xGkKwWjchBcBb1V98lAGDUHj%2Fa2dNylMpTLbSmQocZ7v%2BGrZEUFmLgakhNgQlqpx%2Fcgdr3Y6p0F3H8uT4r7YHTHTZOmTHZYJkCPpsYKpRPFdP6%2FuSkHgmHTY7reBIGQ%2FvlHNesqFPHpbvc2WuvMHc6z0w3iSl%2FXEEL7ifJKB40o1aW5%2FGKNARy3cdRpWa9DKjG6gORuax0PZv8JXXJ8Mf0iosFdYrkbxen%2FGCLSTIxfdve7eArARkoxjSgpNxxFJTvG326PJE2KanzxGp8rdWJIb4bOW%2FvAaf3DBrtpsMGrY41jV%2BDpQo13AdEIE%2B8ggYHwZPga3yKASu0RgyGQNdrrxEUavcQ3qx6YVSAmsDxwPDHMjJekuHSQFDd0eXeBmesbFDxrzBYZecG7%2B6PPkMtfcCPElcZyykgh5uboKhfHjgmr3up9RlWQnjzyZLJqQFMBHeiFEPDJki%2BoXPowlJ%2FrvgY6pgHrPx2M%2FmjtGH1ZuFESbJ%2BPfiWJkPh9rGZV93%2BRlQqhux26gJbOM84q9YWs%2FPtsHKA9qFXS0%2FhYWvMDqeH73z%2B4WA9c5nLPcjNwKKITmc7i8%2Bqy6lY57QrPsT2PeF84lJQx7GNFS7mYOWLhPeLhNLmYmZBQHp%2FUXDcxw1tGSK7I%2Bv7rgeQvL28wcIlrQANCF3zRkvCW9Y%2FUH5MoWyLoPvNJaUZE6pvI&X-Amz-Signature=17f8d74caa34d0103e5a8a9a80bfa0651bfb93c09a85887b364fc2864dbb6268&X-Amz-SignedHeaders=host&x-id=GetObject)

5. configmap에 어떤 action을 할 수 있는가?
6. 주어진 문장에서 옳은 것은?

    kube-proxy role can get details of all configmap object by the name kube-proxy only


    kube-proxy role은 kube-proxy 이름으로만 모든 configmap 객체의 세부 정보를 얻을 수 있음.

7. kube-proxy role이 어느 계정에 할당되는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/54e0a2d5-09b0-4613-9a26-fb1465ea0001/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4FDVNKA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDVwZEzIux5cpf50wGErEpaSHb2ZuBNTn7VQeyQvAk1oQIgRRYWS4zdut%2BqLscEYTLV7hThH0mUgqZwlnoqQG5HMOQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDl5fBKd9vlqhAr5ZyrcA0Z8bA%2BZl1YXtycuF2mLWeWihI%2BqPZs%2BQmBY6YQgq872l%2BWNcXsfcpAbCvtWW3ObBh6gTi9YoSdpZH3vb3k4L5Ukvp3QHE2DRTTZ3LzynUFOD9jr%2BFkAPlzOy2ewwBrceVqMJqr%2BwZyfBy7nY4S5P%2BSRQ5GwapBHT60yCEkapDSBSfMDnJJeX8bes7UodjlghERBBJ1EKzt%2FW%2F%2BJ1xTBnxhifazikKZ0dm0yCaAlbIQECocBijq3ddoC8di11f4bxVKH%2FB6GVtlNtiVuJfRJ%2BY9mAvGUfwI5YPC6QHhS9F64k36Z9V5L7oW5Uc7UFhYC5t1ygTbBhhdVUU9NOh9p4HyjWLkevflahEFoB5sfncO0a4LRE1MPw5C%2Bz6hwybMmhWChdKLsJE8h2uqIxHX0MlxyZLXg36dg2wRZSvipKJvMYIZ97LdZuuKOD0G7Vz4yTB12%2FDEft0tLn8SNSXv50rGLRnr%2BNs%2BmjrUN%2By%2FpN%2Bw15pFy7dGsv12mVzyoZ3vzF0stF0pAnBvCa7X%2FiTej%2BKt3CSQ1U2TZwJsM4L3YiahzZCTNUoKVn9Q94VvQKD%2Bc0dgCvJl9z58h0Zb2H0hVlTw7WMzIw8Zh%2Fa2cHG1%2BzDetqPGEzu6x7Vv9r9BUMMid674GOqUBX5kEH%2FRAbCqALbSyVueaMf6fKCf22HxFHQ99V10Aam4o4BfZ8OBEHdU%2FTiUWiTZGH3SvJ8G0Ea5yQ%2F%2BgeXC2Ni%2FJ2K4hgI74otf6Xh3oICFc%2FTEBFKKs%2B86Y96t6vhQv9bJwuA9Wrt3Q72t7GltaixHSTxJsu9gkqaKIKhAeA2ufsBeesVT9aBKhDLJaIKv4X5EfgJVLXIglQFPOEZWkOccUVYZ9&X-Amz-Signature=7dae4d3a64dacc3a6c02cce4e618ac9a6868eba5c487cc20b79d0f262ac0c94b&X-Amz-SignedHeaders=host&x-id=GetObject)

8. dev-user 사용자 생성. User의 세부 정보가 kubeconfig에 추가됨. user에 부여된 권한 관찰. default 네임스페이스에 list pods를 할 수 있는지 확인.

    ```bash
    kubectl auth can-i get pods --as dev-user
    ```


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/0b1c42ae-2023-4508-a739-bcaee8156d7d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LXDCIL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDTRpHxbAWO4b2p1TTNAFvLLgx%2FeH9A%2BXPjokd6cVDMAwIgEpGVAQ9IDIP0%2FI6NXU0%2FI288i49aZN%2BJEyyHxiUx18Qq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDL4EO1SZlCCObXbhYSrcA450Lua7NDCX9EVKjmkBdILBw4a4kUgJ17WwoT1gkCTs99kPzINkwMKWwEfJYljthcAVM6GBH4EJPI8%2B%2FBM7CSA%2BaYQJpc%2F%2F4WDtWxqM6671o3Z6t%2F%2BgHKhH2B88AqR1p0YLy4GK4nU5RGLBi2IHh4BTTaiVyMPLmVettiDk0f8ofu72QovitRB7GEeNOSqa75REZ0nu90Alze5xeALUJfOzlDTM03oTC8XtNwktpJv81F8vKtOUoORZvayrVXWQcRuvnOTqj4Cb5fd5ILVp3R7cbSZYnhN4i8HBioXF0UFmRNY0oiWTjbyWcSOA%2FPjnLAGxNkLlFN9eRlKwCBMuOcuZJFcDrryfFssKI9itqZwBfOsLpyrbZ9r445r1upv7ojG0L3Lzeg7D72O3LUwc1iat3Xox4E5Xcqw%2Fhwwb53CBJM7c6Ft0IfWm6GF%2BnZMG4kagGVpRzrs9BJG1I0E8r7wPfffyCqMTIZGFi%2FK4VU5C%2FkZD%2FEe3hBdhu4zvqSnH2%2B0lnxEg7oidn4dnxX3fCRrCPKSzobIoqdgrVwMlh4B55O0xVz3RyouQQ3v74hLLr8hfYa1eAFPve4T6heHJizCHMkmApIScW%2BzjkvhytgAV1W3ngguDW7QcyQ6XMN%2Bd674GOqUB4cw5mQ%2BDAKOXbGTxeUS1M03JUc5BGZo%2FOXYEsnCytTPBmIm0tAUBVHd9FbJiR95D3wuS8g9bB%2FJsQcRknqIcTEC5y6qaTb%2B6LeknnHoNk0N1zIpSNwGNztVQ1pMk89cO9iIVMLQjfF7JppZpG0SmUGTgNID1rLvzfYDlYEDOIPzkTg5pvKhiZdjt%2BD4tlf82ZU8Aj%2BH1%2BST68593CbzapoE%2BIlLR&X-Amz-Signature=41a4f3666c8e667b87410eb65a2c00f6595bf3b85f59502c494e155c9d801b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b19a7bed-8e3c-4bd2-9f67-86fba0324a8e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMVLFLEJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T140956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIC5DJj0RAkWskqVWjJ0IlQXPn1qjTkf65t8l3Qa87M%2F0AiEAqR0AeT9mUpP2RVQtt%2FcKRg6wpP%2FAdRN%2BH00Ie91i8pQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJIh5QrwMt9Rj4nLByrcAxQ8cEnfUhjkY4Xj8pPQXL%2BZfdZHjedBP6xpyhjzMZRZo%2BABUgXnYcTRrUChRB31CkyVc%2Fm1ENN8Q5DbuU1XbSqVLZ4truVSj%2FLZpt%2FWsbCiKNCveg9oyz%2BYNB1PT3uLdsFhs29OcWSwNChsAxBQDKLmTSi8OCzRJ7%2FQvkopANn6q9BJz3teGOxhr5M1MuRRXO4XjzER3G0uYVjKfm%2B%2FY5UW%2FqQdhQ2L23n0Gki5%2FU5X8%2F5z5eW1eh6cJ3c6ThM91GJJgefFU4F5vmIuXllG8AQawbQWYriwFq6FdFBpvsgoI%2FcKElhxEN4oxZMEzPZYM0cMgYyllcCNCuJyztVIjG8tCAeICwMxyXbTfCASxWrCQ9pam%2F8o5Jx709FFVKlpAKk7A5EGZ0ionmneQuPZPRYT2btwftcukXIHXhsOOJ4Moa5LkJ5VilNBF94AS5jyM2lfCm%2Bp%2FdT1FPXq6P42er%2F1S0bT6Cv4CKmpNh7pb9PpaFXmYs8NezHfinUlNUgO6JAz3fVOHYmXg7LJ9IqXdZK475pUTnBLtXAraaqmcslyJmFEbx%2BOVEXfC1l04crovV88ERJNfLazifqFTrhyNmiTqOgp0FeMMCSWbveTRNK4jkZ0G%2BdhiTjHimjrMNWd674GOqUBS7BhqptJzJPba3G7XsXSaPM5JBF3eoMQi8DoytQzs279k5EXmnjP4%2BWpLsJhFBco%2B0bVJMkl7tB9uYQ8Yb%2BCqycKal24rIQXRqoaqxFDoPTgohnzGcIzVlBEbJVK3FgC1pswJel7WJQYKFArxJi9JRN119k9FhnCWDdpAKAigrMQPeYNKQY7g37HeSobJrLczmk68YvTF1fvQ42307wI9GNKh2v1&X-Amz-Signature=ff81da0c654c1e7580f96b03fb55a4447521a0c22f91d416dc16d629f943c7ac&X-Amz-SignedHeaders=host&x-id=GetObject)

3. dashboard application 배포. deployment 관찰. deployment가 사용하는 이미지는?
4. dashboard 상태는? 성공적으로 로드된 pod 세부 정보를 갖고 있는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/21e35c7e-f93c-495a-8768-11ef51201564/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PEHYEN7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIF62e2%2FiAwzxxsLpkmfgqO4xnYdTJifmwhuDjbxeNstsAiAUDAdACj6fLdB3Dx1fUOGHPmFXSTWIe6AL4PXHK82Nbyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMYD5STibWM26CoDb1KtwDuVgi71W65VZfvNvnRZyI6lmtbwK1OJEq4SWxCJtnhi4GGljVBugXgUZp6t%2FVIfdr4ovx8aO8a3AZ0xbW7omAUC65lPRzvpl1AG5vedoCnCWQfUhxu49OOAXLj1UhDfSnhAIwGRtILH7%2FyL9qGS5t40EPMn6Ni3VCYHjuRgoDVys98%2BACsmgS8QaKXO0WbfO1mGVAtWKACsGB15E4G%2BjJyH8UzjVLT4nfbIFoxyigNMXopZMkf0qKqHoser%2BEJBBZwAdn%2FJGct9XEBwvQUeJvwI0MHzKR%2BIwYAe5FPLYa7SD1XUUzoEg%2B%2FWgQE0Z1rWV7GkK3CPLFLuEbGhL9869YbXM8Op0IioZDY3jXdQxmBWlpVfMQKZuH29bUzUx2BYZAU6h7%2BPvpVbHoKG%2FI5iQ9qUIVnOoaUF0nZe7JdSj3JCbm1qwUo6iGQUvOaO0NrysKQaBjfejT%2BCUWNnlZ5xPk3cWZdZSzLcr56dinOSSCrdCeKsc36H6R%2F3%2B%2FU8wIPKSim5AZwlv0iMTxhPJUF%2F01%2BgSy%2BuxzwI0JiM5kk9GEFJd4hOFa5B442ADO8r1HNSK%2F3nSmsmycB1HcvS1fQ0EQ8MyhaCR2pkUFUJ7Kfl7fNtfXzedLL8E0uRHbDD0wyZ3rvgY6pgFuDJQn8yfKR%2BOjID%2FiJkIfiUIBru8yHfjQUSz1YgD67hDzXuRd%2FPM0VyoUvF%2F%2B3%2B6ynykj2sFuIos31XfGvB%2BOYUF3SjQ8W46Tk1AxdBPJixeEedUqBI%2FluUqQ%2FdrZ4LlqGmzyqo8X4yMPcCHDI7MzFGO48LPdj8F7lRTGq7feoraU393oIuaJIcDy8VU82U5Bga7Novpq%2BAM%2B6aY9TojzRc6omCKE&X-Amz-Signature=c08b85356b30b30938ebc48629fce52cc286a9cce10c570c8c0c3cbb2887d650&X-Amz-SignedHeaders=host&x-id=GetObject)

5. dashboard application은 어떤 유형의 계정을 사용하여 Kubernetes API를 쿼리하는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/7d4a5407-3552-4911-b8e4-141dbefd74f0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5MAHT6T%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGeKN%2BH%2Bs64jNxJ7800x4MKWMUYnYxEiOAlC%2BM9j2Ds2AiA%2Bse7QPAkNcR0BLxVBNNcQPEwtCNUw28FOuBlV%2FOu7zCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKR4diHWc1LpfQbAKKtwD2%2FvFT87c900o%2Fzt6R8y%2B9bzo8BR%2Be93wja1Is3GAkb%2FdmCMW27nHDyESKCf%2B0vH1jRZ9CM7uTSb1H4d4z2W6yjan5VrQAxSlgT3u9RmS%2FMMzsz0NoKup0yMQ%2FmxlPUoIUH38RR9g1wbFMS4KKxCWmcfZjT7KmtnThb5H3uv0KOmmyrtgPd0%2FnMsbku8xe0TX6ap38yVWroGuE6%2Fk0F5ifdxGApF5NagjOzPSkr3YxTll9JIPpzLgIFvuDg7m7IvyX%2B4jOe6svX3zNsMtoB4Pvin1CI4aGnhDVjQHfX2oPA838q5ajIGxhX3Z%2BBX9ncuZoPuhlCSG5F7ymYWE6TeaAzWytFHHEn5E0heOOS7B0nIxJkvaC6Zvb5lWa9%2FQ5rkDaWxF4SpG2yU54VUfN4cjpnyJO2YS%2F8h1KKfAP4iA%2BOBaURmDY%2Bpwv5jgjcxEhPHvp4MlJ9LA09Why3ZBTXJU3MCBtG74JGY769UM1DI2xM62PW4TBKTrNxBOL9VCyFHDjV2aXU83%2Fo%2Fmvi7WfRyB83fDx5JhGlWGrs4eJdi9DV%2BjvQfWIJt9ALJ0Sk8Ft1CO9CvnXt3z%2BMx65vIlxo80bNm4x%2BK0ZM8zoTcHis2HuWCP3TdGa3cGwyjDLv8wuZ%2FrvgY6pgEFfJihzdUV9NMFCk17XZF7pa2c7ErI6QAJWfrm%2FlP%2B3zRnDJs51tiwfTCt7PqZgAooAeZty8VfL%2B13vJ%2B35MhZdnIKDqzGzR2uPtTWvZNF42qW5SozZ3QNRz3ou%2BySkack4dyDQD0BEZKRxBhZdiNeKAbtwcTqjOTqha8SP%2FXisoOViVmq7qwuhSl9ofn58i%2FM7nOYRRT8Q58V8YqsLW4OljVXsSlv&X-Amz-Signature=218b1863bfc5d2dd8c33abf013b71094e3f4243908fadeee6a4d48d3bd5c44a0&X-Amz-SignedHeaders=host&x-id=GetObject)

6. Kubernetes API를 쿼리하는데 Dashboard application이 사용하는 account는?
7. Dashboard application pod를 관찰하고 그것 위에 마운트된 service account 확인하기
8. pod 내에서 사용 가능한 service account 인증서는 어디에 위치했는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/90031244-a1cf-4874-8238-fe8c3798d305/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VR74RYJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCCZfKSbf4qrL98PcaTT7l10ZAUplTExOki1bnxO41EgwIhAOkXFkVODrcoFQ7tCbKBD5tzr8vfJKlUrqTtkDE2ULgqKv8DCHcQABoMNjM3NDIzMTgzODA1IgzRltv%2BcZvOElbtKo4q3AODkdzRX%2FgZKduGr61SmELhjJDUJQjSafetSVavs31%2FY2lhtbvu9Qa8zaUzEeUPWLRXENB1bw%2BNZEw4QtER6U0e0YlyIBsnqL6Q78SrHirGZ4kNJWQzGRwuDVXfqWkNB8wYrHjSGieXCiJBHQFdCBqWREUa%2FKX1eFO36mY4y3JAKl9la%2F0G%2Bdyo5ZMqNAsCO6x%2FJugu5%2BZAnoKahB1JdvMUwNzlUUY0vCiTjJ7XQmdxFSn8RLrvj2PXUyeHJFSn2qLhjYRWrye%2BJpD58iK3ze5IJ14TtvpR7G17azFQlultRSUFkstAGnRhAkOuWqJxnDoCiEXcvioWmGkucDmt6rBlA4NkNI9MMDQ1V90O9Wil9v9QFt7budVQY8%2FzY93Nuo55KbA5VnEdIlCKI5EKdrPKlSlygAr180oe6k2CUE9SmQJ5kLaKGxLH5lFblJt9IGYjlvcp%2BTOdOP6nyhuSKVuOyExVoUIspsP6p1cRLIWw0FW0gUW64cJN6F4tOS51sRuZ8X5izj2qBqjkCLJj6QzwzDDYNrOUT5U7NBSmS3lytk002e7lcswQstTLANVVMTUPGgFPo8dQSlm6Z5Wa78ZCjkPM%2FYjKMrGMIgDIlPtp8c3bYg7Zz9SQ%2FwqZ7TCDnuu%2BBjqkAW0uU4M5a3VVqqGrDmZWtMd7LqFlc7Ul6VwxGk%2Bm7Gzz60YapDisR%2FbaD4Wt%2BAOZOtgrP52wgJCkx8wA6tnoqBBostjqj%2BNlaCiUT8QQzxpOMJjb4gJl7z8saZN3LKErnSORfFjgwnzWVXUXdzxboMm1IR0XpLu6YfVTFKUEldaZau9clljbkqgwcxlfdqWWph54evfNMni5Q41f0PL7i7Yasbes&X-Amz-Signature=35218a2517a7c360ee34e7ef0017e5015b3da62c7766e8de5f0d4cba504c1197&X-Amz-SignedHeaders=host&x-id=GetObject)

9. 애플리케이션은 Kubernetes에 인증하기  위한 생성된 올바른 권한을 가진 service account 필요함. default service account는 제한된 접근을 가짐. `dashboard-sa` 라는 이름을 가진 service account 생성.

    ```bash
    kubectl create serviceaccount dashboard-sa
    ```

10. dashboard application의 UI에서 access token 넣기. 새롭게 생성된 service account에 대한 authorization token 생성하고 생성된 token을 복사해서 UI의 token 필드에 token 붙여넣기

    ```bash
    kubectl create token dashboard-sa
    ```


    dashboard-sa service account에 대한 token이  생성됨.


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/6b5ccc86-02be-4794-98b8-6ddf6a01cd07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7EXWAOT%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDdCA05IrmK2QQrLaUnepf%2Bw5sKAisu62zuQNg7VN6ThAIhAKrEMcSBsWB5qe%2FidjF02OVS5ATx8Aeo9CEfgXbEtEDEKv8DCHcQABoMNjM3NDIzMTgzODA1Igzsm6kSQOfo9CoVlvYq3AMuBaZjz%2FCtw0H3fW8j3WqAKbQRktKjLnMmLHySpJCKwUoTNCCWtXO362JQPH2KKPtfFlKeDbRoxEkjTbbnF0nk%2B3sE%2Bk4M7feJdYJywl1k%2FBze71gsiNNJshZhgHODUQYgXug0xK4D1hfZ4YLJ7tQeS%2BP1E1p51l%2B0X4VOrLbhwCQtaS9MeoAj6aAIIjWjrnhCiWRgg4KRsgajhkZi6fr65wS5HQg9dIE0YPFAe%2BinVLnB40U4qnFYF3gFwoYur2XvFzlOXr9hPUEPbINmAl0H6Rrhu0o4u7YxYtHCtHZmkFqQEeJUx8yvWuyp0YTeycm0yzOHBtAf3dnYduyOFm8A8mzakV%2Fx7nfDpmomHUsJhRyep1j%2B6g9Dy2Tku3NDVbI13nUC5Ewdo%2BUn60yjjphNSM5iqQTsVyrVHPlqo1EL%2BBA%2Fa1QlhGaNmybf9w5olnBvLpb9gwC0ss4sR2ZMV2OpvdWOU3HtrCftbKD%2FxSJhhk7t3JynRcRXXPmc4qMbAPzCLNXDawzh1YeGHPxsjgY5NwTdGlp3H7BXVBJZWEdcV%2BNwV1L9zYdGE5IQRl8VG8Dxou7EFLR2QWoAhAr7edGxd3HaWMbaAT0GnKsKb%2FXTbtw93HkdnTMwXQrcIjDpneu%2BBjqkARBLUd77Fiz9iH3vN%2FYKn%2Fu1zYHZBv3CVSrFnl5jsj1dM9jjA7HZ4%2Ba2yDKDaJvL5hH7igo8AN8aCjPEcuSX1qIkjumGbFgJGDCLMb5hI76UKD1SD3D05Pc%2Bx9%2FPMUi9mBfTQUGMy02PRTT%2F%2B2shZOG8bGrx6K2ZOpLymWOobVGJpN2ly8358iBoMX%2FjK1lxk1Cv4jfNZVXlutIq%2BYVm4aJUv8U7&X-Amz-Signature=b320456b1099318c0ead44134c769d3fcf08172b72fbc7380cd235f90a3afb89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/03b8d9a1-823a-4f5a-aab8-e9a63822e005/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WEFUCA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T141001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIArUNVeiMYZitajUBEr32gCQebeOdcO2w77AM25k%2FHD6AiEAkV5APKdPrhivTiyqb7S6vmmFxMXpTp%2BYIiuiggQKIPUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHGhvOUyEuOhOszKYyrcA4LnEkEiviMHYqTHT8MizB2I38UOxIGlC3Oajy5tjswGBu%2F3lY65mCICMP6%2FBn%2BH4pZF0DYXa9zkQFyfl0ZXdMulQ0z6dZPUooIXbswF40ZWydM20GEj9E6GX69NCjXmiIJqoFpJ%2F3vY%2FWe%2F8Z2budrWGbcHIX0A3dauZznA6ByxA2JPI%2BbpCqdWQVAcMQ6uYg0SuV%2F%2BGa6EiuiEPImNiBhN3LV1zL7uTKtndb9xARED6tCBXu3uNxy8xM3Ozqi2LjKjaXO8I26NJszMXpMRXbrLnulLwwBWhYcyDbBsq2Eg8K27Hf2NOU%2Bf0l5H1HvZ%2F12c7TDy8CeiS11ofe8r6PfCgGzv4L39DLp2sKQhUJc6po4VIk9%2FyQYijksOODLWMqN3jmfLCgjhYDlfsXAEd%2BgrB7SaQn96sD2XWiMyoE40WCMi6LrwEYIJZHm4Lk%2BRcHLQ%2BAPQdOxxaJP9cXk5KAfLEOPzmzyv9WN4Ueiwh7F0LCqDAtw8TsCJGkbQU9plsUzDJIA1dYrcxGqYHnvkvyHH91%2BEy34bFigP33GRPIBsSxlPuNVoC4QRAwd4hoccYeYvlgB98j28AbzR0JW%2BKkUYKw5D1SRyyIuIydRC66xlzru03eYcb%2FR8ktXSMMqd674GOqUBWXphMZMYUDlW2qFP9HtrlXwKST%2BPiTeYVBgExwLjfXYwgFrggl%2Bsfeqqei8xYglk5mmvlyS1PaQACSBF6y8UtX7msDFZjFkZVj2nmw98UMDN5zmKDKghVWI4XD77uetdlTIcfSyFLELoPQb2BRBArvXqrYql%2Fv1TpR5Yw%2FhNRS3kqtthX3eGuwAlYjduyekZV%2BPDX3UqFKcoCHVjIAIMRioeFb%2BG&X-Amz-Signature=c347bf0c4c1baacadbb35588c186fe56a0c6514b781679acfe16fee53e153229&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/d07eb7fa-de69-4daf-9adc-044d0532d5c0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5JRUMZK%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T141004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCaZg9eMXLGDOBGe86HuPEsA4sIxRI9yMZ%2Fo6wnjUd2OQIhALR5IMLBUP1tmAoQcLjTuiwotJdGRXXf840XXqAI74CqKv8DCHcQABoMNjM3NDIzMTgzODA1IgxrAzKu0HrkF3%2FRuL0q3AM0g7cn3s9RYpa2SrOJ1oUnN%2BdAnUxPm958%2F5Mty1xjA5CQwXF%2FrpTy5sU6HdViL9gZD3k2hhybufEvgRcKYJ9P443mZ0DPBTmAB5vV0IpSMPKs6CEbkL6mwwYV40kMhk2P4xOdm%2B0PXxs4plKDDk1E8i%2Bg4VeRJDb%2Fxr%2FB4Ld7BM62JZbMuERnhjaOOQBWJo9aYLCO3eHXejhQhC%2FvAYzlqF3FZdIoDOA590gxmZl%2FCK1YwL1Ba%2F8vW7KHy9FeFJFahC6WSEtpcyJO4LEu14T4ScsGHBBM3lIVWB26MqUZxj8R5uBhYMbyj0aF9NDVZ6FUuHeXWy08%2B1lgEz93dvJx3bETkLL5pX9W8pc4Q5NaNcA4CxiLskIl8h2DofKOIyx4x%2B%2FFehpnJZ4juwgdBzjNlWLMB1AHDa7M2oQ9xToZBlKSa%2Bpe9daF875spHpl1FJBbyogyrthihRlEKxc1R7sH8q0ugrbBYyAgYekx%2F4CbRNUa2DuVgLlhK6sD3kSJiFz8Ho%2B%2FVCpMThjZQ4IBd42Sqg%2FJOuHRkmRclXh3XH%2F5FiIJtMRHXV33dM%2F4YiJaOE7kfDvS%2BYxsNLLMJ%2F%2BvpNB8OZVXfdB6YrYm9TlE%2FhK%2Fgbta923UfbONkWgyjDJneu%2BBjqkAQ6d6C67buhaqpDjHL4w8kZPRJZPJ%2ByQDjGbNs9cme8IRt80htLQzft3Bnsx%2B2mzac578OuYdzIweGhe%2B1ETDAjjjgvc%2BI29L2yMaqUosHLDUq5TfWBvu1ayBuyB2foQ2e6oC7EXbKGZ1p4b%2FavFpNvqQuckfe1m1uPzFVzG%2FwYJAJ7KrtRtOO5OgUcpvjrS7zd17eVWjDWH176FWLt6hjawnCqR&X-Amz-Signature=5f95035ce6d440fe65df2afdec0fa2eaed7cdf05e6c71f267ba2fcdcf8a0b55e&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/341c6d2c-44cf-49c2-9405-38fc9796d812/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQ7LYHD%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T141008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEBSBwRuOqUktmUBVdJJqFuucWjvyXpQ%2B84TFuqLHAlvAiAzg76AuGScqwsJLICwlyiMF0YAbal1NqhzQWYQIq9Qhir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMwkWFmEZvXmTiLdx%2FKtwD9jwsdrcGJqw6KwOFGFZNHDr9CXtYweJKKH%2FpGWtpSeuNS05NXt3Eb1%2Fj37XwZAM2TSu%2B2W670vD1v7Fnqzuo0xdhT502K3rMFP77NbWeJOozl6wG2yUS0XOwaK8plQTk%2F1%2BkeqAAIIS9RMCSutfy9J5kmJ4KSm2gaHhuZIUMGpbENSoFPAhD9sRa%2FWFc%2F897L808Uga9CfJO8lqFC58yEMeiT75Ri6Pr6vVkPzr2XHIc3JVqhBREV%2FZAfgYAiLmg830381wJbQgMAcCKP7hYlULo6VYol1NZ8VAhWQD1NL9GU%2F5epBPDET%2Fgrkq8RjasRH0nyCZeDzuzxBzHpGUxbSr9Z7FK8lT4tng0q9jg6hK2z2ca6%2BONMTBu4l%2F7zc9t7u7UZQMq%2FLcz1UD7cgJ18kW8IoRIZnCTDe38uQdvfVH68IYk5Cf93qeLKk3Sd3awB92xvAn%2Fi85thAvQLvST0%2Fo0WPCNYMHhE8gmbYkgNLR5GfL0P%2FgVt%2Fnv5W18dn9c%2BKz84G6sD05aswEt%2BZ5cW7dYyGRD4dBQaEMPugwsNu%2Bko2FfjrSNiUcd%2BZLFd0BZ4wEFtKiOGcMsvqjzh%2BjBFsAhRUf4QaD6l%2BE%2BG9SsecmrC%2F0SI%2B4MtkySoKcw%2FZ3rvgY6pgF8GGwcbd1lwB%2BARdErFubTbLCUkQvqRL1g%2FTg06JjJD%2FQHlfnaaWOyFQsyETsNLvJ6qPVGlGh1rSMGIJerM6ZZp%2F%2FclKWAVW7Xp6yptzbI9bU1NCVGh28zWaCSOea0CfaB91Re9ueSIiUe%2Bkt8lW%2BrvXtJqNWmUALNU8JNjCEDgwEBoSd%2BSRjfGhDttQUxesTdA8Z7AmbfwYkjLU4E5oLlWkl1oe6Y&X-Amz-Signature=76ba41cc9b79f94e43d42bca5b249360aeecb0b900db14dc81679e0df9c55385&X-Amz-SignedHeaders=host&x-id=GetObject)

2. NetworkPolicy의 이름은?
3. NetworkPolicy가 적용된 Pod는?
4. NetworkPolicy는 어떤 유형의 트래픽을 다루도록 구성되었는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/10463981-272a-47c5-bdc9-6449c95a3fed/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMKKYOZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T141008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCKHLc0nftjbGwPIpXXxJfYqGTB05ieldPSuxbnuPE4rgIgaW5s7J2bgTE4LUWK5AMvwEqoK1d%2B5IpYZZBdYj4Up3oq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJEn6mNWBQuDocTulSrcA1eCzFYtit5o8CdBtTWih5ryOwpItTrjKXJSkxtFPo2cbEis6f5zw5oB1WLCvu%2FMJkMAKOVzcBHktjTD%2FlYvMGuklP5a7uq07I%2BmlnwQ%2BNvTI621s1yEZg83aawBHyrWfHvY4Azp9Ej9QUvMzsiV%2BVx7NY2XXK9kKyutzPPPUNzLZQkl7yV0L8miiEkoYPFn0LYcMBbN6nXPO2czaHLyz2A8Vq%2FWRvZTn6FtxeWNkOn8Yjqa018xfI%2BgyD%2FbQWiD0Oar5c32Sxv4aL8KSbD5QNLklt7C8MbDO1K08ZrFYGEPZjVai42aHRyQZ997oGclCMVubCBuaPrzxGzGXTOPqGU4Gro3fCDGIwuL8Mrzw8JukT5kQNp%2BPmhqtIq9n%2F58EdxSVC0kPgl%2FY52NQTMOSMJV3VgKqEMOJCcmrQxlEAEkurLVc4R0BKVQktxFQ26SfBoVfHEzqyy2flaIFaNSONxnRFNEj%2FJqNfWhdOojTvanUIUzmJLMZz4HWLwnOc%2BE9HiiokCy19cYbIzPxknXIc2DI0Nbtefw6gIIli%2FPFWLTtGwPWaHOGdGJtOe6J2XolZ8FU%2FrIIBIlg5YRVvLGOfFgHtizoMm4YchMNU9HHGfyk9WIz3aTAqC%2FnF7OMPad674GOqUB5kyI3%2FKyu9HhsXs%2FuctUkCtyspej7xP5XBZtH6GQ8waUXGbAp7Hh%2BOKF7yTzPE%2Bp4qTnu9wWcy5DlIOD4ZmcPXBazUijxpKUPO2MjDhRASxO%2FA7fZCe9Rq4smuC12aM034rAq%2BTAHY3TcTbeePVR8H16YwmC%2F0EtYAckSZ6S1Vy9C9PoHTJgwVuRQqrexDpty8SJIXTPT85y6b0I1hqwOPl5PRz8&X-Amz-Signature=122d43e0c2fd4c2544c48a2acbdb6bd66b4330aca75080ad96f95d56ac6416b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

