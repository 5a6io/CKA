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


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/feaa57d9-69a1-477b-90eb-075854919446/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGGWT4MZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGCUdkPRXEW20Fo1WJfIKsPG%2BypHpRLn01pq7MYB7ZRgIhAParJPPQWarXxpu86sH%2FQ6%2B%2FFXw1YXLAO6%2F%2Fk5gbsLJiKv8DCEcQABoMNjM3NDIzMTgzODA1Igym81xb7Dby0T1NyOsq3AO2gAqXSgq5Upq24Vc0E21NAXH3cp%2FuRtTD7%2BSlGZoIj8zsx%2BNz5rAFNy9v19B1tco28EDN1QTPy9HO1NuLaZms2PmuWKbB5zu40cXtoF%2FnX5YmsUYPAnjisCg0a2I6vg8LAq%2FRqLrZCwKzwsaLm9S7AdDMiZ2%2F9EAXdE7hhI4HKJ0Z5X9LChLB4wT5j7Wyi%2Bdkzq9dcVEcAQ5LOqig5kWMSbzEFmUlPFKXQxRH0g1CaE2azAD7vb5hV%2FNATHqxfNiKQTGhL3pmCN%2FM8OCYC8hc%2FK%2FOuvNzacqOOHZPSl1tf7pdLarWAX4%2FjZ22dVu4C%2FdVpCbgUNB8nQ5h%2Bs%2FEcUTSSJvHfmcnaqzR8%2BJIEp%2FYovCAJQRZwS9KA%2F%2BECxYoKbYlApgSxtBlvkxmjXUd4llri3Ide6%2BOJJsh32VsNMCzDZJcLrp0C%2BXw5kedO5cWDFO0wLKqmI5zVQO5YCDIcvyspsGK3fmyFjKr8vfqNQsQ1hAoMko7o0VH5MYqaGIl9zUU8tHXAAnd51Bo819ULafajIp1Nv1EJbCTfNn4EInUMQBt3oAIPml5btNsmQvs%2B1wDSdOEqIc21xarE0k6QWCPhrUL%2BDZohc%2F%2F9fMFA1uT%2BJ%2FxYJg8SRtxci%2FY2DCAyuC%2BBjqkAaCMOY7LhDfBkbLBQEvXCdca2%2Fqwkf%2F0UDN%2FwjNlWPPAO1hHx4rNgAW0TQelsFPTD36bXih09khDkCtKrj0VbNigPutmQ%2FtxNFmmCAIz2VNDLE4yOcuuFeODb8aFH23vRyKdrKk031YpOQ6JwoAzBeGE6AulKn33bp1P0tAH%2F3wcXnNd2CbDn%2BVZfqFXkzssTp5dU62dPIo%2BQLjh6Q4X8vL6gY7n&X-Amz-Signature=d7260cac29ca9dae0375251db9a5a5cdb8e546713eb16cac7c24b17cc8c0c397&X-Amz-SignedHeaders=host&x-id=GetObject)


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


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/10644a35-55c2-4521-88c9-6839c45c9ad6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSRETWR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt%2Fx5sHbXkf8DrdcS%2F%2FRc88yKdn2B4QGvMqFJr5CeLywIgCNWFJUN7iyWA9HudIJ7v8hZmZjlhN%2FLArs9nwQ41P6Qq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGhf5eOXggmF7NkdOSrcAwAa5zGk%2BKkQJSk2Cgo2lRGvubRFhikPa1%2FTI4ZM6BVRBQHF00MQpzrPrs14dtRlwt3U%2BRbSdLHrnAbUzl8StHDffGce4HXf7RU6beD65Pn3TuFAkiiipMf2pAn9xbT%2FaSqmiJzQnTdXE%2BP4K%2BwlXW2IAUmYWGbLVaqHf3jT0rcuukuNKYlsG5XpkZvHkDxqyd5iU84XatVOtcGiyZo9FSSHEF5d%2F2Nc2Kj3oUHABSdDsP3TfIcOKvumWnzag8iDfJKMN%2FfMzczi01knnRuc5ogWnLQt4j8gzetZMJ5k85aHtydS%2BayrDKcYTYsuF243C664%2BKK2BiOuK7mKD%2F32rcendBHSMr996d7%2BNzSvlBWITneUODUI%2BKLL7OhWNX855v17OczAuelhvJBcMDaenoMKGAxh0HNh%2FA2TgfuDQl%2B2QeKv4itqEyqOLfh8L6ucTVmZO9r9NeGgXVHHpHlG0K3tjsW80ayvKogtncaibpguf0CjCB291eOiw9NgIB1Kyf9XqKV8hdW8xdWSKB5a1WNLkoAmHBi7Ilxf7DqiuVI%2B%2B6hyS12bhBGSGaU0OcMxppOllfwflxrsHu1EtYHSnK9Yc4bfO%2Fvog1DvF8MUh0h66cOtgjtSxWcInl%2FUMK%2FK4L4GOqUBtSbquGdVqZjszT0cyhaoM%2BWSvx5htjOjtk955xMuL7G8c9IBOtQT2Beup7hD2mwZFigaNRFEfAd5Mpl6uPJu5S5JcAx5Oa488MgpsxfdxbfFXp%2FJAukUqS5J0G5%2FiRP5xrrmRQMgDyzD8iQYRbnne88WEUSXvmI5aPM9edWKTwJ5DJxC0g5f3TTew1SCp3BBDgdQ4U3ijJ%2F1GcBR%2BjQbXi%2Bm2WZh&X-Amz-Signature=e6d0494e85f1f096b61891fc8d06b99b3b777ee01d1028c67fe0585394987942&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8dc7f1cd-62b8-488f-876e-bcde2373bb27/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5OTOCT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwJepGLMQHDhoLRoarEWSO9LWmbpkcuywjhFGhbQCS%2FAiEA5DPvXDaBVrm4KOHrU%2BqqzXGojFeus0ZN3H7b8%2Fjtv70q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJGwB%2BX%2FKbsOTAGPlSrcAyMTCK3VHP626SVNT5gB9yyEcStJ2kJVxPrzDbgOQCMyPiJupIX%2FFXBhJ2tCEJ1uNliI%2BY9aw2nZsTCmNDGdXSaqUVPrO9TyXWnjsxNP03rA7q2fLrqa2Bd9odAMuPggcW7wLO60ZsmInBIsgYAS3fwACPnMFlaZxkErvdbk%2F%2BiJbbk3tO1WxQGQ0Sf9i%2F%2FCqz2O4EGzBBuZBV8xbbDKxdtVodszQ9H5E10m4huZyRFHwyqUabA2X3tNcwdrUvC%2Bv1xekrqmMyE%2Bxvr0s%2F1FLBW2rozE8YltMs7Oezj8UjKF1BfoTEW6qtwQo5Y5KGBG7MAE%2BS5PsP%2BmqBx3%2Bd9zfWjiLOIUWYmVk%2FfM5lZRScTSNZrakdcrXZEG7N5ww%2BdwSvzQPuGJd5%2BUvl25J28dVeBxfGQ8xsaqVR6uiPSOC%2BDH4oxt8AFjA3FzmsQVQpud0myYfR8vRkleaKflY6IZIOf2VWpvtsbbmuTXVLYetR768p3IbHPovuoxk%2BIM7SrCicMbm1rasS24WOo8Bmg02DHG2vIC2UAWXy9HOeju4wsGXarYA5fak7ziDwGCS%2BSYPuqKjepctJBDSb237sAbrZ8uAkZM3A8ybw0IBahUYb7sDDSn%2Bj77ePD7ept6MMrJ4L4GOqUBNhG85Adz7vb%2BHd0dsqhpvFlZrvX%2FlKe0vdrtjuZDXJnG3dYNjIpiTY85v33JGiPL%2F%2F1V4DK1dCDQopkpPbOK9UdSz5zRxjPqZj81T%2BLt5MC5SpODXnVszDt1BrJmve4sP4Tw4zAoAYRkDfHu47MBHAJjde4SUtC6S3AKkN1bairEmHupTdkGfgKPxjxJeG7Pe50RmTNZNFPd0yFsPAW5yvNyRtyR&X-Amz-Signature=d662c430ee785ebe4dd927eebc2e769800807962afc89f05a8054e35eab319e0&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/cb6d8fc6-de37-49d4-ae22-27d35fd6cabf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVGNX566%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLfeS1ABYHWRbRcBHdmpsu66BJ2RQwTMAbUBiLms9GKAiAgTP5uVZBn7BEx9Zv2laU%2FpKcQPkooGlw7giGhSCNBVSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMtjUC6eQISLLowSpNKtwD7n8fseVm9SmGnfeUFthswI2%2FuJYTi4zmXVdklaRTzM9JgErz5j56DOSpWCp9CXyJhzqFzNwovRsBDBu%2F7w5Y4wr6hr%2B4%2B4Mzp7%2B5HJNzJQtdKNBbZNcVBQqmmouJfeO3YS8QJdh2W8Eh%2FwlSVBAektT1qcMwIvzmIYuK3Qkb4EdMJlBNlWGJ7QbovBfuwLRQYeYHZTPnHhkkfGL6Ok6WCkTP2Qz5sY%2BbqjEsc1lCCp%2FzMANkhjWgI81KOMtXCs%2F58lEzcVDPKl%2B%2FT%2FNIxLQAS1pRkKDkyIOdvofpWRBhhgYbZ%2FHzfEsTKkhJ9%2BhR8urzvfphlyr76XOCSYD41Kb6c5FohXu7B54I4wcdfPxQkoGFFjw8OcnyM1RRhA8HReMl1z1NkroaFIJ7mJDwDZbzOnvcYxPaDCU7GmtC%2F2AD%2Bm2hxxSh%2BSTb8GfY0mj8iGsStrP6UpJyEqybRho%2FOnsrvUJKo7dWQzJzQPb9SytREQqq%2FAK0Qzg%2FNxTNvVb1v2P6isMuHm97xdQrzg2U4J35jRki5cOY6B9g0pTYZmyJxACdA9CULckkeAGsCmRj6pe7Ya2o4ea8skHDz4S0unzVAqH5HE4BjXbueBZn7INEzgnZzyhNdUKBOHGM0hcw0cngvgY6pgExBMtmis4tpEgxkyJZx8OA38LKEL5OefhmPa%2Fd1K35nJ5jdVFs1t%2B503FSXaUSBZyakLU5Oo2AVOLHQALZWlYi2KYod123KBxs6NYuWSvIR37JRAk%2Bm9xeRpxIBFmo4Pqfqc%2FGznzoQNvqkViI6BHHBkQNJaR8XPCHyDhbsUm3HRpCrBMXvPsZ%2BZHySR26ZRwxkZgR2RdcuogC3S1WlQ9VOlE8tBFh&X-Amz-Signature=b9eae84eb73c3aa8c6e446c99349e6d39693f464ab81b678a28b179da49435ba&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```bash
    # wc -l 은 줄 수를 출력하므로 -1한 것이 답.
    kubectl get roles --all-namespaces | wc -l
    ```

