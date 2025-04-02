# 🍨 Section11 - Install “Kubernetes the kubeadm way”

## Introduction to Deployment with Kubeadm


## Deploy with Kubeadm - Provision VMs with Vagrant


[bookmark](https://developer.hashicorp.com/vagrant/docs/installation)


cka repository git clone 하고 vagrantfile 탐색.


```yaml
vagrant status
vagrant up # provisioning node
vagrant status
vagrant ssh kubemaster # for automatically connecting
vagrant ssh kubenode01
vagrant ssh kubenode02
```


## Demo - Deployment with Kubeadm


[bookmark](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/)


위 강의에서 설치한 VM 전체에 kubeadm, kubelet, kubectl 설치.


[bookmark](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/)


모든 VM에 containerd 설치.


[bookmark](https://kubernetes.io/docs/setup/production-environment/container-runtimes/)


원하는 Cgroup 드라이버를 사용할 수 있지만, 어떤 것을 선택하든 Kubelet과 컨테이너 런타임 모두 동일한 Cgroup 드라이버를 사용하도록 구성되어 있는지 확인해야 함.


container runtime은 cgroup driver이용하도록 설정.


config바꾸고 containerd 다시 시작. `sudo systemctl restart containerd`


```bash
sudo kubeadm init --apiserver-advertise-address 192.168.56.11 --pod-network-cidr "10.244.0.0/16" --upload-certs

mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```


[bookmark](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/high-availability/)


install pod network addon


install CNI plugin


```bash
# MasterNode
curl <flannel github repository URL>
kubectl apply -f kube-flannel.yml
kubectl get po -n kube-flannel
```


network plugin이 성공적으로 배포되어 kubemaster가 ready 상태로 바뀜.


[bookmark](https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/adding-linux-nodes/)


```bash
#WorkerNode
sudo kubeadm join --token <token> <control-plane-host>:<control-plane-port> --discovery-token-ca-cert-hash sha256:<hash>
```


`kube-flannel` namespace를 보면 flannel이 세 개가 됨. → 노드 당 하나씩.


## Practice Test - Deploy a Kubernetes Cluster using Kubeadm

1. controlplane과 node01에 kubeadm과 kubelet 패키지 설치. 1.32.0-1.1 버전 사용.

    ```bash
    cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
    br_netfilter
    EOF
    
    cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
    net.bridge.bridge-nf-call-ip6tables = 1
    net.bridge.bridge-nf-call-iptables = 1
    EOF
    
    sudo sysctl --system
    ```


    container runtime이 이미 두 노드에 설치되어있다면 위 과정은 건너뛰어도 됨.


    ```bash
    # controlplane과 node01에서 똑같이 실행.
    sudo apt-get update
    sudo apt-get install -y apt-transport-https ca-certificates curl gpg
    curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.32/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
    echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.32/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list
    sudo apt-get update
    sudo apt-get install -y kubelet=1.32.0-1.1 kubeadm=1.32.0-1.1 kubectl=1.32.0-1.1
    sudo apt-mark hold kubelet kubeadm kubectl
    ```

2. 설치된 kubelet 버전은?

    ```bash
    kubelet --version
    ```

3. 현재 kubernetes cluster의 노드 수. 0

    아직 initializing하지 않아서 노드 수가 0.

4. 이제 kubeadm을 사용하여 kubernetes 클러스터를 부트스트랩하고, 포드와 서비스를 위한 맞춤형 네트워킹을 구성하며, API 서버 노출을 최적화하고, 전체 클러스터 기능을 제공.
5. Control Plane Node(Master Node) 초기화. 아래 option을 사용.
    1. `apiserver-advertise-address` - Use the IP address allocated to eth0 on the controlplane node
    2. `apiserver-cert-extra-sans` - Set it to `controlplane`
    3. `pod-network-cidr` - Set to `172.17.0.0/16`
    4. `service-cidr` - Set to `172.20.0.0/16`

    완료되면 기본 kubeconfig 파일을 설정하고 노드가 클러스터에 포함될 때까지 기다림.


    ```bash
    sudo kubeadm init --apiserver-advertise-address 192.168.183.232 --apiserver-cert-extra-sans controlplane --pod-network-cidr 172.17.0.0/16 --service-cidr 172.20.0.0/16
    mkdir -p $HOME/.kube
    sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
    sudo chown $(id -u):$(id -g) $HOME/.kube/config
    ```

6. kubeadm join token 생성. 또는 `kubeadm init`  명령어로 생성된 것 복사.
7. join token을 사용하여 클러스터에 node01 join

    ```bash
    # node01
    kubeadm join 192.168.183.232:6443 --token ifd30z.9zz6rl1wjdu0lqq3 \
            --discovery-token-ca-cert-hash sha256:4ba3a028017dc37bc87fe959b30c8f4c5a82299262acbf0993fc5d1d0fb53c78
    ```

8. network plugin을 설치하려면 기본 옵션으로 flannel 선택. 호스트 간 통신의 경우 eth0 인터페이스를 사용하여 네트워크 필드 업데이트. flannel manifest에 이 구성에 적합한 옵션이 포함되어있는지 확인.

    ```bash
    curl -LO https://raw.githubusercontent.com/flannel-io/flannel/v0.20.2/Documentation/kube-flannel.yml
    
    vi kube-flannel.yml
    net-conf.json: |
        {
          "Network": "10.244.0.0/16", # kubeadm init에서 설정한 pod network cidr로 바꾸기.
          "Backend": {
            "Type": "vxlan"
          }
        }
     
    containers:
    - name: kube-flannel
      args:
      - --ip-masq
      - --kube-subnet-mgr
      - --iface=eth0 # 추가
      
    kubectl apply -f kube-flannel.yml
    
    kubectl get nodes
    NAME           STATUS   ROLES           AGE   VERSION
    controlplane   Ready    control-plane   16m   v1.32.0
    node01         Ready    <none>          12m   v1.32.0
    ```

