# 🍨 Section4 - Logging&Monitoring

## Monitor Cluster Components


node-level metrics → 클러스터 내 노드 수, how many of them are healthy


performance metrics → CPU, memory, network, and disc utilization


pod-level  metics → pod 수, 각 pod의 performance metrics(CPU와 memory 사용)


이러한 메트릭을 모니터하고, 저장하고, 분석할 수 있는 솔루션이 필요함.


Kubernets는 모든 특징을 가진 내장 모니터링 솔루션을 제공하지 않음. 그러나 최근에 많은 오픈소스들이 있음.


Metrics server, Prometheus, Elastic Stack, DATADOG, dynatrace


Heapster는 original projects 중 하나, 활성화된 모니터링과 Kubernets의 분석 기능 → deprecated


Kubernetes Cluster 당 하나의 Metrics Server를 가짐.


Metrics Server는 각각의 Kubernetes 노드와 파드로부터 메트릭을 검색. 이를 집계하여 메모리에 저장. In-memory로 디스크에 저장하지 않음. 과거의 성능 데이터를 볼 수 없음.


그러므로 더 강화된 다른 모니터링 솔루션 필요.


노드 위 파드에 대한 메트릭은 어떻게 생성되는가?

- Kubernetes는 각 노드에 agent를 운영함. → kubelet
- kubelet은 Kubernetes API master server로부터 명령을 받음. 노드 위 파드 운영.
- kubelet은 부속 구성 요소로 cAdvisor 또는 Container Advisor를 가짐.
- cAdvisor는 pod로부터 performance metrics를 탐색. metrics server에서 metrics을 사용 가능하도록  kubelet API를 통해 노출.
- 로컬 클러스터에 minikube를 사용하면

```bash
minikube addons enable metrics-server
```

- 다른 환경에서는 git clone을 하여 필요한 구성 요소를 배포.

```bash
git clone https://github-com/kubernetes-incubator/metrics-serve

# deploy a set of pods, services, and roles to enable Metrics Server
# to pul for performance metrics from the nodes in the cluster.
kubectl create -f deploy/1.8+/
```

- 일단 배포되면 Metrics Server가 데이터를 수집하고 처리하기 할 시간이 주어짐.
- 처리되면 kubectl top node를 실행함으로써 클러스터 성능을 확인할 수 있다. → 각 노드의 CPU와 메모리 사용량을 볼 수 있다.
- kubectl top pod를 하면 Kubernetes에서 Pod의 메트릭 성능을 보여줌.

## Practice Test-Monitoring

1. metrics-server 배포

