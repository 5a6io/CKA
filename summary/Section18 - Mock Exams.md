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
    
    systemctl start cri-docker
    systemctl enable cri-docker
    systemctl is-active cri-docker
    systemctl is-enabled cri-docker
    ```

1. 이전 작업에서 생성된 `hr-web-app`을 클러스터 노드의 포트 30082에서 액세스할 수 있는 `hr-web-app-service`라는 서비스로 노출. 웹 애플리케이션은 포트 8080.

    ```shell
    kubectl expose deployment hr-web-app --type=NodePort --port=8080 --name=hr-web-app-service --dry-run=client -o yaml > hr-web-app-service.yaml # NodePort만 추가.
    ```

1. `analytics-deployment`라는 이름을 가진 deployment에 대한 `analytics-vpa` 라는 이름을 가진 VPA 배포. VPA는 자원 활용을 최적화하기 위해 포드의 CPU 및 메모리 요청을 자동으로 조정해야 함. VPA가 Auto 모드로 작동하여 필요에 따라 업데이트된 리소스 요청이 있는 포드를 삭제하고 재생성할 수 있도록 해야 함.

    ```shell
    kubectl create -n default -f - <<EOF
    apiVersion: autoscaling.k8s.io/v1
    kind: VerticalPodAutoscaler
    metadata:
      name: analytics-vpa
      namespace: default
    spec:
      targetRef:
        apiVersion: apps/v1
        kind: Deployment
        name: analytics-deployment
      updatePolicy:
        updateMode: "Auto"
    EOF
    ```

1. 한 동료가 클러스터의 `kk-ns` 네임스페이스에 `nginx` helm 차트 `kk-mock1`을 배포. 새로운 업데이트가 helm 차트로 푸시되고, 팀은 새로운 변경 사항을 가져오기 위해 helm repository를 업데이트해 달라고 요청. helm 차트를 업데이트한 후, helm 차트 버전을 18.1.15로 업그레이드.

    ```shell
    helm ls -n kk-ns
    
    helm repo update -n kk-ns
    
    helm search repo kk-mock1 | grep -i nginx
    
    helm upgrade kk-mock1 kk-mock1/nginx --version 18.1.15 -n kk-ns
    ```


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

1. kubeadm을 사용하여 kubernetes cluster를 배포할 환경을 준비하는 관리자임. 시스템의 네트워크 파라미터를 아래의 값으로 조정하고 변경 사항이 재부팅되지 않도록 함.

    net.ipv4.ip_forward = 1


    net.bridge.bridge-nf-call-iptables = 1

    > 풀이

    sysctl을 사용하여 시스템 매개변수를 조정하고 재부팅 후에도 지속되는지 확인.


    ```shell
    echo 'net.ipv4.ip_forward = 1' >> /etc/sysctl.conf
    echo 'net.bridge.bridge-nf-call-iptables = 1' >> /etc/sysctl.conf
    sysctl -p
    
    sysctl net.ipv4.ip_forward
    sysctl net.bridge.bridge-nf-call-iptables
    ```

2. `pvviewer`라는 이름으로 새 서비스 계정 생성. 적절한 ClusterRole인 `pvviewer-role`과 ClusterRoleBinding인 `pvviewer-role-binding`을 생성하여 이 서비스 계정에 클러스터의 모든 pv를 나열할 수 있는 권한을 부여. 다음으로, 기본 네임스페이스에 redis 이미지와 serviceAccount: pvviewer를 사용하여 `pvviewer`라는 pod 생성.

    pv 범위 → cluster


    pvc 범위 → namespace

    > 풀이

    ```shell
    kubectl create serviceaccount pvviewer
    
    kubectl create clusterrole pvviewer-role --resource=persistentvolumes --verb=list
    
    kubectl create clusterrolebinding pvviewer-role-binding --clusterrole=pvviewer-role --serviceaccount=default:pvviewer
    ```


    ```shell
    apiVersion: v1
    kind: Pod
    metadata:
      labels:
        run: pvviewer
      name: pvviewer
    spec:
      containers:
      - image: redis
        name: pvviewer
      # Add service account name
      serviceAccountName: pvviewer
    ```

1. 다음을 사용하여 `cm-namespace`에 `app-config`라는 이름의 ConfigMap을 만듦.
ENV=production
LOG_LEVEL=info
그런 다음 ConfigMap의 컨테이너에 환경 변수 ENV와 LOG_LEVEL을 설정하여 동일한 네임스페이스에 있는 cm-webapp이라는 기존 배포 환경을 수정하여 App-configMap을 사용하도록 함.
    > 풀이
    1. configmap 생성.

    ```shell
    kubectl create configmap app-config -n cm-namespace \
      --from-literal=ENV=production \
      --from-literal=LOG_LEVEL=info
    ```

    1. deployment 패치

    ```shell
    kubectl set env deployment/cm-webapp -n cm-namespace \
      --from=configmap/app-config
    ```

1. `np-test-1`이라는 새로운 pod와 `np-test-service`라는 service를 배포함. 이 서비스에 대한 수신 연결이 작동하지 않음. 문제를 해결 필요. 포트 80을 통해 서비스에 대한 수신 연결을 허용하는 `input-to-nptest`라는 이름으로 네트워크 정책을 만들기. 중요: 현재 배포된 객체를 삭제하지 마세요.
    > 풀이

    ```shell
    apiVersion: networking.k8s.io/v1
    kind: NetworkPolicy
    metadata:
      name: ingress-to-nptest
      namespace: default
    spec:
      podSelector:
        matchLabels:
          run: np-test-1
      policyTypes:
      - Ingress
      ingress:
      - ports:
        - protocol: TCP
          port: 80
    ```

1. nginx-deploy라는 새로운 배포를 만들었음. 배포를 3개의 복제본으로 확장. 복제본 수가 증가했나요? 문제 해결.
    > 풀이

    ```shell
    kubectl scale deploy nginx-deploy --replicas=3
    
    kubectl get pods -n kube-system
    ```


    controller가 pod scaling up을 담당. kube-system 네임스페이스를 보면 controller-manager가 작동하지 않음. controller-manager 내부에서 실행하는 명령어가 정확하지 않음. 파일에서 값을 고친 후 재시작.

    > 대안 → sed 명령을 실행하여 모든 값을 한 번에 변경할 수 있습니다:

    ```shell
    sed -i 's/kube-contro1ler-manager/kube-controller-manager/g' /etc/kubernetes/manifests/kube-controller-manager.yaml
    ```

2. API 네임스페이스에 위치한 API 배포라는 이름의 배포를 위한 HPA 생성.
HPA는 requests_per_second라는 사용자 지정 메트릭을 기반으로 배포를 확장하여 모든 포드에서 초당 평균 1000건의 요청을 목표로 해야 함.
복제본의 최소 개수를 1개로 설정하고 최대 개수를 20개로 설정.
참고: API 네임스페이스에서 API 배포라는 이름의 배포를 사용할 수 있음. 메트릭 서버에서 메트릭 requests_per_second가 추적되지 않아 오류를 무시함
    > 풀이

    ```shell
    apiVersion: autoscaling/v2
    kind: HorizontalPodAutoscaler
    metadata:
      name: api-hpa
      namespace: api
    spec:
      scaleTargetRef:
        apiVersion: apps/v1
        kind: Deployment
        name: api-deployment
      minReplicas: 1
      maxReplicas: 20
      metrics:
      - type: Pods
        pods:
          metric:
            name: requests_per_second
          target:
            type: AverageValue
            averageValue: "1000"
    ```

3. `web-service`와 `web-service-v2` 간의 트래픽을 분할하도록 `web-route`를 구성. 이 구성은 트래픽의 80%가 `web-service`로 라우팅되고 20%가 `web-service-v2`로 라우팅되도록 해야 함.
참고: `web-gateway`, `web-service`, `web-service-v2`는 이미 생성되어 클러스터에서 사용할 수 있음.
    > 풀이

    ```shell
    kubectl create -n default -f - <<EOF
    apiVersion: gateway.networking.k8s.io/v1
    kind: HTTPRoute
    metadata:
      name: web-route
      namespace: default
    spec:
      parentRefs:
        - name: web-gateway
          namespace: default
      rules:
        - matches:
            - path:
                type: PathPrefix
                value: /
          backendRefs:
            - name: web-service
              port: 80
              weight: 80
            - name: web-service-v2
              port: 80
              weight: 20
    EOF
    ```

4. 하나의 애플리케이션인 webpage-server-01은 helm 도구를 사용하여 Kubernetes 클러스터에 배포됨. 이제 팀은 기존 애플리케이션을 대체하여 새로운 버전의 애플리케이션을 배포하고자 함. 헬름 차트의 새로운 버전은 터미널의 /root/new-version 디렉토리에 제공. 차트를 Kubernetes 클러스터에 설치하기 전에 검증. 
helm 명령을 사용하여 차트를 검증하고 설치. 새 버전을 성공적으로 설치한 후 이전 버전을 제거
    > 풀이

    ```shell
    helm ls -n default # 기본 네임스페이스에 설치된 릴리스 목록 조회.
    
    cd /root/
    
    helm lint ./new-version # 차트 검증
    
    helm install --generate-name ./new-version
    
    helm uninstall webpage-server-01 -n default
    ```

5. Kubernetes 클러스터의 포드 CIDR 네트워크를 식별. 이 정보는 설치 중 CNI 플러그인을 구성하는 데 매우 중요. 포드 CIDR 네트워크를 /root/pod-cidr.txt 파일로 출력.

    ```shell
    kubectl get node -o jsonpath='{.items[0].spec.podCIDR}' > /root/pod-cidr.txt
    
    cat /root/pod-cidr.txt
    ```