4. kube-system 네임스페이스에 kube-proxy role이 부여된 resource는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8a815837-d7ea-41b3-a083-8df4c0eecdff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMTIVWIO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeh61acXnOgprC5gEcPGSFGl71ziWuiVeifLR3rzwqOQIgZLz0SmpH5L8LnavVVWAxW05HYANB%2Fd7oXPccaBeUC6gq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLoW%2FAe%2Fb5Vl41PrLircA7ZiXR5tOA9ESxzMpiBhnBSds392KGEh0rRXdkJ87fEoNLF4tARAwEv7Hau%2Bxa2EHUo4x6aLwFRSgtAezVjG5jCI58KFccbyj6dvHtKxSwH4hy9x2Sqy%2FYjFo%2BqQGZBgScTlqBGF5g8r5Ts3JKA670Y5qb3NVcXwOFr8Btfa4Ax6ZpXd3ElU5sStOXeJt08DFqvj51P0DPkqFC5KI5uH4%2BNl4XXmSBamiwzmZK%2F4MGRPKlMgWaEY5Bqwo5KLYJrcj8pXkISQiXJQ1ou0r%2F8pzomP65reAHd4pizmNVYB7zmr0NINMNK40NW7FmlwtY4R6MB6GZIGr%2FsMOmgSkN0zKkGy8orcjVD5BoAM1g8e1fAR5bb5wXG17rprA3%2FQGPqaAFNLyKs2RkiY8S9IDs1R9gI6BpAshs5g7Reabxq%2F8oXVE8YMQZ2cyYF3vHHhm18IWm4firq%2FhA%2F4e1ojOyq6u2EGFl3DfPxZN1kWWOhB7PMty3wS60eKV0%2B8%2FxAYjWUlElFNwZR33auWkdRBI3AZs6UKkUq19Dt%2B%2BPa6OczH%2FnJbQxlcSdUqxm98vIAknkSPh6DN%2FXIBN%2BVM144Ypt4BfAjETkWJ%2FCPhzglytuySCIJb4LSpxde0nw15%2FdHcMKnK4L4GOqUBVMV8HAISkn7ZQiZDveRcp5ASrAiL6ZXpODmB93cxElG1w3BTsjlHiR%2FjJqopEGTFlJNjM%2FGRntZQCVM%2F7WfxcyRGKwisOTMRmmr8jLMBP5oXLB0B8n%2FTEyWynptQtDL%2B%2F6O5PFTpkdYMsF2Z6Ad06W9PJn6BpppZ2Yx6BUd190jTJrXIRBA3tSA%2FsEgE3wYwA%2Fapb1LiZUSdWEq4P18nXJybB0VL&X-Amz-Signature=e95283389ba76ce1d16ab3e6f44d909f38b5cad54d429e82a448d1bc22476a20&X-Amz-SignedHeaders=host&x-id=GetObject)