```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

1. 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/be867e9c-0d47-47a3-971e-146d2c8c7945/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQ2EE5R%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T124023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnQMAoaJ%2FNu%2B4ICwu6ld2ChFFUBCwBrhsGswVtQC3lrwIgbz5jQZJ1K5u8PBA4zCX%2FxkY7nFhdNLu5K8cQxFSbIXUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIdWPaC0ei%2BUrvBbFyrcA9mbOhZvqIMWyUcDCwV5MId5qXlUBm%2Bbw5MkzNHB3qoLo3kGql4Mo84HstSlw2TKQtaIPik0cj18pOqgt2YyII9uSgnvuIR5siYFwLae8yYjqs1VGnbDs3wBaFWPNmECt2oHqhD9NbsYIbCn%2FqUbX5Phjl9v8xtD5r7So4%2B%2Bvh6t9cRYotBWsuh0nWGTiB%2BRvR4GyROK0sYGJ0tQSP2tj9FeWR2jaFBMZpIdh4ZRmxsxrmJWcqg1Pe3LMJD%2Bran400j1oZyhJpe4OLuOVrPki9MiCPTZdQztY1iEcKIW7B4dzok8N%2BtoAbSNK6A7XSGQr8xoSYIwarhSjxsO%2BBoT7iAAyN%2FWtl9esrDLzCWZyGpd%2BxSgw%2F5SkA4TnK1H93Fe3KJ7MvJC8x%2Fh5gOwv0sME6aqamxFbNj85dA3zdUSSd5Lu6jf6J4SQqg0ekqC9QC%2FZqJ9V%2BADmiomvg12xqgrTHGfegESDSfc2AeDFcbKC7w0gjoLW%2FiV%2BXEW2r1mNpC33BeI2VY1dsW9RH%2FN5ZzsVJa4ZTNBPW7Et9ywqWMHBNsjd%2FH0zz0cTLBHwLxxNCDX%2BUhfBaGDVrJvjlYVY6Sdd6%2BzCFrlDYODGKdIG4%2FbVdM%2FYNIrK%2FlDAiC%2FbBaLMNK%2BzL0GOqUBe5B%2Baw7LyO15Klm84n8Ouh9iU1fdoDqNdQp1qIg4UELXHYpk1nZWFdvrfyn47mOElmfZThanhcMOZikyYSMhu1PGwNfuDKJFor7hHgeVn7%2BFbFEXQwjcwY7vxCuuXptjcsLMLIchBAsxBqU5KwjEGZhmsGGhuJ%2F4%2By6Si8Fi6B3axGqD24lJDurCay37yuIRisMCq9jHXCgRDP21nqCwUpLsnf0c&X-Amz-Signature=aa4f10838d0110e31a90437ae45fd0ca1a59f7f810cd2b6976e412f66d38f135&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 가장 CPU 사용률이 많은 노드 → controlplane
2. 가장 메모리 사용률이 많은 노드 → contorlplane
3. 가장 메모리 사용률이 높은 파드 → rabbit

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a5ad8203-cf78-4c06-9de1-67cb491aedc9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQ2EE5R%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T124023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnQMAoaJ%2FNu%2B4ICwu6ld2ChFFUBCwBrhsGswVtQC3lrwIgbz5jQZJ1K5u8PBA4zCX%2FxkY7nFhdNLu5K8cQxFSbIXUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIdWPaC0ei%2BUrvBbFyrcA9mbOhZvqIMWyUcDCwV5MId5qXlUBm%2Bbw5MkzNHB3qoLo3kGql4Mo84HstSlw2TKQtaIPik0cj18pOqgt2YyII9uSgnvuIR5siYFwLae8yYjqs1VGnbDs3wBaFWPNmECt2oHqhD9NbsYIbCn%2FqUbX5Phjl9v8xtD5r7So4%2B%2Bvh6t9cRYotBWsuh0nWGTiB%2BRvR4GyROK0sYGJ0tQSP2tj9FeWR2jaFBMZpIdh4ZRmxsxrmJWcqg1Pe3LMJD%2Bran400j1oZyhJpe4OLuOVrPki9MiCPTZdQztY1iEcKIW7B4dzok8N%2BtoAbSNK6A7XSGQr8xoSYIwarhSjxsO%2BBoT7iAAyN%2FWtl9esrDLzCWZyGpd%2BxSgw%2F5SkA4TnK1H93Fe3KJ7MvJC8x%2Fh5gOwv0sME6aqamxFbNj85dA3zdUSSd5Lu6jf6J4SQqg0ekqC9QC%2FZqJ9V%2BADmiomvg12xqgrTHGfegESDSfc2AeDFcbKC7w0gjoLW%2FiV%2BXEW2r1mNpC33BeI2VY1dsW9RH%2FN5ZzsVJa4ZTNBPW7Et9ywqWMHBNsjd%2FH0zz0cTLBHwLxxNCDX%2BUhfBaGDVrJvjlYVY6Sdd6%2BzCFrlDYODGKdIG4%2FbVdM%2FYNIrK%2FlDAiC%2FbBaLMNK%2BzL0GOqUBe5B%2Baw7LyO15Klm84n8Ouh9iU1fdoDqNdQp1qIg4UELXHYpk1nZWFdvrfyn47mOElmfZThanhcMOZikyYSMhu1PGwNfuDKJFor7hHgeVn7%2BFbFEXQwjcwY7vxCuuXptjcsLMLIchBAsxBqU5KwjEGZhmsGGhuJ%2F4%2By6Si8Fi6B3axGqD24lJDurCay37yuIRisMCq9jHXCgRDP21nqCwUpLsnf0c&X-Amz-Signature=fedcd78d73eb6d141f31d641ce99b448d72ae6f75a3a1c7483294812f6a657f4&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 가장 CPU 사용률이 낮은 파드 → lion

## Managing Application Logs


kubectl logs <pod 이름>


## Practice Test - Monitor Application Logs

1. 
2. USER5라는 사용자가 애플리케이션에 접근하는 데 문제 발생 → 원인 파악 → 로그 확인하기
원인 → Account is locked due to MANY FAILED ATTEMPTS.
3. 
4. 아이템을 구매하려고 하는 동안 문제 보고 → 원인 파악 → 로그 확인하기
원인
	- USER30 - Item Out fo Stock
	- USER4 - 문제❌
	- USER1 - 문제❌
	- USER2 - 문제❌
