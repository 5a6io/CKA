# 🍨 Section5 - Application Lifecycle Management

## Rolling Updates and Rollbacks


```bash
kubectl rollout status deployment/<Deployment 이름>
```


### Deployment 전략

1. recreate → 구버전을 모두 삭제하고 새 버전을 올림.
2. rolling update → 1 by 1. 즉, 하나를 삭제하면 새로운 버전으로 하나를 생성함. 애플리케이션 결코 내려가지 않고 원활한 업그레이드 진행.

### recreate와 rolling update의 차이점


deployment를 describe했을 때


recreate의 경우, 구 버전 replica set의 scale을 0으로 내리고 새 버전의  replica set의 scale을 5로 올린다.


반면에, rolling update의 경우, 구 버전의 replica set을 내리는 동시에 새 버전의 replica set을 한번에 하나씩 올린다.


```bash
kubectl set image deployment/<Deployment 이름> <컨테이너 이름>=<새 이미지>
```


위 명령어를 수행하여 이미 존재하는 pod의 이미지를 업데이트 할 수 있다. 그러나 이렇게 이미지를 바꾸는 경우, 기존에 deployment.yaml은 변경사항이 발생하지 않으므로 추후에 반드시 바꿔 놓아야 한다.


### Rollback


```bash
kubectl rollout undo deployment/<Deployment 이름>
```


어떤 문제가 있는 새 버전으로의 업그레이드를 취소하려고 한다면 변화를 되돌리고자 위해 위 명령어를 수행.


## Practice Test - Rolling Updates and Rollbacks

1. /root/curl-test.sh 실행

```bash
/root/curl-test.sh
Hello, Application Version: v1 ; Color: blue OK
.
.
.
.
```

1. scale이 어떻게 변화였는가 → 4로 scale up
2. 현재 사용하는 이미지
3. 현재 Deployment 전략 → Rolling update
4. 이미지를 바꾸면 어떠한 상황이 발생하는가? → 파드가 한번에 하나씩 바뀐다.
5. 현재 Deployment의 이미지 바꾸기  v1 → v2
6. /root/curl-test.sh 실행.

```bash
/root/curl-test.sh
Hello, Application Version: v2 ; Color: green OK
.
.
.
.
```

1. replica set이 1개씩 줄어들음.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/977ac0a0-6f7e-4aae-99ae-af3cd4e061cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYQW2I5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMprpywrMQCHaLvhd7cUhFallVi4NqYQnd7B%2FYhjC%2BmAiEA4xGqgleP1rZbqbjLX7VueP6gReOuIEBPuD0LwJIH8Cgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCHAbsf7IeSPIMxDGSrcA6mUHa3HX0iTjoKxar0IGY6b9pGl0KgCGba4bSTZgtzpxiRgvybBnnvvJH91hsjKt1PMKCYTKFngse0mHnBDGwsLHlYt9X7O8EKhIOrAJOS%2FvAojmDSpHurYOCx8TSxXu5wCNExMqQG6nLtzruATTgi1cdZl2O4DLSVFwdoRH5yOknYVYAny9HbQWeT7EcHl67hDwQdq%2FGtzd3RnJ1%2BNLjueA4l%2FLfGQsPoTfXHZ6sNoorOc79zos2CciBwfjeNBBK0tS%2BTnn0ZL6mbRZ1x8qjBa6E86D1SPU2znYkqm6SAn%2Fgu%2F9NzqdecUxCuil4JROY6gwheqSU0cyZBOir%2FRrewoTRsq9%2Fc1anRWbbMTfgBPnQNo5v3gnfYGkiHjL7Y1ZwbF7SCnfBu7X5%2BLS%2BlPU3ljprkjk88mkzUFCjcnh3OlNCyT7wai1o76oYuSr9xQHq37Kih6uUWrjMbhp277PS9dBxW3LcGEZ2YaM87od8ZekvHp8rlNHo13s24KmEj3HcTtlbLjEFas9q67cFRocJvEzDiA%2ByEGVemCC074N7%2Bei3X40m39Ask2qYyy9TG3deXrTfgmUxlfSDzCYVKHeBvDhkWv6%2BYc6iU1Y2oEHmAO12eZsPFJNtiduaE1MJKOicAGOqUBYvYoZRorEaXUAcQiGHDYnomEMDP%2B2wWfmaCswBq7wyQ2DN5Z0q%2FnJiW7FVojFPcNtfwF5cSDwPR%2FdwrC9M6tn%2BObc2Vwvrvq2t4YwIG12RpgnXfv2C8sYUi6Lx2lRIl9Y%2B9Cqu1si%2F4D9tFmZ%2Bu3Zaznla%2B34gs1f3T9jpfdDgWiVFrg05%2BRCzAnQ6YKTFE9DgG6TuNory0kgLCN0MpxnJ62Bsbz&X-Amz-Signature=6a65ac1b1715a789f87dc3d3d8d15e5cb5c8a945c5c454ca6b3a0ab38d904358&X-Amz-SignedHeaders=host&x-id=GetObject)

1. rolling update에서 recreate로 전략 바꾸기
2. 현재 디플로이먼트의 이미지 바꾸기 v2 → v3
3. /root/curl-test.sh 실행

```bash
/root/curl-test.sh
Hello, Application Version: v3 ; Color: red OK
.
.
.
.
```


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/05c9a172-cfaa-4570-8937-288b1d07d12d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYQW2I5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMprpywrMQCHaLvhd7cUhFallVi4NqYQnd7B%2FYhjC%2BmAiEA4xGqgleP1rZbqbjLX7VueP6gReOuIEBPuD0LwJIH8Cgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCHAbsf7IeSPIMxDGSrcA6mUHa3HX0iTjoKxar0IGY6b9pGl0KgCGba4bSTZgtzpxiRgvybBnnvvJH91hsjKt1PMKCYTKFngse0mHnBDGwsLHlYt9X7O8EKhIOrAJOS%2FvAojmDSpHurYOCx8TSxXu5wCNExMqQG6nLtzruATTgi1cdZl2O4DLSVFwdoRH5yOknYVYAny9HbQWeT7EcHl67hDwQdq%2FGtzd3RnJ1%2BNLjueA4l%2FLfGQsPoTfXHZ6sNoorOc79zos2CciBwfjeNBBK0tS%2BTnn0ZL6mbRZ1x8qjBa6E86D1SPU2znYkqm6SAn%2Fgu%2F9NzqdecUxCuil4JROY6gwheqSU0cyZBOir%2FRrewoTRsq9%2Fc1anRWbbMTfgBPnQNo5v3gnfYGkiHjL7Y1ZwbF7SCnfBu7X5%2BLS%2BlPU3ljprkjk88mkzUFCjcnh3OlNCyT7wai1o76oYuSr9xQHq37Kih6uUWrjMbhp277PS9dBxW3LcGEZ2YaM87od8ZekvHp8rlNHo13s24KmEj3HcTtlbLjEFas9q67cFRocJvEzDiA%2ByEGVemCC074N7%2Bei3X40m39Ask2qYyy9TG3deXrTfgmUxlfSDzCYVKHeBvDhkWv6%2BYc6iU1Y2oEHmAO12eZsPFJNtiduaE1MJKOicAGOqUBYvYoZRorEaXUAcQiGHDYnomEMDP%2B2wWfmaCswBq7wyQ2DN5Z0q%2FnJiW7FVojFPcNtfwF5cSDwPR%2FdwrC9M6tn%2BObc2Vwvrvq2t4YwIG12RpgnXfv2C8sYUi6Lx2lRIl9Y%2B9Cqu1si%2F4D9tFmZ%2Bu3Zaznla%2B34gs1f3T9jpfdDgWiVFrg05%2BRCzAnQ6YKTFE9DgG6TuNory0kgLCN0MpxnJ62Bsbz&X-Amz-Signature=8e9eb73fdb964dad5e905e50d4fd4e81378890a9af4f17e5e92cbd34b1ab9056&X-Amz-SignedHeaders=host&x-id=GetObject)


