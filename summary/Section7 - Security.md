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


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/feaa57d9-69a1-477b-90eb-075854919446/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNRRDL7W%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqtGpE83x%2FU2avYWngCxszN5hqPn9O1Pro8I0255SH5AiEA3u%2FHW88LElp9%2BZWeU%2F%2BCtXqykfZ%2B22Tr0xbvpE2FlCQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELZ38YjAJGhNJIAxircAzRaAatPkjLHQcU9ZhVdEV%2ByEKSdd%2Fq3hRPxa0elg2RfUujs0dU3zqxBINq2mk2IRAgwRIvyRjPNykuIhu5FEOjxiXcXonkvDLi6Q4Ev41Vty1MSOaa1cY34wOCp77xElpQpj3LeCYsJkg41Hqxzj9l3MWsjLVU2VCX%2FG6WGRsn1qcRjxlao%2Bm%2Bs5ftBy9rau0ocFA661faUXKq1W3eGY355of%2Bgm7Z4zm%2BwGQxbVTAa9K7Bf7phBGkBsrBpiWV68c%2F37Omxlj%2B6%2BqRo55pnyX8aq13fC6OBsTfNGUfbPQ83YyfgLSt7nhckSaKYTrDwTiE8xheWun6%2B0v5O5nOWviDZIm9N5iE4qKGpDp0BXb5TBpxANfV9esJ%2B%2BlglDkzzuCTf97wdl4VLMwQCYQ3iNauyRjVd77Bqwl8TwxoK%2FKaNj5zpPXSJImDIIQJEQyU5zxjOBVX4Odgj1cQWnPNLuy9zrDANfhTv%2FRST6tahoZI0UEZscYvcn%2B%2BLAcuIwAeoVes6ulVbYmIriBou%2FpvfJZuDvrmibETo2UHv4U8pLTxAq6amHivDpmjaEjAJlf1Z6QTu%2BCnmIG%2F8f1eOqnDB0l35YgSHi%2FpYk4FREP0MufCh3zx7T4%2BYqLxOzO3rMMO7y74GOqUBaZh%2Bpfm3gEztfSzkO2j%2B5YaKR0LdS%2FzhoN6w7YRbH9r%2FnLsu07xs%2Bj3NOy2vPdNiZrTnkWvZwNWH7dOG7mfz%2B8c0wnk7n7W3W5%2B%2FPiGZ3DRqJR4ZXLiEAuuXs7CGbPW8CO%2FbB%2Fx9CD0bm3KXQZq7QS%2B%2FF6XcgdJd9sO%2F2fG%2FyAFOa6fQt2qq4%2BXwwslPFxpVMbYedvyxYlOzhvtV0cBpnnJALqh%2B&X-Amz-Signature=922dc6b143b950f2ff7f56663b8db6dd9848df14de5ee7f4d6b231e4d568f831&X-Amz-SignedHeaders=host&x-id=GetObject)


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


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/10644a35-55c2-4521-88c9-6839c45c9ad6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLAPVE5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWwnR56xhU%2BypOJtbQXSNd1cD%2B9fwJbcoC2up9lW%2Fy0AIhAOt3BVETUD%2FWYN2RTG2qWuobzQhRb6gRLgLgXsUmQ1RIKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1Q9G%2BDj8Twt84YEQq3APUo9peodFl0yRXZxHwQUcrK%2B67T5Nb7nMIIQADKFHmu8atY9jq6g8A5PmESpfAvbENkugDHxH8GDSkPKnMmbsR%2FOzlEWNaFWn7L3KP96T%2FJBo%2FPmaqyQveMZVkCj6JKPP6P32tND8BkI7fBXehy8N1zDpBY2gs6TeA%2BOaw%2FFOsbofIesRroMETTfEjoSMPSmAbqktcua79Y%2FxEu8gyrNvOUXXEB18iMxSO4H0DB7or4dWRJvx91wLD0XhAnpXqQpkAW3ZjMg2RSmPRZ%2BTDvgcEufbbwAkdMhtv69q%2F%2F3HpREiySffDwyv0P5htBQ%2BRfb8ch0MLXr%2BI39hBuOc6cGhx6QDuMSkFX0JtQ5FetpMIcmi5j%2Bnmk4XsBVDPlVv%2FYa4WXsrnUTALjIIE%2BoCwunTV0NE%2B5neJg9cKClY1TDmZevRHMWTrHdKJAc48l4%2FN5YziGaTwLHQ8mrhNkOBDSbdjsCEyymOPTK9c1I2ciGMzDtlmvQfl7rprlhsJt4C3HpUqmjZK0JEwjOYOe9aRr7V9hUHxiddOQr1QuhMco0oVA2%2FBuZY1zR66iGZPJ3KmRWm5gVLwGiY1SxQiOvQ1ZlhXszxare%2BxnpqYEvKZ77OI7uKkANpbmAmdm4mS2TDBu8u%2BBjqkAcridQnAl6pfavReyujL6nWY%2BzEDAq0Z2LxwzGFxsRioTP7%2F4MLqKVexyHz0EXZCB2qajGqBekUTfo6QLp%2FbUx4zQ52ZrNxgMp5XelfFE6PSlB%2BWPPqGZ7cNDbsAsFxisjq61WwuYGihFMZheq%2F88wUWIno6rFvP0EDPwAVSdCs%2BWy8HmYPGO3pdApUcH80Dk7XDX3OFipdiHx8%2BtfQ3sID%2FjFIu&X-Amz-Signature=74b424954d8ba1ea5c9be5436510ef18b93afcaeee29e383a8971e1084382f40&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8dc7f1cd-62b8-488f-876e-bcde2373bb27/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAOPIXEL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVChh3HEoIZMA0jvnE9IaRWzlnStaYa%2BJyBNxDbpkhEAiBt86R8xYnfXqAZT8CTjvjt0oYdTCpTBXZWy%2BOU%2BGXLgSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfXLreYNUSG39eXHhKtwDNpHrDlYLK4WPbZFr%2BQAXEhEMFwYUKqN%2B4zcrPBvFdfnoK1UngK3lByK4zIVLbvJyK%2FcaB8xwvk7K%2FkW5E9xqSZXKJ4ZNFSpgzsHKuHytHdSbvjlp8FvtuJOvlPyJFEy3UY7IjIvKWDpTcWuWQfoeSC6SUCn9kDrIPpXzS3ejDAMltRu14RZApyri5%2Bmvmx87li1yOfVtLtRUlgzI76mAW7c5YvGtbAa9ubz2ofSTAy4UpPoqKpJznNw3aBRhZQAPsdINVprjAhY5yaaLR7ngiGGWY9Rrcq3xDBiL0YDfq0JF2FQ0dPAMWSAekNURFPeI13Mez6jIp95Uo7XsUzIT%2FBG17K5%2BQFfNFbXPCWC%2Fk42S5ysSSOr%2F468pEPUnNfFVodAmFn4USzMv2VPqqd2iuasa8ApRsQh5hG9iimOLSzBhC4nz8qE8aSkSOG0cdAO9924sUy3eFRKm1ZNEUAUg3gMsKvPkZoKX%2BUxz4SAy27FV1twEm7ek9z%2FJMVN7zj8HB7iIVCbSE%2B9VFXTDomRZyKMBlAMdHYKlo3amWe8N9yeMIRZhRjzp%2BO0cjGaqNDTke2uNHQwq%2BazU9ma3km2h97zOaQtx4w8xQ32TJBoxclQcGT37P2JvxUUcU5swu7vLvgY6pgHWm82CNGBXEQdf3xnkyZobmoBmD6m9SAkszPQvV%2Ff0MXESg9hxah%2BRe2M6%2Fh9xayR%2FSkbt2z9xGPczoqduYzoQoHH5P83qH36QPoo%2BCcq%2Fss%2FwMiuP1LIEsHkfwUlhKa2Oehr4DvVMviUS5zkOQ9eH5fMnUlvYu%2F%2FLfnjaUjR3MlPGmL7Wb5kDtCPclf%2FefzXwq8u2TKvbiBE9pho4LL8v2m8b0hiF&X-Amz-Signature=f05541fbe0f2f454e757ecdaa55c5e54a86a8742e38dd0150851bf0ebab5811a&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/cb6d8fc6-de37-49d4-ae22-27d35fd6cabf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHYU37D%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwBz0vaD9bYQlVyqnAg87gNPq2yKZL8TkLq%2BZOe2ucIgIgeLfcWxKwlmjbxYIAtBY4J1BTAkPNOJxtjwFvCQeQM6IqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzosVq7w%2BaKD791EircA0fSc20AOVw6DM7WQud2TqTKduR56glOWTLh0jEw2d3bFOpzmbSdeu5yGNkfzTUc5Kvm3k3PdBNHTkKYxGBwfpVvMZ%2FXTbyiY1y5IMuzvCliIlvvA7KiN6ITVZBpbQgxakP2ZP1QPSR4iOdK6ifM9k9TP0yOXdr2GNru5de3k%2F7lzo7PNpTgIFe8Pm4rvMUMiUrjMZJdasNn4q1%2FijAVyKIFkpCCk%2FIVpepJsTp1MANZQws9kzLUcccPcznDnkXmNLQ4wBpIpeBasOh4JfRK5077q%2BD8jLmVjsyzlxGmgLYBwJqlRZdgHGyoO3%2Ff03K7%2FVpvpoWZJTNn%2FglXRi%2FfU99LdZUCdjPxqY%2B4DMxOXZfziHcRArloCoGUgVL8QDdvYf3pdWNH8%2BLQPAI0cMv3T8VoEo9E7QtZRDl4y3fpmv8cWxuuKzjwtnS25TcX%2FwN5sbrrAYvXEhtamPRX0AyoFWZoAf4RB2QFqOqPadolADZuAUPZCZ9WtDaAifMXon4k9P3hCiV%2FIZTzYGMYcrfxTyrGTUEowWhjU6883hSMCbsguMu5Ltvz0ziPErHMI5TwrRaUoK5XYqe7baDa3Bp4ALMt0%2FlahHXmJMTmL1lSY7hjarqbqkIfqFEqz8zOMLi7y74GOqUBEHm2qpvuyEGyYZtIV3zPKV8y%2BwiBAFyEA1G45bcrIRL6jWdZnGwZm%2FkgQVM6gfv7zZQRr5C6TLin1xtgIxVF7uwfH%2Bc000B4v4%2FCuFUdH2Zrv1RDYcYwcPpxM6Ii10hBTxF6v4aezYbiYERKi8my9yxQA1Qg3IprH%2FMNxjlRs%2BZi%2BX%2B8o3zRGg0qCzlRMNNIXrwLSMeP4SHj2cHBGbhQ411j16cf&X-Amz-Signature=ad95374ad395cca603ddda501206b6b6ba16dcd6533971e48e7c1fdeef4c9d90&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```bash
    # wc -l 은 줄 수를 출력하므로 -1한 것이 답.
    kubectl get roles --all-namespaces | wc -l
    ```