5. configmap에 어떤 action을 할 수 있는가?
6. 주어진 문장에서 옳은 것은?

    kube-proxy role can get details of all configmap object by the name kube-proxy only


    kube-proxy role은 kube-proxy 이름으로만 모든 configmap 객체의 세부 정보를 얻을 수 있음.

7. kube-proxy role이 어느 계정에 할당되는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/54e0a2d5-09b0-4613-9a26-fb1465ea0001/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DVSZKS7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX1f3mXu7CSlLEmSkpRBcOuIIviU0FHhx8r47nEDvx5wIhANpRelveGAZt74%2FfbwKLEfdfpsPCH%2F7DH7p0ph1qNPBhKv8DCEcQABoMNjM3NDIzMTgzODA1Igy5GiUXVyXUmqT8tYAq3AOgvOg1qy19pYd7RSjUthDuibYvIS3qxUv%2By%2B4KbAAAUas3PBA6MD87fYu1uUUY2Sbxl2t8Nxs8uulJeHHJ1dUntKqktGeRQjFqWU9VcxA6e%2FbHTRTD9pM1STQgOoM%2BpHAUgbt8sbE1oDN9LaL47EMrXbcbElsT6G5o9bmf%2BGaIABPsv%2BSHpI6ZWgI1hqaQmCm4yT%2Byc8vSaffHrnhOEvo%2BNsLG92b7P8DcwS0HJSgzd3TRZIu1isHb%2FlGQzcGkPZW7%2F9VcVl3DCsE5P9VGO1vSxYzhUFMG7dds0xbkUjk8qfpYEBpKBWmS4JoxjLnODPPJGxq16SPbS0AZq22Vpa36KIcxbvuHMHtWDrRcG%2FiFVBUtZ1WAkkAdKFrPv64X3cY%2BYJuzYfjB0QyKNeQs6qOlIsHn5BTIGy8L5Z9gCsCrBX9hUdbBKd4Ol8tsrQFYP0jl%2B%2F09B%2Fps2xmq3XTSoToCbXVoCWwvagqtXPUPUMTkgFM1zxxiT6g9gLmvGNnDMqD%2BcCuTsd4wwd1QMBFO2iBTKdgxDLAgKUY8xzqT1uf3WgIZlKNebLxomawz0EPKvogNmJ0RU1Xj93Jkav%2F7UhRoHkk%2BOdY5QKy%2BAaWrJ3ETzrksfj0VyFZoW29fOzCZyuC%2BBjqkAX%2FEfTK4%2Fsq92DtrbS3a1Q2bEVqSz7AsmW22shKi5GTSdWdLfci5p5TOYsGZhCv%2FUnn85SeeLXs0fGTwZC2AVA8lAceOykL6vqMECT%2BeCg1BewbLwgF8AeatGvwnIlJo2KZCQUgfmQP7nI2GcMX5OCzUuYzWHVvJJ3dVLCXCRLgapUhAn2UKkJp5SyIYfFbupdjqLdccNj%2FBW5tUalwFYnqzrWMX&X-Amz-Signature=27529e3f84264cb0bc4b1d81447487941772edde7cb821d9431a440461a632a5&X-Amz-SignedHeaders=host&x-id=GetObject)