한꺼번에 바뀌다 보니 처음에 /root/curl-test.sh를 수행했을 때 이전 v2 출력문이 나옴.


## Commands and Arguments


docker run command  뒤에 붙는 것은 pod 정의 파일의 args에 적는다.


```bash
# 10을 pod definition yaml 파일에서 args로 적는다.
docker run --name ubuntu-sleeper ubuntu-sleeper 10
```


Dockerfile에서 cmd 부분을 재정의할 수 있음.


sleep 명령을 sleep 2.0으로 재정의한다면? → 도커에서는 entrypoint로 새 명령어를 설정함.


args - 배열 형식.


command - Dockerfile의 ENTRYPOINT와 상응.


args - Dockerfile의 CMD와 상응.


## Practice Test - Commands and Arguments

1. 시스템 상 Pod 개수
2. ubuntu-sleeper를 실행하기 위해 사용된 명령어 → sleep 4800
3. ubuntu-sleeper-2.yaml을 수정하기
pod 이름 - ubuntu-sleeper-2
command - sleep 5000

```yaml
command: ["sleep", "5000"]
```

1. ubuntu-sleeper-3.yaml 사용해서 pod 생성.  파일에 문제가 있으므로 수정 필요.
Pod 이름 -  ubuntu-sleeper-3
command - sleep 1200

```yaml
command:
  - "sleep"
  - 1200
  
  ⬇️ 수정
  
command:
  - "sleep"
  - "1200"
```

1. ubuntu-sleeper-3 sleep 2000으로 업데이트.
지우지 않고 수정한 파일을 바로 apply했더니 오류 발생. 지우고 다시 생성.
2. /root/webapp-color에 주어진 Dockerfile 관찰. 컨테이너 시작 시 명령어.
→  python app.py

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/9e974328-4af4-45d2-80e0-fea968f6a9a9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYQW2I5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMprpywrMQCHaLvhd7cUhFallVi4NqYQnd7B%2FYhjC%2BmAiEA4xGqgleP1rZbqbjLX7VueP6gReOuIEBPuD0LwJIH8Cgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCHAbsf7IeSPIMxDGSrcA6mUHa3HX0iTjoKxar0IGY6b9pGl0KgCGba4bSTZgtzpxiRgvybBnnvvJH91hsjKt1PMKCYTKFngse0mHnBDGwsLHlYt9X7O8EKhIOrAJOS%2FvAojmDSpHurYOCx8TSxXu5wCNExMqQG6nLtzruATTgi1cdZl2O4DLSVFwdoRH5yOknYVYAny9HbQWeT7EcHl67hDwQdq%2FGtzd3RnJ1%2BNLjueA4l%2FLfGQsPoTfXHZ6sNoorOc79zos2CciBwfjeNBBK0tS%2BTnn0ZL6mbRZ1x8qjBa6E86D1SPU2znYkqm6SAn%2Fgu%2F9NzqdecUxCuil4JROY6gwheqSU0cyZBOir%2FRrewoTRsq9%2Fc1anRWbbMTfgBPnQNo5v3gnfYGkiHjL7Y1ZwbF7SCnfBu7X5%2BLS%2BlPU3ljprkjk88mkzUFCjcnh3OlNCyT7wai1o76oYuSr9xQHq37Kih6uUWrjMbhp277PS9dBxW3LcGEZ2YaM87od8ZekvHp8rlNHo13s24KmEj3HcTtlbLjEFas9q67cFRocJvEzDiA%2ByEGVemCC074N7%2Bei3X40m39Ask2qYyy9TG3deXrTfgmUxlfSDzCYVKHeBvDhkWv6%2BYc6iU1Y2oEHmAO12eZsPFJNtiduaE1MJKOicAGOqUBYvYoZRorEaXUAcQiGHDYnomEMDP%2B2wWfmaCswBq7wyQ2DN5Z0q%2FnJiW7FVojFPcNtfwF5cSDwPR%2FdwrC9M6tn%2BObc2Vwvrvq2t4YwIG12RpgnXfv2C8sYUi6Lx2lRIl9Y%2B9Cqu1si%2F4D9tFmZ%2Bu3Zaznla%2B34gs1f3T9jpfdDgWiVFrg05%2BRCzAnQ6YKTFE9DgG6TuNory0kgLCN0MpxnJ62Bsbz&X-Amz-Signature=a24741061d5ca406d0308b5ca407845b8f25063dadad34192de83e589df73f47&X-Amz-SignedHeaders=host&x-id=GetObject)

1. /root/webapp-color에 주어진 Dockerfile2 관찰. 컨테이너 시작 시 명령어.
→ python app.py —color red

> 💡 ENTRYPOINT 뒤에 CMD가 붙음.  kuberentes로 생각하면 command 뒤에 args가 붙는 것.


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a7a73a61-b2e0-4efa-873f-fd3273a38150/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYQW2I5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMprpywrMQCHaLvhd7cUhFallVi4NqYQnd7B%2FYhjC%2BmAiEA4xGqgleP1rZbqbjLX7VueP6gReOuIEBPuD0LwJIH8Cgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCHAbsf7IeSPIMxDGSrcA6mUHa3HX0iTjoKxar0IGY6b9pGl0KgCGba4bSTZgtzpxiRgvybBnnvvJH91hsjKt1PMKCYTKFngse0mHnBDGwsLHlYt9X7O8EKhIOrAJOS%2FvAojmDSpHurYOCx8TSxXu5wCNExMqQG6nLtzruATTgi1cdZl2O4DLSVFwdoRH5yOknYVYAny9HbQWeT7EcHl67hDwQdq%2FGtzd3RnJ1%2BNLjueA4l%2FLfGQsPoTfXHZ6sNoorOc79zos2CciBwfjeNBBK0tS%2BTnn0ZL6mbRZ1x8qjBa6E86D1SPU2znYkqm6SAn%2Fgu%2F9NzqdecUxCuil4JROY6gwheqSU0cyZBOir%2FRrewoTRsq9%2Fc1anRWbbMTfgBPnQNo5v3gnfYGkiHjL7Y1ZwbF7SCnfBu7X5%2BLS%2BlPU3ljprkjk88mkzUFCjcnh3OlNCyT7wai1o76oYuSr9xQHq37Kih6uUWrjMbhp277PS9dBxW3LcGEZ2YaM87od8ZekvHp8rlNHo13s24KmEj3HcTtlbLjEFas9q67cFRocJvEzDiA%2ByEGVemCC074N7%2Bei3X40m39Ask2qYyy9TG3deXrTfgmUxlfSDzCYVKHeBvDhkWv6%2BYc6iU1Y2oEHmAO12eZsPFJNtiduaE1MJKOicAGOqUBYvYoZRorEaXUAcQiGHDYnomEMDP%2B2wWfmaCswBq7wyQ2DN5Z0q%2FnJiW7FVojFPcNtfwF5cSDwPR%2FdwrC9M6tn%2BObc2Vwvrvq2t4YwIG12RpgnXfv2C8sYUi6Lx2lRIl9Y%2B9Cqu1si%2F4D9tFmZ%2Bu3Zaznla%2B34gs1f3T9jpfdDgWiVFrg05%2BRCzAnQ6YKTFE9DgG6TuNory0kgLCN0MpxnJ62Bsbz&X-Amz-Signature=13b1e8c15224fc8886108d59856703a89b662f3d05c3e5f5cda24c7589e1db47&X-Amz-SignedHeaders=host&x-id=GetObject)