4. kube-system 네임스페이스에 kube-proxy role이 부여된 resource는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8a815837-d7ea-41b3-a083-8df4c0eecdff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VYVP4OO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4jPHtUprMTew1xQZCUo5KSBmw81%2BLSMIcdaf%2Fxn7HkAiEA4rCbEq7tEUT1m%2FNNNH%2FMI5GW4yb4%2BAL0O9ihR3fSl40qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdoJiRwdZBf7n19sCrcA05VEXzlyZtC%2FdV3sFOC9xX8zeKr3H5FQm8roU8OjeoeIJt%2Ftv5D%2Bfc3vtPJt353ytnhmNTcDcXJQy7dLX6KQ49njJmUyj07nU0v9IcDWNVnZIbkw%2BQfqXZoWfCC%2Be%2FM%2BG98NZ6KCYBpqpSYdoqx5plTssJo4iQHvvGUcMSxqig3V1AZCOSveqsaYdikk%2Fk6W0a5wL4MChfgnlczmwIukNbtfN16sNEOnT7kS50qhxr8OjlT0WOzpxloPIYWEMGk%2BFMMEzvjViXCzCst8WB7wCPlCrwHI0pOpQEvOHDMfgs8Ak6OfELknymPTzlycEx5im9RA0q5M6DvcOMyyPiaAYUULys06L3A2Nb2N2YYKuEOv9Uz2nhsxG3sJVK7V6esyXmah7G%2FVuSiQoddA0L%2FJxUYxr5ZyAykkBLJsJk8FJf4Yns3BJSt44qwthxbF0HhtviQqiEVsTKWmvA3N8XhXc1ElZSpX2A6iejoGYZ3JHNpI9VMuZcLzwtJLA1jpQRL81OkBJe3GI0dm8vzEwQB02ZxFZLoMpRfdIe6gVo6yOz9U4U%2Bq36EGkoWskePEuVvjkkzEBGSgAL9IcIiX%2FqTwZGFV2yKgoEGZIv7OPkHuEasIudMryzxVvOJK2miMLC7y74GOqUBE1p1ld%2FMoKXMjmCLzHFCMMOd6nTIPOhPOna%2FLzfrZ3tK7DyjLy3qkvTvRx6r7VCJLr32bXqPQA6FQduiBOwKuebMi%2BiU61C6ky%2By1kZh9l41xZvHIw%2FVtbiXtJUTxzB9L%2B2gfCsjFDa2c1sC%2FDHffmdePUT9FGBJdI%2F4AxkX5ELfP3BMcwAca9qSIyFEJtSPbzfXBfLdvOglBsEMFAmFgqeRfu4J&X-Amz-Signature=55f5dfa5928423f1a98d22fc8e2a994deefafeb6c003224cb77d2f9453e1df66&X-Amz-SignedHeaders=host&x-id=GetObject)