8. dev-user 사용자 생성. User의 세부 정보가 kubeconfig에 추가됨. user에 부여된 권한 관찰. default 네임스페이스에 list pods를 할 수 있는지 확인.

    ```bash
    kubectl auth can-i get pods --as dev-user
    ```


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/0b1c42ae-2023-4508-a739-bcaee8156d7d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632XMGFZX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLnVD4BZlZzA5557B1GX5UJX9H6Uya37CIMF%2FxfwiuuAIhANwP4lcopuLMo%2FV%2FnnIdZXn%2F03OLjOZ5tBatYZr%2Bidm8Kv8DCEcQABoMNjM3NDIzMTgzODA1IgzikRSveRi4ldVrZKsq3AOU3I5l5hc%2BbpnT%2F7mPHs7xY82qTHvHpPY%2F2Q3GxpBD7E%2F0%2F7IQF2Jm5SANtWjyuwBJ8i6zjsSsENjkYjGRiEmSj28wSmzenLeUo9Noj2GXlC%2BkumqxaHHqBnGpiv%2FIK%2FT4V3Ecr6SzFrVdSuKQdl5VbFWzScfHwN%2Bejy9BjR7b%2BT9wS8%2FiwKGc3W8CnkA%2BrzCAzAYpSAN%2FR4FmwNWVxNU3vCIuIZmQ2s8dAJnkQRFzjmYrOZ4aGNiSzt6v9jIfPLk3y2wTMTzBHhCWq1o0wRjSOGDIBPLpkhHsWM%2FSSn%2FvdHpcVJc11BwKHllhz8i7sCebXVwFogA0IoFvPTSF59iKcmRwNWOSiJqPr7c2nOqGdPcWVdrrzHEHDTy%2BV6XuFzwAj91EgftjGjfJI%2FlCj5mmca4yVJG1dzewlj92LpVf%2B%2BmO0bL8Ux4bGT0db66gqAWj7dWwSJpvXiDR%2BtTM7aHvVRiIPbmyUQHkvSwe5tphnCrU2tqVwCp%2BoV%2F6ONGZn8GlImL6OvkkVQaJGsFpcxyGL2%2BYPP4YEE9q2CzMLwEXuAKSPrTitgkmQ0C8Ynuh9%2FWYQjESQJhlwJAB2B%2FxwKullp%2FXopoCQEak7pOIGHSpZmuuI3%2FYrzoKas5gTDD2yeC%2BBjqkAUMmn7m1u55CVZdah2DZmKsjL48rMuELNxmty07HVdKE%2FQFgGykNSImvRN%2FJEw0uBAbjYVJV0qPBxhHkWT495%2Bi3Kt%2FSn39itOwyakJ8X6EcwbjbBJGrgX7X5AxMz9mJ7F%2FT0QgVsbgL1jEcfmTwJ9KQ7oEGWSIcJAQfshfgnJav2DJgteEi2LZ8fZf6A3zNxb97Qb3eDB7tDOh%2FEe3NSkHSX4sc&X-Amz-Signature=2b28909643937d2e0938f5dafd6c34f78d560f5ed7b9eb814918047b7f52fc72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b19a7bed-8e3c-4bd2-9f67-86fba0324a8e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KDKARCK%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKS8h7IXoPyiZC6bbOv2NPQA6ia%2Fz5%2BuiwzMV5N%2BxiUAIhAMOHqpiBlX5iyu%2Fb36kMQkzDztLizwCOFrlZ5kyaJuY9Kv8DCEcQABoMNjM3NDIzMTgzODA1IgxrWpOhHkaa2GFZFGYq3AM8yaCWyu%2BZiiGFsBKidd%2BBWCSBKqZtZPmsXN2c48qVLU7z5Nz9JAL05zdOgSs6bSDp06UK9bt8KQF0epEaZNMZGAZ7ziSOGbkaRvJDRj8582KWv6LCID1hOjZ1LvBYUM2bLTCKlfeG%2BTcvzZV473l6ZeOvMlb%2Fi7cCvcKQpikOh%2FDrM2dh%2FdQPMsblTe2W9w85MwxXJG2%2FKYP5qfD5PKefywOaJtbpHLWHhHcSDskHYlCtdkHZBuc0VUsyKAIvzhj6D4xu646vsF%2FykIoFferbssDHe4IeclZCSMcD5mKbxIfEplKaH9LnXd6jM%2Fnr4jhXKZH80l%2FmG18uIZInlR3BLpdOZ%2B%2BgPDLJOYVgYQJYwJV18Dnuq%2FIDRHy73tjtsrRb5eo5uGbhz2MITCSF%2BFhuRor8gzhS9eJbRu%2BsBuTeLf1xJ5bhtTtXTSN5DxOddH%2FGMuEl4g4mVWuimTnsQdQc5PpuSNcT9zgQqhL%2FZ9LFcpYOiZHspmNaCWCcUcklVeaexcaVV1yTNplpm7hRLXedCu5HZXACQ0ILK5x2qgBTMs6TVruKn%2BDaW5eo7s7wERzthr3pheTYkLS%2Fi7OM73BZ1c8kExubBrtBQWcmNulycUOIO%2BptsogkcEHMIjDLyeC%2BBjqkAW0ExJ8%2B4PNIPBBMbSjLsGckW7Woh2cqB%2BwRceH%2Fa3ONQbqa528BIPjEoMAgp9KcO%2FYFBwoEeTBFuAJb63K1rMgA2YCfWUrRgGSwHK7smjF2WyG34Y8Qc4HAGH7ImC%2FLYQw9YRdSdEtyXxGMuvpO636pzsB%2BpxlxlMaksDmcu2OJNGPOSNtZP%2BPHRmsaN6H%2BHLsHOUvEgvLp1knOAEv1Jwr6Gh0u&X-Amz-Signature=963f97e4df08bf8ee10d5528ace81a48fdd34592356e469126eb0194999196a1&X-Amz-SignedHeaders=host&x-id=GetObject)

