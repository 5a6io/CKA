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


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/feaa57d9-69a1-477b-90eb-075854919446/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7FEGKQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T140939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIA5pJbU4f3y7Rwk1Y3HTHra21%2BUjIiQA3q2aJZuZufX8AiAKHaGXoTlSfLSYiTqYs8nlsHFdvy6RTj1evP%2FvCtkwxyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMItJX%2B0pJlqoOpYZGKtwDaZcXpLuDhwyWW1wgVp3yPHLINmoN%2FyVuho75nvEyQ2VO7WM3JhdF2R3vSdsPvoWmlnl%2FB6ku73xDkKf2JJq%2Fbxa7znDB8wEgV9ctJX5612egCucaYklOlX5gEI67CE7QdFkqI4TMkK0PrOx1ezXFcb1wwB7hZw0VqAzR2I%2BLlDK86H%2FmXjXI%2F9mlXBEkv%2B1VqDwKht63weh%2Bk2xcLHeTmYRt6PpMNEtRMxIZdrahbCmWMaOoATXtFG7K774Nvov92ytp8HY7C2RIKEidIivzQasVmEJPx0xtTrK%2Fx8vj1VbZjSsc3b2jaEDI2UhGCvf35GIAHqVXSCaMwQn4T3vVHWLpYMO%2FFIcSCkiHv1QGvzKVk2Khb%2B7Intm8ncdBgTeJzVtBfmf8EURWNmngAObJKVsOwb58G7d9NbS2JnQjQW5r4wn6qH%2BY%2F7OOyFOrG0%2BSx%2BThnP2OUQHKbVGgL1Md%2F%2BtSV0TUo0jBqy9gUnN9SZ7%2FMARlABOrJmcX3dU2Y%2BdorMcJsuFpGBrtJYRmZY5b7JXE316f7xKFuGeiCjaqijGteiQugESiKaqsORHB9HyGWZo25QH7IJ1%2BIEkuSHJ6pjGMcs2EU5nq0EmgwRR2y8hpTsG%2BZsr2GdN9MzYw%2FJ%2FGvgY6pgGRl%2FHvzzHtIMbcOTQSTkn7WtQO586f7apYT5poaD7L0EU55I3E3Xcs8S1DdErcUCkaoI6hThiBPCWaHOBHjjJ9s3ZmoTgEGRJ6K8u7XENhPj77kf46exrwP03HKk95Yf%2Bq8t1AAxSPWGWi6iA900DgfKlf6uzko1lHoJwxKkgGQBqn2qOVHbABCE3s4VVzkS715vXyqkERtiRjkkY%2BS5VpJKaXVv7c&X-Amz-Signature=774f8c9f122785d7c41259c75023d1e9915f11affff4adcac4eb72ee33915dd3&X-Amz-SignedHeaders=host&x-id=GetObject)


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


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/10644a35-55c2-4521-88c9-6839c45c9ad6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ6A4PEE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIF3eb0TTRikQLGiIZaSdGD1uCwkOXSJFB5365Xqhy9P4AiEAjTXIBCJpVSBt0yCSvH3Rdv3SBEKj%2F8NTs%2BMbrSrCQcYqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJKaOFbTr8SLJ6s1yrcA%2BkYw8zj8mH%2FJYHBkRLkTAUPD%2Fg%2FWFDTYrsyF3fcWrXILzYZyfRnL4u5VEsApVXlO01Iqh1gAs50LrAUonKoo6fq0Dtkx9edB1dJi3RW4%2BDi14ukTkMjM%2BP10jyLVetHQ04Fdg8NuvPPgePwYzK6rBy6KJ4MLpf6N%2BfW6M5rIAdHU8nYgenyB0GyG5pBKnuqym%2Bb7w8FKcS0p%2BTzpYUNqiy%2FKmFtAkWq1WoNvxLkbQqpvBYIbGkRq3qETPQa1XlJ0Y%2BYLq5DhkLlEN4AGPGCE5PEfUPM%2FY%2B%2Ft2KbGP%2B6s0MHng9ilX88wYiwlelD9qvhCmNH4yJl9ZhdxS5e%2BBxedDj4s8jU%2BPshvvZDYBcU7lEIZSolTia6ktf4pnEfhW0%2BKzqbRDDHyoLC68jP9zA7Ylcoe%2F5TNrI2Kg8ZWwlnZ158c8AX4GoV%2FRnwJwQ%2FQ6vO09oHgUwBlRAEujsMN6yFHaOB%2FDnWWBN2yjai9OfDXYkmYcTtrG1tvL5hbcM2%2FGe9MIDT9JNoc7UMxh2kYMD8Bi5lECZb5mez4M3zcLx0NrkusJSPnIsJb6xK4cmcjjLodbz9I48NHixgmpQ8og0D%2BRfb37KlcgOya7kn6PuUIOdbvLtjdVSb1xU1TakwMPiexr4GOqUBkc5KMQyF%2F%2Fazxk7hwoFcYJXHU38oHqG7WgCOTaKvnmJ6OwwOoCPo%2FBeI9Lavuus7VbUeRakVxR%2FIavz8uv3sZPasLTiCxJc%2FTaBPy2ATpwror4yWEiMbW9y1O4vOgn7p0XQB9ZhzQ09e4Mi2QJ3YSZFU1EEfXNodGAswVOQeBQo%2BUkoFSyJQOs59Q2tN9sEbyfO1p8DqH9kdEiHXYpx5YnxbEw2x&X-Amz-Signature=0ec1d88e7ae28b0ff1edeacf6c3c019a58ee3d6f2de454ac464ebd9a3c1388d7&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8dc7f1cd-62b8-488f-876e-bcde2373bb27/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FSYGK2N%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDZycPMVRA43jM8l5T0NuEvre1Jc4Nklzsliq3RG06tiAIhAIKqtXVPAWWa3uBPoYm01r7ZVAWKsu3gDiy2ZfB%2Fl5Z6KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA8RXJ2uZSEoO3v9Iq3APRgh3w0oAmCA76s%2F6KVWg80qXrr8Sw3BH7yZNMT3q3Mhq7RcQlmAIsex5JU%2BzYXw7D9e5AN4Xw%2FgZNQZLIInQcm5EZi7Ctgsw3KiZyReZhvAUlyqNsmgUIS1KvO%2Fkp9zWwAyA71liI9RMSfPrJ8ZKPfcfMUl7gjf1B0BXq%2F6v2hGDxNYfY0KrDt2%2FV%2FtrxgVKaMPcEkA48E7jRlAxBVLa4MjKIoJS02soDWr1arKafKsomNhwM1bb2SK%2F5tQ8S8yi4CGIANiSTRnNTJGUxSPicLDIT5ui9eAKhFTkSEu9NkawdXMttq4mBjbSVlnrPW8mfCHR2jalmCSvPIpovpD0fR1uso2I8iGEFi6NNSRD21Qb5jt%2BrHrqFiUnkt%2BFHcHHe3NgzahoL621%2BhcUU2zANCe23315%2Fe8EI6CavE6I2W5FkB9xEauzVNro0K7ewQK06hMR8%2FlX8Yq8hNWvLrtRFLZJ%2BuY5cUkh2yYsJesofM6xl9ZynVQGao3APuWmwzxu1LIVwSMzEIpQ4DX4jGJav6F0dpZnpSvhDdAYFqDlZ3R%2FI5rv93DYm8lD%2FyGtRq8pt%2Bv%2FOeY12yTM425wdknc4AKkGEHJ%2B7%2BV1D2P%2FGllJALp52qwWm92V5F8YCjCzn8a%2BBjqkAegWuOA2lVIecbaz5KXv8ZxD0ykzO1dbybyX%2FuhnyGGprEvKKG6YTaLhyWXPECXeySv6pAJVJ37VwgZ3lVlHamGrjNmIjdUhAmaF9IYHba039UpBZotTRMY4Y%2BS1DO8r9dbErcqNVugwr8%2FBoVpHJs1E2ur1IsxHilDoplSYiZefwsFdvKUP5fP5MZ38efsEQlszOnvWI%2BCNdFjxjELtM1%2F5N0zp&X-Amz-Signature=b0c1773cb897cdeab96c012d2317d271f81d742ab317a85797b5b5658c6f2994&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/cb6d8fc6-de37-49d4-ae22-27d35fd6cabf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SILH27M%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCzdcpa1taniQiuFMSPveNnrltCXYDSagT%2FAWc1rPUESgIgHPPl9J3RTl7aIyU%2FCrFYVnF4ysBf8p68DWMPww3q238qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIao9VPRlRt7sIkTWCrcA6LgAw85R7G6%2FOkGEzm1HCkezXuSGpbH3V6C6E%2BvIsN4DqAk4oXk%2FjGGgYsKUmakKB4UYZr7Y7xY7WvbCGuEdhVZ%2FW0%2ByMbhRuCGFVARDJ33U44aAAiXcVRyCLgdlOepLumr453XxrpsrR8KXS%2FbxIO6FThpLJtLDRb3l%2Bpsgut2POofBqzrkIE4c%2FKbf%2F98Bwg0fkdDO2jxNb1Hco%2BOA4P0hydwx1JAwswYvYVHMgIDKTdEVYTicSfPC6iAXj3iS9kITTngaQRjoX6ArgKdHttbMQ1W%2BWDTMDz%2FZvRwNdErYq6GWQeIrjI%2FOSIAKlUVH45%2BWwII3UuJDHoIvMsVaOafJgmQZgPiG8zqpYt9nbDo%2F2BQfCzRAmf9%2B6T6J7qyRrC0I5IQFXLmSFZCC%2FmLkOhhifpkFQPvSnLvatLGNWoQBGgtcIaCOin%2B6%2FHyoJn%2B5VudhaWlrU7u%2Fx4uQtwrKXe1xcSZtuOtZ%2F0bqoL5TXdy1ikQ6ZbH%2BmbYjleX2RyLwhyN4LUoL5cXQmoLTmO%2BoAln3lWfXI5JBZqejPU24XU%2BCM6vxl25GFfbwkcbFOLk%2Fr0%2BNRF0sOTm%2FTqKXjN7q7N9VCgb5k8Nc1wCZ6eYl4tLXM8QmlvEkwzn7nj3MPufxr4GOqUBCsXkP7tq2SDr3OHZX1pdX%2FmUUXOLvQ00lMqNWQ4EiHMmv7wJcZrE%2BD9vW9WhcRZoYytHoT3rx19gv9tGBanmGAn%2BIsGMhLy9U08OP9SugDtpi07PP6TsHrfrvGxhtp7sWucaa7K0MymG3ioisrgs56LMOno8oAcf5RbWGGdEPAicITgIWG5884YZU%2BDgwDZQ4ZJdunhZQxmZS10Q60y7ENtdXXmb&X-Amz-Signature=111ba40a7863990f1cae272d09bd231f2701972ba3b5351166b037bab8f3bad5&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```bash
    # wc -l 은 줄 수를 출력하므로 -1한 것이 답.
    kubectl get roles --all-namespaces | wc -l
    ```

