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


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/feaa57d9-69a1-477b-90eb-075854919446/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJYS635Z%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDsVz7CHICL8kqh4Gwc9TF8LEzyMwTadePZV77YCdFdVwIfKE178BC9rgueFCQkcU8PxOGvNR23e2P1kvM13m%2BMVyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMtuVnm7GJtwRSHGVhKtwDwyPZPsAZ2HyvaJY8Q5DsFKT%2BCy5wdNxnrs0d3NA6uJT%2FA97eZLhm8jvZKS4HrFM16xR%2BASEJjxPHq8x7Y9FjZWJ2Bwca1iUIDq89IltCpBcjbLlAOvSh%2BydsV1qMvipVmxvzPiglGGt422pvEaEPeKmb2Yy7Ppzl1YO7bMoQ3d3ciLHsAVOLbhPrNSW7STeSWdQ8VyC09vacXUc3TM0K3N945Pp8ibVTx4bktI5hQtIATUrnfjJHQ06O07XwYUwB1khXXlP1yqHi5jMjfR7wzOG%2B07uJWwMUkKQ8fBspDUrz%2FG0DpPathyBq7GawfO%2FHPlLfbhx2Rn8U8Rkg2rw9EF8rO6CDeu7u0ikxCU0cFD1NYTqYayrnNfotVrDZSJgOb%2FK7Er4oIH6O5%2FwGmiWHAEV%2FPjO5PfvB3PnZK52Vmt48YApqe%2BJfztS9yYPN5EijT16hQEfDHoE2bUrhI2ITkiihudsgKOJpUDi87o6iBPaael8u3vcJrY1KJk3HmtKmYOdixofWnUy4WSc2%2FoI5qNExWaM55VHTYYgsQp5JCB17bjW9b0CktMk4ewqcZsDL0VhCnNh1eX%2BAlDG1QbZPtw0tBHQ8f8WKwD1yEGrEZrlD%2FkzY%2FR9u1Llg0S4w1%2B%2FVvgY6pgHlj0oQCzubnVxOwhpACa%2FCWGMrm0dmNNRRBoLlmXW3u7SOOilfPpaysR1h6r3pRijmEAbmwJmAxbA324zGd8%2BSIoYDEgkiAyg%2Fh09rUBvL%2BTBlfNjTdkma3uxUOptPdqleJcB7gQnLTimUFzhWxNrDe%2Fz10pI2B7w%2F8998RDhKXAvOqimzqm3bvbgk8%2B6Dkm1VKDOC3yvtWoKS2MXPfjCOH84xY3hX&X-Amz-Signature=cc8c1a7aaad7baa3a9a1e6c3fd8efd6cfc8162150c2bf6a457de2cca948a4958&X-Amz-SignedHeaders=host&x-id=GetObject)


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


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/10644a35-55c2-4521-88c9-6839c45c9ad6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSM4QVRK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBe9vdFVrOYuGMcvi4YprWbepZ52aXfu05LvakjacQqwIgRHG1wT0JmAhrXR9WiPsUHgtYXVRuO99Tz5eqGeib2Gwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKaIz62s7q8SyUzEeircAxJxsjE%2BJqMVwE3njma3JYagzaSlBfeGfou3adZPooJgD1Ty1jVH4xLWp3%2BFLbC58gxRrEY8xj951DGsb4rV9SVZNsomogd%2FRi5Sn2lELDelM7y0qNVnpJfHQzqYgUhdM0pdjICDk%2Fh9SUZtsjw1JagZ5Szf7lWOs%2Fe9n9ZkLSu9yFt7i0IpRlc6Zlqv3HE%2BSGbdostVMDesePQdpic3ZtCETlPiKj3kbIqvTQoCp7nD9KKOI4%2B401up7MuZJLuRRTMnY97rLoTJWbn8eBiH%2BUcUpN%2BKkNc2HcOm%2BoZwO1aRZt%2FVqJFXMlweE3vD1Gr%2FLPLNJ4NMlyuwHnGandmT9k2pZsfpXi1eCrasK4j7LozFT2kpPcrcHjIT3MdsztuUE0wThpK2fzAOz%2FbnuOjnbCMfPlWjjS9rdiJCz3fy23PeSCDaGpp%2F%2BSLMSHYIHIyY0TR2kq6h5TqfS3siwcY5wS2mvNKwGbgoNfwoyVc%2F6t%2FpcFko1CPqq3sWAK7UtGC1F6Apv%2B7AST39V4HSLVPTPrK%2F92970LkeLG7oIgcPxx1eNEA7C4FPspAsqpIRXhECW8Uk1MNNshEwlB4X8kgUVqWbnV2%2BPvCk1cDx8aldNBHWe6phIf8RZ4DG5v0jMPju1b4GOqUBjvOxAlGUyCVHMsNOyJQaG%2FYHBCYh76SYyadTKWfscaubWlmqrZO6rQ02e%2FbsgFfOYkyT9UcHNwqsTvbhXFOxfvvMi%2BnzJYLF6D8Wv5k%2Ff%2Bs2R%2BZxxXvMCsFIXICLy90BEALz2VPGtyWIIQDA0gJN4CWLCT3rtdwQnsV6a4BeTix4TuPSTsXZhTl1nt58uW2r2pGonQLPrEQot50dWSuHF%2BDZXpXM&X-Amz-Signature=277b274628588cb33ed2c5492fac19724724d806840627415f61268109eccef2&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8dc7f1cd-62b8-488f-876e-bcde2373bb27/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYW6VTIH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWlArZ9bcQJIeR8wCmVIUgGmoxjZYhqkXz2VsMca6vfAiEAuVw%2Bo%2BOGoYkCk1yaC8Mr1xYGGk2HrnuudP%2FhDO3cKtMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFOvTyba8aqjPsg8YircA6YHFoSMA5B98%2FqrCIB315xgj1UlRc8sX0%2FCawGTRC8%2FIRPAsgnabCDMxFPmjF1OzLYXGGU%2FhwgX4tmPsj%2B%2B9aRx9SecKLI1IJQujOex3U%2B77sUjnV%2BR%2FIP6mFigijZhJazL3hoiT5EtxscPg0BeOMVFqkotOnU43Y79JP%2B9TD8DMXaRtCTSHUEt4ln6efNL99jnwB3QqVeNxUMgrpcE3Q4ctKiJZ8E6CztAzZe9u0qGpgbhJSjLv770Oq0JrZGXFnlFvR22CJMt%2BuQPOeeTpZyeyv0CUJyjs0JsMr28DdlLRtGXDRYmy%2FnvXTaRoDqjraB0ZKkoxIyGGzOtv3Rdw3EMOtqCQcZZKkK8pyemIzoR2K4rfWYCznDC8QKO5cBmI7kufUbBZvP3lhf45aRzfl60tDza%2B5RUE8S1ADy2wihe1FN%2B36CtPmyBrDZsELY1MUaB%2FoHHLTqgdshAGKS4g2B59figkD%2F%2F31e3JuRIV%2FjZOHTLo8n3vXUi6hmNNmncGOWr9WJCsqvVSuO9oLLp%2BQRVzhWUn683Y30LNed6plGhZizfgGfAfRgydMRcrfkym2S6QutLuA7ndhOq%2FiXaK%2B7zzXq6YXzBQJeGcV%2FKWOrIdwCH5ZjXFBxRaNn8MJDv1b4GOqUBfbGoyBsAYgWsrcR0IoHmFzf0gAlgN2A1JqRvx9Qxwqj%2B3ZqOOkAWhPTJswipHYtDc05JE40QtKGmoklSCJzkrstrfPEiKJNZWzv18rHuqnNXc9fe75AnxodS5VK%2FBA%2FywE%2BSmBvnxEsBLjmzVG%2FJGPHHXQ%2FGJmuS5FqUhZJ3tHcgLMn%2BK7giscedtajFUpVg4oGWwfRvP3ZwiJHgvP0hjChznzd4&X-Amz-Signature=8296dae91ef609bf3c5d7dbc269fe46793280629df4f9fd75925777c81aed6c1&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/cb6d8fc6-de37-49d4-ae22-27d35fd6cabf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AUIGZB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsXwCF9GD5%2FMFWwwtJlrr5PJlDJriViFVrZQYqxYEzNgIgeYAxlHSan%2FFYVNK5XOVwCbCUqDw1DCVr%2Bzqj5MR8BtIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDL%2Bj74yqWlSP4U%2B%2F4CrcAxh6XpsDbS%2FAXIRVBdzpZH7ie9vD39uol8tW%2BxQ88kGNA82WCvZgtyAXFBHYAorM5%2Bxxc307EfKuCvpOza5b1DJPDEGuMMH1rDFQFT%2Fro8GaD76bIBf8Bvc5sn6yCHo%2BjqGzYDqJiHEUsVyXiy2nOYRydqjuze8fKytkiru6yJ3BLeXoJycFZb%2BtanBJc4XvTnAgUZInv%2BiCP%2BjRvkO4XVXx8ohofbXu4iN1lb9orOxWZSaK4V0wkv%2FWO22m7ej63p0lhzSPQR5gvJaWmYTwz54SrvvvtEoixC7ZPvnLX5w%2B3Z0VFnR6EpzdMM8zXAQ30JYiRdSXUIH7tE0o32taiLQ8i6gcpGt%2FbzUgogQ9wI2ntJdOjhXNsc2ShMqDdM%2FfhcCyxS5B%2FCSZOpg%2BMtxxTm54fzjFtqWMuyuS7rnuRJv01W61qzgRqywcVPrnRzdJGGXsbOp7siTIa%2BP%2FOgXb6otoM%2BF2C5Pf2Kk89nhBqgThO%2FhAI3UE1TdmTZFxYT3w4AzhGIHnvBqXFF8VJZmx%2FuKtcTkwoch895Wf87HEUusemdVxuUpTc0KWjvt%2F7Zj2sreIGkBvXDGOqVY9CTAsq0eIN%2Fkbue5%2BORwOLWUtAS%2BChzQs8VpABGXItTzGMKzv1b4GOqUBElkK2xv8RApB5ngI0ya6o8aLU7TgdzIe897fQ2IWujI5CDs%2BSchiFBwfKFK94D%2BUsRvfPYEuU3ksWSFCFyHGIZYqe1h9wArDHBEjo3cnkPlW5gnUfObLPshoWmTtHSQaWqTjtAigiOoptvdqfJXlJDWNLbWEHMC2y1437SE8OGkVRHZ4OeV290uM8EPIEkLSj70ddnwM%2FcjJZyja1g1UoeJtj5pr&X-Amz-Signature=d12286c2b3265bf9497da5bf31e74ce253f5585d8ef8f4d1fef7159dcad23db3&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```bash
    # wc -l 은 줄 수를 출력하므로 -1한 것이 답.
    kubectl get roles --all-namespaces | wc -l
    ```

