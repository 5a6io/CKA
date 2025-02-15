# Section3:Scheduling

## Manual Scheduling


## Labels and Selectors


## Taints and Tolerations


## Node selectors


## Node Affinity


## Test and Tolerations vs Node Affinity


## Resource Requirements and Limits


## A quick note on editing Pods and Deployments


## DaemonSets


## Static Pods


## Multiple Schedulers


## Configuring Scheduler Profiles


## Admission Controllers


NodeRestriction과 NamespaceAutoProvision은 현재 NamsapceLife Cycle Admission Controller로 바뀜.


### KodeKloud Lab


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


### KodeKloud Lab

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/501c3b54-0de4-44d6-afe6-eca0c6373e4f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3EBXKK%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T161238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBKpML58IflXi63Gec%2B7ll%2B2pa83RdN5F5G0ycPDA2FoAiBRCaiuWQ3uUMuMSI5v1Msuuzt3rlBOohd5bUBgXo6EgCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMFKeth6nSY7bJDANNKtwDAWJ5unBBJEjQOnIWDPtOF4kGxTLItyRcWTneqH%2FOkQhDcnlefwDf1WImS%2Fu%2FEF40IhmNbV7oy8zgbfm2TyBrsFekX0wgUGmIGnyGue10YcucUWX%2Fpk7sSgMAUXutB9iquQu90qrBzYBWjPC0t14KQ3FO0EaP5NmOhi%2BWA%2B32CdxfZG4K7YflraBg1oQ8TSoEqQUMJ%2BTYGE5eTOcenFfEYCTRmK1StdsJRAcAEA2cYfZa%2Bqikvdtr3Np2JTlfALFNJDo4SZPNNdPVzRESj9WPD%2FWH3ew6Dl%2Fa7NO9EzYL4wAxjYRCZ1HS1EeMi6ET5gEVjVWkQd4cgUrZykEgjFj0hrarYfAjsIwm1Mh0XRh%2Fj6O%2BzcLsWQFPs4MV3aF3G3pm1ya5mSG8tfAxY%2FBQ2KEGVGyonJsanb46jHXZ3QnJmK8%2F6u%2B8Zk31XsV%2FZWNiFFlop2IiyBluKbs%2B6UzzoO34sx5AKWmCjOXDJmCfC%2Bdxr80llwiYzKjVg3v3giE%2ByDElkhZwhsbwNa2NtD%2FR4ggD8JLc%2FfgcbRqEUmL0qoICd6s3H8MZyReQR9%2FaoL%2FcQh5H%2B1hpE4U0stn7SH88sB2kPQ7wy2MF1xENmEc%2Fq%2FxtSFQtrxEyUnyeyHhjBSEw%2FcXCvQY6pgGyA71syHnxY%2BU7HZ7mM%2F1iiTeNjnRZwvoJmQYCaDzKM9ENqbTyrdfbnBW94jspfwvY2BkvrRl0SwiG6JNmOyffl27xLuZXGBrxmDRX%2Ft%2BMNdiOiL9yPD%2Fn8398nqjPUZVBeVg4AOy7ZphYdGsPlsXmRwUsyL36hA8DIPAPtqegUSQG5H7VrZRnA%2B31wkr%2BJuWk0gE%2FxIeJTiZOVfcRWB%2BXUbGftLsp&X-Amz-Signature=f9ee7bffc1e8049747e3c68f1cd029713cedaf7e3ff13f6e7db8a51b7cefd749&X-Amz-SignedHeaders=host&x-id=GetObject)