1. webapp-color-2 디렉토리 안 두 파일 관찰. 컨테이너 시작 시 명령어. 디렉토리 안 Dockerfile로부터 만든 이미지라 가정.
→ —color green

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a9b0e3d1-ad6b-430e-93a5-81bb9a82fa08/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYQW2I5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMprpywrMQCHaLvhd7cUhFallVi4NqYQnd7B%2FYhjC%2BmAiEA4xGqgleP1rZbqbjLX7VueP6gReOuIEBPuD0LwJIH8Cgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCHAbsf7IeSPIMxDGSrcA6mUHa3HX0iTjoKxar0IGY6b9pGl0KgCGba4bSTZgtzpxiRgvybBnnvvJH91hsjKt1PMKCYTKFngse0mHnBDGwsLHlYt9X7O8EKhIOrAJOS%2FvAojmDSpHurYOCx8TSxXu5wCNExMqQG6nLtzruATTgi1cdZl2O4DLSVFwdoRH5yOknYVYAny9HbQWeT7EcHl67hDwQdq%2FGtzd3RnJ1%2BNLjueA4l%2FLfGQsPoTfXHZ6sNoorOc79zos2CciBwfjeNBBK0tS%2BTnn0ZL6mbRZ1x8qjBa6E86D1SPU2znYkqm6SAn%2Fgu%2F9NzqdecUxCuil4JROY6gwheqSU0cyZBOir%2FRrewoTRsq9%2Fc1anRWbbMTfgBPnQNo5v3gnfYGkiHjL7Y1ZwbF7SCnfBu7X5%2BLS%2BlPU3ljprkjk88mkzUFCjcnh3OlNCyT7wai1o76oYuSr9xQHq37Kih6uUWrjMbhp277PS9dBxW3LcGEZ2YaM87od8ZekvHp8rlNHo13s24KmEj3HcTtlbLjEFas9q67cFRocJvEzDiA%2ByEGVemCC074N7%2Bei3X40m39Ask2qYyy9TG3deXrTfgmUxlfSDzCYVKHeBvDhkWv6%2BYc6iU1Y2oEHmAO12eZsPFJNtiduaE1MJKOicAGOqUBYvYoZRorEaXUAcQiGHDYnomEMDP%2B2wWfmaCswBq7wyQ2DN5Z0q%2FnJiW7FVojFPcNtfwF5cSDwPR%2FdwrC9M6tn%2BObc2Vwvrvq2t4YwIG12RpgnXfv2C8sYUi6Lx2lRIl9Y%2B9Cqu1si%2F4D9tFmZ%2Bu3Zaznla%2B34gs1f3T9jpfdDgWiVFrg05%2BRCzAnQ6YKTFE9DgG6TuNory0kgLCN0MpxnJ62Bsbz&X-Amz-Signature=aa05f9579d2c75a8633978f8496c11c9efd749d6f15eaf4cf0a6f20ac295f94f&X-Amz-SignedHeaders=host&x-id=GetObject)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/d072cded-54c9-4901-8066-9f80315a1b60/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYQW2I5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMprpywrMQCHaLvhd7cUhFallVi4NqYQnd7B%2FYhjC%2BmAiEA4xGqgleP1rZbqbjLX7VueP6gReOuIEBPuD0LwJIH8Cgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCHAbsf7IeSPIMxDGSrcA6mUHa3HX0iTjoKxar0IGY6b9pGl0KgCGba4bSTZgtzpxiRgvybBnnvvJH91hsjKt1PMKCYTKFngse0mHnBDGwsLHlYt9X7O8EKhIOrAJOS%2FvAojmDSpHurYOCx8TSxXu5wCNExMqQG6nLtzruATTgi1cdZl2O4DLSVFwdoRH5yOknYVYAny9HbQWeT7EcHl67hDwQdq%2FGtzd3RnJ1%2BNLjueA4l%2FLfGQsPoTfXHZ6sNoorOc79zos2CciBwfjeNBBK0tS%2BTnn0ZL6mbRZ1x8qjBa6E86D1SPU2znYkqm6SAn%2Fgu%2F9NzqdecUxCuil4JROY6gwheqSU0cyZBOir%2FRrewoTRsq9%2Fc1anRWbbMTfgBPnQNo5v3gnfYGkiHjL7Y1ZwbF7SCnfBu7X5%2BLS%2BlPU3ljprkjk88mkzUFCjcnh3OlNCyT7wai1o76oYuSr9xQHq37Kih6uUWrjMbhp277PS9dBxW3LcGEZ2YaM87od8ZekvHp8rlNHo13s24KmEj3HcTtlbLjEFas9q67cFRocJvEzDiA%2ByEGVemCC074N7%2Bei3X40m39Ask2qYyy9TG3deXrTfgmUxlfSDzCYVKHeBvDhkWv6%2BYc6iU1Y2oEHmAO12eZsPFJNtiduaE1MJKOicAGOqUBYvYoZRorEaXUAcQiGHDYnomEMDP%2B2wWfmaCswBq7wyQ2DN5Z0q%2FnJiW7FVojFPcNtfwF5cSDwPR%2FdwrC9M6tn%2BObc2Vwvrvq2t4YwIG12RpgnXfv2C8sYUi6Lx2lRIl9Y%2B9Cqu1si%2F4D9tFmZ%2Bu3Zaznla%2B34gs1f3T9jpfdDgWiVFrg05%2BRCzAnQ6YKTFE9DgG6TuNory0kgLCN0MpxnJ62Bsbz&X-Amz-Signature=cd38784279748b6ca2cf1fd9c6a47ec6058da645ce45721ee84f9fdf5e84cffa&X-Amz-SignedHeaders=host&x-id=GetObject)