4. kube-system 네임스페이스에 kube-proxy role이 부여된 resource는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8a815837-d7ea-41b3-a083-8df4c0eecdff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXT2QZQI%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKE%2B%2BcCGkyDtKqDA2eJn7GGqPsEVJ4BgO2rzPo9oq3CAiA0hRToW7uT5o3tgXVeKfzTtG%2FK0PweDl%2F7UD8V9gCthir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMIudLdNEXUJCmfYR9KtwDoJ6ZKqlkDsDbZWGC0t%2F4Hq1QN3IbN0YeF9jQ4rC3LgJGtJajw7LgDSXScNSxGy6etmhGk1b%2FRiW7GaJMR4cTyRjp1iO%2B5cLbBg4eHMXWwU4oPJKV5%2BvsBxp4gDV5vHHvZbp8WE8pQOgm%2FfT%2B260276Tdq0Q%2FZQ1CVUIqHdGVZ7sFWHjHoslkKTWNYQA%2B897bnOrDpJqC7i8SLBKVgcoRVxZpCXVT5DtEPeQj2ZmoNSx2N3zNduOuonxYjD2VYDD5IJNnhyevAy8oLd7lLFzBq%2B616VlGj1NkCK0yuE5DyrIxbBK0Siu%2Fv2ckC11Xf%2FV6s2gDS9Ip5ZzJTIBSp4hvz2bRB1t5AvWwTkF8aarjBugPmM9trqU4sdfhuchClLXNuId%2B0S7MXD7ISON3AOlTINk4msXv6FMX2P6Tug0lAvKUg3bRbxr2RnHR0TuoInvOc8AitvXU8UwyP9QVu2PrngLIYmM2P7XBL83OQvQ1CZ05HD351GZUVmtmgtmIQyvo7uaSre0wbCrXvlg5NFFvDH7zTEBRoIgxdnwuw3U67yKIDuR%2Fv0yk46zadI2LWErClqyDNPIp1aBmpmSN4zPcTjlNmeEFbGA3E3vjerTNo1kG0Za8PnuPeNTfXPMw%2Bu%2FVvgY6pgGdTniQ8ON7z0jGE%2Fyr5jdGiwPC6LJNkELiCtP3rgHvjR4wCFu4nyjNeO0g41GS20u%2BeQhrinhfckqKH9CpdaPXh2AZCdzk82c8fcDiG4aSdD5I3eZdYGRJujAs%2BlnSWzCtgi6nEr07BBepl2yjSXcRRypf4qpVX2Ux0xsxCxs%2FIQJXEhd%2F8%2FT8dmuxC1%2Bc4NkAAADFHJhTAUW%2Bpr4cA%2FG4dNGflnPW&X-Amz-Signature=2b16122c224f37c8d9f4998f31def094b235ab9917265c0d4e8c5299620d9a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