3. dashboard application 배포. deployment 관찰. deployment가 사용하는 이미지는?
4. dashboard 상태는? 성공적으로 로드된 pod 세부 정보를 갖고 있는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/21e35c7e-f93c-495a-8768-11ef51201564/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RR42AU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7RDA40qggHHeNl0zeKNVgrcyvBWBlkSac1TFDFoeCQAiBsYNAh6%2F6A%2BMhTZx2X9SPMZMX0tjj5pm%2Bt0ewRuCDYEir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMaLqG7icVIasegoMOKtwD4Z7JTFI5Iku%2FT3gF4940uMit96lcby3nZ7xvd9gY%2F23eMykT1J6d2y19m1aOOpakEtyZp7mlqLm8GQXIEgTt%2BTOslp1F8HzKr2xQVYw2wIZoKNsgxuY0hoPEk5%2Fcz5SAVYx%2B%2BovQlFFOVZpk1c5%2FoDvNOXGZbXwfYefS6pzQP9JOkF7b%2FYpBrGm8V8xhVofX85HUv40I65Qc1AbfgpYQ8O6LAOBkrHEAewAGHFhws1gAobx0Hhl0yQRIqCA%2B42kiH75hJvuU%2FKHeZpWEWQEiIy6rEZF0WzrcTI18xNahFHvroNtt5z2YPlfX3SH50Q9gW7wOD%2BuXnBwM2djssMoqkYveIvq8dIMLi8IdHdVaQ3JzY2o1%2FNW4xEf5RJyAyVEHVaIW74SQnEyzPWMIBzSf8MHJX%2BZaeY5AZRSuvH3qXA7SYsDzO3Id8Qo1ptDxWs46RHXgI%2FKvamk4QIw6FI5Ap4f%2FDkTpBCIJQHhlhwAdSX0xnMq6tzhhlwKeJv3BkhsAkklhlIUHRh7hvwT1h6VKSqKBFAKmDbFHF2Gpek0zjMFMJrlGi3SVUG%2FmTFgPk3Mkgy0g3isByO2MyX2%2F564%2F2KfIZDydSLAd4Vq%2FpZ12KnUlIsRIBsm03KTAFcUwg8rgvgY6pgFmgrRRoTAfeEFGM%2Flu3byDkKWfUlCD8tDDndHb2ohCupebk%2BBM6y9yxyV4aEua4X%2BnpyNifG7ZsatxoOfImIz0FZCdmYP5e7P9CdkwmWGwJuaWmFjidMGAwso3MxyD%2BsS7O9ynzEBaJM9QpWGsQip9JgPWY64P2H61No0UJ2yRmUbFKEhLB94eocnkNuuhnOtb5gdLTYv9WI862%2BpxdLx%2F4GKhsena&X-Amz-Signature=8787d568bc537c320b2c7baa6a840311595784064f46a8529dec70870843545a&X-Amz-SignedHeaders=host&x-id=GetObject)