1. webapp-color-3 디렉토리 안 두 파일 관찰. 컨테이너 시작 시 명령어. 디렉토리 안 Dockerfile로부터 만든 이미지라 가정.
→ python [app.py](http://app.py/) —color pink

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e62ca764-701e-481a-ac07-919d52c15a4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYQW2I5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMprpywrMQCHaLvhd7cUhFallVi4NqYQnd7B%2FYhjC%2BmAiEA4xGqgleP1rZbqbjLX7VueP6gReOuIEBPuD0LwJIH8Cgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCHAbsf7IeSPIMxDGSrcA6mUHa3HX0iTjoKxar0IGY6b9pGl0KgCGba4bSTZgtzpxiRgvybBnnvvJH91hsjKt1PMKCYTKFngse0mHnBDGwsLHlYt9X7O8EKhIOrAJOS%2FvAojmDSpHurYOCx8TSxXu5wCNExMqQG6nLtzruATTgi1cdZl2O4DLSVFwdoRH5yOknYVYAny9HbQWeT7EcHl67hDwQdq%2FGtzd3RnJ1%2BNLjueA4l%2FLfGQsPoTfXHZ6sNoorOc79zos2CciBwfjeNBBK0tS%2BTnn0ZL6mbRZ1x8qjBa6E86D1SPU2znYkqm6SAn%2Fgu%2F9NzqdecUxCuil4JROY6gwheqSU0cyZBOir%2FRrewoTRsq9%2Fc1anRWbbMTfgBPnQNo5v3gnfYGkiHjL7Y1ZwbF7SCnfBu7X5%2BLS%2BlPU3ljprkjk88mkzUFCjcnh3OlNCyT7wai1o76oYuSr9xQHq37Kih6uUWrjMbhp277PS9dBxW3LcGEZ2YaM87od8ZekvHp8rlNHo13s24KmEj3HcTtlbLjEFas9q67cFRocJvEzDiA%2ByEGVemCC074N7%2Bei3X40m39Ask2qYyy9TG3deXrTfgmUxlfSDzCYVKHeBvDhkWv6%2BYc6iU1Y2oEHmAO12eZsPFJNtiduaE1MJKOicAGOqUBYvYoZRorEaXUAcQiGHDYnomEMDP%2B2wWfmaCswBq7wyQ2DN5Z0q%2FnJiW7FVojFPcNtfwF5cSDwPR%2FdwrC9M6tn%2BObc2Vwvrvq2t4YwIG12RpgnXfv2C8sYUi6Lx2lRIl9Y%2B9Cqu1si%2F4D9tFmZ%2Bu3Zaznla%2B34gs1f3T9jpfdDgWiVFrg05%2BRCzAnQ6YKTFE9DgG6TuNory0kgLCN0MpxnJ62Bsbz&X-Amz-Signature=95cca7d1db493842e1ecd6e671fc9d1b3090d75973d461cab25ff17727b19c1b&X-Amz-SignedHeaders=host&x-id=GetObject)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/904b3c5a-88ac-4741-a78d-1f6db17fc6c5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYQW2I5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMprpywrMQCHaLvhd7cUhFallVi4NqYQnd7B%2FYhjC%2BmAiEA4xGqgleP1rZbqbjLX7VueP6gReOuIEBPuD0LwJIH8Cgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCHAbsf7IeSPIMxDGSrcA6mUHa3HX0iTjoKxar0IGY6b9pGl0KgCGba4bSTZgtzpxiRgvybBnnvvJH91hsjKt1PMKCYTKFngse0mHnBDGwsLHlYt9X7O8EKhIOrAJOS%2FvAojmDSpHurYOCx8TSxXu5wCNExMqQG6nLtzruATTgi1cdZl2O4DLSVFwdoRH5yOknYVYAny9HbQWeT7EcHl67hDwQdq%2FGtzd3RnJ1%2BNLjueA4l%2FLfGQsPoTfXHZ6sNoorOc79zos2CciBwfjeNBBK0tS%2BTnn0ZL6mbRZ1x8qjBa6E86D1SPU2znYkqm6SAn%2Fgu%2F9NzqdecUxCuil4JROY6gwheqSU0cyZBOir%2FRrewoTRsq9%2Fc1anRWbbMTfgBPnQNo5v3gnfYGkiHjL7Y1ZwbF7SCnfBu7X5%2BLS%2BlPU3ljprkjk88mkzUFCjcnh3OlNCyT7wai1o76oYuSr9xQHq37Kih6uUWrjMbhp277PS9dBxW3LcGEZ2YaM87od8ZekvHp8rlNHo13s24KmEj3HcTtlbLjEFas9q67cFRocJvEzDiA%2ByEGVemCC074N7%2Bei3X40m39Ask2qYyy9TG3deXrTfgmUxlfSDzCYVKHeBvDhkWv6%2BYc6iU1Y2oEHmAO12eZsPFJNtiduaE1MJKOicAGOqUBYvYoZRorEaXUAcQiGHDYnomEMDP%2B2wWfmaCswBq7wyQ2DN5Z0q%2FnJiW7FVojFPcNtfwF5cSDwPR%2FdwrC9M6tn%2BObc2Vwvrvq2t4YwIG12RpgnXfv2C8sYUi6Lx2lRIl9Y%2B9Cqu1si%2F4D9tFmZ%2Bu3Zaznla%2B34gs1f3T9jpfdDgWiVFrg05%2BRCzAnQ6YKTFE9DgG6TuNory0kgLCN0MpxnJ62Bsbz&X-Amz-Signature=e51bf16aa88ead17282a297b069094c6e7f34c0ea510260715f188f6888a3015&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 주어진 명세서가지고 Pod 생성. 기본적으로 blue 배경이 보여짐. 주어진 command 라인 arguments를 green으로 바꿈.
Pod 이름 - webapp-green
Image - kodekloud/webapp-color
Command line arguemnts - —color=green

```bash
kubectl run webapp-green --image=kodekloud/webapp-color -- --color green
```


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/95d73da8-076e-4fd5-9512-26ae91309514/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYQW2I5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMprpywrMQCHaLvhd7cUhFallVi4NqYQnd7B%2FYhjC%2BmAiEA4xGqgleP1rZbqbjLX7VueP6gReOuIEBPuD0LwJIH8Cgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCHAbsf7IeSPIMxDGSrcA6mUHa3HX0iTjoKxar0IGY6b9pGl0KgCGba4bSTZgtzpxiRgvybBnnvvJH91hsjKt1PMKCYTKFngse0mHnBDGwsLHlYt9X7O8EKhIOrAJOS%2FvAojmDSpHurYOCx8TSxXu5wCNExMqQG6nLtzruATTgi1cdZl2O4DLSVFwdoRH5yOknYVYAny9HbQWeT7EcHl67hDwQdq%2FGtzd3RnJ1%2BNLjueA4l%2FLfGQsPoTfXHZ6sNoorOc79zos2CciBwfjeNBBK0tS%2BTnn0ZL6mbRZ1x8qjBa6E86D1SPU2znYkqm6SAn%2Fgu%2F9NzqdecUxCuil4JROY6gwheqSU0cyZBOir%2FRrewoTRsq9%2Fc1anRWbbMTfgBPnQNo5v3gnfYGkiHjL7Y1ZwbF7SCnfBu7X5%2BLS%2BlPU3ljprkjk88mkzUFCjcnh3OlNCyT7wai1o76oYuSr9xQHq37Kih6uUWrjMbhp277PS9dBxW3LcGEZ2YaM87od8ZekvHp8rlNHo13s24KmEj3HcTtlbLjEFas9q67cFRocJvEzDiA%2ByEGVemCC074N7%2Bei3X40m39Ask2qYyy9TG3deXrTfgmUxlfSDzCYVKHeBvDhkWv6%2BYc6iU1Y2oEHmAO12eZsPFJNtiduaE1MJKOicAGOqUBYvYoZRorEaXUAcQiGHDYnomEMDP%2B2wWfmaCswBq7wyQ2DN5Z0q%2FnJiW7FVojFPcNtfwF5cSDwPR%2FdwrC9M6tn%2BObc2Vwvrvq2t4YwIG12RpgnXfv2C8sYUi6Lx2lRIl9Y%2B9Cqu1si%2F4D9tFmZ%2Bu3Zaznla%2B34gs1f3T9jpfdDgWiVFrg05%2BRCzAnQ6YKTFE9DgG6TuNory0kgLCN0MpxnJ62Bsbz&X-Amz-Signature=e0afcb99ee36bb0f2088f7c95ad637bc94610a4c535b0e8b800329958f1a37f9&X-Amz-SignedHeaders=host&x-id=GetObject)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/1ec7b2df-e700-423a-a17c-9c153e2d04d0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYQW2I5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMprpywrMQCHaLvhd7cUhFallVi4NqYQnd7B%2FYhjC%2BmAiEA4xGqgleP1rZbqbjLX7VueP6gReOuIEBPuD0LwJIH8Cgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCHAbsf7IeSPIMxDGSrcA6mUHa3HX0iTjoKxar0IGY6b9pGl0KgCGba4bSTZgtzpxiRgvybBnnvvJH91hsjKt1PMKCYTKFngse0mHnBDGwsLHlYt9X7O8EKhIOrAJOS%2FvAojmDSpHurYOCx8TSxXu5wCNExMqQG6nLtzruATTgi1cdZl2O4DLSVFwdoRH5yOknYVYAny9HbQWeT7EcHl67hDwQdq%2FGtzd3RnJ1%2BNLjueA4l%2FLfGQsPoTfXHZ6sNoorOc79zos2CciBwfjeNBBK0tS%2BTnn0ZL6mbRZ1x8qjBa6E86D1SPU2znYkqm6SAn%2Fgu%2F9NzqdecUxCuil4JROY6gwheqSU0cyZBOir%2FRrewoTRsq9%2Fc1anRWbbMTfgBPnQNo5v3gnfYGkiHjL7Y1ZwbF7SCnfBu7X5%2BLS%2BlPU3ljprkjk88mkzUFCjcnh3OlNCyT7wai1o76oYuSr9xQHq37Kih6uUWrjMbhp277PS9dBxW3LcGEZ2YaM87od8ZekvHp8rlNHo13s24KmEj3HcTtlbLjEFas9q67cFRocJvEzDiA%2ByEGVemCC074N7%2Bei3X40m39Ask2qYyy9TG3deXrTfgmUxlfSDzCYVKHeBvDhkWv6%2BYc6iU1Y2oEHmAO12eZsPFJNtiduaE1MJKOicAGOqUBYvYoZRorEaXUAcQiGHDYnomEMDP%2B2wWfmaCswBq7wyQ2DN5Z0q%2FnJiW7FVojFPcNtfwF5cSDwPR%2FdwrC9M6tn%2BObc2Vwvrvq2t4YwIG12RpgnXfv2C8sYUi6Lx2lRIl9Y%2B9Cqu1si%2F4D9tFmZ%2Bu3Zaznla%2B34gs1f3T9jpfdDgWiVFrg05%2BRCzAnQ6YKTFE9DgG6TuNory0kgLCN0MpxnJ62Bsbz&X-Amz-Signature=5f3a1c24f985da06c279a7cda1a63e41199815e8aa305c1e632b7d232113ebff&X-Amz-SignedHeaders=host&x-id=GetObject)