5. configmap에 어떤 action을 할 수 있는가?
6. 주어진 문장에서 옳은 것은?

    kube-proxy role can get details of all configmap object by the name kube-proxy only


    kube-proxy role은 kube-proxy 이름으로만 모든 configmap 객체의 세부 정보를 얻을 수 있음.

7. kube-proxy role이 어느 계정에 할당되는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/54e0a2d5-09b0-4613-9a26-fb1465ea0001/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDGTCULD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5XJvhznMSxjSz%2BfEy8BlYDEFnNMiEdEfb8p8PSMXSfAiEAtDfOcMlSVPIBMYcJLjmaTX7Q9FHR7fps4z555h6ZicIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGnESLUGgHzkWGjvxCrcA1KtZQUDtPEPb%2BovrQkMdoWKYHWnlJ8qk1PLKAejVpP7c8JKr2y0fJOT7Lpfl3JaaqPX9VavzVx5Xg2JC9evedyiqDcp5%2FRTKlcVkOzTpi5nCA0CD9vsaNE8tnRnQT7W5PytRs5Da%2F8AEYHtPSz80OsAZTyskq6SuzyhhYt03BkoQC5vvoyy02PhB62%2FE2oeG5dWNV%2F2z9h%2Fc6TLXGMfVtZjn2Emg9fj3NPWrrz1t26jh801%2FA%2B28yEOMMiUKTNktXyeh2VQ6g%2BZlOseDGR4ReCxkZ9eKtm5xM5H2xgbz85kdA%2FhwTRHeeAkz3oRCaZJb9eI3oVJynCoYq5pkJ7otnZD3I%2B4Kly7EYzpy7Ix8N9MFmzvC3V3K%2FIwOaZgZsamndVJ4K%2FDr4ngzGh7Ka6nEZfpIhSVmu3tIC%2BR940R5988Di9bhNJf7z0fARBCpzJr%2FhvEoqOxDSoAkzr11V%2BWuEKVfTqpNi%2BU0QOghDYvGzz%2BBCGuagcF4IJAen%2FIC%2Bef%2FisDr6wJMXkhezjsTZ6efW4FEPv2yUGhx8GUjwFfsjFqsF%2BgELYZGSpyNjHPAtumtq56w8Uiq%2BMlW8bcokel28p58CinCWvKKZ8I6E%2Fpqgd%2F3jhKKqXSJARd%2BGdeMKr81b4GOqUBjirU3%2BhMiq5peGDSLDciBtZ2AUeVz5MRYbkxE0r%2B9x4t4RbLm45tM%2BmfBZceFztmvPuxVIj69g7C%2B%2FAHZiYZAgAhCw8G2ld0lVwe2cUtGMhcXJA3Z7%2FrONwTUBq%2FkftbHnUQO2NzZkwnvWasiDl1Uz9Dw80FIEbcg3UEGnrWj8HRoK6zAorQexlIpESZo4WNSsXIHqsf%2BjEphz6u%2B%2BTFsNUip%2Fgm&X-Amz-Signature=2ac70cfccbad6bae110323728b62c6d514c2dbabe05fc320c0f7410961e63c70&X-Amz-SignedHeaders=host&x-id=GetObject)

