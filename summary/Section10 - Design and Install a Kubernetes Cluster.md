# 🍨 Section10 - Design and Install a Kubernetes Cluster

## Design a Kubernetes Cluster


On-premise에서는 kubeadm이 매우 유용한 도구.


Kops for AWS

> Storage
- High Performance - SSD Backend Storage
- Multiple Concurrent connections - Network based storage
- Persistent shared volumes for shared access across multiple PODs
- Label nodes with specific disk types
- Use Node Selectors to assign applications to nodes with specific disk types

## Choosing Kubernetes Infrastructure


노트북이나 로컬 컴퓨터에서는 여러 가지 방법으로 가능. 우선, 지원되는 Linux 컴퓨터에서는 바이너리를 수동으로 설치하고 로컬 클러스터를 설정하는 작업을 시작할 수 있음. 그러나 이제 막 시작하는 경우에는 이 작업이 너무 번거로움. 따라서 클러스터를 몇 분 만에 설정하는 데 도움이 되는 모든 것을 자동화하는 솔루션에 의존.


반면에 Windows에서는 Windows 바이너리가 없기 때문에 Kubernetes를 기본적으로 설정할 수 없음.  Kubernetes를 사용할 수 있는 Linux VMs를 생성하여 Hyper-V나 VMware Workstation 또는 VirtualBox같은 가상화 소프트웨어를 의존해야 함.


Minikube는 쉽게 단일 노드 클러스터 배포.


Kubeadm tool은 단일 노드나 다중 노드 클러스터를 빠르게 배포하는 데 사용될 수 있음.


그러나 이를 위해서는 필요한 호스트에 지원되는 구성을 직접 프로비저닝해야 함.


처음 두개와 kubeadm의 차이점은 처음 두 개가 자체적으로 지원되는 구성을 가진 VMs를 제공.


Kubeadm은 이미 프로비저닝된 VMs를 기대함. 다중 클러스터 배포 가능.


production 목적 → turnkey solutions or hosted(managed) solutions

> Turnkey Solutions

Turnkey solutions는 필요한 VM을 프로비저닝하고 도구나 스크립트를 사용하여 Kubernetes 클러스터를 구성하는 곳.

- You Provision VMs
- You Configure VMs
- You Use Scripts to Deploy Cluster
- You Maintatin VMs yourself
- Eg: Kubernetes on AWS using KOPS

Hosted solutions는 서비스 솔루션으로서 Kubernetes와 더 유사하며, 클러스터와 필요한 VM이 제공자에 의해 배포되고 Kubernetes는 제공자에 의해 구성됨.

- Kubernetes As A Service
- Provider provisions VMs
- Provider installs Kubernetes
- Provider maintains VMs
- Eg: Google Continaer Engine(GKE)

Openshift는 레드햇의 인기 있는 온프레미스 쿠버네티스 플랫폼. 쉽게 CI/CD pipeline 등과 통합.


Cloud Foundry Continaer Runtime은 Cloud Foundary  오픈 소스 프로젝트로, BOSH라는 오픈 소스 도구를 사용하여 가용성이 높은 쿠버네티스 클러스터를 배포하고 관리하는 데 도움을 줌.


기존 VMware 환경을 Kubernetes에 활용하려면 VMware Cloud PKS 솔루션을 평가해야 됨.


Vagrant는 다양한 클라우드 서비스 제공업체에 Kubernetes 클러스터를 배포하는 데 유용한 스크립트 세트를 제공. 지원되는 구성이 있는 가상 머신이 몇 대 있어야 함.

> Hosted Solutions
- GKE
- OpenShift Online
- Azure Kubernetes Service
- Aamzon EKS

## Configure High Availability


클러스터에서 마스터 노드가 손실되면 무슨 일이 발생하는가? 


pod를 생성하려고 할 때 마스터 노드가 없어 스케줄링 불가. 이러한 이유로 프로덕션 환경에서 HA 구성으로 다중 마스터 노드를 고려해야 함.


HA 구성은 클러스터의 모든 구성 요소에 걸쳐 중복성을 유지하여 단일 장애 지점을 방지하는 것.


추가 마스터 노드가 있는 HA 설정에서는 새 마스터에서도 동일한 구성 요소가 실행됨, 그렇다면 동일한 구성 요소의 여러 인스턴스를 실행하는 것은 어떻게 작동하는가? 두 번 같은 작업을 수행할까? 그들은 어떻게 일을 분담하는가?


그들(구성요소)이 무엇을 하냐에 따라 다름.


모든 클러스터 노드의 API 서버가 active-active 모드에서 동시에 활성화되고 실행될 수 있도록 한 번에 하나의 요청에 대해 작업. 지금까지 이 과정에서 우리는 kube 제어 유틸리티가 API 서버와 대화하여 작업을 완료하고, kube 제어 유틸리티가 포트 6443의 마스터 노드에 도달하도록 지시한다는 것을 알고 있음. API 서버가 수신하는 곳이며, 이는 kubeconfig 파일에 구성되어 있음.