4. kube-system 네임스페이스에 kube-proxy role이 부여된 resource는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8a815837-d7ea-41b3-a083-8df4c0eecdff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RAXSPS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDF9AxfjuET3TF8PuD4Ap6Bi%2FSG6KeUQbmzVI24YuKkwAIhAJ3gSugh6mQttgxTXIJW8dJrh8F8tiu2Fjn3xDqMkwvaKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCR41EjH6sh7fPPOQq3AMYJwLXGAznEyQAg0%2FsOQ%2BDhQMpn22pn4fpO49mQiA83L2vY7IJAg5UvkKwoGYN7Kuvx23JpxU9sXS9tfvzirMfY7CrOk96ZPKdVhrULmh0csVPNy%2Fe8WJOLOKwT3GT87ncvs3hi47uLAWnriCFrMen%2BbObruwXuK6M%2FTrHxaXTtzTbMBJUjUf41bRfx9NzLX9IdpHtPaIRiEXfrcJbOi1y9wcB8XmmRozKaT7IkZOBgj%2Fw86pseTj0mKlm3ftZ1zQVoOtVu85cuu%2Bic7kW6bqChQNtJckl1RMijQUFeaTFBGgJLSsav5I1lr6JbAkNmxU5Vyu23yGQ6369znA0yD0o4ViKzLuF4P0eP6EIIeOM%2B89isPNwd5wkSvENCkv4lZoeSxBfElF5%2FShAPfja118GOVJxMZUsWx1wC7WDeHB%2Bn395FD63p34ZI79BZg8JonGR2DSmz%2FlvTd6o80nbs%2F4g%2BEgM9amf01n4akWY1iLzVOQa6KYIKKQn788ZLATXyAYAlYX6Tmd64YeJ9%2B6vayMqLSIUou8vZL8Lsdpuei4zc5yvPu68q%2FoKWSBkacRJvgRu2C9D7%2Fe9nT44GhoEeXCwjysv6BbJ3DTmc1imyuEptiUxBEyuoS9A49Eu9DD5n8a%2BBjqkAQvE0air6mPAEECOKifx28aWJcp82GWQSSSkkOLnlIThn65EkbQPrj%2BgqSbKkmmQSZjXcqstYX%2B%2FZ0p5ulGC0tWPP5PtjRG93eylw7N%2BPeSbErw%2Fi1lEbwp%2FSTlHXc80n3i9AuFzH5uIdnP4Jrr8glfeASVb4ulSEkw5%2Fhdp%2FSPsHF10JK3QE80%2BpEgh%2B88ejnaOxXLDyFoEzyjI8ooW1jCuY6VH&X-Amz-Signature=5ff40e01a4f90023e6190ffa1f9844192d7a498bacbc8e29fe4e07266c593ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