8. dev-user 사용자 생성. User의 세부 정보가 kubeconfig에 추가됨. user에 부여된 권한 관찰. default 네임스페이스에 list pods를 할 수 있는지 확인.

    ```bash
    kubectl auth can-i get pods --as dev-user
    ```


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/0b1c42ae-2023-4508-a739-bcaee8156d7d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJPQDT2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtmgf1t9lmbzbHGT857iw3YsXnDYdjyAHhSiW0ttkYeAIgbBn0Nowa4eDp8xruf2zYX8hIrPJSE2%2FisY0xYF9FVpMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPlYIhApgcTHZWWLPSrcA3FJrO3OcnM599YSnioR2xiHNGA%2FHAs5zReGUTI0CyaNlTGWbkORncnnPEw%2FCILPM1ZZpnxKReWFMmqcnVXiVipdCj2%2FqK46gfbBNC0EuIKSMnnA4srNkUE8QHr4wnRoDXakO1PkjXsG%2Fu3QnA6N4A8fVIQGuA7sOtPsQNqJFhenOgBGsobVJg1BuTc83I6xoRNtmJnuOh11i5ck9%2Bw6hgVWrr8NVcx2zrOTWNUTLFGRs7Co7lO6LjFEyH%2Bg2O8i7v%2BIbtrjPOco%2FTSn5ZR1YkuNv9GoyzcdCWkpv9Bq%2BooIghYiMif61BtRpDxlsR3oAeAXvZDVTKrGeh9GsGh1q%2BcwcyK8A%2Bh4b2ZorG1dvNJ7eyFWDWkIIXaQxHqXEFGMkELBx0FXMHN53dTzEVd2JJwIHeFaTEixIZyXqLT8MGegCmkfzYi%2BasLtLL9b1xEETg8g2D8u8NrNsm3rSBMUPeVgFiUverSGkiPEnXDIT8dkiSTMEHi1Bz4fGj4vxOI6nWQzWLI%2BD6SpI9ugMvx8zpF7av0hMNZB6qVDFs3E9e%2BShip1IswbjEHfg2S0Fey6sKUWaVyoS%2BicN9ZE1I3FEBuVdapyU4v9LKlf5cO1W8fbP8%2FblJkCLsECZWMbMI7v1b4GOqUBwIle6R%2B9g7KeEEU9yv6%2FYRy4IRT%2FIXJIVH00lCTuo49rXwfYcGhNh53AecNZDeuIT2mEGKEJpGQ7CstLmmHTXYsmmXaTCHs7XfXLGbaq8OWaP5akpsBEbpSI7duDjsVB%2FPfAQk%2F0k15EunYcw9NJsi%2FgQypnV0qCGRVsTdM53QvPM%2BC0Cw4LObBue8AFB2xfyJGF6dFFeuK%2BMP1ZvfakqhXQzcUO&X-Amz-Signature=9962a28b65013c1c95638e9963c13d7d28d92a88b8c29e50a05b8a2bd8745699&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b19a7bed-8e3c-4bd2-9f67-86fba0324a8e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMQ2UGK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1DY3OLwASrtJzSgSX%2FNGiHzjsEF4ScjHOu2t3FFP2gwIhAIV4ZvXOp6zwi2bpbemSsk2xF2S4jFlglXKQCmBz1q7jKv8DCBYQABoMNjM3NDIzMTgzODA1IgyL2%2F%2Btmf4vrmPXYPQq3AM5QjNwrYz9aba%2Fls157PlV4gMyEm6qniUnzX19Igs45mWlMCNrJMXmfKd04KneWWPgiHJeEv%2BrTkH3nmX5%2BnnNJ5MNJctG0rRzeF18uWvuP8NEZ70B3b66hJ5DrxppZY5I%2BNoi5Mr31WWjxKUNq2wm6kZUjSsvEyzetXvoUybwdMmBKxbP3Wab0X1apsSBij5Adm4o4GORUvPUWPKw2VUwHphJtnxZjngDqO0wWMSL3Ol0VooH3uSJjj9RLBWPpVIxUdbiFMzHhRb4UdQa2tc1a99dt19edk6FO89SLjsw%2FCUQytB2ljaIIVONlmJKlOjTUeHkC5PuT3VancNFwNgNAXSerldheFQdhO88YtNexsGf409oNZso9Utt1YRbEZmcqhHonXtLAcYO%2Fk3BGNKU12gIwcHvxlFwKTp8cWP2ysPWkshXqprOh4SWppu7hsTWiw6ZF0Mp73nqY3pHB71EZXEqILv1XwmYtd5DlFCmbEO7TixJfX0dSRnPGmJEQsyNcxG1pDkr10BrNrPQsUnnRqOrqvX9J5uMP4UU2TxXny%2FX7Utq9hVEMpegDN0s3vZG9lnAZUsGNEkl5F8Ntu%2BcgWMRt%2F52DHoGNs8aDZYye1CAtDu%2FwaAs%2FJ3%2F3DCD79W%2BBjqkATIN9G%2BkUgJWi2PYE1Z9V56IYUfIRUBfwyPnvlc9%2Fq14kTqF2prAJos4Tja%2BmrV9tZ3ens4eSe%2FjShhUl4oeGByYgbK5Ke822oXs7SV1Hfz1Zt7X9tPWZGA0tnvh8orr5P4Sym9%2FRn2BHB1pgmY1jt%2FFW3bta2bprba57k6O7MPXsozm6%2BEACS6o7rM4wikcfs1UrGEmuJP7YHWDMkRaC9%2FAoQHD&X-Amz-Signature=314a6478b59ae8adb1920b82f634467ae7a15e22cad669c0612e649029e7cca2&X-Amz-SignedHeaders=host&x-id=GetObject)