## Configure Environment Variables in Applications


env value types → plainkey value, configmaps, secrets


## Configuring ConfigMaps in Applications


configmap을 생성하고 pod에 주입.


Pod에서 Configmap → ENV, SINGLE ENV, VOLUME로 주입.


## Practice Test - Environment Variables

1. 시스템 상 존재하는 Pod 수
2. Pod내 컨테이너에 설정된 환경변수 이름 → APP_COLOR
3. APP_COLOR 환경변수에 설정된 값
4. 터미널 위 Webapp Color 탭을 눌러 web application UI 확인
5. green  배경을 보이기 위해 Pod 의 환경변수 값 업데이트
Pod 이름 - webapp-color
라벨 이름 - webapp-color
Env - APP_COLOR=green

```bash
kubectl run webapp-color --image=kodekloud/webapp-color --env="APP_COLOR=green" -l name=webapp-color
```

1. Webapp Color 탭을 눌러 변화 확인.
2. default 네임 스페이스에 존재하는 configmaps 수
3. db-config로부터 데이터베이스 host 확인.
4. 새 ConfigMap  만들기
ConfigMap 이름 - webapp-config-map
Data: APP_COLOR=darkblue
Data: APP_OTHER=disregard

```bash
kubectl create configmap webapp-config-map --from-literal=APP_COLOR=darkblue --from-literal=APP_OTHER=disregard
```

1. 새로 만든 ConfigMap의  APP_COLOR 키만 사용하여 Pod의 환경변수 update
Pod 이름 - webapp-color
Configmap 이름 - webapp-confing-map

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: webapp-color
spec:
  containers:
  - name: webapp-color
    image: kodekloud/webapp-color
    env:
      - name: APP_COLOR
        valueFrom:
          configMapKeyRef:
            name: webapp-config-map
            key: APP_COLOR
```

1. Webapp Color 탭 눌러서 변화 확인

## Configure Secrets in Aplications


secret 생성 → pod에 주입.


민감한 데이터를 저장할 때  쓰임. encoding된 value로 저장.


Pod에서 secret → env, single env, volume으로 주입.


Secrets는 암호화되지 않음. 암호화된 것일 뿐. → Github  등으로 푸시할 때 Secret 객체를 코드와 함께 SCM에 체크인 하지 말 것. Secret 파일에서 base64로 인코딩된 것을 디코딩할 수 있음.


Secrets는 ETCD에서 암호화되지 않음. 암호화는 정지 상태에서 활성화.


같은 네임스페이스에서 pods/deployments를 생성할 수 있는 누구나 secret에 접근 가능. → RBAC를 이용해 secret의 최소한의 접근 권한 구성.


third-party secret 저장소 제공업체 고려 → AWS Provider, Azure Provider, GCP Provider, Vault Provider


## Practice Test - Secrets

1. 시스템 상 Secrets 수
2. dashboard-token secret에 정의된 secret 수
Data 하단 부분 ca.crt, namespace, token으로 총 3개
3. dashboard-token secret의 type
kubernetes.io/service-account-token
4. dashboard-token secret에 정의된 secret data가 아닌 것은?
5. 그림과 같이 application 배포
6. secret 만들기

```bash
kubectl create secret generic db-secret --from-literal DB_Host=sql01 --from-literal DB_User=root --from-literal DB_Password=password12
```


시험에서는 명령어로 작성하는 것이 더 빠름.

1. 새로 만든 secret으로부터 환경변수를 가져와 webapp-pod 구성
Pod name: webapp-pod
Image name: kodekloud/simple-webapp-mysql
Env From: Secret=db-secret

```yaml
- name: webapp-pod
    image: kodekloud/simple-webapp-mysql
    envFrom:
    - secretRef:
        name: db-secret
```

1. 데이터베이스와 성공적으로 연결되었는지 확인

## Demo: Encrypting Secret Data at Rest


etcd server에 data가 어떻게 저장이 되는가 → 


etcd 서버는 pod에서 실행 중.


ssh로 pod에 접속하여 etcdctl 명령어를 수행하거나  etcdctl client utility를 사용해 control plane node로부터 지역적으로 수행


kube-system 네임스페이스 etcd-controlplane Pod


오른쪽에 있는 데이터가 etcd에 저장된 데이터이다. 데이터는 암호화되지 않은 형식으로 etcd에 저장된다.


정지 상태에 암호화가 가능하게 함으로써 해결하려 한다.


```bash
ETCDCTL_API=3 etcdctl \
	--cacert=/etc/kubernetes/pki/etcd/ca.crt \
	--cert=/etc/kubernetes/pki/etcd/server.crt \
	--key=/etc/kubernetes/pki/etcd/server.key \
	get /registry/secrets/default/my-secret | hexdump -C
