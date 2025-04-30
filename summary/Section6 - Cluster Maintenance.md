# 🍨 Section6 - Cluster Maintenance

## OS Upgrades


### 몇 개의 노드를 가지고 있는 클러스터가 있다고 가정. 이 때 노드 한 개가 내려가면 무슨 일이 일어나는가?


파드에 접속할 수 없음. → 해당 노드 위에 파드가 몇 개가 배포되었냐에 따라 사용자에게 영향을 미침.


파랑색 애플리케이션이 relica로 있을 때 사용자가 파랑색 애플리케이션에 접근하려고 하면 다른 파드가 있기때문에 영향을 받지 않음. 그러나 초록색 파드에 접근하려고 하면 영향을 받을 것이다.
→ 초록색은 한 개의 Pod 밖에 없는데 이 때 초록색 파드는 내려간 노드 위에 있음.


Kubernetes는 즉시 해당 노드를 다시 올린다. 그러면 kubelet process가 시작되고 파드도 다시 온라인 상태가 된다.


노드가 5분 이상 내려가면 파드는 종료된다. → Kubernetes는 죽었다고 판단함. replicaset은 다른 노드에 파드를 재생성.


파드가 온라인 상태로 돌아올 때까지 걸리는 시간을 pod-eviction-timeout이라고 함. controller manager에서 설정. 기본적으로 5분.


노드가 오프라인 상태가 될 때마다 마스터 노드는 노드가 죽었다고 판단하기 전에 5분 동안 기다린다.


pod-eviction-timeout이 지나고 노드가 온라인 상태로 돌아오면 그 위에는 스케줄링된 파드가 없다. replicaset에 의해 이미 다른 노드에 생성되었기 때문.


그러나 초록색 파드는 replicaset의 일부가 아니므로 사라짐.


> 따라서, 노드에서 수행해야 할 유지보수 작업이 있고, 노드 위 실행 중인 워크로드에 다른 replicas가 있다는 것을 알고 있고, 그리고 노드가 짧은 시간동안 오프라인 상태여도 괜찮고, 5분 이내로 돌아온다면 빠르게 업그레이드하고 재시작할 수 있을 것이다.


모두 다 다시 돌아올 것이라고 장담할 수는 없음.


우리는 의도적으로 해당 노드의 모든 워크로드를 다른 노드로 옮길 수 있음. → 기술적으로는 옮기는 것이 아님. 옮기고자 하는 노드에 재생성하는 것.


해당 노드를 차단하거나 스케줄링할 수 없다고 표시. → 제약을 제거할 때까지 이 노드에는 파드를 스케줄링할 수 없음.


이제 파드는 다른 노드 위에 안전한 상태이므로 노드를 다시 시작할 수 있음.


노드가 다시 돌아왔을 때  여전히 스케줄링할 수 없음. → 파드를 다시 스케줄링할 수 있도록 uncordon이 필요.


다른 노드 위 파드는 자동적으로 돌아오지 않음. → 어떤 파드가 지워지거나 파드가 새로 생성되면 해당 노드 위에 만들어짐.


`drain`과 `uncordon`과는 별도로 `cordon`이라 불리는 다른 명령어도 있음.


`cordon`명령어는 스케줄링할 수 없음을 표시. `drain`과 달리 노드 위에 존재하는 파드를 옮기거나 종료하지 않음. 새 파드가 생성될 수 없도록만 함.


## Practice Test - OS Upgrades

1. 클러스터에 있는 노드 수
2. 클러스터 위에 놓인 애플리케이션 수 → default 네임스페이스의 deployment 수
3. 애플리케이션은 어느 노드 위에 놓여있는가
4. 유지보수때문에 node01을 가져와야 함. 노드의 애플리케이션을 비우고 스케줄링할 수 없도록 함.

    ```bash
    kubectl drain node01 --ignore-daemonsets
    ```

5. 현재 애플리케이션은 어느 노드에서 동작하는가?
6. node01을 다시 스케줄링할 수 있도록 함.

    ```bash
    kubectl uncordon node01
    ```

7. default 네임스페이스에서 node01 위에 스케줄링된 파드 수
8. 왜 node01에 파드가 없는가?
Only when new pods are created they will be scheduled. 새 파드가 생겼을 때만 파드가 생김.
9. controlplane 노드 위에 왜 파드가 위치했는가?
controlplane node does not have any taints. controlplane 노드는 taints를 갖고 있지 않다.

    > 💡 대게 다중 노드 클러스터를 가질 때 master node(controlplane node)는 파드가 위치하는 것을 방지하고자 taints를 가짐.

