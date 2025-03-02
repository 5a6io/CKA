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
	kubectl drain --ignore-daemonsets
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/2b30c584-0bbf-4074-9099-540946c35952/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2N3UJYH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSYu8J1E7VQcd7fBREtQzgJbGSybiZqmqMW3QE7ghxJwIgYLbqMpMMLh%2BAsnp%2FoPYrFPHd2qyJ%2F5hTVwcQ3hyx%2FfgqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJUhLdrWHY3YZ8mJSrcAxqcTXRriGN15sRksnMVRQ6IPzjhqvWT2sjc1hkjcMToiASdZRHcJIf41aLTOBgd1uIyAizGFx4p6yQczTJKMe0Jmd6BDi4XG0cs74%2FUrcOWhslHoFR4GDlLnXGJubMFQt7kyij7eqmC9FiJEssZGfmA7lrSdHNKzCHE9mC92DTTMa%2Bhp6gyhyCx9jE0VLhM08o0m%2B%2BxUzN3ZUmM1xsIGwGY98oBok8j6LMh7F%2F9P1lskGzv7PPPbmt2WhIipS9%2FgtGQlX3orN2zH9zpEljdTas3%2Bulx0i3Accq0mYDY1PLjdg%2FLFe%2BxnVcE30LdD4sDPW11Ts8cBAJXzfVL1vvDuDFv0z%2FKaGgSUsBVrFaslOqi7U7WGmYpHdfNJx8MY0M35W22J9IpqmE%2FgoKWzXMKRiwVtbBIr5cntz4kJAoUv9gH6ovkwJmsVxRxRqWMdJShOutrv%2FLWj9SaYaGg5oOZWc70QMKmgbl7HFihfalOaghUgKuW363eFsyzCgh%2Bu88DQOVDvPaR%2FmyPFudAL4etkVvOiGqNab67v%2Bh2oPaFALckoakY02gDrbR8cK688enoZCGKkhhWbTk8GZthBlSmUan23BGXLX1PzhBHhWZmPqp%2FPONwNDOxI%2FXN4k9pMLj4kL4GOqUBimczCDQ9XrvxgEU8SAtZZb9920g87DhDsbdXJ2fd77PaKPTz43wgnD1JkbBGyriWDsHFcfZgjkKO0tD009wdKZTikvrqeRK2rY%2BUgQLnCDQnrWm0uMoIjCDdO38tEaBJx49E2UP0DbtXut8vAYTvEzoXMWhQnQxFdXWthhcTQfsbyUXVcKcTV3%2Bio8E5EoqaUrUff2OApNEdBZqnc2KSPmaJq%2BN3&X-Amz-Signature=a129002cf4dc3fe7796b9fe3bddbb11b3609150f1950d44f7ec1378b5802043f&X-Amz-SignedHeaders=host&x-id=GetObject)

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


	`kubectlget nodes` 명령어 실행. 마스터 노드가 1.12로 업그레이드 된 것을 볼 수 있음. worker node는 여전히 1.11임. 한 번에 하나씩 worker node 업그레이드해야 함.


	```bash
	kubectl drain node-1
	apt-get upgrade -y kubeadm=1.12.0-00
	apt-get upgrade -y kubelet=1.12.0-00
	systemctl restart kubelet
	kubectl uncordon node-1
	```


	모든 worker node를 업그레이드 할 때까지 위 명령어 반복.


## Demo - Cluster upgrade


## Practice - Cluster upgrade


## Backup and Restore Methods


## Working with ETCDCTL


## Practice Test - Backup and Restore Methods


## Practice Test  -  Backup and Restore Methods 2