5. configmap에 어떤 action을 할 수 있는가?
6. 주어진 문장에서 옳은 것은?

    kube-proxy role can get details of all configmap object by the name kube-proxy only


    kube-proxy role은 kube-proxy 이름으로만 모든 configmap 객체의 세부 정보를 얻을 수 있음.

7. kube-proxy role이 어느 계정에 할당되는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/54e0a2d5-09b0-4613-9a26-fb1465ea0001/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEOG3ZN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCpsStggW1XdPiC%2B9Gu8rLDyIV1%2BSdxNrvCt7BaI2paJgIgd%2BwPfQK5F%2FXkfXmIkuUWrTBkSjGNTsRwP%2BqGZUktZe4qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKodjSos%2FiE8DsVLircA7GcBbJqeFLdKdsyy2kEjP7FVeYVtE%2FT1buMDahoKiXE1rJJ6g%2BFIHXI95vkC1R1rmEnVqnV7hv5gngIANUovuMJnO5ZVGZrl06CSg922asjR5%2Bx1VOOKIKOAgwWIgDJfroMgBKvwFn%2FMeOfpdaWbt5YwDom3tLsXaYm759uQ6orS5%2BF50KlRWB7ka22gOHpLk10ATnX%2FzfZDBJB6AkJ%2FuBsN0Rug8ZNP6lCjYnND%2BIf0142zsVoKcz7eCIiSMa4lEWNmijxK5aU%2Fku0%2BljA2fclL5fHFyNnKR6qkowMlA%2BVNxJRyS%2F%2BPUJrTsBlA5nTL1JZQpoSYTPIyMGoZmws7pwS2mZ4%2F3vJF%2FZNjgSmJBeGfXOgQGXCSpLdsaSvN5712jt3nOiUpZ8176s4GisEsaLjf9a1Aukfr%2BOIfxKo9XrFV6UneOn8oq34Xb%2F410GrF%2BVEISoqTZRYlCF4opSWeq28wG1o8DzMHslwCv7Cv7vzY4gv6uENj%2FK85edWgTY8Oyuu6%2FTU8WSWJdwlv9dKctvWgG7gyPGlBeYksfrjritvCfFcnPOTObcFIR60pFwgKIgRocjcp8g2FsroK6ICpNstnACae3jKS9gz93arxTAhSAXtN4jxU0D79jcVMMCfxr4GOqUBDlgau1RY%2B1MHgQtE7uLr8WujbwhBOR490m%2BkbAph28Aa3kgxrVzwgeVADc1GZXptbHpG%2BBmYLsffz1%2Bzl0ulGcG3wGueXr3TgRbGvMeI%2FU2e8AsUvCiF77HG%2B%2FI9GU8C4mkdMl9Dxosy6VUjflhSx0JJJWA9eNJUazjfWVewKRiWa4gNHNB%2BhMc6cSjNn9jI8DFyihZ7lXSDyDIbl63LGrw%2FF5xP&X-Amz-Signature=1aa4e706fb12ebc535f8dff522fc5d1616fd81eb33027c2145847ec224256ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