5. dashboard application은 어떤 유형의 계정을 사용하여 Kubernetes API를 쿼리하는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/7d4a5407-3552-4911-b8e4-141dbefd74f0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLX4OM2H%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Pn58a7yubJpKOap5kHli2usKYZ4MGA6IfTPdpDLYCgIhANE5TX7ySPwYC5STmcMO5p3Qx0ugtAOZJ%2BjhsxYAB2IZKv8DCEcQABoMNjM3NDIzMTgzODA1Igw1oPyqrWO9O6Jdxzsq3APJYojfhQh2OkqVu9WUEFg6RO9Na%2B0RHvwbTMHzGTf8Q%2BGwgHgl7U2wmD%2BQeB%2Fs4897cOyED3gkemV9kmzho0nuKVUMxTCyiq5SBjY1Y9W0myczqG9FUUNUXP6x9onvt3Myf%2B2Yf5Z1cq0DJ36oyEjBYnwLgDgnonYq7tAFIU9aEMzouNkDfX1I%2BUYymtholjEDX5ha8e%2Br01xbXwMrz%2BOW6Rrxbz1WJvAn1rK01xZLjFKigdJT9sn3XixcsOPbUgzQmqIdfYXtzbqWkuSc3HM46ejcAzo1B25YoMIUk07%2FELrdL6YwQ%2F8eilFmEVyTeO1KJZ%2ByPU7Sr%2FFvZlr5UpvdqnnNPFh2cwYnaIYwshlxFHu1O%2FXuuiKhd1Dd7EExhcbYb16kseQlAG7bqjQL1Of4AUdxehqigA7i89PxbloXXYVvafGy5f%2F184qhQGr1zV26DpJ6crnB74hzzrsafGXGcoTtqjTNwgWJCSFqm0GaHqRQMUXBgMoedANw95jEa4XD1iW5PrpND16W8VfyuM4K3XyWcovSWBeLND8p9GiQrZDFZmfkga4jAcbp6MMUuThy4WlVJ3D4BPSc64EIaQ1njgkTd6AUzlHM7G71PQlN0wsqsqbOH%2BfKQ%2BDXtDCfyuC%2BBjqkATvbvAfcCr71FToTTlwbk%2F3Qb57JpNn93OJIrC9OMFydQFcaF4RRpUZYcpTM54jmAn2HBAq%2F5%2BItCmbgpvPkuGWCICxnHQtngYb5lhySuy6H%2FPfC0Yic4e0qgxv2yk9nLWEAQcRupkLBdWV2TWXGt%2BM%2BNLjEez6hqdIl2baI%2B%2B0iB0KHl4K4z8NXS3WSgUGivewaRv%2F6f7mK2iBu5vBXKwbSkJwO&X-Amz-Signature=e194916dc44b0ece4473a703e80bc28dcce0faa7adec00d74794604812cbd59f&X-Amz-SignedHeaders=host&x-id=GetObject)