10. node01을 다시 유지관리 작업을 수행해야 함. 이전과 같은 명령어를 사용하여 작업 수행.
작동하는가? 작동하지 않음.
11. 처음에는 동작했는데 왜 node01 drain 명령어가 실패했는가?
there is a pod in node01 which is not part of a replicaset

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/2b30c584-0bbf-4074-9099-540946c35952/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FXICMBM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDA6w%2FgXL00h8F%2BE%2FDg3QSdXb55FDD%2FZbeqTCnT%2FbD62AiB86lxfsX9FKIhNYtuVSK0UYpDDRIBgQYHukgWHFw%2BoWCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmqTeivdkx8j%2BiTn7KtwD4wFchaEDr7MgjCW8A7kB%2BZQHWA%2F%2FjbSH9bWFdcB%2FmPQUH07mRHjpdp1wJMKmt2It1waGAPmwzpemfztG%2FWwUC3B0w1KabYTVBiowneAtxw%2F3wo4K8AGEtBPSesK3dcut0H4tzBBGWxRAWt7PG8Eq2A8kF9x8S53Ysi5qyXWa5WpPTy4b6svv2X6HSoT7kkjkXm4%2F6n799oVl8fBNduh5LDb1IIWv3vrQx9FUxuAWQx2F4xoA7X6njfX%2B0%2BXlsTTe3KMei0Lbpkgbmuf2OMj%2B%2BJdLrHFGE7aPKvPozUd75pcpcB%2BnZqeTcN%2FWZQDsFTeDTgAIYlBXY2fMPqSccDxwlWgzaMVHIw3XyRg7w3RZix%2BKKQVoWj58eBPro6t2jXInv0benFOkSx%2Bk4p2q234HMJaYX62Y3eryGpgse9LnHd28QqMSJflmYZWYbkmpfrP2ieKg3NQndHq61i9Xyi2nLemElBzDPjQNDP%2BC3rJ4TlFIhte6vdODfzClIPzjGLZBuPt5ceZkDIDypS%2B%2BkCZKo8Hr%2B0xNzDcIjsEpCYB7JHDKIO0yL%2B6LONJAvk%2B64FXmurQavZf248qInF%2F1TSyNP3reUewklIUx%2FQR0zmAux9P0ZfE850wqyQL5PkEw6MPIwAY6pgGbCjd6k0nf4mO51gNuYA5no%2B6B5iSmZIfNSRNZEtI%2B681pm%2BOpxLSFm7Ahp9J7TJh5yVDh%2BbUpmnbU0VuV3bXLvJBpCw%2Fy21We5NqJx5KVwo4TtGh5clk%2BdWsW3ESz7V8afoYSBskzuUj%2BJRncjQzKtbZndzpFtiQlJz83qCYSYJZv5FekKa1MdNXTlmLqG6HezCYaPZaYOpPfoahzPIQdjG6LGB%2Bq&X-Amz-Signature=d451d7a3c01b327d64582ce4db4c7ad846f5412a8b15ead6abe2ca94224afcad&X-Amz-SignedHeaders=host&x-id=GetObject)

1. node01 위 replicaset의 일부가 아닌 pod의 이름
2. node01을 강제로 drain하면 hr-app은 어떻게 되는가?
hr-app will be lost forever
3. hr-app은 중요한 애플리케이션으로 없어지면 안 됨. 더 이상 node01에 스케줄링되면 안 됨. node01을 스케줄링할 수 없도록 표시.

    ```bash
    kubectl cordon node01
    ```


    node01에 더 이상 스케줄링 불가. hr-app은 여전히 node01에서 실행 중.


## Cluster Upgrade Process


kube-apiserver 버전이 x라고 하면 controller-manager와 kube-scheduler는 한 단계 낮은 버전 사용.


kubelet과 kube-proxy는 두 단계 낮은 버전 사용.


그러므로 kube-apiserver버전이 1.10이라고 하면 controller-manager와 kube-scheduler는 1.9 또는 1.10. kubelet과 kube-proxy는 1.8, 1.9 또는 1.10


kubectl은 한단계 위 버전을 사용. 1.11과 같이.