8. dev-user 사용자 생성. User의 세부 정보가 kubeconfig에 추가됨. user에 부여된 권한 관찰. default 네임스페이스에 list pods를 할 수 있는지 확인.

    ```bash
    kubectl auth can-i get pods --as dev-user
    ```


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/0b1c42ae-2023-4508-a739-bcaee8156d7d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKLB4WV%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T140955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICIKTal3vD%2FNiXCLh7Yte3TEFq4iv5gX6JwwydFJfNNcAiAtvX5wgBB3DEyDZ2omrc72cGR9PNxcWao%2Fky234NNSHSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3gJF05KRWWlVdlFoKtwDFRk4xYNekbwNv3T7tcP%2BhiaZS%2Bv1bOynpu8cclteOffPKDlE9nFr4nI8W3FFUCu3BzPF3mfj3mu5F8Q%2B6zZ4MU6ekssf%2BUdjOp8s8wtTNpqvgODSMc%2BE6jWNGivgV8t%2FIOGMUt04epFCUQalROzsRY1kmD%2Fgbn829OKlCkeHwH2IGu%2BUvhR5fsr%2B18y5G7GmJ8JShE42YVSOFFGScpR63g4O%2BhOASa0GzUvoDd9uPZm82CFf4L1fN47Sik1LJUVcLbEENqt%2FWwWjYz7%2FaMNOQTNQUv6GXCwRcNwci6JfjwTZ5PdvE0QrWiBzNr8XiVXKthSlveKJK62lB5xWiqJbxbTAa6ISgEphLXIJKD2w50UDY%2BtNfWqNHUhVA7eI2Rt76Rq%2BNXOlZAFI8w6TDHkWwaQJAQU6Vr%2BOfURqer72hGySvkvUuN5nydcpGz%2F0iIanlNjNs8x%2FUrER58VTTOUArHaPUWvmn4Org63Vw58TSV7%2FeUwL22L6c8s%2F46D3KLbt9HHtDMpo%2FoWDdgAOAOtIrW%2FR1nA8T1CRJDzc%2FBTTtRj33oB5thGyrp16rzhovUrp3yfH%2FFBHaoAMKC86tkwoRt1Fxh5SgVx%2FX13XcXM1V5fcQuOUaQ2nG2qxh%2BMwpZ%2FGvgY6pgF8GCBH%2FB6yil7C8BtetL1vuDpVMW2A2YxxJSvtGzI9kGA7YcUUIN0JOdv%2FOpDvZWQyqn64E%2B0ToCmMBVNyBnmG6ScUnxDbDDKiPgXbQ7a9EGp6%2BF6RyJAnBjKBtVA210MxOTIZ3zQLtaG%2FnbZkGZE6b2vqqhqIQ4HRDIYd0W%2B82%2FKQTkSN%2B61lfpZvDg9%2Fmbm1jHRrYZ%2B99qaA9uYBm4hQFuSCqZgo&X-Amz-Signature=ba581c3294be1b46de08420db0fec909bc2e9b799e9d77270c4454ad392def0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b19a7bed-8e3c-4bd2-9f67-86fba0324a8e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGWM42L%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCTU%2FEUyqZZesnWDPkN1hOCzUmQtuKHQHi0TecOZEbM4gIhAOI57%2BNQ47D07yPXA4pWv7FIH%2BfdoRWHmx88lgvl0Nu%2BKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz49ts8AAJu%2Buo7JUq3APeXBUxfQQRyYPhZzG0Z5kzqD3xe44r2oxShbN6SPNxBY5x34pcAe4FhMd7HG10%2Fdzh9aTDuND9x%2BXKuhCJzapfXtKzL5b3pSvntv%2BvcMirnqTZak%2BjwvktvEjD25IRfpgrt1LWc4VNwx7yqdJxHdtJTxP%2BfUB8ypMN9J2ugH5Ge6NyO%2BJPX5IeYqcb5COngPQvvSdaobBZTqEGQSnRFdfuEBa%2FyVdGlyRswozbmj12Ohx7%2Bjt2DJkryUqcHpZOm5os7maWMqVUwYJqcxGNYtd%2FDpEHng33EbKq%2FxU36c0kzqT8P1plv%2BOUvQMs1LVbqlc02ER48oMn8RTxlX%2BEfYYU86QVpK6HxJ5Wax%2Bq%2FgFkJyaMtH5u8fXjY2RFzS8Ruf2tX665e9CV7BO%2BOqG0FVB%2B%2FQJXAUAs6H3a4SR1EARJ3aEeL4PcORvGiokOyczp6YYSFDdPHIenEPNoy95aFRXIVtqNz0k5A7P8S9cmqB7nKPXeZYWBvYhBicq3EwWPjaxfOBNZazvAe%2Ff%2F3%2Fazd%2ByVAGzNdit1F17%2BwBkVtitV49hSry5xKQ%2Fm%2FAe%2FH5bVTVO%2F4KjqfFAPTTUGBhZ%2BHxeBVXPXs5H9Ii%2BFZOSeqYq0fpLLaV3iCjUA6p%2BK1zC%2Fn8a%2BBjqkAV%2FiV9cuTJCk7xxkpewuFL9F%2BhXAN3GKJrXZGqAWQrq27AGDCEHAg98sJrLkkttHykTYuQCaNGZqYh3d37RT9ABrUquSD7Mumw1G%2F9%2BCXUamYepvJvccsZAFmecMFNAplPc6sRf7dbFZk91HmSUlwlrtYJIhidUbIlPPfx0yQf2BT9y23u9Lee%2Bb8WRP1Xt5BJ6ynDBK3g0fHZzKcO%2F0I4k9S7%2B1&X-Amz-Signature=5e0463bde39a1f004bbf40ee410e89e760f72da458a9d005ce974977d025bef3&X-Amz-SignedHeaders=host&x-id=GetObject)

