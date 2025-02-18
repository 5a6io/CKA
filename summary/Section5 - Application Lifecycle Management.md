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
5. 현재 디플로이먼트의 이미지 바꾸기  v1 → v2
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/977ac0a0-6f7e-4aae-99ae-af3cd4e061cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVIGQ4MC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T122103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFr8zGnAcEaS%2BrVT3d9Ev%2BziRcYEYl8%2B8IzbzxZ%2FXrDQAiEA9XvMwG0Qnou1lFZ%2BCGGzgelCHyLnX8mV8YPLRdxcxDwqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjWcWCFzJ7fNTHgwircA6yLStuUDfr1g7b2C5kutgnZUGf%2FzRg1k39PkcqNWYKiN2tw1dZYKo4eaB4YWIhvu4%2F4ZvkBYmyBpS2g%2F7AlrDV648L31GdU92uC3GmxFHjtcLj7l29cUdyYdL4vS1%2FVJluY9lKOgACvV8Krn0hylunjW1oy5PFlTIgcOYSsRmr5JPvbSoepYqwqU5ziE7UvgazjLT3TxAqKJFoQq%2FpusWneJH8b0FOF4Xew%2F2DWUmAdCe5DT1hQico2Zly2JvRIzs6cHV3wig4MhwvNQekWkIFjV3E8mwxZCenLqe363Wse7%2Fr9C54Ykgsz%2F9gM4UVvB8j1olnGYGytLz8cwZIH1zgIBrbElPYePS3Or2EQL014uNOXVm8zCcB9Bc2YYLbazHJslM8QF%2FY38TfqsPL%2BG1wEdSqoZWMV7c1RsQzvx1fSpJpxhwi86yI3Phrm%2Bvy95eCa5uhSMXxPzA44PJgNJ8cRL0JFp2R4BhxNomoF1Ava%2BKy%2FA56CpuKBlhbbBCRXYUISJH%2Bw54jZ%2Fs0TfOlTGdyZ3BtcLuFyHjKNHJgapvuWUZTvY9SB4zBca%2BfMSG9CrjNpKWfO73H1rSm8WPTkphAx7GYPnAw4raHiRkAKzLx5%2FDCda4IRDsfA4B2aMKTb0b0GOqUB3wg49WmhcFNTWlCzyFhR1rqSLleCZa7QzBC277%2FrDwCdsX%2FaMQ8NzXBilbGzB9X20rnzZv%2BjLJSSGBkr7WHv4LWyEoGYVZRBOc01%2FHkNLrSYUaqUyLU%2Bkn%2FfSZJK%2BaxxaL0DNO6xHYS%2FViTG7vk%2FRN2ZDjzlVMoqyp7iNq5LR3qzWKypL5FY8qlZKD5ziXHtslEkW%2FF7b6vmMXQ4eH0i3kbTD3IY&X-Amz-Signature=32d28c45dfa3c16a13b412ada1fbbb30c34113ea9d33fe55ffc9ab89e3f2d26b&X-Amz-SignedHeaders=host&x-id=GetObject)

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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/05c9a172-cfaa-4570-8937-288b1d07d12d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVIGQ4MC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T122103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFr8zGnAcEaS%2BrVT3d9Ev%2BziRcYEYl8%2B8IzbzxZ%2FXrDQAiEA9XvMwG0Qnou1lFZ%2BCGGzgelCHyLnX8mV8YPLRdxcxDwqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjWcWCFzJ7fNTHgwircA6yLStuUDfr1g7b2C5kutgnZUGf%2FzRg1k39PkcqNWYKiN2tw1dZYKo4eaB4YWIhvu4%2F4ZvkBYmyBpS2g%2F7AlrDV648L31GdU92uC3GmxFHjtcLj7l29cUdyYdL4vS1%2FVJluY9lKOgACvV8Krn0hylunjW1oy5PFlTIgcOYSsRmr5JPvbSoepYqwqU5ziE7UvgazjLT3TxAqKJFoQq%2FpusWneJH8b0FOF4Xew%2F2DWUmAdCe5DT1hQico2Zly2JvRIzs6cHV3wig4MhwvNQekWkIFjV3E8mwxZCenLqe363Wse7%2Fr9C54Ykgsz%2F9gM4UVvB8j1olnGYGytLz8cwZIH1zgIBrbElPYePS3Or2EQL014uNOXVm8zCcB9Bc2YYLbazHJslM8QF%2FY38TfqsPL%2BG1wEdSqoZWMV7c1RsQzvx1fSpJpxhwi86yI3Phrm%2Bvy95eCa5uhSMXxPzA44PJgNJ8cRL0JFp2R4BhxNomoF1Ava%2BKy%2FA56CpuKBlhbbBCRXYUISJH%2Bw54jZ%2Fs0TfOlTGdyZ3BtcLuFyHjKNHJgapvuWUZTvY9SB4zBca%2BfMSG9CrjNpKWfO73H1rSm8WPTkphAx7GYPnAw4raHiRkAKzLx5%2FDCda4IRDsfA4B2aMKTb0b0GOqUB3wg49WmhcFNTWlCzyFhR1rqSLleCZa7QzBC277%2FrDwCdsX%2FaMQ8NzXBilbGzB9X20rnzZv%2BjLJSSGBkr7WHv4LWyEoGYVZRBOc01%2FHkNLrSYUaqUyLU%2Bkn%2FfSZJK%2BaxxaL0DNO6xHYS%2FViTG7vk%2FRN2ZDjzlVMoqyp7iNq5LR3qzWKypL5FY8qlZKD5ziXHtslEkW%2FF7b6vmMXQ4eH0i3kbTD3IY&X-Amz-Signature=8b2e89280a5398ffcc95a5a3122bb7d5a85197abe4de03d121322f2a5689eb73&X-Amz-SignedHeaders=host&x-id=GetObject)


한꺼번에 바뀌다보니 처음에 /root/curl-test.sh를 수행했을 때 이전 v2 출력문이 나옴.


## Commands and Arguments


## Practice Test - Commands and Arguments


## Configure Environment Variables in Applications


## Configuring ConfigMaps in Applications


## Practice Test - Environment Variables