```


EncryptionCongfiguration 파일을 적용하긴 전에는 오른쪽 부분이 암호화되지 않은 상태.


encryption-provider-config는 kube api server에서 구성한다.


identity 옵션 → 암호화❌
순서 중요. identity 1번.


aescbc를 사용해서 encryption  사용.


```bash
vi /etc/kubernetes/manifests/kube-api-server.yaml
```


EncryptionConfiguration 파일은 /etc/kubernetes/manifest/enc에 저장 후 이것을 /etc/kubernetes/manifests/kube-api-server.yaml에 적용.


ETCDCTL_API 를 다시 수행하면 EncryptionCongfiguration이 적용되어 아래 그림과 같이 암호화되어 나오는 것을 볼 수 있음.


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/0bf8add3-bd24-4223-9f63-0aea074c7073/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAOOCEAJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFWlzo219whT4LycQhZ2cBBcMST53ynFiSgQVJyiukLAiEAjFaifp0W55nsy6xXDHKR4x46LA8gwru%2BWGftxQiKF2Eq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEK%2Fmd12geZDFYtWLCrcA7wpp0hjXMoK0kj0kpn3nuflo%2FUeioAVZ4EkctMBASvkVw9xH6092Msi4YH%2BBJzaU9V1HsO0%2BFJQeT3SsTV%2BQRbNElMfp1Be49tWdajTH71jHl0OyjJ8J2wEs7%2BuQVIpL2PsCGh7rgoBOEfRqjY9g7nzpcDuAc8ge54XQaco60eBbwqiVIoUJlawg2OkhnTdRHgW8orUivVNzcK0ox2NZeAFsfTNvFHnedaiTfBdHpvuPhCmCPGF%2FAYFLQBx4URd035ecbPcW3UTA%2BVXxHtIU%2BJkVPPOFGtDfp7VLUzLehxH8oD77pJ6Y1DTNXOJImiutFMkkaYnmEyUNk28lLe28EoNCnBhsaC55Nea%2FJngZZJ%2B4bsgxBE5HrjPkPHlvjJinvn9bze%2BOMI%2BAsNSDNrQCliuLgvw9tX%2Fin9w3LS5RkxjsCXQ7Mmlh27ZNWF0jDbNG9ac8z70SHhRru57iZpOk8iis9mMX8xyQCIXQQO95JDbU2eyi44MCVJT7EtCVJabsQoEOxKnr1AaDdC%2FxXaTaE1zrEuqCrSIWJOyp%2Bv9fIlRDw63%2BS6kTfutUBrO7o11M97HShw8cRcDcHJWBLZ9Uyfg8N6ZTtGy6w96%2Bd0PQ7r8UvsyghwV36VRP7FsMOCNicAGOqUBh0G3wnTOmm4H7t2Sq1uRFOxgMH8pp2g33A80MjpfSGFmGgkEAPQmzv2mPmNmDRtGyxlJc%2FbcnEKQ2jInDnSBlRR2N5801vE9ikqHzRn9snjY1QWfAUsLtd0gH%2F1Xa7pPEQcksvPFD037g4jIopGs53HaHWr72LePp69VVaNZyZVmg%2B50Y4T88ChBN8QOIb0JsxF%2B6T86qJyxjNgz%2BeFOVdimPiIC&X-Amz-Signature=694bef7a181d174ab08a6e89b11271ee5d6f9500049178f8cf6acbdd858798af&X-Amz-SignedHeaders=host&x-id=GetObject)


## Multi Container Pods


scale up, down에 도움이 된다. web server와 logging service와 같이 두 서비스를 같이 쓸 필요가 있을 수도 있음. 쌍으로 scale up down이 됨.


배열로 쓸 수 있는 이유 → 한 파드에 여러 컨테이너를 정의할 수 있음.


## Practice test - Multi Container Pods

1. red 파드에 생성된 컨테이너 수
2. blue 파드에서 실행 중인 컨테이너 이름
3. 두  개의 컨테이너를 가진 다중 컨테이터 파드 만들기
Name: yellow
Container 1 Name: lemon
Container 1 Image: busybox
Container 2 Name: gold
Container 2 Image: redis
crashloopbackoff 발생하면 lemon 컨테이너에 sleep 1000 추가

    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: yellow
      labels:
        app: yellow
    spec:
      containers:
      - name: lemon
        image: busybox
      - name: gold
        image: redis
    ```

4. elastic-stack namespace에 application logging stack이 배포되어있음. 관찰

    ```bash
    kubectl get po -n elastic-stack
    ```

5. pod가 ready 상태이면 터미널 위 링크를 사용해 kibana UI 관찰. 로그로도 관찰 가능.
kibana pod가 준비된 후 kibana UI가 준비되는데 몇 분 걸림.

    ```shell
    kubectl logs kibana -n elastic-stack
    ```

6. app 파드를 관찰하고 그 안에 있는 컨테이너 수
7. /log/app.log파일로 로그 출력. 로그를 확인하고 로그인 시 문제가 발생하는 사용자 찾기.
8. Elastic Search에 로그를 보내기 위한 sidecar 컨테이너를 추가하여 elastic-stack 네임스페이스에 있는 파드 편집. sidecar 컨테이너에 볼륨 마운트. 아래 사양 이외 수정❌.
Name: app
Container Name: sidecar
Container Image: kodekloud/filebeat-configured
Volume Mount: log-volume
Mount Path: /var/log/event-simulator/
Existing Container Name: app
Existing Container Image: kodekloud/event-simulator

    ```yaml
    # 추가 내용
      - name: sidecar
        image: kodekloud/filebeat-configured
        volumeMounts:
        - mountPath: /var/log/evnet-simulator/
          name: log-volume
    ```

9. Kibana  UI 확인. Discover 부분에서 로그가 보여야 함.

## Multi-container Pods Design Patterns


3개의 패턴이 있음.

1. Sidecar
2. Adapter
3. Ambassador

CKA에서는 다루지 않음.


## InitContainers


다중 컨테이너 파드에서 각 컨테이너는 Pod의 수명주기에 따라 살아있도록 프로세스를 운영하도록 함.


예를 들어 애플리케이션과 loggin agent를 가진 파드는 영구적으로 살아있어야 함.  웹 애플리케이션이 실행되는 한 log agent 컨테이너에서 운영 중인 프로세스를 살아있어야 함.


둘 중 하나라도 실패하면 파드 재시작.


initContainer는 다른 컨테이너처럼 파드에서 구성됨. initContainers 부분에 작성.


initContainer 또한 다중으로 구성 가능. 각 init container의 경우 순차적으로 하나에 하나씩 실행.


init container 중 하나라도 완료되지 않으면 initcontainer가 성공할 때까지 반복적으로 파드 재시작.


## Practice Test - Init Containers

1. initContainer를 구성한 파드 찾기
2. blue 파드 위 initContainer에서 사용한 이미지
3. blue 파드 위 initContainer 상태 →Terminated
4. terminated 상태인 이유
성공적으로 completed
5. purple이라는 이름을 가진 pod가 생성됨. 해당 pod가 가지고 있는 initContainer 수
6. purple pod의 상태 → pending
7. pod가 생성되고 후 application 이 올라가고 user가 사용할 수 있는 데 까지 걸리는 시간 → 30 mins
warm-up-1 → 600
warm-up-2 →1200
총 1800초 → 30분
8. busybox image와 sleeps for 20 seconds를 사용한 initContainer를 사용해서 red 파드 업데이트.
Pod: red
initContainer Configured Correctly

    ```yaml
    initContainers:
    	- image: busybox
    		name: init-container
    		command: ['sleep 20'] # or ["sleep", "20"]
    ```


    삭제하고 올릴 필요 없이 replace —force 명령어도 사용 가능. 실무에서는 사용하지 않는 편이 좋아 보임.

9. 새 애플리케이션 orage가 배포됨. 문제가 있음. 이를 찾아서 해결.
orange-container에서 문제 발생.
command 부분 sleeeep → sleep 으로 수정.

```bash
kubectl logs -c <컨테이너명> # pod 내 컨테이너의 로그 확인 가능.
```


## Self Healing Applications


Replicaset과 replication Controller를 통해 자가 치료 지원.


replication controller는 pod 내부 애플리케이션에서 충돌 발생 시 자동적으로 재생성하도록 함.


동시에 application의 충분하 replicas를 보장.


kubernetes는 파드 내 실행 중인 application의 health를 확인하도록 추가적인 지원을 제공.


Liveness와 Readiness probes를 통해 필요한 조치를 취함.


그러나 CKA에서는 다루지 않음. 


## Introduction to Autoscaling


HPA, VPA


추가적인 cpu나 memory 필요 → vpa


추가적인 서버 필요 → hpa


vpa → 기존 서버에 자원 추가


hpa → 기존 서버에 서버 추가


클러스터 위 pod를 지우거나 생성함.


Horizontal Scaling → 클러스터에 노드 추가


Vertical Scaling → 기존 노드에 증가한 자원 할당.


kubectl join 명령어를 사용해서 노드 수동적으로 추가.


kubectl scale 명령어를 사용해서 수동적으로 자원 할당.


자동 할당 → Cluster AutoScaler


## Horizontal Pod Autoscaler (HPA)


수동적으로 하면 문제가 생겼을 때 빠르게 해결할 수 없음. 이를 위해 HPA 사용.


metrics 관찰. pod 추가. 균일하게 처리. 다중 메트릭 추적.


```bash
kubectl autoscale deployment my-app --cpu-percent=50 --min=1 --max=10
```


사용량에 따라 replicase 수를 늘리거나 줄임.


HPA 파일 선언


1.23 부터는 HPA가 내장되어있음.


Custom metrics Adapter는 내부 resources.


DATADOG과 같은 외부 자원은 Kubernetes Autoscaling course 참고.


## Practice Test - Manual Scaling


Kubernetes Deployment 수동적 스케일링


목표