3. dashboard application 배포. deployment 관찰. deployment가 사용하는 이미지는?
4. dashboard 상태는? 성공적으로 로드된 pod 세부 정보를 갖고 있는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/21e35c7e-f93c-495a-8768-11ef51201564/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTXWYAA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA76BYdqIZeyGQ4BIjYp65WgYMU1PGIUiHd0OKb%2FWcNkAiAQg0AsDFx9K3RswYlunoc19lRui9fDg%2BtrdIZ9Z%2FXY0yr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMD%2BSiqAciJqkWD1MVKtwD3qo4Bn8EJQSrHUKJrsSPPPeGOOG0qc0M97v%2BzUogp%2Bm5kOhv61%2B5Ty9n%2FkjCpnDv6ObI%2BKxLObAIm9zP5ROx3RM%2F%2BgAHARkEywdDlrDLtCjiCVYN7JWDregUzJ8IYATF6dFE%2B1t0LmZSZgE54wlJ8ml%2BzJlu1RWLHwWAHoN0qL1jAIdE9Od%2Fk6ZXEkFHswRoVpCQqbWPBZXskP4K%2Bcssk%2Fl8YaYTqQx0ExYd9qJdLnoJCJGNbNmUahkdwDD6JhoTxFG%2Bxw%2F6IunbXXUWebFG%2BduH0XGi2B2KgG0HS3lHVJyLbw%2BVUa9pYniRg5IkEpxeFWcQrX8owIZ%2B4EXryEtMVfy7ZWfHmdVLki11kyfSXETJy1wvOL2x6eU3abraY5mqQkahh5yniLAR012xJhc11ojxYXQwaQHnsz2zJrHafFqu%2F1KyPfGy%2Fj1zZK4clyYNp22EfLoc8%2F2roXuoux4JAJjfydqLQBuyogMVhK6i1tn6GVQZ6CiGiCputbCKxkomPTznnC1xifnAsjdk0UVIOFhGscNmIoi4TlPBis7Wpclv6XBpTSvUf%2B%2FbKuIkxH6J9za%2FsUqBOLoNgW3CJZaFABy2uT%2FLlzr%2BvDU9e30NVh2f966wsYOGPzFtBr0wnZPWvgY6pgHtXTO%2FeMKpD%2FbLj8mqFiPqExZnsf1%2BGsl%2BbuqmXuEL7lRnlalHCgaLpMNDU0AeVOM75nFRoGCRyxSiZr3wjL3fz%2FQLEGbQRSza6IKkuaUisaBq4d0rl5GYvbcnZkiV2ceKiCjvbzTbQRquoHBQIJtPEeQ%2BtsJExBt0aq9vTNKlpcE0VCdQgqEf4XXQaY5y0DYDA375Pl1aFbpigoeGsejCG%2Fd9Jwzz&X-Amz-Signature=ba132b06fd267a6e9112a85130f7b4379bb5b1a5db599914993a3efa1f559e54&X-Amz-SignedHeaders=host&x-id=GetObject)

