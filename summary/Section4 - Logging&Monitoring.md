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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/be867e9c-0d47-47a3-971e-146d2c8c7945/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644SE5FV2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhrV4iWSPxNc5qw5novFD0nWKjNRhltoxE86kSdvi%2B0gIgZi6pfOIAr6K6MOYH49V0d1%2F6f5JX0wffialA7uEImpEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLY8noUi21q93PFIhSrcA1uWISIcacs72BVDqiZN2mcXynOoaKILKfVCVyORZxPXs2wJRNnyv%2BrVTQYeEpQ66UKH2BIbAfSrdUzR9rlS6lDIeUSYQNpOmEzJGqjywZ1%2FKUdklth8%2BlCq25wiIKW%2F%2F0FkZBkdMaCKVNsvCqDgL37dA7DwfWN0D0P14bYRkXBN9OnpS5olneWMq0a6dIWFz4h5xoMwNKLraPHA%2Fir184gh2Y0fsVHsAqjIy7yMC%2FLPoaLdLSIZlD0AOsx5gBOe0IPHLlNvxLMm2f43%2BrZjBB73wqIPPuBiPUHTLC3Jzw9KjDkVlMUX6SJevCQbtCSaz%2B5v0m3cd8oxiDb0ctEhAOcGvoE%2FaH68PifWFSPOwJQ%2B6vtMztlbS0by%2B5%2B9XdGza86U1t0v40UWOVr%2Fj2PuaXxUAJMbUYo72vkzuTKLxaml%2Fvw3K4XV62Qcmi1r%2F%2FK1F4gr6kkfMQCWGX9aU44aGSWkaxru2nOxLxnCwNqrGxyQBWmP01KpJwSlNN9SYG%2F0VU1Bi9G0TFAuMbcp%2FL0YNECMC0FRjfpMxlmxIGGpr6EGILuCDrwuBJhYZmgFgUdta97XttxaHdLUcmJmSAHtePk%2FrAYu30xGQdDKk2PSiFXzU8e4VIcA5Xu8%2F%2BhHMLe7o8AGOqUBeh6fqf0Cb8nFIBsOEKlxP5jG5V%2F8iWoa0FA1QHoLPbaQrfh1t7sTKq6bXVNkyKleMD5WuliFiLV3WKMTqeApU8s9ZCGoru8T5PZqGGBGySE4x3Pi3LmJiowpyCrcOf8e1zdWgdMt6pdAjtAra8UbkQIMWTEyqb8VsSZ4PSI6Dkv%2B5l%2F%2FrOvO0nNxDw5vcbjybNCMDcPMcKFvNymm%2F6g0TWy0e99T&X-Amz-Signature=391a9eb71710a9d2051a9eefc861fd78bde602dbdf0d57b4ca91ee927461d1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 가장 CPU 사용률이 많은 노드 → controlplane
2. 가장 메모리 사용률이 많은 노드 → contorlplane
3. 가장 메모리 사용률이 높은 파드 → rabbit

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a5ad8203-cf78-4c06-9de1-67cb491aedc9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644SE5FV2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhrV4iWSPxNc5qw5novFD0nWKjNRhltoxE86kSdvi%2B0gIgZi6pfOIAr6K6MOYH49V0d1%2F6f5JX0wffialA7uEImpEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLY8noUi21q93PFIhSrcA1uWISIcacs72BVDqiZN2mcXynOoaKILKfVCVyORZxPXs2wJRNnyv%2BrVTQYeEpQ66UKH2BIbAfSrdUzR9rlS6lDIeUSYQNpOmEzJGqjywZ1%2FKUdklth8%2BlCq25wiIKW%2F%2F0FkZBkdMaCKVNsvCqDgL37dA7DwfWN0D0P14bYRkXBN9OnpS5olneWMq0a6dIWFz4h5xoMwNKLraPHA%2Fir184gh2Y0fsVHsAqjIy7yMC%2FLPoaLdLSIZlD0AOsx5gBOe0IPHLlNvxLMm2f43%2BrZjBB73wqIPPuBiPUHTLC3Jzw9KjDkVlMUX6SJevCQbtCSaz%2B5v0m3cd8oxiDb0ctEhAOcGvoE%2FaH68PifWFSPOwJQ%2B6vtMztlbS0by%2B5%2B9XdGza86U1t0v40UWOVr%2Fj2PuaXxUAJMbUYo72vkzuTKLxaml%2Fvw3K4XV62Qcmi1r%2F%2FK1F4gr6kkfMQCWGX9aU44aGSWkaxru2nOxLxnCwNqrGxyQBWmP01KpJwSlNN9SYG%2F0VU1Bi9G0TFAuMbcp%2FL0YNECMC0FRjfpMxlmxIGGpr6EGILuCDrwuBJhYZmgFgUdta97XttxaHdLUcmJmSAHtePk%2FrAYu30xGQdDKk2PSiFXzU8e4VIcA5Xu8%2F%2BhHMLe7o8AGOqUBeh6fqf0Cb8nFIBsOEKlxP5jG5V%2F8iWoa0FA1QHoLPbaQrfh1t7sTKq6bXVNkyKleMD5WuliFiLV3WKMTqeApU8s9ZCGoru8T5PZqGGBGySE4x3Pi3LmJiowpyCrcOf8e1zdWgdMt6pdAjtAra8UbkQIMWTEyqb8VsSZ4PSI6Dkv%2B5l%2F%2FrOvO0nNxDw5vcbjybNCMDcPMcKFvNymm%2F6g0TWy0e99T&X-Amz-Signature=da30df8711946f4491e835ac404f403e4e37e4a084499a78c05932b6fd55401d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