3. dashboard application 배포. deployment 관찰. deployment가 사용하는 이미지는?
4. dashboard 상태는? 성공적으로 로드된 pod 세부 정보를 갖고 있는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/21e35c7e-f93c-495a-8768-11ef51201564/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBE6WQN2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIE3SaweLyrZTgcVENNMzBrwxMsKrM1fRvC%2FqME1cDk%2BqAiEAtKtv2QfaiRSc0WYs1fq1xWevqQrz8Lc9iCrZyX%2BiWxQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgbnXHZnXCZZN%2FyPSrcAx5gl3oviTJBvVSO%2BhSjt%2FPplb4wpVJSUIyFHH9nPE01kvHPsV2vG6D%2FTQ8YkBJLMCC7l3Ztr7tFjSFFYyu0UDkBnh%2FDk%2BNlsysd6EcGaQ8y35lCouaRCpHcSwbd1kCf0rGGjUI4e22Lz%2F%2FdV9B%2BhyWp%2FGcj%2F9YpbKzraXUEF6C0VvXCMdP%2FOVU2o2UAQLVQY8ErY%2B%2FEaCJwLZyFYymKLOFI1a8188E72GdN13XTBAScUHRLKRIggh3huik%2F6GYRqeTRMpxH0ursawABvgVbrH%2FfxMWpKfki%2BIis7NglfohxO%2B%2B7gu%2FvrXFVmu%2BhQNergKxIcz6FC2OWwIF1Oq6fDYLj89kJ34txRaHtmIvpx53IpvLDooDD843Du537YJI8ni%2Fxc1nrSatkruDOjQWUXumcpv5D3DczjVRj5UycfIRS%2F4zTv0NotQp6%2Fa5rBz1vdVXYKCwmvt23SDacEYICh0tk%2F4EOJt4WEf9iHiyOApXAXjJDew4rp1JAHsGdEeEbeEj%2B6Ixy3YsdgeuKifMIEl7n%2F0a7frkeZqZpX3QqRHKk8ijTZhQqCBB0wagwgh2rVaAtxPHJUZiElWtjhW32bIL6EH2%2BeOwlvYflClULuMUnxqObQNMwk7%2FCUs1PMJufxr4GOqUBJdybu7qJwDVAc9Eo%2FuJ3vWbyUMT%2BxuWBrMBmjtDDZs4OCB7VJr%2BogeXZ7uO1KhQfaBtozjWvN6MPuGL%2BStrxOlhPz3dItLIma%2BFJAUgzbUF8LUxx%2FBlTqWyxd4toYiSFSCd19ZKAFYDhPsPtlDADnNzAfv7B%2F8%2FVAuc8H5Py0j8kt9UjAtAq%2FPWaEjrhPETU1Ukn1ea%2F7PxUmiBfDnDDjaQKH2A2&X-Amz-Signature=77bbd268876bc4fc38bee05f3d089d6ff0101239a0dea51a34ffe3201c419d31&X-Amz-SignedHeaders=host&x-id=GetObject)

