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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/977ac0a0-6f7e-4aae-99ae-af3cd4e061cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNNTFRT%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T201221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDSXgODBkVk4tI8hPhZRhRrqPtChE25M2zU4mgDw2%2BaNAIga5r4jxLiP%2FY7YLzVMmgmQy8jSiUreYyZmd0zhG1Q%2F1MqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4YQBt7SNPLeBoSXircA1dWBulWJvic%2F3aurYvoGH9SJCVY3YBFBu0aX13fXhnL3dB51qiUxDxaDz0xkU%2BQqdmt8rOeEqG5KX3U71ieWFa7EO63Jk82EGHSajuz8fUwKq9oP0y4%2Fo9oq8XIB2na8%2Fg91k2qU6g1bY2C72fn%2F9dgdoL9xjcLKekFGVNSrKALGiEADyQrcTbOnejV1H%2BEOPwm0zyiCUqQJ667dq0dpW48IUfmC58ZK6BUE4HiVxztCpE0z1B4t%2Fvuv0SMfc0L1hHOFDHiaBx08qIz79zdog3WLeraph8UKjIlwl2chnC2%2B4QREvs4WpwfbWIMhE6j2qcTifoiizhwkatlquBu45eJc8vUbX9wfY%2FUMYSHpknnN1QvVZq5BIZAPtGWhU8aZGydeHNcs%2B5HhV%2BnnCWn7MpCmVmuDWf7q3veEYAallfRLiGvgeP59pkYM42fwomu9Y8zZDlRMS15Ac3N4y%2BSZtMsKEFswJNTmb30nVdC2Ha8pA%2FDrVwoveSPaxa2zQbX%2Bn0vDfkMrLUBiOkLQcFu7U6ghDalCjrXdAHDr9k1U46qH%2FJuf70yhayx7kOWVxtTABRcvZsXx333mKG02H%2FYR1%2BqM1eCVnGzFHMnLxOw%2Bgz%2F4pk6mZYxZgniLG9UMLC5070GOqUBW0PRSHXsGgQ1WcWTBgKwG7RTRSWSigUrMk7lF1eYDzGhz8ORZ04rZ9S82uQWxAFCoPhb8yBf5WryIicd%2BSVlLNJINtvbcX9XihpYLtK0YXxcdxd72PGp0eqSVZ0OPWHYF7y4UKVt1UgfNUwY%2FQ%2FztOXFrrZ5vYnOPJtMf0Dc3T3o2qVx4X08vkxOz3l0a6tTgZeKecgSVKfTJcaX4xAwZ4uqw3RC&X-Amz-Signature=b350faf0ab46d98444b223f8fb2dd4a98c62119f1c12a87bab49ed0e2a097d94&X-Amz-SignedHeaders=host&x-id=GetObject)

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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/05c9a172-cfaa-4570-8937-288b1d07d12d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNNTFRT%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T201221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDSXgODBkVk4tI8hPhZRhRrqPtChE25M2zU4mgDw2%2BaNAIga5r4jxLiP%2FY7YLzVMmgmQy8jSiUreYyZmd0zhG1Q%2F1MqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4YQBt7SNPLeBoSXircA1dWBulWJvic%2F3aurYvoGH9SJCVY3YBFBu0aX13fXhnL3dB51qiUxDxaDz0xkU%2BQqdmt8rOeEqG5KX3U71ieWFa7EO63Jk82EGHSajuz8fUwKq9oP0y4%2Fo9oq8XIB2na8%2Fg91k2qU6g1bY2C72fn%2F9dgdoL9xjcLKekFGVNSrKALGiEADyQrcTbOnejV1H%2BEOPwm0zyiCUqQJ667dq0dpW48IUfmC58ZK6BUE4HiVxztCpE0z1B4t%2Fvuv0SMfc0L1hHOFDHiaBx08qIz79zdog3WLeraph8UKjIlwl2chnC2%2B4QREvs4WpwfbWIMhE6j2qcTifoiizhwkatlquBu45eJc8vUbX9wfY%2FUMYSHpknnN1QvVZq5BIZAPtGWhU8aZGydeHNcs%2B5HhV%2BnnCWn7MpCmVmuDWf7q3veEYAallfRLiGvgeP59pkYM42fwomu9Y8zZDlRMS15Ac3N4y%2BSZtMsKEFswJNTmb30nVdC2Ha8pA%2FDrVwoveSPaxa2zQbX%2Bn0vDfkMrLUBiOkLQcFu7U6ghDalCjrXdAHDr9k1U46qH%2FJuf70yhayx7kOWVxtTABRcvZsXx333mKG02H%2FYR1%2BqM1eCVnGzFHMnLxOw%2Bgz%2F4pk6mZYxZgniLG9UMLC5070GOqUBW0PRSHXsGgQ1WcWTBgKwG7RTRSWSigUrMk7lF1eYDzGhz8ORZ04rZ9S82uQWxAFCoPhb8yBf5WryIicd%2BSVlLNJINtvbcX9XihpYLtK0YXxcdxd72PGp0eqSVZ0OPWHYF7y4UKVt1UgfNUwY%2FQ%2FztOXFrrZ5vYnOPJtMf0Dc3T3o2qVx4X08vkxOz3l0a6tTgZeKecgSVKfTJcaX4xAwZ4uqw3RC&X-Amz-Signature=1da24923c1b7f6818676f663b707767c3d04c44f20cead56e61a76aa3bed0e07&X-Amz-SignedHeaders=host&x-id=GetObject)


한꺼번에 바뀌다보니 처음에 /root/curl-test.sh를 수행했을 때 이전 v2 출력문이 나옴.


## Commands and Arguments


## Practice Test - Commands and Arguments


## Configure Environment Variables in Applications


## Configuring ConfigMaps in Applications


## Practice Test - Environment Variables