5. dashboard application은 어떤 유형의 계정을 사용하여 Kubernetes API를 쿼리하는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/7d4a5407-3552-4911-b8e4-141dbefd74f0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGNW7UO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMMgdftytmAMqQeq03wYh7sFtpCdy5Qn7ZTCnNnLwIGgIhAIVHnRKMi7Fc6yldhxJ2utm4JLsoQ%2FCDq8SAxNLYZs31Kv8DCBYQABoMNjM3NDIzMTgzODA1IgzY3HhrBewiIL906JUq3AMTBec8x8Yd%2BKEMQrwQoE%2BNQMfy1pqV5jNaCL7IhOvr%2BSdX5%2B3%2B0%2Bbh%2BXfT1orIDdgkvEWeaCa4qwsZIS%2FZanab%2FOvXwk1DCTcrbmpsYcEASis%2BC6LRDjraSpI3a4okjIOPE1fDhFV1JLlOi2%2FYxUQfAgQ6li3vCkXbJP2UHI940OaQ0pgQQwQyXB8Q2k6ar4u2uYrcFAuhOJjudZSDrhV6UPvA57ri%2F1ElQj0Gq39LQDtD68vuaGR%2BB4oWRIEFdfI9wKpomnba1AGAb39B9YdwQHFW3R6WjnLzj7jRAo7ImyTjpe4GNrHrlhO1ncswHvRosN4nxW2WWqYpw%2B0yscSESyLaUQNCgCrwG0Jt1Bdp4rlQ2OcfsxjvtbcfDLFhL7WmtCB3WePqmkqN5JXTd6Iyzky3bRceqVfqiPA0DTzrL3x8SNWg0LGtrij%2BAZcMRz8IGFbeuzN7s7mvbUXl6zh2LJ%2BV4P%2B82tnoi3oP0l4ztm7PIWPPKUnmBsNPADSwlMrsX5CUuwa1URA1qXpGl6ZsMsPdScMV1lIJl7WmguRu3RlT1TukCQCTR%2BpOpUCFWqaJ1irWOU5bkopKARehYdqV3ule0drhaNVTVcD2k%2FFiFXDB6MlMLi5%2Bp%2BCtJTD67tW%2BBjqkARpwvm4nFaglC2Ii%2Bj36NEazRgaj7FEZZsN9osye3FsmbJ4QgExZ6N17xt9LAoXDJ9mXPq8tfaFHqYpY1J%2Fqgsc87CLSKZm%2Fxe0RWQCHXCg2pkuruOkJdQsKYwWzJSP%2FPA478rOExaDl%2B1kXd8Wyf4T8zWyODsLw%2F6gq%2B%2FoJqMdAfI9%2FUX3iXBwMg%2BQoRbuBRR5Giw8Kkjg3Q8iXrRS%2BBoYMuOxu&X-Amz-Signature=0e1cbbeb089cb1874a84e28fcfbb17784e3f5e00177dd83084b76dc7e959f63a&X-Amz-SignedHeaders=host&x-id=GetObject)