5. dashboard application은 어떤 유형의 계정을 사용하여 Kubernetes API를 쿼리하는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/7d4a5407-3552-4911-b8e4-141dbefd74f0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYXFWMHS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCEgdYHL36c79D8mEjO6%2BtLSEWlfQTxA9UdKlO9N3YYzwIhAMYTFjLQf%2BJjA5p91aWIe1BapoUPlAbk3inUgw70MmFZKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYlMZFVh4l9PsF6lQq3ANdbssE%2FErd6wHXRNXiHJxnFIb0uvqRDEQnKHhyeOZEzoxUUBd9z30UpmOF8BJ3VdCK8PjHiPeS0VGJyyyE12l%2Fksr3EVS0qm1a33gxbaZ7PNXWeLKAV8BMOUbxPJDhVooLLW7jt6a8UMujV72Os5XmRs2BvaMKXy%2FrG0kPYFEVZCSmSmkcrxcM18vpXofNkbYyyh%2B2Ydx6RGFnjakNAdMi617tRLc5A8AeYpe%2BL1NZNoDdsYZ1DyD1nx2LosRb3pMIORghOE8eaanND88KMNmY4foBDZ%2FBq5PxFt%2B4r%2BFyH7mBgCg1%2F4FbFsyfJs%2BPxPxIStgzSNODf7QG9BLvZhbtdmfQG5W9uk3nfbCnvMrxybsZNhywt%2BU%2FiGIaHsOiqvoR%2Fd0CndqRZYT7%2BbPnCvZj5C0f5%2BqqgeW6VWhg6j2Q0UqVgoVblT1SQjUy1r%2B9fBApXuQdcrmQQ%2F4Ip43Xu9%2BCPV4Y8wRmoeZp8NSPZvxcYePJeuLDawdZHHK%2B%2Biz8Aijvh3RZrqzvUG8WEiZv6McefYsaJAnaqrFumwacBaQ0fuV1rmeVwZgbfPiPY6Vf8ra4er8nFa1t29xaKjfW27KRnceGTyuQfl1IgDKG8%2FQnyDK%2BGehYl8ANVISELDDmnsa%2BBjqkAXMxJVlnrLmctcyP04kn5tU1pDg9h8Wgq0hINJ7NzbR7KwW7tuBwYhR4%2F1q81pFrQ5mA3dj56KEOhVP4QwoKSs8McX55QVwULSjmTH9YwXo5MnMLk7nYux2%2FPqMRH5dDsOWG8UFkhn5iE3vS552m5vWU5Of%2B%2B5w18nOo%2F2Logcli70ncuKYm%2Bx%2BhFDxKZ%2BZqLNtdt%2FN7PXPzGwKQFPNaO%2FIvDqs%2B&X-Amz-Signature=75b9cb45529465421bfdff891bda6338c32416bfefd69af2959e9b01a2d9e628&X-Amz-SignedHeaders=host&x-id=GetObject)