5. configmap에 어떤 action을 할 수 있는가?
6. 주어진 문장에서 옳은 것은?

    kube-proxy role can get details of all configmap object by the name kube-proxy only


    kube-proxy role은 kube-proxy 이름으로만 모든 configmap 객체의 세부 정보를 얻을 수 있음.

7. kube-proxy role이 어느 계정에 할당되는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/54e0a2d5-09b0-4613-9a26-fb1465ea0001/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJZ7W5N%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvCqKnAdxZUVaOf%2Fgg7rv9e1Pra4OlQBYTF17XEtaAXQIgcTkvtUi%2F2QUwTAwUoRlLDg8zs9rmfIwIbSfpMcpB5uAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfgh%2BwTtxtkUOfUByrcAzpK6cbdqvKD9JsXMKVsvVXOsx8vf%2Ff8avQgwtWqlszaKOwyuiV0RledZr8JgmyeNp3GTwzv5iZ8wlCXoxBUGWlomzj24IngUQ1Jivyyb5YPWNl25jd0Cw5Iyn27N4Q42qXRkaEZFF%2B9DlsbOtUgpX6BZoMS%2BO3NAoPyIlH6FcQiJMalKF%2BKAMQavQ1XZ3oAXtarMY5sSbb5sEj2PtizKHFQoyPNvM0BEX22qvzGmLnXOACzFx5a%2FUmFOMd5w39lgt1dK%2F0n4rhpm2Dg29KXvavsj2Uz7kTUbipM1Bm9om0OyZ5X%2FH7klTa0%2BXKwl75L20GMtPkrSOo8oQ70qIPdVjeFxVtfm%2BS2DcdcpEqp9FIAY6EZ00Kkuf83109mWLzomLHvcXy5N0cvIOkf6pOOKWaE0No3MPn6qFUogor3013a9SXPCdeXDZ4qbhWlUW%2Fih1wKNJG2reVwWRkrBj6trRxBJyvvUwU%2Fnsd7iZyzEV7XzkiUMLANGNsxeXCCnRHb7H%2Fyksu1zPDgCfjbKkqe%2Bvm8V5K79VNDCV%2FifklrLXreCvTsNayYUsA%2Bej4P2oyjkhGqleF1O5VMO%2BVk6xVVjimLU2YFPmS8E2ZtyD6ogaflAHqdRQ06inflaIv%2BMJvFy74GOqUB8NK%2B3PwtZjQqTofwfVIP1oA5ckhumL0uFYqE1Tf%2BjYU18ALP%2FoRFIA7nTvi5a1rrzYur9%2FbIAl6HmVUBb8akNTc59Hh%2FDqIyBbDe32WSBe%2FaXY1PxMNPu8JBX55PrXZsCDWV8jsLi7mB3mr3h3TYrOmYNxe0YIOnqQ0YpxvOYdKtuseDvrJfVc942%2FCfwN5nOO96ZpUvItb%2FUqAmb8TtXEBAou6K&X-Amz-Signature=5c04c5c8bb2b58180a95446898b647c5469436a000ba9cff13089b9d5c1181fa&X-Amz-SignedHeaders=host&x-id=GetObject)