- Kubernetes에서 스케일링 개념 이해.
- 수동적으로 scale up and down
- application과 자원에 따라 결과 관찰.
1. /root/deployment.yaml manifest 파일을 사용해서 Flask application 에 대한kubernetes deployment 생성하기
kubectl get deployment와 kubectl get pods 사용해서 관찰.
2. kubectl scale의 주요 목적
deployment나 replicaset에 replicas 수 조정.
3. kubernetes에서 kubectl scale 명령어를 사용해서 statefulset을 scale down 할 수 있는가?
Deployment와 Replicaset과 마찬가지로 사용 가능.
4. replicas 3을 가지도록 flask-web-app이라는 이름을 가진 deployment 수동적으로 scale.
애플리케이션을 관찰하기 위해 Ingress 버튼이나 Skooner 버튼 클릭.
Skonner에 대한 토큰은 /root/skooner-sa-token.txt에서 확인 가능.
5. 더 높은 replicas 수로 kubectl scale을 사용하여 deployment를 스케일링. 그러나 클러스터가 새 replicas가 수용하기 위한 불충분한 자원을 가진다면 발생하는 문제
limit까지 생성되고 나머지는 pending 상태가 됨.

## Practice Test - HPA

1. /root/deployment.yaml manifest 파일을 사용하여 nginx application에 대한 Kubernetes deployment를 생성.
2. /root/autoscale.yaml에 위치한 nginx deployment에 대한 autoscaling을 생성하기 위한 manifest 파일이 있음. manifest 파일을 보고 현재 replicas와 요구되는 replicas 찾기.
최대 replicas 3과 CPU 사용률 80%를 가진 nginx-deployment에 대한 autoscaler 생성.

    ```bash
    kubectl autoscale deploy nginx-deployment --max 3 --cpu-percent 80
    ```

3. Kubernetes에서 HPA의 주요 목적
관찰된 CPU 사용률이나 다른 메트릭에 따라 파드의 스케일링을 자동화하기 위함.
To automate the scaling of pods based on observed CPU utilization or other select metrics
4. Kubernetes 클러스터에서 HPA에 메트릭 제공을 담당하는 구성 요소는 무엇인가
metrics-server
5. autoscaler 배포 후 nginx-deployment의 현재 replica 수
6. HPA target의 상태
7. HPA 상태가 CPU target에 대한 /80을 보이고 있다. 이러한 이유는?
Deployment가 정의된 resource field를 갖지 않음.
Ther deployment does not habe any resource fields defined.
8. nginx-deployment에서 resource field가 없기 때문에 HPA가 실패하므로 /root/deployment.yaml에 resource field를 update. manifest를 사용해서 nginx-deployment 업데이트. 업그레이드 후 HPA로 nginx-deployment에 대한 변화 관찰.
kubectl get hpa —watch 사용.
deployment manifest 파일 들여쓰기 수정

    ```bash
    $ kubectl get hpa --watch
    NAME               REFERENCE                     TARGETS              MINPODS   MAXPODS   REPLICAS   AGE
    nginx-deployment   Deployment/nginx-deployment   cpu: <unknown>/80%   1         3         3          2m57s
    nginx-deployment   Deployment/nginx-deployment   cpu: <unknown>/80%   1         3         7          3m1s
    nginx-deployment   Deployment/nginx-deployment   cpu: <unknown>/80%   1         3         3          3m16s
    nginx-deployment   Deployment/nginx-deployment   cpu: 0%/80%          1         3         3          3m31s
    ```

9. nginx-deployment에서 ScalingReplicaSet 이벤트는 HPA에서 무엇을 나타내는가?
파드의 수 증가
10. FailedGetResourceMetric 이벤트의 원인은 무엇인가?
컨테이너에 대한 CPU나 메모리 요구사항 추적을 못 함.

## In-place Resize of Pods


Pod의 자원 요구사항을 바꾸면 기본적으로 존재하는 pod를 삭제하고 바뀐 요구사항을 가진 새 파드가 생성됨.


제자리에서 변화가 일어나지 않음 → 파드를 죽이고 새 파드를 만들어야 함.


특히, stateful workloads는 방해받을 수 있음.


in-place update of pod  resources라고 있음. → enabled by default:false


```bash
FEATURE_GATES=InPlacePodVerticalScaling=true
```


in-place를 사용하기 위해서는 위와 같이 설정해야 함.


가능하도록 하면 Pod는 resize policy 파라미터에 대한 설정을 지원함.


각 자원에 대한 restartPolicy를 명시하도록 함.


```yaml
resizePolicy:
	- resourceName: cpu
		restartPollicy: NotRequired
	- resourceName: memory
		restartPolicy: RestartContainer
```


cpu의 경우 컨테이너를 재시작하지 않고 바꿀 수 있음.


### Limitations

- Only CPU and memory resources can be changed. CPU와 memory 자원만 바꿀 수 있음.
- Pod QoS Class cannot change. 파드 서비스 품질은 바꿀 수 없음.
- Init containers and Ephemeral Containers cannot be resized. 초기 컨테이너와 임의 컨테이너는 재조정할 수 없음.
- Resource request and limits cannot be removed once set. 설정하면 request와 limits은 지울 수 없음.
- A container’s memory limit may not be reduced below its usage. If a request puts a container in this state, the resize status will remain in InProgress until the desired memory limit becomes feasible. 컨테이너의 메모리 제한은 사용률 아래로 줄일 수 없음. 요청이 컨테이너를 이 상태로 설정하면 원하는 메모리 제한이 실행 가능해질때까지 크기 조정 상태는 InProgress 상태로 유지됨.
- Windows pods cannot be resized.  Windows 파드는 재조정할 수 없음.

## Vertical Pod Autoscaling (VPA)


클러스터 위에 관찰할 수 있는 실행  중인 메트릭 서버가 있어야 함.


kubectl edit을 이용해서 requests와 limits을 바꾸면 기존 파드가 죽고 새 파드가 만들어짐.


메트릭 관찰. 파드 자원 재조정. 균일하게 처리.


VPA는 내장되어 있지 않으므로 배포해야 함.


```bash
kubectl apply -f https://github.com/kubernetes/autoscaler/release/latest/download/vertical-pod-autoscaler.yaml
```


VPA deployment는 여러 구성요소로 이루어짐.

- Recommender: Kubernetes metrics API로부터 지속적으로 자원 사용률을 관찰함. 파드에 대한 과거와 현재 사용 데이터를 수집. 최적의 CPU와 memory 값에 대한 recommendations 제공. Recommender 자체로 직접적으로 파드 수정은 못 함. 수정을 제안할 수는 있음.
- Updater: 차선의 자원을 가지고 운영중인 Pod를 탐지하고 update가 요구될 때 그것들을 회복함. Recommender로부터 정보를 얻고 파드를 관찰함. 업데이트가 필요하면 그것을 회복함. → 파드 종료를 의미.
- Admission-controller: 파드 생성 과정에 개입. Recommender로부터 recommendations를 다시 사용하여 시작할 때 제안된 CPU와 메모리 값으로 적용하도록 pod 스펙을 바꿈. 새롭게 생성된 파드는 바꾼 리소스 요구사항을 가지고 시작.

기본적으로 VPA Recommneder는 정보를 수집하고, Updater는 관찰하거나 recommder로부터 정보를 얻고 실제 파드와 비교함. 파드가 처리량을 넘기면 파드를 죽임. 정책에 따라 그것을 죽일지 안 죽일지 정함. 그러나 관념적으로는 파드를 죽임. 파드가 죽었을 때 deployment는 파드를  자동적으로 재생성하기 때문에 Admission Controller는 개입하고 리소스를 업데이트한다.


새 사이즈를 가진 파드가 생성됨.


VPA를 생성하기 위한 명령어는 없음. → HPA와 같이 내장된 구성요소가 아니기 때문에 yaml 파일 작성해야 함.


VPA는 4가지 모드로 동작.