언제 업그레이드 하는가?


쿠버네티스가 버전을 최소 세 개만 지원하도록 한다고 하자. 1.12, 1.11, 1.10이 있는데 1.13이 새로 출시.


1.10은 더 이상 지원되지 않음. 업그레이드 필요.


어떻게 업그레이드 하는가? 직접적으로 1.10에서 1.13으로? ❌


> 추천하는 방법 → 한 번에 하나의 마이너 버전을 업그레이드. 1.10이면 1.11, 1.11이면 1.12


업그레이드 과정은 클러스터를 어떻게 설정했는가에 따름.


만약 cloud service provider에게 제공되는 관리형 쿠버네티스를 사용하면 몇 번의 클릭으로 쉽게 업그레이드 가능.


kubeadm과 같은 도구를 사용하여 클러스터를 배포했다면 그 도구는 plan을 도와주고 클러스터를 업그레이드한다.


클러스터를 처음부터 배포했다면 클러스터 자체의 다른 구성 요소들을 수동적으로 업그레이드해야 함.


클러스터 업그레이드는 두 가지 주요 단계가 있다.

1. master node를 업그레이드하고 worker 노드를 업그레이드 한다.

    master node가 업그레이드 되는 동안 API server, scheduler, 그리고 controller-manager와 같은 control plane 구성 요소들은 잠깐 내린다.


    master가 내려간다고 해서 worker 노드들과 클러스터 위 어플리케이션이 영향을 받는 것은 아님. 


    worker node 위 모든 워크로드들은 사용자들에게 계속해서 제공함.


    master가 내려갔기 때문에 모든 관리 기능이 중단됨. kubectl 혹은 다른 Kubernetes API를 사용해서 cluster에 접근 불가. 새 애플리케이션 배포하거나 존재하는 것들 수정 불가.
    pod가 fail이 되면 자동적으로 생성되지 않음.
    하지만 노드와 파드가 올라오자마자 애플리케이션도 동작함. 사용자는 영향을 받지 않을 것임.
    일단 업그레이드가 끝나고 클러스터가 백업되면 정상적을 동작해야 함.
    이제 우리는 버전 1.11의 master와 master 구성 요소들과 버전 1.10의 worker node를 가짐. → 지원되는 구성.


    이제 worker node를 업그레이드. worker node를 업그레이드하기 위해 사용할 수 있는 다른 전략이 있음.


        1. 모든 것을 한 번에 업그레이드.
        pod가 내려가면 사용자는 더 이상 어플리케이션에 접근할 수 없음. → 다운타임이 필요한 전략.
        업그레이드 되고 노드가 백업 되면 새 파드가 스케줄링됨. 사용자들은 다시 접근 가능.


        2. 한 번에 노드 한 개를 업그레이드.
        마스터가 업그레이드 되고 노드가 업그레이드 대기 중인 상태. → 먼저 첫 번째 노드를 업그레이드.
        워크로드는 두 번재와 세 번째로 옮김. 사용자들은 그 노드들로부터 제공받을 수 있음.
        첫번째 노드가 업그레이드되고 백업하면 두 번째 노드를 업그레이드. 이 때 워크로드는 첫 번째나 세 번째 노드로.
        그리고 세 번째 노드를 업그레이드하면 워크로드들은 첫 번째와 두 번째로.
        모든 worker node가 업그레이드 될 때까지 같은 과정을 반복.


        3. 클러스터에 새 노드 추가.
        새 소프트웨어 버전을 가진 노드. 특히 쉽게 새 노드를 프로비저닝할 수 있는 클라우드 환경에서 편리함. 그리고 오래된 버전은 폐기. 새 버전을 가진 노드가 클러스터에 추가될 수 있음.
        워크로드들을 새 노드로 옮기고 오래된 것 폐기.


    kubeadm의 upgrade 명령어로 클러스터를 업그레이드함.


    ```bash
    kubeadm upgrade plan
    ```


    위 명령어를 실행하면 정보를 줌. 현재 클러스터 버전, kubeadm tool 버전, kubernetes의 최신의 안정적인 버전. controlplane 구성 요소들 리스트와 그것들의 버전 그리고 어느 버전으로 업그레이드 가능한지.


    controlplane 구성 요소들 업그레이드 후 각 노드 위 kubelet 버전을 수동적으로 업그레이드 해야 함.


    > kubeadm은 kubelet을 설치하거나 업그레이드하지 않음.


    마지막으로 클러스터를 업그레이드하지 위한 명령어를 알려줌. 또한, 클러스터를 업그레이드하기 전에 kubeadm tool 자체도 업그레이드 해야 함. kubeadm 버전은 kubenetes와 똑같은 버전을 사용.


    먼저, kubeadm 버전부터 version 1.12로 업그레이드. upgrade plan으로부터 얻은 명령어를 사용해서 클러스터 업그레이드.


    ```bash
    kubeadm upgrade apply v1.12.0
    ```


    필요한 이미지를 가져오고 클러스터 구성 요소들을 업그레이드.


    완료되면 controlplane 구성 요소들은 1.12가 된다.


    `kubectl get nodes` 명령어를 실행하면 master node는 여전히 1.11인 것을 볼 수 있음. → 이 명령어의 출력에서 API 서버 자체의 버전이 아닌 API server에 등록된 각 노드의 kubelet의 버전이 표시되기 때문.