8. dev-user 사용자 생성. User의 세부 정보가 kubeconfig에 추가됨. user에 부여된 권한 관찰. default 네임스페이스에 list pods를 할 수 있는지 확인.

    ```bash
    kubectl auth can-i get pods --as dev-user
    ```


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/0b1c42ae-2023-4508-a739-bcaee8156d7d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NVWL6W%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYQ0NVALjm0BnViDvCKJgwj8tM1WzprfViOiv5Cx8D2AiEAkB6ScLsnvNPasafSK%2F20IEcko0T2s0qIEoa%2BJ5x2DSgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FwUT7qyEkswuWoDSrcA3%2Fc8l3lYy2XKdOvq2GFEWQ%2BVTBEhzzlf46jWL5AIMLeGqDQpjgBn%2B7DRlvOIk3Pny%2FHZ6NmalsZaVYyLMjsKE6ra9AqrD%2F6%2F%2Fj12zN6%2FEkVoMt4x1jMUiMNDldStnn3edzKS3zMxZsBPf8sFTedUVbtUU3lLO3Mxc%2FsblaSuW8BqxeF0xQte7WvhqSunSc2oaxymi1%2Be5eLDI6FwY0SJzIpYQyiCqtZ%2B1YDxVeJ5Co1cOEwMwqPTZ4iRHVrwZGPAnY67R6tYyH1WFudmd0MTIcX88bV6IvgV%2BLRVr9f5uZwetYXiStKLwx8MAAKN%2FYJMCkhWFMR02qjAuR%2BktPSP2XdBAWtAzgAcW1q7zbMH98fiZpOkL9ZMKpZYkU9cndFXADQPNdGA2qmdOKP%2BtseeYlJTUWNDdomgsrtLPuemdtQAiID%2BXh44rm%2BW7o5WUkttk71S3hTinUMHz120eb6xXCgqlY8%2BHDfm%2BEHXOJRg6%2FhIKOXSFFVdsLvtRkMh7xUtgcISf4e%2FM7tUJ%2BoBC3zvIzRXZc%2FIEvwx17lWIliGcDxP12ZbbBEmK%2BX9iR2G3BBlK5%2FpBGI%2FKFVM1aS2S5YKqXtFFleYMrC0O13YvHDw9eTlWCUZgR2fohVT3AMMOq7y74GOqUBNA7V2VeGyP0%2Bz1QblX6LPpL68YVXCLf8WD8I8y8t%2BXTjAY4PEMpeVAdgUYwIlPsMFCslodPn%2FBtS23TJpeHLh2mObfAJ%2F0FquP6fVEkdqSuEvH1hOq6KhkCthxigBv6jm6Op6Hv%2BEkYIKxqgEbfhbkWLbw1OfWH0mxlzmjdLv%2FXUPbiU49ktrA%2FYfAQU6nkHpCfbsQbchHjugt7hccR6x699j8zT&X-Amz-Signature=e957398b7d917b56f1882e6ef74ea7f72509fb175c9ba97d22e6183ca5f23423&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b19a7bed-8e3c-4bd2-9f67-86fba0324a8e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIKDCLR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZKjqSJn%2Fw8fvXxBUXoL%2B9UjgLVU1rr2IMA%2B8roIDMrAiEAvKuuYgZojxFYTQrmACDjOH30k2C1PZqyMkBINq4WcIAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6qCbVTadBkwTpJ4CrcA1f6EA5Il4OELD6KpFzXDvtcR6Sew2iDWLIURqcQBVsdjhn1dzu8D9rw45Slq8e9kyklHskv1Cd%2F5%2BIeO2gObbJgoR6BLxBK8xMBJ3TNs5Q4nCspI6rfBZnjKc4qwazpEpZC1bYbaDpXG5P2oTgwObpnfHkiJA6VDwCSSk9Rx9BcMTrnmEKmoJseChb5UwJ66UC%2BcsRDW0stBOJs7oKNlhzjXHcSZ%2F9ablPkLx3OEZswZhXOZRVaBB5loqqVIB%2B5810%2FCq1sGTiOV%2FD8cEkmjkGw%2BjWhIOHEn68%2BYfDqj1YQNNEqsrXI13LO1S25eYIBY5WxvFDs1saiNJNLjIHQ9kv49FsQK0n%2F4q2PIEin4%2FYr0cqXXHGr7fQq8F9TJLE6qPuwEBCK2orzRf6%2F7YUz3Kc2i12SjSlzs1CZhaMUIgw0CW%2F1MqzuUG6pfwy86xvVifa8rjgfIaieq3AFPk%2FAtC4fHEVrjz24oleglGV7fnZBY4NtDZA8pzY2zxOTVtovuENRZFbawcEJIFKSbNy%2BrPfYJLYWTCiHCsuzhEYOUcbx4u3nr2T%2BX2t7szvWkevW03NO6WdiUJbkjQ8SBTkPWnlvKQvL9YcAqkuNwRJNuDGmp20tY9bTg7LjGtUiML27y74GOqUBQM1Y1Kk4gbm6Chxs0bNHdIpk4ccAQ%2BZVRJjuIEaQAsVq4bDe2q6HwzwQ1CwiuI%2FPBNaCwUmLgtIpJCvYwXx26yzmTzsxiCbHhGw1AfsY%2Bu3GHHJSBDwQ7PfS7ZBxdsz4Pc6j3zMTAoVIhU%2BRk9owitmXEOV3qzIOkFyDzLv2SUk%2BvnqYX1uzf9J4oqprbbw%2FQLKZTAwKfXkrzd021hWbpuRWGJab&X-Amz-Signature=864d849de4fa5e77f942b918e7ee0da7d2a624d9fa6ffc7e5ccd448ae8820a13&X-Amz-SignedHeaders=host&x-id=GetObject)

