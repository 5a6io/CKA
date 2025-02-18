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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/be867e9c-0d47-47a3-971e-146d2c8c7945/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W4LN72X%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T161343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDHP10HZ3DfICtqJmFJ4nWM4V1BCSdgXm%2BgtneWl%2FieBQIhAL%2B8euZySJtl2Z%2FBCUUypwxbVeFZLHgnEsyo%2BCUaxEBVKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPtf3S%2F%2BWSJlZ%2FYmMq3ANNmzJeJy58qTi84lfWorSJLHzSzhlKqjnQRdi8UbT0FgNso0prD2dNSBpj6tFbCX9%2By%2FpJr2QpGjYFkOqEZytyYufwNzv5BGggh2MjZRUkH7RX0QAShLuk%2BH713V2bYz5HmYbdYKeggTfJwOTIABeb7lpYhAXSpaBm3AtZm3LeKdIeKiDhn2SeqrgVAz%2BRXKRpVryE0IOKadRJ%2FaYNRRqMkq%2B9BUqTLCkQhOljEG1YEGlY8%2F2pDpHSbCK6Dinc0trZ7kpo6%2BCtHdmy1JDBuR5SANpiILkwMPc%2BH%2BWyc%2BxP1kijpv079XpDCtiGe2R33zzhVUnjHRyHZXJOcIgEn47RzEvh6vsMyCmU5FZqgs1Rl4cl2C58KzgYYZ9kbv8uFqwEajAgD1ux9mBL%2BeTNbvYlE%2FQ2GJT2%2FYfy1QiQiqSlVk4oFTp3wKO1G8%2FbGA3dwpAchiQPPWhrTwTg6EUoEvLc1yL2tiWM73qX3mqdi4br9I4JPnvo8v6Sewso1ZMu7H8gX3t9tKvqMudfcg4YA24KWYx9J%2FasgC6HPhamy0WyDPU2vLxC%2BHs1SCOisSS56yJ1qpGJ4so4q%2Ba8bPjzWx3eiP8ya%2BWgcOs90PFtNCAHlJ2otG10GKoQNTkcczCLstK9BjqkAecxRNRr1P2bt5VjggXaJo8J4e4vO3kC3nY4XiHsMJ6QLjn2HrCZ9cH2NJ905OO%2B7GD5gvvWdFjpu2j3wGdTlHzi4vEgY5rl%2B3bS1BmudpTWEZRyVaPSjwKeBH0WrFXDebwQ6IZcObRJnnSbA6pnG6XyXxK67JtlgEhjAd0nhCt0zoTUmUfJUSFUw7BiRBxrANgBGz0dtK8ZSf6CrQ0JZF33WyDy&X-Amz-Signature=439b9f28636a8ead2ab48b2efdcdc88c38ea7ae54958ad58a8cc995f09fb58b9&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 가장 CPU 사용률이 많은 노드 → controlplane
2. 가장 메모리 사용률이 많은 노드 → contorlplane
3. 가장 메모리 사용률이 높은 파드 → rabbit

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a5ad8203-cf78-4c06-9de1-67cb491aedc9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W4LN72X%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T161343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDHP10HZ3DfICtqJmFJ4nWM4V1BCSdgXm%2BgtneWl%2FieBQIhAL%2B8euZySJtl2Z%2FBCUUypwxbVeFZLHgnEsyo%2BCUaxEBVKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPtf3S%2F%2BWSJlZ%2FYmMq3ANNmzJeJy58qTi84lfWorSJLHzSzhlKqjnQRdi8UbT0FgNso0prD2dNSBpj6tFbCX9%2By%2FpJr2QpGjYFkOqEZytyYufwNzv5BGggh2MjZRUkH7RX0QAShLuk%2BH713V2bYz5HmYbdYKeggTfJwOTIABeb7lpYhAXSpaBm3AtZm3LeKdIeKiDhn2SeqrgVAz%2BRXKRpVryE0IOKadRJ%2FaYNRRqMkq%2B9BUqTLCkQhOljEG1YEGlY8%2F2pDpHSbCK6Dinc0trZ7kpo6%2BCtHdmy1JDBuR5SANpiILkwMPc%2BH%2BWyc%2BxP1kijpv079XpDCtiGe2R33zzhVUnjHRyHZXJOcIgEn47RzEvh6vsMyCmU5FZqgs1Rl4cl2C58KzgYYZ9kbv8uFqwEajAgD1ux9mBL%2BeTNbvYlE%2FQ2GJT2%2FYfy1QiQiqSlVk4oFTp3wKO1G8%2FbGA3dwpAchiQPPWhrTwTg6EUoEvLc1yL2tiWM73qX3mqdi4br9I4JPnvo8v6Sewso1ZMu7H8gX3t9tKvqMudfcg4YA24KWYx9J%2FasgC6HPhamy0WyDPU2vLxC%2BHs1SCOisSS56yJ1qpGJ4so4q%2Ba8bPjzWx3eiP8ya%2BWgcOs90PFtNCAHlJ2otG10GKoQNTkcczCLstK9BjqkAecxRNRr1P2bt5VjggXaJo8J4e4vO3kC3nY4XiHsMJ6QLjn2HrCZ9cH2NJ905OO%2B7GD5gvvWdFjpu2j3wGdTlHzi4vEgY5rl%2B3bS1BmudpTWEZRyVaPSjwKeBH0WrFXDebwQ6IZcObRJnnSbA6pnG6XyXxK67JtlgEhjAd0nhCt0zoTUmUfJUSFUw7BiRBxrANgBGz0dtK8ZSf6CrQ0JZF33WyDy&X-Amz-Signature=715c0b8af0c7d99ea2afa1a2fe361d1c253231635d9e63988204f5b36d448a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