2. kubelet 업그레이드

    설정에 따라 master node 위에 실행 중인 kubelet일 수도 있고 아닐 수도 있음.


    이 경우 kubeadm을 가지고 배포된 클러스터는 master node의 kubelet을 가지며, master node위 파드로 controlplane 구성 요소들을 실행하는 데 사용된다.


    kubernets 클러스터는 처음부터 설치할 때 master node 위에 kubelet을 설치하지 않는다. master node를 볼 수 없을 것이다. 이 경우 명령어 출력에서 마스터 노드를 볼 수 없을 것.


    만약 master node 위 kubelet을 가지고 있다면 `apt-get uprade kubelet` 명령어 실행.


    패키지가 업그레이드되면 kubelet 서비스 재시작. `systemctl restart kubelet` 


    `kubectl get nodes` 명령어 실행. 마스터 노드가 1.12로 업그레이드 된 것을 볼 수 있음. worker node는 여전히 1.11임. 한 번에 하나씩 worker node 업그레이드해야 함.


    ```bash
    kubectl drain node-1
    apt-get upgrade -y kubeadm=1.12.0-00
    apt-get upgrade -y kubelet=1.12.0-00
    systemctl restart kubelet
    kubectl uncordon node-1
    ```


    모든 worker node를 업그레이드 할 때까지 위 명령어 반복.


## Demo - Cluster upgrade


[bookmark](https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/)


## Practice - Cluster upgrade

1. 현재 클러스터의 kubernetes 버전
2. 클러스터에 있는 노드 수
3. 클러스터에서 얼마나 많은 워크로드를 가질 수 있는가?

    ```bash
    kubectl describe node | grep Taints
    Taints:          <none>
    Taints:          <none>
    ➡️ 2개
    ```

4. 클러스터에 몇 개의 어플리케이션이 호스팅되었느가?
5. 파드들은 어느 노드 위에 있는가?
6. 클러스터를 업그레이드 하려고 함. 어플리케이션에 접근하는 유저들이 영향을 받으면 안 됨. 새 가상 머신을 프로비저닝하면 안 됨. 어떤 업그레이드 전략을 사용할 것인가?
워크로드를 다른 노드로 옮기는 동안 하나에 하나씩 노드를 업그레이드.
7. 지금 업그레이드 가능한 가장 최신 kubeadm 버전 → v1.31.6
8. controlplane 노드를 먼저 업그레이드할 것. 워크노드의 controlplane 노드 drain. 그리고 unschedulable 표시.

    ```bash
    kubectl drain controlplane --ignore-daemonsets
    ```