3. dashboard application 배포. deployment 관찰. deployment가 사용하는 이미지는?
4. dashboard 상태는? 성공적으로 로드된 pod 세부 정보를 갖고 있는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/21e35c7e-f93c-495a-8768-11ef51201564/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJG73Q2L%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjYp0LG7R22u0dSRi0og6lyglXQvz%2FaQFH%2FdvVJe5%2F1AiBb7gqrNgQifXQQNzs%2FvAFCPFZlOZ26DXK6sMb596tELCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtZdGg28x9kakPA5QKtwDgOlxZnmcz8eM1%2Fqu0Zo%2FaFl720nCOk75wsObgc0LQfWGAS%2B9%2F43N49hO%2F175Qmz1Ta%2BAV8%2FcX8jsmGdP6Rmwvk8crf%2BRXqagK%2B408Mdlzno7GPFZbS2ygBAX7%2B6uGSQrM2K%2B%2BjHu444gSsr%2Bm3h0UomOXdCir%2BrQoW5NJY0eXhQb992d60ynrMSuLlzamctnzErWfdShFfRx5GVr1Es3vmZjVCUz6auyNgKRA3F%2FRMbUGoF0LlDJo9c12sSvpY%2F7TTZuumVuqwYnOBz2rCE82rbDG4oHrzDKPZGafg7laCM%2BvsOgmUkJIcHeqwVcMdxmM8RppsjBVjIznzgP8q0WgyaIQAi2%2F4uLPvVLb62882yL2Na3NIttrSEwTXT%2B2dBc6QyFckHzTG2H4ivUaRkmvVXD3i0%2Bb07eyUPiEAlQ5TdsbkTUMLUX2onqagR1uf%2FPf7JcYMRDA%2BHPEnZWppavGr9kD0sY8I3tBx93VJ4aArF3kEaGsi%2FfHNdrpZTcERLqq%2FgfwIIPqjZvPZSBCFnyELyuKR1Xb9%2FuSQpmQxhUDOZn0QH4Tom5OsXo3Z7p2NxDOwoHMeoPIkfNMigiS9ZbAEHWCSgi%2BhU%2FLypR0mNXph7tLdk3DO8OCGOuufIwpbvLvgY6pgErYhNq4KmHACI56P2aOwJgtn80ORXb4CEKL4blbZv3P3%2BzuhtRFUUzcfW4DI6%2FXy3vKJxPZjmJcpqzcsI5Z2ajfWD4gPo22745CX%2FCJit4ECJCtruUbSdPq2S1CELoueGB4PsGNJ2EBTZ%2BBwR5Gay%2Fv2wxRFqlkfyGKziYBDsdJ2boNVx%2FZo2mScLstFEPGpGZSLcUsfOTfkQRketnDSMyZ9ABtJ9c&X-Amz-Signature=48618737abfc4c0e56e5b15ffaaa87099214794a19935e95e9f699438ee0dc5a&X-Amz-SignedHeaders=host&x-id=GetObject)