6. Kubernetes API를 쿼리하는데 Dashboard application이 사용하는 account는?
7. Dashboard application pod를 관찰하고 그것 위에 마운트된 service account 확인하기
8. pod 내에서 사용 가능한 service account 인증서는 어디에 위치했는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/90031244-a1cf-4874-8238-fe8c3798d305/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKZFHYJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ%2F4vNJQgGfWtTThy0tDFueMJrAeh%2FhJ1syXewEPgKjQIgTSTe%2B3%2B8WorTkHgR9VCW2cW%2BARcfRQ%2FgtGAe2HERF3Eq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDM%2FQnYpgdCQaSesB2SrcA6Bhe0xrr26TnfCre0x4cpHnn%2FjW6Yc7BP7YnfeDk0JoelLrt944VAPlv%2ByzaTpbCQzhRMjmHP1H7bzkvQ2dtL8e802Ws0c1xNd1DNFtMc3xHWOjYInzMaZDcuE0P80xgKI4wBfyCvrqmUM8XpicZCQAOwDBd2Y%2B8W2d6Clps6IfIYhnmnq4QtszVHR0BLx8HdT6bvrVJ2An9mQmREeXBAPiqivQo8xs15ZmzrVpU34jFqyqvCQXaJlCACxHuxF3lZwkvc4Xda0hvbeolYqZLMdf8vNeK%2BY9hsTRDJEAUO834sLAZ1HOyMzWeCI%2BNWz8XkoswqX0HzPiMNeRW41VT6ez388Ctg%2BB8RiyHuSa0q7cv0%2BIsIZPEifJ2AQg%2FRDWbXEidbT1uH9IIXnWq9U9DOyMafw6uYjLGEqy1UmGM3RvWu2ik8%2FbqkFAbJhjyzimcIwRQEpIUE%2BRCMmnLuK5Z%2FIH0KqTx1F18OHCNJt8fkkOCN2tuRpSt9Y%2Bm3gzuAQ7LOofX5ZOHs%2BiykfeRUKzwHdT6UP2oqpwwCyuw3%2BPmtkOCGsWhU%2FjmVgGzkZITVRxrG9L%2FhhYAqpC6UhT2Bz3ondgVdYEEDaTowapdWcsMsg8qN42FQHSXnujabBEMMvJ4L4GOqUBp9DT8LRNl0lMrUY0a6pjvctklAm4b4I7pSkQwQl%2F1nMB17x9sgzfAo6lFXQmFa8nMH9e1WhmjIz857GdfG9XhpFYVjMduwu9OjbS3NoR5kKGxxZ7lTpnW9RYyRixjbq%2BRNSM%2BK8FUdp%2FPU%2FCMZclq3OJhBQ4%2BbBohwkzcdmTp3GyGAdcTGd7%2B%2B3sX98eos42VEdRU0WydU5hpJmPSUW4Im2ZSw2R&X-Amz-Signature=8fa430f1e7885dde94160b021f984f96bdf600af60448b39e8b515e03432080a&X-Amz-SignedHeaders=host&x-id=GetObject)

9. 애플리케이션은 Kubernetes에 인증하기  위한 생성된 올바른 권한을 가진 service account 필요함. default service account는 제한된 접근을 가짐. `dashboard-sa` 라는 이름을 가진 service account 생성.

    ```bash
    kubectl create serviceaccount dashboard-sa
    ```