9. v1.32.0로 controlplane 구성 요소 업그레이드

    [bookmark](https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/change-package-repository/#verifying-if-the-kubernetes-package-repositories-are-used)


    설치할 패키지 가져온 후 apt update 시도


    ```bash
    vi /etc/apt/sources.list.d/kubernetes.list
    ➡️ deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.32/deb/ /
    apt update
    apt-cache madison kubeadm
    apt-get upgrade -y kubeadm=1.32.0-1.1
    kubeadm upgrade plan v1.32.0
    kubeadm upgrade apply v1.32.0
    apt-get upgrade -y kubelet=1.32.0-1.1
    systemctl daemon-reload
    systemctl restart kubelet
    ```

10. controlplane 다시 schedulable로 표시

    ```bash
    kubectl uncordon controlplane
    ```

11. worker node의 워크로드를 drain하고 Unschedulable로 표시

    ```bash
    kubectl drain node01 --ignore-daemonsets
    ```

12. v1.32.0으로 worker node 업그레이드

    ```bash
    ssh node01
    vi /etc/apt/sources.list.d/kubernetes.list
    ➡️ deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.32/deb/ /
    apt update
    apt-cache madison kubeadm
    apt-get upgrade -y kubeadm=1.32.0-1.1
    kubeadm upgrade node
    apt-get upgrade -y kubelet=1.32.0-1.1
    systemctl daemon-reload
    systemctl restart kubelet
    ```

13. restriction을 제거하고 worker node를 다시 스케줄링 가능한 상태로 표시

    ```bash
    kubectl uncordon node01
    ```


## Backup and Restore Methods


etcd cluster는 모든 클러스터와 관련된 정보가 저정되어있는 곳이다. 그리고 어플리케이션이 Persistent Storage로 구성되면 그것도 백업 후보가 될 수 있다.


우리는 namespace, secret, configmap 등 명령어를 사용하여 임의적으로 만들 수 있다.  그리고 파일을 생성하고 `kubectl apply`  명령어를 실행함으로써 선언적인 방법으로 생성할 수 있다.


누군가 그 정보를 어디에도 기록하지 않고 명령적인 방식으로 객체를 만든다면 어떨까? → 그래서 자원 구성을 백업하는 가장 좋은 방법은 Kube API server에 query하는 것이다.


kubectl 을 사용하여 Kube API Server에 질의하거나 API server에 직접적으로 접근하여 클러스터에 생성된 모든 자원 구성을 복사본으로 저장.


고려해야 할 많은 자원 그룹이 있다. 물론 우리는 해결책을 개발할 필요❌


→ Ark 지금은 Velero, Heptio와 같은 도구가 있다.


Kubernetes API를 사용해 Kubernetes 클러스터의 백업 정보를 가져올 수 있다.


etcd 클러스터는 클러스터의 상태를 저장한다. 그래서 클러스터 자체, 노드, 클러스터 내에 생성된 다른 모든 자원에 대한 정보를 여기에 저장한다.


따라서 리소스를 백업하는 대신 etcd 서버 자체를 백업할 수 있다.


etcd를 구성하는 동안 우리는 data directory 즉, 모든 데이터가 저장될 수 있는 장소를 명시한다.


backup 도구로 백업할 수 있도록 구성할 수 있는 디렉토리이다.


etcd는 또한 스냅샷 솔루션을 가진다. 우리는 etcd contrl 유틸리티의 snapsho save 명령어를 사용하여 etcd 데이터베이스의 스냅샷을 남길 수 있다.


어느 정도 지난 시점에 백업으로 클러스터를 복구하기 위해 먼저 Kube API server 서비스를 멈춰야 한다. 복구 과정에서 etcd cluster를 재시작해야 하고, Kube API server에 따라 달라진다. 그리고 snapshot.db file이라고 하는 백업 파일의 경로를 설정하기 위한 경로를 가지고 etcd controls snapshot restore 명령어를 실행하면 된다.


etcd가 백업으로부터 복구할 때, 새 클러스터를 구성을 초기화하고 etcd의 멤버를 새 클러스터의 새 멤버로 구성한다. 이것은 갑자기 존재하는 클러스터에 새 멤버가 들어오는 것을 막는다. 이 명령어를 실행하면 새 data directory가 생성된다. 그리고 service demon을 다시 불러오고 etcd service를 재시작한다. 마지막으로 Kube API server 서비스를 시작한다. 클러스터는 이제 원래 상태로 돌아와야 한다.


## Working with ETCDCTL


etcdctl은 etcd에 대한 command line client이다. 백업, 복구와 같은 작업에 대해 etcdctl을 사용하기 위해서 `ETCDCTL_API=3`를 설정해야 한다.


etcd client를 사용하기 전에 ETCDCTL_API를 값을  export해야 한다.


## Practice Test - Backup and Restore Methods

1. 클러스터에 default namespace에 존재하는 deployment 수
2. 클러스터에서 운영 중인 ETCD 버전

    ```bash
    kubectl describe pods etcd-controlplane -n kube-system
    ```

3. controlplane 노드로부터 ETCD 클러스터에 도달할 수 있는 주소
4. ETCD server certificate 파일이 위치한 곳
/etc/kubernetes/pki/etcd/server.crt
5. ETCD CA Certificate 파일이 위치한 곳
/etc/kubernetes/pki/etcd/ca.crt
6. master node가 오늘밤 정기 유지보수로 재시작이 계획되어있음. 문제가 발생할 것으로 예상하지는 않지만 필요한 백업을 받아야 함. 내장된 snapshot을 사용하여 ETCD database의 snapshot을 가져오기

    /opt/snapshot-pre-boot.db에 백업 파일 저장.


    ```bash
    export ETCDCTL_API=3
    etcdctl --endpoints=https://127.0.0.1:2379 \
    	--cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key \
      snapshot save /opt/snapshot-pre-boot.db
    ```

7. 재시작 후 master node가 온라인 상태가 되었지만 어플리케이션에 접근할 수 없음. 클러스터의 어플리케이션 상태 확인. 문제?
Deployment, pod, service(기본으로 주어지는 kubernetes 제외)가 없음.
8. 백업 파일을 사용해 원래 상태로 복구.

    ```bash
    etcdctl --data-dir /var/lib/restoreetcd snapshot restore /opt/snapshot-pre-boot.db
    vi /etc/kubernetes/manifests/etcd.yaml
    ➡️volumes.hostPath.path 복구한 경로로 수정
    kubectl delete pods etcd-controlplane -n kube-system # or systemctl restart kubelet (또는 둘 다)
    ```


    /var/lib/etcd는 기존에 존재하는 디렉토리로 삭제 후 시도하거나 새 디렉토리로 지정 필요.


## Practice Test  -  Backup and Restore Methods 2


### 다중 클러스터에서 백업과 복구

1. student-node위 kubeconfig에 정의된 클러스터 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/90fbb5ca-abd8-4e61-942c-f799d3069cf4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMZATVWU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCj%2FTQ%2B92kpdgcLeJxV4t2eTO8dUvsXQCKiXdojgolM%2BgIgEjkRktW4MVvcfqiw8RwkvypBt6xAqR4sshFVjNET0OgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyjHysp8H5ux8RQAyrcAzdHUnLFIBo9qBDbRTucOMapM3ntYDSiP3BKzYSXEy85JwdDtikQWdPq7VcMPNk906shU2q4A0nAGFhLmk89bUuiM%2F%2BVw2uN7J7mS3Pxrlx94X5Nwj%2BtWbREwTZ%2BybU6reqtVXtF5Y5gZZL8ymbAckCe6DQzVYIsG582ZDBk%2F1Eqacztd8BYYEgc65QYuljbg%2FW0dciZoi%2FgEIdNomgyQM85X52Q1A3W%2BPycSKtqBh7lePAep1g%2BKlxrdWtykLWv8J4r%2FoLKYVKY%2Ffem9slRq5QKAFYLZ10LYXXtSLB5iIP3mQueksKteQOSlQI1LigqabqnXnmsuRd26P3lg5Rvo4uK74CxVi7siALVRx0K%2F2LAAH1KfPT0ielDqMJVMhZCpWeh7SQ9PI548L8UAkwcGV1Zvv0teeDKcYln7Eea693yGHeeHu8BzuiJ9C5X7lmmIrZgkyR9hf1dHc9uJonzT2bTcLSbT2P1lT3o2VYvd9Z45UT9q3c2SvxpPqTTMjx0LzsTg7FnemAbxy5KF60Zxgjg8WHgR8k1pupMBwfF3AeswxL%2FAxXJI4cwk4VEyZgijWSkJJqm3L3M7d3uHT7GuHp6dAgaZpAC9f2lWB4SWMd7O%2B7SiHvHLs5dK0sTML7EyMAGOqUBnwwCctjjDy5TkfJIOnjh6k46snM6mRZKessGWWFzCLxB2t%2FMehS%2BP2Bft073Pi6la6zBA5vw7lf7iFNkTyxkpUoShQ2D64ggjgMB1L79EzaAF2l40B4CGm%2F6JygeGlGWpEcXhgcFBgBXNWdtgkjS1%2BPMggGQvvL5oEqc62J1Ou%2F%2FZRV8hjHJm1k8GZYnApyxWMZHy0eEwLk9Ewm1%2FUZz%2BoNMMieZ&X-Amz-Signature=97062e28caf981ffee43f3f2dce38bcb6a772b842b6c1f6ba1f3b47230a0413d&X-Amz-SignedHeaders=host&x-id=GetObject)

