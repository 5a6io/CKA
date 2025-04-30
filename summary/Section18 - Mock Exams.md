# 🍨 Section18 - Mock Exams

## Mock Exam1 Review

1. `mc-namespace` namespace에 세 개의 컨테이너를 가지는 `mc-pod`  생성. 첫 번째 컨테이너 이름은 `mc-pod-1` , `nginx:1-alpine` 이미지 실행 `NODE_NAME` 환경 변수를 노드 이름으로 설정해야 함. 두 번째 컨테이너의 이름은  `mc-pod-2`, `busybox:1` 이미지로 실행,  `date` 명령어의 출력을 매 초마다  `/var/log/shared/date.log`파일에 지속적으로 기록해야 함. 세 번째 컨테이너는  `mc-pod-3`,  `busybox:1` 이미지로 실행, 두 번째 컨테이너에서 생성된 `date.log` 파일의 내용을 출력. 공유되고 비영구적인 볼륨 사용. → emptyDir

    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: mc-pod
      namespace: mc-namespace
    spec:
      containers:
        - name: mc-pod-1
          image: nginx:1-alpine
          env:
            - name: NODE_NAME
              valueFrom:
                fieldRef:
                  fieldPath: spec.nodeName
        - name: mc-pod-2
          image: busybox:1
          volumeMounts:
            - name: shared-volume
              mountPath: /var/log/shared
          command:
            - "sh"
            - "-c"
            - "while true; do date >> /var/log/shared/date.log; sleep 1; done"
        - name: mc-pod-3
          image: busybox:1
          command:
            - "sh"
            - "-c"
            - "tail -f /var/log/shared/date.log"
          volumeMounts:
            - name: shared-volume
              mountPath: /var/log/shared
      volumes:
        - name: shared-volume
          emptyDir: {}
    ```

2. `username: bob` , `password: caleston123` 인증 정보를 사용하여 ssh로 node01 접속.  관리자로 node01에 kubernetes 설치할 준비 필요. 단계 중 하나는 container runtime 설치하기. /root에 위치하는 cri-docker_0.3.16.3-0.debian.deb 패키지 설치. cri-docker 서비스가 실행 중이고 부팅 시 시작할 수 있도록 설정.

    ```shell
    ssh bob@node01
    
    dpkg -i /root/cri-docker_0.3.16.3-0.debian.deb
    
    systemctl
    ```

1. VPA 생성.
1. kk-ns 네임스페이스에 배포한 nginx. helm 차트 업그레이드.

## Mock Exam2 Review

1. ingress 생성.
    > 풀이

    ```shell
    ssh cluster1-controlplane
    kubectl get deployment webapp-deploy -n ingress-ns
    kubectl get svc webapp-svc -n ingress-ns
    ```


    ```yaml
    # webapp-ingress.yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: webapp-ingress
      namespace: ingress-ns
      annotations:
        nginx.ingress.kubernetes.io/rewrite-target: /
    spec:
      ingressClassName: nginx
      rules:
      - host: kodekloud-ingress.app
        http:
          paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: webapp-svc
                port:
                  number: 80
    ```


    ```shell
    kubectl apply -f webapp-ingress.yaml
    
    curl http://kodekloud-ingress.app/
    ```


5. CSR 생성. 

    > 풀이

    ```yaml
    apiVersion: certificates.k8s.io/v1
    kind: CertificateSigningRequest
    metadata:
      name: john-developer
    spec:
      signerName: kubernetes.io/kube-apiserver-client
      request: ${john.csr| base64 | tr -d '\n'}
      usages:
      - digital signature
      - key encipherment
      - client auth
    ```


    ```shell
    kubectl certificate approve john-developer
    
    kubectl create role developer --resource=pods --verb=create,list,get,update,delete --namespace=development
    
    kubectl create rolebinding developer-role-binding --role=developer --user=john --namespace=development
    
    kubectl auth can-i update pods --as=john --namespace=development
    ```

1. nginx 이미지 사용하여 nginx-resolver라는 nginx pod 생성. nginx-resolver-service라는 서비스로 pod를 내부적으로 노출. 클러스터 내에서 서비스와 포드 이름을 조회할 수 있는지 테스트합니다. DNS 조회를 위해 이미지: busybox:1.28을 사용. /root/CKA/nginx.svc 및 /root/CKA/nginx.pod로 결과를 기록.

    ```shell
    kubectl run nginx-resolver --image=nginx
    kubectl expose pod nginx-resolver --name=nginx-resolver-service --port=80 --target-port=80 --type=ClusterIP
    
    kubectl run test-nslookup --image=busybox:1.28 --rm -it --restart=Never -- nslookup nginx-resolver-service
    kubectl run test-nslookup --image=busybox:1.28 --rm -it --restart=Never -- nslookup nginx-resolver-service > /root/CKA/nginx.svc
    
    kubectl get pod nginx-resolver -o wide
    kubectl run test-nslookup --image=busybox:1.28 --rm -it --restart=Never -- nslookup <P-O-D-I-P.default.pod> > /root/CKA/nginx.pod
    ```

1. cka5673 네임스페이스의 기존 웹 gateway을 수정하여 포트 443 for [kodekloud.com](http://kodekloud.com/) 의 HTTPS 트래픽을 처리하려면 비밀 kodecloud-tls에 저장된 TLS 인증서를 사용하세요.

    ```shell
    cluster1-controlplane ~ ➜  kubectl get gateway web-gateway -n cka5673 -o yaml
    apiVersion: gateway.networking.k8s.io/v1
    kind: Gateway
    metadata:
      name: web-gateway
      namespace: cka5673
      resourceVersion: "21919"
      uid: a1d0e35d-5126-4000-88ec-f440941eed75
    spec:
      gatewayClassName: kodekloud
      listeners:
      - allowedRoutes:
          namespaces:
            from: Same
        name: https
        port: 80
        protocol: HTTP
    ```


    ```yaml
    # web-gateway.yaml
    apiVersion: gateway.networking.k8s.io/v1
    kind: Gateway
    metadata:
      name: web-gateway
      namespace: cka5673
    spec:
      gatewayClassName: kodekloud
      listeners:
        - name: https
          protocol: HTTPS
          port: 443
          hostname: kodekloud.com
          tls:
            certificateRefs:
              - name: kodekloud-tls
    ```


    ```shell
    kubectl apply -f web-gateway.yaml
    ```

2. 클러스터에서 팀은 다른 네임스페이스에 여러 개의 헬름 차트를 설치했습니다. 실수로 배포된 리소스에는 kodecloud/webapp-color:v1이라는 취약한 이미지 중 하나가 포함되어 있습니다. 릴리스 이름을 찾아서 제거하세요.

    ```yaml
    helm ls -A
    
    kubectl get deploy -n <NAMESPACE> <DEPLOYMENT-NAME> -o json | jq -r '.spec.template.spec.containers[].image'
    
    helm uninstall <RELEASE-NAME> -n <NAMESPACE>
    ```

3. frontend 네임스페이스에 위치한 frontend 앱에서 backend 네임스페이스에 위치한 backend 앱으로 트래픽을 허용하는 네트워크 정책을 만들어야 하지만 database 네임스페이스의 database에서는 트래픽을 허용하지 않아야 함. /root 폴더에는 세 가지 정책이 있음. 제공된 YAML 파일에서 가장 제한적인 정책을 적용하여 원하는 결과를 얻기. 기존 정책을 삭제❌.

    ```yaml
    cat /root/net-pol-1.yaml
    cat /root/net-pol-2.yaml
    cat /root/net-pol-3.yaml
    ```

    - `net-pol-1.yaml`: Too broad; allows traffic from any namespace with a certain label.
    - `net-pol-2.yaml`: Incorrect; explicitly allows both `frontend` and `databases`.
    - `net-pol-3.yaml`: Correct; only allows traffic from the `frontend` namespace.

    ```yaml
    kubectl apply -f /root/net-pol-3.yaml
    
    kubectl get netpol -n backend
    ```

4. 
5. 

## Mock Exam3 Review