5. dashboard application은 어떤 유형의 계정을 사용하여 Kubernetes API를 쿼리하는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/7d4a5407-3552-4911-b8e4-141dbefd74f0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2NY3QDY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQ0M0Ou1V%2FuUkVNjTVDd1AZCW3%2BWXR6LG31EPVo3EGmAiEAkdPK0UQziKjvi1k8XL7EpsuZs%2FBHBCpuQKAckd%2FzmFUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSIXo8ym%2F6NDZMBuyrcAzGlsSqYVYr2rcs%2Fd0hqa2%2BFkGL9XnD8DJummK0bEHP1nCkbps2pjc3oYvPwXjcMOekI%2BRv%2B2oTEiP%2BeCcY9yhEpNGsNjLjcTcSFmY1ilS%2Faim%2FhsoJ3F1epOQeuhOm4TLbpjgF31iBqcqbvf3syWjXEZmGE3K40iRDNtWDg7d%2BGQdIF9RW6heUBn8EmNtSOEHlz4uNJ%2FhHMbBAuOmFbm8cTQDM4iegEvA%2BcpLIp32wEF6IYN%2B0FWl2gR9rMyZ4N1s0aEwytawyV9hTcyF9ahQJJXIaR8H%2BctVGybIPArAzxpS%2BID%2BaNKxC4P%2F%2Bn%2FMve4n%2FYwlX7WbqheIqIe731xY%2BesNNxjZ8U9NJR1wpQKlyA1xPUApzIlmi0h134ETL5ieDYAmfjGUwK3JbNUYK7IeIzHCasWjHHLJ%2BdcLMeJIrtz2xuSngHuzZT95%2FuNgK32VJeJ9YVex%2FiGAUcTVeu06ImNQi5R0EaSxeyQH7Op63ALg%2B0Bq9POkKsMftysEDlGo55uH5qdXUOUbrJFArSaCJP%2Btd%2FKJPUiF%2B2gDVVL%2FaIQt6MJz5bMALqUiEoED%2FfcMCyXIfUrEoKsUX59ue%2Fe8lZC%2FVQpjbl%2F7rME0csnvvQoiSGTZG41XzXon9UMLu7y74GOqUBpFdh1QZI8mD0t64qEnQQ%2BVn1%2B7wfz4WLhjyNT%2F2%2F3i50nUPzWhK24AneBzhiHxHGRhS1Jq1r%2FO%2F3G%2BWNSsn4cYwzcT435mMBPipcvANJyh3UZphSvoTuxXSwb6PIxoyU2zLYouassNjerSRN1ss%2BzSjCXFKD1gvQNzh2bk9Ru8AYiQJA5GB2Yr3fXLjALWz4d35%2Fu4kNR%2BWidQsLzL7IaxoMPGBv&X-Amz-Signature=cb396390f37ad6a94a01c5c5579f3c0ed0d93b2971a542bc29c02fb584c2798b&X-Amz-SignedHeaders=host&x-id=GetObject)