2. cluster1의 노드 수

    ```bash
    kubectl config use-context cluster1
    kubectl get nodes
    ```

3. cluster2에서 controlplane node의 이름.

    ```bash
    kubectl config use-context cluster2
    kubectl get nodes
    ```

4. cluster1에 대한 ETCD 는 어떻게 구성되었는가?

    Stacked ETCD


    `kubectl get pods -n kube-system`을 수행했을 때 etcd pod가 보인다면 Stacked ETCD 


    `kubectl describe pods <api-server-name> -n kube-system` 을 실행하면 API server가 ETCD server와 실제로 소통하기 위해 사용하는 URL이 있음. localhost나 controlplane node의 IP 주소이면 Stacked ETCD 

5. cluster2에 대한 ETCD는 어떻게 구성되었는가?

    External ETCD


    kubectl get pods -n kube-system을 했을 때 ETCD pod가 보이지 않음. 서버에 문제가 있기 때문일 수도? ssh로 controlplane node 접속. /etc/kubernetes/manifests로 이동하면 정적 pod 구성을 볼 수 있음.


    세 개의 manifests만 있음. ETCD server는 안 보임.


    일단 Stacked ETCD가 아니란 것을 알 수 있음. 다시 `kubectl get pods -n kube-system`을 실행. 이번에는 API server의 구성을 살피기 위해 `kubectl describe pods <api-server> -n kube-system` 을 실행.


    ETCD server 구성으로 가면 분리된 IP 주소를 볼 수 있음.


    External ETCD server를 사용하고 있음을 알 수 있음.