6. Kubernetes API를 쿼리하는데 Dashboard application이 사용하는 account는?
7. Dashboard application pod를 관찰하고 그것 위에 마운트된 service account 확인하기
8. pod 내에서 사용 가능한 service account 인증서는 어디에 위치했는가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/90031244-a1cf-4874-8238-fe8c3798d305/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MSVS5J%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIAGeRlswJh%2FbW%2FaUrAhtppf0FENiYgjWbega64GpU5hmAiEAmjanQFeiX4FOFXAgQFX%2FT2HJl%2F%2FIFc4BTtfsN39LwK0qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSPeNrmPEyiYntx6CrcA8ki%2FgMNBnQSp7VxXNO3h7DHkYzMkItxxBMDTR8qAEHEzPsO9qUVpNRJexwqNpzEyUmE9s7KzjuBncFfyzoAJlubXVciK9wDSWGHHq9BQzyLWovy6APvS7Vgp9A%2F1%2BragA0fPu3e3CLx7YE5PJdboxY0b8paaKbMwdxt9MdEJlUpASi9DbtWSvchyB3bqHMb9MpzKkmlsZRBAdl99doMc%2F5J%2B84vo7HkKOx4876C7gp4OBfL0ubSvzyZOotQ%2BNtGPCPUjMXvyXDowCsw1hr2Uy55ZrN6KybEriPss71IZUtH6QcS543P4cttwVvVRsnnDuMkDEcp2Zx6VbxOoRmNtQxf1PV9hsbQIHgkSPxc7Dj9XRE1XGZNfNZC0bXdUkWyc%2BU6YmXH7aP63c6kEML6%2F%2Fdz9v2Qzu3wr5tmnI32sPZT6NMZgYIno2wqK5Tc9qjk0WJdGBY1C5iswv%2F919%2BX5Lo%2FvR3%2BRTFjKz01gi7Dy4ChHE7uioMVjlCs0UdhLUu54P9UK%2Fy6ktlpvbmeOz3ZdZcTvRHgtAVRGoG%2FXsTB%2BoMTDFerNSxq%2B1LgNTEpHoi%2FpLhRsDBkVmT%2Fhjnle%2F0kJf8ZAooFyL8OQjRqN5cA9sbPdKOqGcIGSOOXiFw6MI2fxr4GOqUB5oZjwVgB23REnRJ3A8DE9NQx65Qa27UVVO18H8%2Bzw8c%2Ba3VhRAE30iAeDnyGbdVL1FPMtnx25ScE%2BpfzCzsZMoa7zOAXUwdSsQAxdmk9iK6Fs3f%2FjDkPV6NCJUUWG%2BXz46fPpTnl4BVbED9sR3eBvM2SARzx3k19i9yGHAmd6KyaUTzFye0dMfeJma4iLCj6OZz27r5Lh7fBvP6CdwfkZp9zKKGq&X-Amz-Signature=3d47d4e9105eb1b549c4e2d130879a1ff2e47f5e707007384cd3ac339d0b099f&X-Amz-SignedHeaders=host&x-id=GetObject)

9. 애플리케이션은 Kubernetes에 인증하기  위한 생성된 올바른 권한을 가진 service account 필요함. default service account는 제한된 접근을 가짐. `dashboard-sa` 라는 이름을 가진 service account 생성.

    ```bash
    kubectl create serviceaccount dashboard-sa
    ```