6. Kubernetes API를 쿼리하는데 Dashboard application이 사용하는 account는?
7. Dashboard application pod를 관찰하고 그것 위에 마운트된 service account 확인하기
8. pod 내에서 사용 가능한 service account 인증서는 어디에 위치했는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/90031244-a1cf-4874-8238-fe8c3798d305/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHMRYFQM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6BDJauQlYaDRjQqVftqq6mnga3auxpKwtsUVIdZuH8AiAbER0aDj6%2B0KRLMJQhPiroim5vPImZimGEJtibTE7mhCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FbDRXM12ZaBwtGx3KtwDpVl5z4vinboKHUSVXzmUi86LGrFSeffCbJRN8wvpltaSRNK8iG0sEL5o8INCUErhAmgLOna4ma%2BFwSb2oB20Sl198n7xR5exg7qGaoFtPh2JQMXeFD2BjYI7ugNgrKwZWkj0CxKZ%2BYgQnMofJ1Jt7XUFkmf8dVf41PFcRHvl6hZYpJqPqA4j18PMKGY%2BR5MPYa6lkszNfQfMuew%2B6TJl0PoMnu9Aqz4%2Bcw1qXYdC7RYiLvmVw7z5Vxy5o%2FyUQ0BIZ2GHD6EF2VhdL1f2y1GXrM0ZjSmj%2F%2FHPAMFWL%2B0nrOp%2BIwLoMaMM13OHrvyc8FyiZzD%2FUEdTWl%2F7gsWmek11OA%2BoFmlic1DdqYXhaPy9bLE9zEKJTor4y%2B6YbtT%2Bp9%2Fg0Sgl115qIBAvimR75DByXLcsPCsIQAcXfKkNBVSeNo%2Bywq15RXjH2DzxkrmyFO1nznDPDYGJK7Cxs%2FBtUC8lLLNyWyif7k3%2BkafPFeXIflpdRmtZAxZVTBEnibd6APVNDPxIosqBRKVIgKxpQzpTBaQsNpn4CRFwqicxd6w8XXpBzYCQ55kkxf2Qvhjo%2BYPzJUg1z6zvFltlJTaocmVgQSJDkn8ZhvAc7ks0tfNP9fsvZj732BbyJNS%2F2W0w%2FrvLvgY6pgFJ79JTAuo7Kj1opH0mjNExZ3qk5IzMIVNht7uzw%2Fefhra6rXYnto1ofCiRemE2d0R4fpxW3jDn70Yx3ljJ8C2ziyzUVoSl3lqqVFo%2FnUpo8Rc56t8SINzKR5dXrxVI%2B%2BucWl6geFQWKE%2BM3OQ%2F2YYsPAsF%2F4j9NrhqFE6GAKIN1RIhKnMtxhHfH2yUhh0vGZTGOPWs9NSd%2B%2F%2FsR%2BgRSJIsNZDKgqbH&X-Amz-Signature=6bf7886985dfc51da5127d4f957b9cd6246374b2220b468dc1e23b9116ac5da0&X-Amz-SignedHeaders=host&x-id=GetObject)

9. 애플리케이션은 Kubernetes에 인증하기  위한 생성된 올바른 권한을 가진 service account 필요함. default service account는 제한된 접근을 가짐. `dashboard-sa` 라는 이름을 가진 service account 생성.

    ```bash
    kubectl create serviceaccount dashboard-sa
    ```