6. cluster2에서 사용되는 External ETCD datastore의 IP 주소.
7. cluster1에서 사용 중인 ETCD datastore에 대해 사용 중인 기본 data  directory는?
8. cluster2에서 사용되는 ETCD datasource에 대해 사용 중인 default data directory는 무엇인가? External ETCD를 사용.

    `etcd-server`로 접속해서 `ps -ef | grep -i etcd` 실행. `--data-dir=/var/lib/etcd-data` 라고 적혀있음을 알 수 있음.

9. etcd-server가 속한 ETCD cluster의 노드의 수

    ```bash
    export ETCDCTL_API=3
    etcdctl --endpoints=https://127.0.0.1:2379 \
    --cacert=/etc/etcd/pki/ca.pem --cert=/etc/etcd/pki/etcd.pem \
    --key=/etc/etcd/pki/etcd-key.pem member list
    ```


    member가 한 개 밖에 없음. 그러므로 1.

10. cluster1의 etcd를 백업하고 /opt/cluster1.db에 student-node에 저장.

    ```bash
    ssh cluster1-controlplane
    export ETCDCTL_API=3
    etcdctl --endpoints=https://<advertise-client-url>:2379 \
    --cacert=/etc/kubernetes/pki/etcd/ca.crt \
    --cert=/etc/kubernetes/pki/etcd/server.crt \
    --key=/etc/kubernetes/pki/etcd/server.key \
    snapshot save /opt/cluster1.db
    exit
    # student-node로 돌아옴.
    scp cluster1-controlplane:/opt/cluster1.db /opt/
    ```


    etcd server에 도달할 수 있도록 advertise client URL을 사용해야 함.

11. cluster2에 대한 ETCD 백업이 /opt/cluster2.db에 저장됨. snapshot 파일을 사용해 새 경로 /var/lib/etcd-data-new에 cluster2 복구 수행.

    ```bash
    scp /opt/cluster2.db etcd-server:/root
    
    ssh etcd-server
    export ETCDCTL_API=3
    etcdctl --data-dir=/var/lib/etcd-data-new \
    snapshot restore /root/cluster2.db
    
    chown -R etcd:etcd /var/lib/etcd-data-new
    
    vi /etc/systemd/system/etcd.service
    ➡️--data-dir을 복구한 경로로 변경.
    
    systemctl daemon-reload
    systemctl restart etcd
    exit
    # student-node로 돌아옴.
    kubectl delete pods kube-controller-manager-cluster2-controlplane kube-scheduler-cluster2-controlplane -n kube-system
    
    ssh cluster2-controlplane
    systemctl restart kubelet
    ```