- Off: 권장됨. 변하지 않음.
- Initial: 파드 생성 시에만 바꿈.
- Recreate: 범위를 넘어가면 파드를 회복시킴.
- Auto: 존재하는 파드를 권장된 수로 업데이트. Recreate와 비슷하게 동작. 그러나 In-place Update of Pod Resources가 가능하면 해당 모드 선호됨.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8e1b23d6-8186-45b4-902e-c67bb9d9369b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZOTU4T%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI6NBvMYXe9N%2Fr2ortocu%2BFVwfuhwHaRqG04WlKjHsygIgbFIVFY1aKSfiOmr2fAwNpmRSaYEFdyj9F%2F1ELQzuP9Iq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCQ5sAiHfjau740uByrcA2QmZg0vSicXBMSFpU6IxQiMM7gxJDxjOHDTihVSsq1yGKuoR%2Fi95iAOYBTCrRibaee48nNTzLuAk4yY7baCwAqTioIDFF3Nrnt1yBt3IsrPFOVhw%2BlgrFOGv%2FeRD6JdXwX7L70ubt40Igbvm7yXiHaPX%2FjosX70QiYPXUtp579%2FaDje7HkW%2BDfhylTj8PUVXNMuyJofenOeWgN0jO2GsrrNoA11iq%2FXs88G2RFiS%2F2M6Xb3OI3nsP%2BakQwZEBWoPtWNDS7GY0Ibz8as%2FjY5fHoL905PrAah8zunVUrfgxOyH2XLEPE7KzIReIjiYIf58Fjg2odsSTMi9WnPv7Up98Z%2BSOFuz%2BEAviGkWSpG7E%2FekQJQ%2FwfzOyOU7KY28vZwSq2I%2BNnU6Dbn63rEkwb9x0GCX%2BjoFZcsyQXxtBew0UuT5AFSJOgD1X1m0S3JCbxOMVv9f5d098UlDAu1ovMziOVIkUmDRR7%2BbHNE4GsPHFmWanHuqmvD2pCNniESt6DpJDSteSjeu3VxSHqu3fL95zR24ZEOkkudSbJN%2BeORdZUad%2BUqGxSslsnDptk7h6ViKHZKyxx3TVD8oLVyvhMBeUsXrZ6rCkd6lze5M5GD2mGWDkjRGWUnn%2BmXwYMaMOuNicAGOqUBe%2FE79LSDbAsIe2JXC%2BwBplL08aRzUHv8EHqnGrY4hKEutFxDShY0YzFwDhYFoNijcHC16Ysb6dAcYaFy6j3d7Sbt5OF7v2N4koet%2BQmcAcWFS3LTr2zMIr%2Fy39ys70mKHkhYZR60NV%2BdMGEft9N%2F0rEgr1pqrmW3Tlk%2BGRI%2FaHbqjoUiO0Esfj%2FII3n8SJjUBH5NFNNiq5S5pbh0W9TzHjya%2FgE6&X-Amz-Signature=26a237cfc0c98b9c20998eb8ff88984eeccc819b86c78fca5bfa87e57f8ed976&X-Amz-SignedHeaders=host&x-id=GetObject)


| 특징                      | VPA                                                           | HPA                                         |
| ----------------------- | ------------------------------------------------------------- | ------------------------------------------- |
| Scaling Method          | 존재하는 파드의 CPU와 메모리 증가                                          | 부하에 따라 파드 추가/제거                             |
| Pod Behavior            | 새 리소스값을 적용하기 위해 파드 재시작                                        | 존재하는 파드 실행 유지                               |
| Handles Traffic Spikes? | ❌스케일링은 파드 재시작을 요구                                             | 즉각적으로 더 많은 파드 추가                            |
| Optimizes Costs?        | CPU와 memory가 과하게 provisioning되는 것을 막음.                        | 불필요한 유휴 파드 방지                               |
| Best For                | Stateful workloads, CPU/memory-heavy apps (DBs, ML workloads) | Web apps, microservices, stateless services |


## Practice Test - Install VPA


목표

- VPA와 Kubernetes 클러스터에 구성 요소 설치
- 각 VPA 구성 요소의 역할 이해하고 어떻게 효율적으로 자원 관리에 기여하는지
- VPA가 어떻게 제안하고 리소스를 어떻게 재조정하는지 보기 위한 간단한 애플리케이션 배포
- VPA 구성 요소, 특히 VPA Updater로 생성된 로그를 사용해 애플리케이션에 자원과 관련된 문제 트러블  슈팅
1. VPA Custom Resource Definitions 설치. VPA Role-Based Access Contorl(RBAC) 설치
2. 레파지토리 클론. VPA 디렉토리로 이동. script 실행.

    ```bash
    git clone https://github.com/kubernetes/autoscaler.git # root 디렉토리로 이동해서 git clone 
    cd autoscaler/vertical-pod-autoscaler # vertical-pod-autoscaler 디렉토리로 이동.
    ./hack/vpa-up.sh # VPA를 배포하기 위해 제공된 스크립트 실행
    ```

3. VPA 설정의 일부로 설치되는 VPA CRDs는 무엇인가?
verticalpodautoscalercheckpoints.autoscaling.k8s.io&verticalpodautoscalers.autoscaling.k8s.io
4. 설치 후 kube-system 네임스페이스에서 전형적으로 얼마나 많은 VPA deployments가 실행되는가?
3개. recommender, updater, admission-controller
5. /root 디렉토리에 위치한 flask-app.yml이라는 이름을 가진 Kubernetes deployment 파일이 주어짐.
cluster에 flask-app.yml 배포.
배포 후 정상적으로 작동하는지 확인하기 위해 VPA updater의 로그 확인.
6. VPA 파드에 새로 배포된 flask-app 파드에 문제가 있음을 나타냄.
vpa-updater 파드의 로그를 확인하고 flask-app deployment가 가진 잠재적인 문제를 확인.
로그를 확인하면 다음과 같은 에러 메시지가 보임.

    ```bash
    pods_eviction_restriction.go:226] **too few replicas** for **ReplicaSet** default/**flask-app-b6c9c4f78**
    ```


## Practice Test - Modifying CPU resources in VPA


목표

- 간단한 애플리케이션을 배포하고 파드가 정상적으로 실행 중인지 확인.
- CPU와 메모리 사용량을 평가하기 위해 kubectl top 명령어를 사용하여 파드 자원 사용을 관찰.
- 애플리케이션의 현재 사용량을 기반으로 CPU와 메모리 자원 recommendations를 어떻게 조정하는지 관찰하기 위한 VPA 배포.
- 애플리케이션에 부하를 가하고 VPA가 수요 증가에 따라 동적으로 recommendations를 어떻게 업데이트하는지 관찰.
- 자원 관리에 대한 lowerBound, upperBound와 uncappedTarget과 같은 핵심 매개변수를 이해함으로써 VPA recommendations 이해하기.
1. /root 디렉토리에 위치한 vpa-cpu-testing.yml 배포.
2. Pod 리소스 사용량 관찰.

    ```bash
    kubectl top pod
    NAME                           CPU(cores)   MEMORY(bytes)   
    flask-app-4-7dcd9549fc-6rpnr   1m           19Mi            
    flask-app-4-7dcd9549fc-8gqjc   1m           19Mi
    ```

3. /root디렉토리에 vpa-cpu.yml 파일 배포.
kubectl get vpa로 실행 중인 cpu 사용량 확인.

    ```bash
    kubectl get vpa
    NAME        MODE   CPU   MEM   PROVIDED   AGE
    flask-app   Off                           5s
    ```

4. /root/load.sh 스크립트 실행함으로써 flask-app-4 deployment에 부하를 가함.
5. flask-app VPA로부터 제안된 target CPU value 캡쳐하고 /root/target에 저장.

    ```bash
    kubectl get vpa -o yaml >> target
    ```