6. Kubernetes API를 쿼리하는데 Dashboard application이 사용하는 account는?
7. Dashboard application pod를 관찰하고 그것 위에 마운트된 service account 확인하기
8. pod 내에서 사용 가능한 service account 인증서는 어디에 위치했는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/90031244-a1cf-4874-8238-fe8c3798d305/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5VFEA2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDixqxVtgLzccZ0YcWbEWdQ%2FvXVzom%2Fpb6zkHxV8gm9EAiEA8GInCUKw7CZT7IX43%2Bs9Ky0HrWzvpAhj3NHabuYg%2B94q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIoiZk4BPXQQevdJjircA3CXIfvvRR%2BdV6QgLo4shpYorGlNMI39S0fshK%2B%2B0IkVCZIqsr1X7Xi%2BDC%2Bs%2F1SdY3zyulEnuqMD0XEASU%2B%2FZ4%2BYJ%2FntQ35LIAScrFrKgI54Xga%2BSfXgBndZJ4IQlS21hDgJXx0k9wzTgqTWLYmkCwTeq6zrETeDNfyYBpwcW%2Bk%2B59gqzLCFVTNPk3WSOo8a9yyhKVA4LNRrZvCewCWqEZn0%2BYwEPQrMgt%2FF1hHj3DMFBVLDe%2FTG5pHEbyjrJO9obwPcNw%2B0vZE7h2d%2BAOqyiLkHHhxVi%2B%2FF9Q67kxBLjfM4Rx2SlijIT%2BqPY648lJrSUgqpXcVTkkOwoSbrbjP9BM8la4jISCer9a3wZku1g55KEf8yJxl5kbWtYE55LdTaX7VOm2eCQoKxDwytcn74L8QM0E1YEtLYRcCNZy6asqxbPmTyyT8IIfSUw7QrMevpzeIKEQ7ZK5eEvylTy7xu2Z1O8lswOc8xhHwxUluKVBTGsrVmKozlISwsMk7UuG2ghKCfHBQ2gnrmGkMooKzSuax81%2B9VqJC8%2BNHf%2FPkqq7SjNzSQgn0afq%2FkVfN6SYZeqJr%2B7CNVsgcUJhKMi767eYqkAFC9P%2Fldk1pTLWTRdIgEhP3ukc0%2FHzJjrv%2F%2BMJnv1b4GOqUBnRYgQYjlxYL2FmvjB%2BBObOlyyzWmtRayRKZpAlZwTbSOHOKBTG28hZYGEl%2F56Rrtbv3M%2B2AIybJqxsqjtriaDVDrc%2FNTE4YIii0pyiHag%2FPWoqcoAoeM7Pmxk1EhM3RSjpYrqlYbgtW16C5NDutagIfYO2Hisb6Jg7Yw6DWlG8LrcrI0m9%2F5PWhpBqLGJOqRAtonWSUOJmTox4NGXQFpftJjMvc4&X-Amz-Signature=27b5349ee70d20cb0b876e56e4283fb5f63c6cb0d662cdc1c103686eacc4581f&X-Amz-SignedHeaders=host&x-id=GetObject)

9. 애플리케이션은 Kubernetes에 인증하기  위한 생성된 올바른 권한을 가진 service account 필요함. default service account는 제한된 접근을 가짐. `dashboard-sa` 라는 이름을 가진 service account 생성.

    ```bash
    kubectl create serviceaccount dashboard-sa
    ```