10. dashboard application의 UI에서 access token 넣기. 새롭게 생성된 service account에 대한 authorization token 생성하고 생성된 token을 복사해서 UI의 token 필드에 token 붙여넣기

    ```bash
    kubectl create token dashboard-sa
    ```


    dashboard-sa service account에 대한 token이  생성됨.


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/6b5ccc86-02be-4794-98b8-6ddf6a01cd07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYAG5BY7%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FdbXEqOgnGJtgFKAFqpVP4AyHIFzt2R4p0zIiKxqvXQIgHM3nGN%2Bmom9Oim15SbNFXaVolbQdyvxSSr3t4qdZVP4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBoW87ybJS%2BdIQidCrcA5GOMGMkVirRSu6ahb5S3SQliK5kXZmwVeROtR%2F5kuEElsRTXbYYJyi1FIKMXxdCJ1bPaqSGhKGAS0tuI7OwJaH3dLGmCMOx1bDrS2oodTX05EXpBv6lrxgXT%2BtXkfgAbafz4y8XeYLrpwuAtSxzOx4%2FOck%2FkmNL9BqiStRbB4wCTdeb8x03sMUGNUwBg8O8t4od%2FPxKMPp7JjHz%2Fhwwi5KD2uT%2BZCRUXzGZGhVpE8ksa0VIXxsy0X5DS0Ef97BHWUlVLpTB%2B%2BkqCeue2Pq1tyhpOSZW8b8kQG6tjXsxg%2BtXu9KBTZe8IJjE4wF46R4GSFasSgD12SjgsswJMdHGi3UU1XyMnmkpatGX7IN%2BZf%2FNTwoiztBELm5fXy80XBuHl1qvlEZ9IbyXrd4WmO5pqxrV3YKFYa8l%2BCaSFvbNUFs0jaTAzclhRG2HUHnRwO6lJTswbY18cRQGqRHC0RSy3aVU9myka0JRnELEc2FEpYFU50PitxxJ2wPdF79UqtYaSn6hsDGomqAGMOykSDync7v13mzeqrlG%2BV7TBt6lUzN3hjqK9mXSB9XcDmL7IxrFdWnUTqI05%2BM%2FWKXADcj62UXL9j97YNdXjguDepNRS5a7xpMXujdMTgO6%2FjtmML67y74GOqUBs7cqtJXHUvOaZEApSTO63Y7NXRa4chDsM32qFlvbfXXsqk8jO0NlVU22ncuLAXPwDeC0qG3WYn1AFp8Dmb0%2B3kT3ZsWubQio61kMGWIPAauMic9ug2FAjW5NZZ91r2RwCejOnSV18Rj5ur%2BLfMoXMV8UuvS9msDqp9BgGk4xDQpGXE%2Bs5kOsl%2Bic%2BvhKZpn25yTFCiSiwu8xL67bghUkh9UGMDoE&X-Amz-Signature=5102646ef7ab8726942e9622003713af401f7d66f45bbaf3cb8593ee96fb389f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/03b8d9a1-823a-4f5a-aab8-e9a63822e005/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNZAKHYW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwn3uQSuLpOP8Bk6FTOkFFfEqdi4kGH5mCVGKO%2FOTZTAiEAoEnE71zCjTJQCfXlVm9Kba8oduBZ9hv17Y%2FPyjsjtuoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtulapmNpobN35seircA5rismwflfGi4J%2BkHchBVAso3L1y9m0VFDB2SXefGbuUhIaLQ7ndPiPJO0l23W2GBd9uOg%2FpPJew4BtLB9BFstGHNLQ0U7J5XfXmBZ7tvMVSu%2BAOnrTulWiCRa3zUOksOxUAMNV7X%2BqZBT5hpH3fX7hDBPv217%2BvbdCsABaeAZ%2Bs53D%2FYET69q5CnSBZpPLEkVszXTnoMVx2Fk6gqhYxe7DiB6MGZFb82mIP51Em9ZRdD6IXIu7c2uqISsiQtVAPx7wPQO1dsIkI%2B82x37LGmpCMivkVWwLbTf2%2Bbn8myOUhbMwKUHRY55O1HETlSlvMTyWNDoHPnDwYH4WD2j8yX1uaogwa6PGFdFg%2FDzp1RnYREwS2LAjbX7auxDSfkvK9bZfx44qH09kK91kAf7DC3GEWUbNWHchmWyw8OmDCWU12lCTtkZthL3IrheXG8eeBnZV5DMv02e8Ryp4QQQjBnQXEWRH2WoT9OcZew3%2BYSe429Amd4%2F9MDjkjR6EoEbY1nJqS6sbghZM%2BGxRu5PqrHgNNgSp%2F7mpRMAiFZlrbfsaArA9tpHAHZ1sd03tk%2FVxGELfVqCXfqQ9GUS0ZjMWMYZNpHHewUhs0FDiZqlHMRkPaejr%2FETiPIbA4bfPvMKbEy74GOqUBV8EbWa0o0aB7uvgYq0CXyyjS8RVXtZqaOhVysWIuBWpODiiAobk87cczyXcZM9P%2F8A%2FEK9s29PnwqQ3vlA1ASywMgv3z%2FkaQIvbKFYpucAQtm81LnHlNncb4kw3jU4NIKiCfqTMcT%2BvvUmC6Ev5fWlfXF7qcuiHxmS9sCoYo8jp39RhoUJONjoWy%2FhW9X0hGBjZ4z9RjKNz%2FazSjwNvYYp7zjaWj&X-Amz-Signature=ac8fc5fd2b6a2771c510aa0acf8ed319ede6aac64aea2aabe9eaf60cfd1ee0bf&X-Amz-SignedHeaders=host&x-id=GetObject)


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


## Security Contexts


## Practice Test - Security Contexts


## Network Policy


## Developing network policies


## Practice Test - Network Policy


## Kubectx and Kubens - Command line Utilities


## Custom Resource Definition(CRD)


## Custom Controllers


## Operator Framework