이제 두 마스터 노드를 가지고 두 kubectl이 어디를 가리키는가? 우리는 그들 중 하나를 보낼 수 있지만, 둘 모두 동일한 요청을 보낼 수 없음. 따라서 API 서버에 구성된 마스터 노드 앞에 구성된 마스터 노드에 로드 밸런서가 있어야 함. 그래서 kubectl utility는 load balancer를 가리킴. 이러한 이유로 EngineX나 HA proxy 또는 다른 load balancer를 사용.


스케줄러와 컨트롤러 매니저는?


여러 인스턴스가 병렬로 실행되면 작업을 중복하여 실제로 필요한 것보다 더 많은 포드가 생성될 수 있음. 스케줄러도 마찬가지. 따라서 병렬로 실행해서는 안 됨. 그들은 active-standby 모드에서 실행됨.


둘 중 누가 active이고 누가 standby인가? 리더 선출 과정을 통해 이루어짐.


컨트롤러 매니저 프로세스 구성할 때  `kube-controller-manager --leader-elect true [other options]` 명시.


컨트롤러 관리자 프로세스가 시작되면 kube controller manager endpoint로 명명된 Kubernetes의 엔드포인트 객체에 대한 lease 또는 lock을 시도.


어떤 프로세스가 먼저 엔드포인트 정보를 업데이트하든 lease를 획득하면 두 프로세스 중 하나가 active됨. 다른 프로세스는 passive가 됨. 이 프로세스는 기본적으로 15초로 설정된 `--leader-elect-lease-durations` 옵션을 사용하여 지정된 lesae 기간 동안 lock을 유지. 그런 다음 active 프로세스는 옵션`--leader-elect-renew-dealine` 기본값인 10초마다 lease를 갱신. 두 프로세스 모두 `--leader-elect-retry-period`옵션에 의해 설정된 매 2초마다 leader가 되려고 함. 이렇게 하면 첫 번째 마스터가 conflict하여 한 프로세스가 실패하면 두 번째 프로세스가 로그를 획득하고 리더가 될 수 있음. 스케줄러도 유사한 접근 방식을 따르며 동일한 명령줄 옵션을 가짐.


ETCD


쿠버네티스에서 구성할 수 있는 두 토폴로지가 있음.

- Stacked Topology 여기서 ETCD는 쿠버네티스 마스터 노드의 일부.
    - Easier to setup
    - Easier to manage
    - Fewer Servers
    - Risk during failures
- External ETCD Topology ETCD가 control plane node에서 분리되어 자체 서버 세트에서 실행.
    - Less Risky
    - Harder to Setup
    - More Servers

    따라서 API 서버는 ETCD 서버와 통신하는 유일한 구성 요소. kube-apiserver.service 옵션을 살펴보면 ETCD 서버의 위치를 지정하는 일련의 옵션이 있음. 따라서 우리가 사용하는 토폴로지와 ETCD 서버에서 구성하는 위치에 관계없이, 동일한 서버에서든 별도의 서버에서든 결과적으로 API 서버가 ETCD 서버의 올바른 주소를 가리키고 있는지 확인해야 함. 이제 ETCD는 분산 시스템이므로 API 서버 또는 대화하고자 하는 다른 구성 요소가 ETCD 서버에 도달할 수 있음. 사용 가능한 ETCD 서버 인스턴스를 통해 데이터를 읽고 쓸 수 있음.


## ETCD in HA


Majority란? 더 적절한 용어는 Quorum


$Quorum = N/2 +1$


Quorum은 클러스터가 제대로 작동하거나 성공적으로 쓰기 위해 사용할 수 있어야 하는 최소 노드 수. 노드가 3인 경우 quorum은 1.5+1 = 2.5 ≈ 2. 0.5가 있는 경우, 소수점 앞 상수만 고려.


Quorum을 충족할 수 없기 때문에 실제 값을 제공하지 않으므로 ETCD 클러스터에서 최소 세 개의 인스턴스를 사용하는 것이 좋음. 이렇게 하면 적어도 하나의 노드에 대한 tolerance를 제공. 하나를 잃더라도 Quorum을 유지할 수 있고 클러스터는 계속 작동. 따라서 첫 번째 열에서 두 번째 열을 빼면 클러스터를 유지하면서 잃을 수 있는 노드 수인 tolerance가 제공됨.


| Instances | Quorum | Fault Tolernace |
| --------- | ------ | --------------- |
| 1         | 1      | 0               |
| 2         | 2      | 0               |
| 3         | 2      | 1               |
| 4         | 3      | 1               |
| 5         | 3      | 2               |
| 6         | 4      | 2               |
| 7         | 4      | 3               |


마스터 노드 수를 결정할 때 홀수 선택 추천. 3, 5, 7과 같은. 짝수 개의 노드가 있는 경우 네트워크 분할 중에 클러스터가 실패할 가능성이 있음.


HA 환경에서는 보시다시피 하나 또는 두 개의 인스턴스를 갖는다는 것은 실제로 의미가 없음. 왜냐하면 두 경우 모두 하나의 노드를 잃는다는 것은 Quorum을 잃게 되어 클러스터가 작동하지 않게 되기 때문.따라서 HA 설정에서 필요한 최소 노드는 세 개.


| Instances | Quorum | Fault Tolernace |
| --------- | ------ | --------------- |
| 3         | 2      | 1               |
| 5         | 3      | 2               |
| 7         | 4      | 3               |