10. dashboard application의 UI에서 access token 넣기. 새롭게 생성된 service account에 대한 authorization token 생성하고 생성된 token을 복사해서 UI의 token 필드에 token 붙여넣기

    ```bash
    kubectl create token dashboard-sa
    ```


    dashboard-sa service account에 대한 token이  생성됨.


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/6b5ccc86-02be-4794-98b8-6ddf6a01cd07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FC2ZQG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfStv5G%2BffAWQ15fOwcvXVm05YR1u8jMD9vWCU28SyYAiAiXL3Zu3c8LjJ2xdMo3RHVBaATQIL2NqJ35aSGHf4b5ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMLRjiuCTuwi0vE1qCKtwDg53AumI%2FMJ%2BaWFU8MCcHbdIpvL8ry7f7EOkrOt6h%2BkidkCFYLyvKF3g6%2BabSLiiUba9aWsIUiUIK79urEo0pri1dUG3LvASDePNVaokjntAEgv25MAxeZ16jJyoxdAgFFXHOGbM7Vqg%2Fqei9nkhtTHq2A0PV2oQ4bVZNm1hRsu%2FcrpCJP3OEJ2slo0zCpov9guVIyyKzCNyojlfxcDiysde4Y%2Bh7nmyCdslB7%2BHcjZQOB%2BWqjl8JPldZqs6bt%2FKpyVIkaYy%2FOjIHNdI9UQKlF2iwlOEvx26EaVkmbcR6MsnIS0IxZ%2Bi1rfQ2ZHKIvYpXVywbi9CXh5bvS7TkU3PFRgSLtnH1QYgrKf7urcXx%2FYK6gY%2BSo0v5NBQLhS7FPkWyTKRWSxL5C66%2BiorwMaQohAHY%2Blt9MaJ8CfNqEXGL4l%2By9yljkOC1UVkDCE%2BQqeSCbo1wMmITCYgihfEI7E0ulIOnzB1%2BnsDJ8UQXRHXhHYEq3Gx%2BP8rhBO8NdUAcEt32bEuoZPFeRZYn6PZal6%2BiBA3qXZXhiJYlPRGd5OvSo6kaVh3NZGA7J6zp4izRl8wwFKuUvNUZ6QqTTUVM007rS6T4WvjJMGZOoFWZOudMbvFR1n7ejocgsVRwf%2BMw%2FO7VvgY6pgFbgnJDm3IHBut5ehVwysiBHSK4TXv9mrxmQmBVnEQVo8ekhGDHgDRFxr%2FO1bGbVQozeVPOpsqASH%2FBAxhyTOHWFpCvjtMHvISe3vRZY%2FHXp5lIB5IXy5bOGUlS9uzbe48Ti%2B5MgMmHR6kAmZXHteoZBJax4iN9%2FDUeB%2BVavWJyHXHQKemCLEm26gZhYuZinbwMJCapeTA8TNlbedLi53%2FlPDqvpv%2F0&X-Amz-Signature=86baa9f7d2b76be241d1fecc1226f43b85d122c8e270493d56fb5755dee30015&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/03b8d9a1-823a-4f5a-aab8-e9a63822e005/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUIAW42%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLEko4eAexN0Xme3Ma1Gr33i2ZOtPq5RAyn2scmCDp2AiEAni%2BwSYQu9KY2EpafiswH%2B%2FFiZD%2FPW9FK%2BAdIshVLtaYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEdqDzceF3cCtA0mcCrcA3mDPd3f3ENTMBG2NG69psR%2Byp18E%2BLlDLPxj83P6NeVJB35bQs39SGJXo%2B8SChw6xhaaZ082EAh3mSf4Giy62zAADCl52aKjNNfjnxErPKyhA1efniU7KDxr5YpFw6qM4iqe3RPqWVJr%2FkLcLCIBNq5O%2Bhm2daCoBHHD1Sj%2BH8XB9IS6NIOm0ZwXe8U9%2FoittOADQr9iXwi1lOwvjkFt%2FoE1pxjvOcDvSXqRdARMJNvPTkBrO7DTz64t0%2BLkT22wYm%2BvB54dikhttmogv866oRiEXXuGuRfH1mqOgoGtrbjetHjt26v4nSLDuHe2lwGtQZSkkjzZM%2BauCVQVxfVNu5YKK5ZeUzCk3ObDfLB9hKwp6RIY4GGHnv%2B3Ctya%2FxQjX5GHjYnvXWmaUpfEKTPIdmQq3t6qjkiHVXHOjQ07hneeLHqie9eFSmewSpGdguMVU0QAQxBBP310xfoPWtrx1WRirzFYSpGuj9%2FMru1bJBgmXmcpYqYNbAFynY0EzdnDYk650wd2JsQ%2FMcSnoD5GKODUWEA8iTZwmyGuPzLaBDLjGXdybJfP0gaZosI3bybkEURRI%2BN6NcJbPeQH6sxmvlyXK7pbVemEzIZIyMomDCxHW4rxwrBqf1q6mXIMJfv1b4GOqUBt5EiXRhHiVMzHUqHdihdOyIHNJ7a8dhP%2FDFds3SMEYEgxXMbxOBwdeIXD2hPdJYRhJBQf1zA7sR%2BNw9xtItJZm8dQ9H8P2CKVOJfhtF51L6Dy5sQSh9GCrN0TM1QoIcCRVOXfDGBiF1%2B7GkpmPj9u6C0RnwDQmLXM9q0R8KiOVVV9oBZlsDsd9tIRkL79ph2%2BPvgNRAMpx2jIGZKAs6OX1x0uC5a&X-Amz-Signature=039cb58ba776cc6d5883db632d359e4feb911527c49d00ccd52e3e559ad89a68&X-Amz-SignedHeaders=host&x-id=GetObject)


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