10. dashboard application의 UI에서 access token 넣기. 새롭게 생성된 service account에 대한 authorization token 생성하고 생성된 token을 복사해서 UI의 token 필드에 token 붙여넣기

    ```bash
    kubectl create token dashboard-sa
    ```


    dashboard-sa service account에 대한 token이  생성됨.


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/6b5ccc86-02be-4794-98b8-6ddf6a01cd07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQKLHVTO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQvco6qgFTxlSTuJZI2hhIyNFJ6BzpbbqNDxYM7gFE1AiAfUQPaajWR83uqkW4dqFnZCRp5KcqaZGMbqa7KL7oC9Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMKlejd7r0gRu%2Br%2BjiKtwDsVRwv4NK0HdlOvZr%2BxMotR7uLUZVVNxF8V8mJHoRw0XsU3nawuIc7o%2FDmBH%2Bnj7scr2LAEHgzbiovQpT4pOks49zR1A1Ns0MJimT5dLeb6AG9wGin5DBvaVMNh0IxtwKOIoXGkA6AKfjDzD3cLEHXV53v5WEAC30InaFOEr260Xh6%2BnWuQjYhZW6aKHqVi8%2FJkDtP%2BpxMrdCUpliY7zl1F2BmX2Zn498%2FAGE6SpbOts1tUZKxAy7XxgIrMXrULcYSZzYSkPdprUtB2YWS7FfolBVLyyOGifNPY3Nu%2FeLNmmM7I9lL3V4%2BrpefjUD9m2%2Boj86He9yBfmVJh%2FVdtGvZgvGxHPjFXKG%2FPfAoWVLBPkY%2BFMJ5Lhv6PynIw3h80s32dmh01PZXzsQD184f%2BSllYFNBMHCeHercW703XO2sEoy6GE0GwtzCiBZukL07swMSKT8MuFhHXHi5tIqanYMnhSUYR4M7%2B7Ey2JhkB23Z8FhBkBIHDSz5uAfeRNFSyrSH6pTVmPpPVlwCCMx7GjkqKNUeVBiaxGppOPZwVDnVFpRPhQWwmtUH%2BBCRpfxEQwUzz%2BHzL8AYcXokBXZfM3e81z2XOPpfaZoCrabXs5kTK%2FnktHjALjLk4f3HLsw0cngvgY6pgHdgl5Imfxd2SA%2FV4w3yX0yAvkGJkZ%2BklaZGO48ISjDoSexqqXqXeCuDKxKfR5r%2FeyAF1u86J3IzEmE6f4b9Gs3N2phkS7dQWX99Ahof%2F5XfIBmlzREn6KIomgbn1sRu69ktFTCAK307ljgANFc8iojzfyE4mZ9RBCm1AykccBJLQSgk9LCc7fbXLDSyi7wSbFLEJtVtDKIUjxdbhQOQt221q9U%2Bgwo&X-Amz-Signature=0696f47f564230aaef8ab41aa4da9f505724dc20884828e911cb7756082cf459&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/03b8d9a1-823a-4f5a-aab8-e9a63822e005/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IER2LTL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrHkLRiXS9lDg8CKuNRQjl3BZ12w8Syi5gVfb58epFTAiARKCsohIjKaiuUVSBVGZa1Woq8UbO%2BfazcywvMBw9Hsir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMBNQjhysNhX6Llc65KtwDVZ4X6%2FH2Q%2FX79hgV%2FvVpT872ql7kGRzaYohZqf8jHLZtNJahMdAmIySiyNYTvwXwIWx9bYOqHNd%2BrSyqjgHbl3er0Rsu0X2uWqnRvGiIqRxms90qtQ7Vxg09b%2Fvy4BWXg5qpMI691L%2Bsh%2FDobZcj0PYMTW4ILRKmsNz9fShr7B39u359a%2BkA%2FoIWbaFCD%2BXktPTluelfmkWjNT9lWAMnxAPoDBk1cnBQ5KVuLuvZGi4dJ5ggTK9PGs%2Fx2aYQGsu4wQemc%2BMFDzYJuSl7cXW4kF1veMZDo3tICeu9uyL2R%2FiaFcZHPzvh6sITau5A0A1jD84zRlULCwbfDj88fWRn7apgsSRw%2Bbbpo1cxMFyYRwaiS%2BEmzcs4z8kzd1tuhERG204Qos7p12B6TIBOzK0hZ376KIEUOJ4gbqWf0WD5DpVWZeyMdC3A%2FzSKMOO6bmDswKZcNSFRHuCkr%2BUaqQMEXAK8M69wGaaM5Oaj%2FE6Ii6viedYZcuFrTwT5mqvGinocHz5c0KleeOYjEvVsiSwHodVgpeVn2lPlTd55uB0mlW7w%2B1OEL65U5mhkyaUx9jUrDppo2qy1p0zCU%2B0YzCl41khRahj9Hn3wZcip%2FFNp635SdLdfPhLxvntIwBswrMrgvgY6pgG5wDsc5%2FCO2KMJaaRb9uDsP1qUeTeMH%2FvHbpoytTBSJTVjObpG1t6ddy0c%2BZ%2BUczvacik%2F%2FteFiDUbNkpB79Xrycyr8%2Bzd8Cp8CoK48v7VL7Kp9GtsPkoEjnlTgWRSSv%2B2qDBG%2FQaj9IS%2BHaTrw6hDSYUiY8zc1bUepg%2BE18Ybi4aDb%2BcOImFweem3j7iMsZEXQIIqxGd5H2Hd74cPJgI7IrHF2KFG&X-Amz-Signature=56bcdfdb832e3cd1bd83f0dd321d4dd36efc8956eb133d6ade18abbd526d3085&X-Amz-SignedHeaders=host&x-id=GetObject)


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


[bookmark](https://docs.docker.com/engine/security/)


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

1. ubuntu-sleeper pod 내에 sleep process를 실행하는 데 사용되는 사용자가 무엇인가
2. 

## Network Policy


## Developing network policies


## Practice Test - Network Policy


## Kubectx and Kubens - Command line Utilities


## Custom Resource Definition(CRD)


## Custom Controllers


## Operator Framework