10. dashboard application의 UI에서 access token 넣기. 새롭게 생성된 service account에 대한 authorization token 생성하고 생성된 token을 복사해서 UI의 token 필드에 token 붙여넣기

    ```bash
    kubectl create token dashboard-sa
    ```


    dashboard-sa service account에 대한 token이  생성됨.


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/6b5ccc86-02be-4794-98b8-6ddf6a01cd07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5REFXAQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD4yDWDsxzfNS%2BEyivhyXATN9f1duwOoTfHk%2B7qJwJI8gIgaoxvO9GkuAqzeHToiaVIUam6up4W6cZhUnSycHwbcKkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCky8TJjE8yi35HhsyrcAyAJb0L8TS48Vjvejry8mo4AHiailq2MWUU%2FbVIuju8fnOnykJ23RiVy29VKDIY0iTcpmGKQiWzUZZQu0VJTzdPBJFuAipgpg70Oy2j6A%2BB94WxeSpzHthzhROASXsUg1hipXQuWZpG3lSVUOwWKO5K5j3TEr7CRQ%2BlvG%2FO3LZnEfLD99QwzBjknsO0dDBsb7lmATaWDc0Mp72hb6Km%2FnCH%2B9sSxhspp9csB7PZqULazFe5AKQ0WMeJdGtY0wxtBgQLTbkYBAcadiy2s84%2FIRuZjzHmBSqSaoRY1UN%2FvQ6onMYWkvN%2BHGi45%2BNAUpghAYqzgdy5rKTsI1R%2BWRzNWLUkxvveUioCa474oLMg8U6RBwy04HtpL0N0GYJ%2F7MOpkcDKZgKsArFcC%2BwtJ8m%2BCTawWpmDeMPBswRbMfbJCSDmrgUiOuc83JRFhWq%2FWmvUyvau5RQOjY5lt3VTl2OCo%2BmvtCjCPgstZerPf3BHT2YOtHj91LGb3qZA6764jVrlrFYlpJDhXHDkA%2BmpWPC3oP0LwAjWhS6%2FCYwoT4ThWJcK%2FCP02eNZcW2CKVitbI%2Bc9mr0ItzGEZuw2zP%2BNcASaj0YLsrWLHL4Ix0iiafVEN%2BP8TEHt8YqC0ikBHpQ6MPufxr4GOqUBV3UrJXL9We2krWuDc9ZJq9f68NxCa7a%2B%2B6RtBDltv%2B2xhxCXMYjHZZ1ctOAz%2BVWfv8S1MpUM7Cdi%2FIcWVbtMQRYMD7LFS0wJt0zqk5%2B7nw0I074siXt4uyUrOqwEMNHnKvGjNWYbabIJpXhRCwZJCAqCBSBCZBgj6OwAfftJDNn3hZAiqeW95Oterzkh4s1kV0Ifnz5hPqSrket5ZioOQS6AnGWf&X-Amz-Signature=b6b1c6509a392b44122f7e0287b9440af17cdab3c1d54d1dc35e8738a23c3a61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/03b8d9a1-823a-4f5a-aab8-e9a63822e005/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJQ2CYO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAz9O9Ih56sgNc2sKFHXu8hr%2B07wXSj4E1NHfTEiO9YHAiAsKAodimLF0RtYRBYyag9SG323w%2BLqCkJ9vVDkn%2FasQCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMqzh6nEUi6Sh71hXKtwDYPDWtLwJQ4QhxO6A5wOYwyi3KHqyEfvwE%2BaD33xyxI67IdVu45m4zpm69CGvVnChBWAbW%2FE8X8eQUOQsanVtZW3D%2Bu5y8HGIIdAW%2Fi5W2Sprco9yWMJzJ7Oyd7%2BpvWbpStD5GYgiAUteQuwhi9MoGsdf3yZsQK%2Faq9uKNe3VtA7845qgTe0QlIrqdAqToLvTQfuHnYCDDUP%2B3PhwZQp5M0JG5AEeOCwnvFEiRzW%2Fh%2BnuK3ZPjVC1Bw89z4hlqDFDYfUOrtCougGtLxsozsLTTwFnr4mHCQ%2FcqhxWQFZWneF6eQncQy0aqXsN9QnKiZsK2UyjZ7uiz7ZxY5kyKvqd6ETRL0e9mEOoU2akmX9%2Fogp5LPDZCEWMwphIIjv2skLytG7RVPYYxQjs7fTEg1UpNA7oa5%2F942H5B8zKtIbeEeBpVtesUgNWxumnRRLqdy6BHXRD9tzcPlIytKgHiBG3HTxdJFlS7K3TkrTVksWbhPE3RLxgewJHEs2nI1q8hRFI%2FiMVyapJFlBDIzrG8IEAvY3oDUSuji7XMDHGxvVaKPuSdBALgtV06Erx1IOWaw6xGpCLIxZSo1M8AIobIA65eoh3U5LLFFS50GfKQfQNY0ZCreqLqHGu8Ek6ynAwj6DGvgY6pgEgixvMPeZUJfriik6M5SjfrnYwfxZ0pQM4TRZOqy44kJ1cqWlSVNYSFZgrYaDdozNhxCPvmM6U3SV%2Fd4ZyxI7j2RMey%2FePJabvy6eTuQrjBq6bl9a2aitJmuYSvUFdPgXGgqU0IHsP9grTMLfLChSrUwo9UKl%2F4TNvl5%2FVLkphQ8OcXeBn%2BQ2fd0MV2yg2oN%2Bsu6xh5SzhVhwQXrbTwbkgEcJY85Cz&X-Amz-Signature=4b4880c0e986edcb9e0d5ddcd8dabc1904e08a66a754f1a993bf4ea285685a2d&X-Amz-SignedHeaders=host&x-id=GetObject)


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


어떻게 인증을 실행해야 하는가? 어


## Practice Test - Image Security


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

