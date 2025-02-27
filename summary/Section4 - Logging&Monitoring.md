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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/be867e9c-0d47-47a3-971e-146d2c8c7945/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFMGPDK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIGFFR9UO%2FZYi38LliX87pe307rXCS5fdyNqnvpJKjYtsAiEArsVHS%2FZLtadJoHSzpKZ5fqj89c4nWjxSi9bVIfPZRn0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNjb70KxNinl4x5GxircA31h85sFNKjBG4iD65CDuoaJL%2F1E2mi0vyNtkYq%2BM1sdjle%2B7HfgQ2CsbdG5DnwxjYohHWIA77dFRMzpuFk1Yj%2BPP1t5TtBR1FfW6uqUhZsOphuv6z7ratlD%2BLP2RJhDRd3z24kEs%2BYW%2FPscXv4kEp8tBs4GCRc07YD3wYkzUpugg5A3KqOBxSOVDvRF07sCRe2epjEc0AJp7DMgUZHystwuPV%2BjJlzz2onYZPpG4RFiuvodmYUuCubb0sTxPay4Wlvm8jHY9baUm%2Bke0LqkjYMCiMjfTBdO1lv%2Fec5NPfUtH%2FtY3GPDDTZb%2BbVvpzJogEXtygNdWgMhhPa16rtWmHNT%2BQ23502nm5gIOJvqD5QrpIxAUIUm5tlRiufht2kbP6aagwaxTTJEdhGgbXZJ%2FmPFjC4AXHar6awbSh5dHGBHaz2aL40SJn5r2bjHJ%2BT5FDGqSdAv0h1gPVfvjiJiK%2BamL7BQ8x5YyKAXUpqi6a%2Fmzq22%2BPwtnG2Nlb3GZle%2FDhvKXLUhGNGO1TmyiTlYZ6THnaDHi6tmDGm2E%2F5zk4bqeenXlVauE9iPWHv9nVrEhW7Ltw5nEZjz8CfNPRilBLcw%2F4zIKj%2FDpTuG4Ei0fnS6qFiwdtLaWNLzvHQXMInNgb4GOqUB6MLzd%2FgamUZiC93GUKFSNiTBTxWdisuTx9sXaQnqP4nB4C5iNJWnZ3ZYlNfFqUygHK8ffmXpGNNgbD4RnIiashlKcv9BzULVJ8%2FMNZ1ik%2FtKv2AFN6PkaKAvSlzSfMOsl0I0JxaIxtTV172eeDC3JvLAB%2Fo%2BGPqdf%2FKjYfSuA%2FIXIlEvejNyFC3UabPE16f8IopMC4gjjok7faXZEQIjRHQRhMFl&X-Amz-Signature=04ca459bf40a91262d018d92e6c02d87ca03f14d3c8337f49312e5c9438a4ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 가장 CPU 사용률이 많은 노드 → controlplane
2. 가장 메모리 사용률이 많은 노드 → contorlplane
3. 가장 메모리 사용률이 높은 파드 → rabbit

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a5ad8203-cf78-4c06-9de1-67cb491aedc9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFMGPDK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIGFFR9UO%2FZYi38LliX87pe307rXCS5fdyNqnvpJKjYtsAiEArsVHS%2FZLtadJoHSzpKZ5fqj89c4nWjxSi9bVIfPZRn0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNjb70KxNinl4x5GxircA31h85sFNKjBG4iD65CDuoaJL%2F1E2mi0vyNtkYq%2BM1sdjle%2B7HfgQ2CsbdG5DnwxjYohHWIA77dFRMzpuFk1Yj%2BPP1t5TtBR1FfW6uqUhZsOphuv6z7ratlD%2BLP2RJhDRd3z24kEs%2BYW%2FPscXv4kEp8tBs4GCRc07YD3wYkzUpugg5A3KqOBxSOVDvRF07sCRe2epjEc0AJp7DMgUZHystwuPV%2BjJlzz2onYZPpG4RFiuvodmYUuCubb0sTxPay4Wlvm8jHY9baUm%2Bke0LqkjYMCiMjfTBdO1lv%2Fec5NPfUtH%2FtY3GPDDTZb%2BbVvpzJogEXtygNdWgMhhPa16rtWmHNT%2BQ23502nm5gIOJvqD5QrpIxAUIUm5tlRiufht2kbP6aagwaxTTJEdhGgbXZJ%2FmPFjC4AXHar6awbSh5dHGBHaz2aL40SJn5r2bjHJ%2BT5FDGqSdAv0h1gPVfvjiJiK%2BamL7BQ8x5YyKAXUpqi6a%2Fmzq22%2BPwtnG2Nlb3GZle%2FDhvKXLUhGNGO1TmyiTlYZ6THnaDHi6tmDGm2E%2F5zk4bqeenXlVauE9iPWHv9nVrEhW7Ltw5nEZjz8CfNPRilBLcw%2F4zIKj%2FDpTuG4Ei0fnS6qFiwdtLaWNLzvHQXMInNgb4GOqUB6MLzd%2FgamUZiC93GUKFSNiTBTxWdisuTx9sXaQnqP4nB4C5iNJWnZ3ZYlNfFqUygHK8ffmXpGNNgbD4RnIiashlKcv9BzULVJ8%2FMNZ1ik%2FtKv2AFN6PkaKAvSlzSfMOsl0I0JxaIxtTV172eeDC3JvLAB%2Fo%2BGPqdf%2FKjYfSuA%2FIXIlEvejNyFC3UabPE16f8IopMC4gjjok7faXZEQIjRHQRhMFl&X-Amz-Signature=50d648f789ab40841423641f0619336ed7ba59ebed1406f6a14e5d967e7815cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
