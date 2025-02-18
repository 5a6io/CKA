# 🍨 Section3 - Scheduling

## Manual Scheduling


## Practice Test-Manual Scheduling


## Labels and Selectors


## Practice Test-Labels and Selectors


## Taints and Tolerations


## Practice Test-Taints and Tolerations


## Node selectors


## Node Affinity


## Practice Test - Node Affinity


## Test and Tolerations vs Node Affinity


## Resource Requirements and Limits


## A quick note on editing Pods and Deployments


## Practice Test-Resource Requirements and Limits


## DaemonSets


## Practice Test - DaemonSets


## Static Pods


## Practice Test - Static Pods


## Multiple Schedulers


## Practice Test - Multiple Schedulers


## Configuring Scheduler Profiles


## Admission Controllers


NodeRestriction과 NamespaceAutoProvision은 현재 NamsapceLife Cycle Admission Controller로 바뀜.


## Practice Test - Admission Controllers


## Validating and Mutating Admission Controllers


NamespaceExists나 NamespaceLifecycle Admission Controller는 namespace가 이미 존재하는지 확인하고 존재하지 않으면 요청을 거절하는 데 도움이 된다.


DefaultStorageClass plugin


PVC 생성 요청을 받음 없으면 요청을 수정하여 추가.


PVC를 생성하거나 관찰할 때, 비록 생성하는 동안 명시되지 않지만 StorageClassDefault는 그것을 추가한다.


Mutating Admisison Controller는 생성되기 전에 객체 자체를 바꿀 수 있다.


Validating Admission Controller는 요청을 확인하고 승인하거나 거절할 수 있다.


요청을 확인할 뿐만 아니라 바꿀 수 있는 admission controller가 있을 수도 있다.


통상적으로는 Mutating Admission Controller가 먼저 야기하고, Validating Admission Controller가 그 뒤를 따른다.


NamespaceAutoProvision which is a mutating admission controller, is run first, followed by the validating controller, NamespaceExists은 존재하지 않는 namespace에 대한 요청을 거절하다.


NamespaceAutoProvision은 결코 없는 namespace를 생성하지 않을 것이다.


MutatingAdmissionWebhook과 ValidatingAdmissionWebhook → 외부 Admission Controller


스스로 로직을 변경하거나 확인할 수 있도록 할 수 있음.

1. admission webhook 서버 배포
2. webhook-service로 webhook 서버 접근

mutationwebhook을 배포하면 기존에 있던 pod가 삭제됨.


## Practice Test - Validating and Mutating Admission Controllers

1. NamespaceAutoProvision은 Mutating admission controller
NamespaceExists는 Validating admission controller
2. admissino controller의 요청 흐름
mutating → validating
3. webhook-demo namespace 생성
4. webhook-server-tls 생성

```shell
kubectl create secret tls webhook-server-tls --cert=/root/keys/webhook-server-tls.yaml --key=/root/keys/webhhok-server-tls.key -n webhook-demo
```

1. 정의되어있는 webhook-deployment.yaml로 webhook 서버 배포
2. webhook-service.yaml로 서비스 배포
3. webhhok-configuration.yaml로 MutatingWebhookConfiguration을 추가하면 무슨 일이 발생하는가?
→ yaml 파일에 아래와 같은 규칙이 명시되어있으므로 Pod with CREATE operations

```yaml
rules:
  - operations: [ "CREATE" ]
    apiGroups: [""]
    apiVersion: ["v1"]
    resources: ["pods"]
```

1. webhook-configuration.yaml 생성
2. 이전 단계에서 아래의 조건을 가진 데모 웹훅을 배포함.
- securityContext를 제공하지 않으면 컨테이너에서 root로 운영하는 모든 파드에 대한 요청을 거절.
- runAsNonRoot에 대한 값을 설정하지 않으면 기본적으로 true, 그리고 사용자 ID는 기본적으로 1234
- securityContext에서 runAsNonRoot를 false라고 정확하게 명시하면 루트로 운영하도록 허용.
3. pod-with-defaults.yaml로 파드를 생성→ securityContext가 없는 파드가 생김.
webhook 없다면 root 유저로 운영될 것이다. webhook은 uid1234를 가진 non-root 유저로 운영하기 위해 파드를 변경한다.
4. 10번에서 생성한 pod는 runAsNonRoot는 true이며, runAsUser는 1234이다.
Configuration에 따라 securityContext가 없으므로 runAsNonRoot와 runAsUser는 모두 기본값을 가진다.
5. pod-with-override.yaml로 파드 생성 → 루트 유저로 운영되도록 하는 securityContext를 가진 파드
webhook을 갖고 갖지 않고 배포의 결과는 같음.
명확하게 함으로써 Webhook으로 더 많은 보안이 설정되는 것을 막음.
6. pod-with-conflict.yaml로 파드 생성 → 
설정 없이 루트 유저로 운영하도록 하는 요청을 거절할 것.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/501c3b54-0de4-44d6-afe6-eca0c6373e4f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CBEMBVK%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGcvn8%2B%2FSuXWxO27S8mU%2Bip%2BVC4%2Fy8xu7Sf2S3cdNocGAiBnFudszWNDPpc5gPWcORFHD8aN9%2FCQhlJdfksvLoWZzyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMri0HHwPjEk%2FI%2BuhWKtwD%2BjfIbaBAUFaiHpf11N%2BfWoGJL%2FLnMMjCLYx5ZNiX8PJbrjwUjvtsGqd6JNht2lhPdB7rg7mn1J%2BuLQYhf9sek0JTiNpV9dYSTtcS7A68oYKQKPjo6zKmIZ93J2EiU4Ez6R7m3rYX%2FJv38LB1H3Ktpz8DK6mDSllUIc3hYHaovfvN79RgiOCfHQO7Svi1X8CAXzq6pDnrlkHluXc1mC43b8Xa%2F4quAdtohhf%2FhNoocH1shhQQpSmuAeAlDBpjI%2FyZ4JExuPkmg0gWMbttgGjzqfKgWpEaAs2JU65bhEzujlEGD%2FIrvBP5PVVcLdLMRg3YZVm683cd2rvyF4FkjtaV5eL6E%2Bxe1WMx9ZSJJphhkP9OHM3Bibm0dd6EsU0c3WDF0oQK5cRed%2FtZSWrGmwXuvtBJEafWu3CHRYzDeKDmhiVM0JM83T6Wd2CUd2Njo0YL7kjAS6npt2FB%2F7XUra%2FR7SuxSiZiBYXqDDO2H9ZnRPceNWQa%2BMJB4qfMf7lsdUHUZrHjSSgRB%2BpXCxCPyuXd4nyopJShVC9VRmKOlq47R2NW1qM6n2Ua1kd5IwGq0Bmqy4EuvgAXkIkL3iW0dHIY3C4966xyKal6f87TGlTZmmNgycaRwHgvoPS%2BwWYw8f7QvQY6pgEkujDXRcf7ju5ovbHOY3EsZYwOpoSBA%2FLWbUMr9dOdxWKbd2vtkm26HI%2FSbILgS915WcXc9PM1cscgRyhlUVOTrXWu8%2BytastOmU8%2BnWSR7kJgcoAif2X9N6P0l0vFkP03Yll34siT5NScDGZxa%2Brjj8M3rkp5S6ofTSHKgkw0jkroetEHtw1r7URIn8DUdPChxWvHnIcGXCK%2B7ydPnvpZP81i%2FSNw&X-Amz-Signature=7d57a275711d8bb6506af4596758e3db14a024eb4619cd7c97af62ed015fc7ff&X-Amz-SignedHeaders=host&x-id=GetObject)

