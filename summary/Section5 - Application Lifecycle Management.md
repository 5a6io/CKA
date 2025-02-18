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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/977ac0a0-6f7e-4aae-99ae-af3cd4e061cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKACM5YK%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDTH4i65esQsQ5NDjkpAx5LrVqYETqvJec9L7ruZokLYAIhAL5J%2BYzmnEqJ6UP961Vh7ZeAUMcmD8GHRGLjhgWILxofKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxADeUlApKSnluv5noq3APcopZL8hf7oIY1bQ5Qsa37A8llUz9FgjF5mw4sd5xEEBjujxiQyn4Yo0xdz2Zb9jaRL2rtm6LXRAXs%2Flz8%2F9Ry1Dtn7Chy7rW0KZ8bRmsc9%2B7%2BzOVftfjD4J9O%2BUyUANxLOxFUHkf9ARK5esdg%2BqAcPXojj2DPqLbSu7JPgZaMovgNruV6B%2BUWEqbCqYtht7sGsk5P3f044bqsRaEb4wru%2F8RxRH2cylWbw6iWogweVLBeRQCKL5%2F%2BlnWlIJ5NYlIjFdzhMDPI1VBik56Sj6VqRjxRZS6NxtLfuoKuGO%2BBYyCPX5QMX%2B7rAfNxK8wH9LbVDkWp%2FDcTBBLWnt8PexSoF2iTa8oayf8dzKAJ8lHNj9mM%2FxlojtkucbGzbcD7iMm9rzi682ljjbvRNrk1j%2FhM1yHmYKXtCAd%2BdypJc9BupASNOdJy9FnfOblE9AnY8sFm9cAKArWOeB0pusXWrVo%2Bf0MjZxtE1Edr5l%2BBq07gvOmhX5vFCFyJtj7hCpvUQA6LZ4MnY0Lqw2Qkt5KfAbAU6PXgFTq%2BK2unieGZgk1hahbMp9tyja63YVvBrKRZtHkxhs1e3gtmWqS2bdWkO90Y08y%2FcsUtkq570xd8b%2B0gcSjtH8J1lsmTfkgGQzDx%2FtC9BjqkAc%2F0%2BErS0p4fTQm01MdpYo85HAZ%2FaNGsWCk34rAQ1QAP%2BO%2B7FvKPBdvrgS3G6f5ddc1p3j5IJehYy8xa7hKia4zabT94lOViPOXUaK9SUdaS1A0rNTctLX1voLFCJ5%2BcpaJwAERYHsnj2sOaKQsKKGslpHO3wkTiPOQp4%2FhToYaOUdUaPzn734xYHyyFYHRgM1%2BECR7vk5RC2p7N1ihJR48m57az&X-Amz-Signature=9809b3c2d01c868a09373d9aa3c6adb97a4e62f0f599d781815e896e80b32144&X-Amz-SignedHeaders=host&x-id=GetObject)

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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/05c9a172-cfaa-4570-8937-288b1d07d12d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKACM5YK%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDTH4i65esQsQ5NDjkpAx5LrVqYETqvJec9L7ruZokLYAIhAL5J%2BYzmnEqJ6UP961Vh7ZeAUMcmD8GHRGLjhgWILxofKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxADeUlApKSnluv5noq3APcopZL8hf7oIY1bQ5Qsa37A8llUz9FgjF5mw4sd5xEEBjujxiQyn4Yo0xdz2Zb9jaRL2rtm6LXRAXs%2Flz8%2F9Ry1Dtn7Chy7rW0KZ8bRmsc9%2B7%2BzOVftfjD4J9O%2BUyUANxLOxFUHkf9ARK5esdg%2BqAcPXojj2DPqLbSu7JPgZaMovgNruV6B%2BUWEqbCqYtht7sGsk5P3f044bqsRaEb4wru%2F8RxRH2cylWbw6iWogweVLBeRQCKL5%2F%2BlnWlIJ5NYlIjFdzhMDPI1VBik56Sj6VqRjxRZS6NxtLfuoKuGO%2BBYyCPX5QMX%2B7rAfNxK8wH9LbVDkWp%2FDcTBBLWnt8PexSoF2iTa8oayf8dzKAJ8lHNj9mM%2FxlojtkucbGzbcD7iMm9rzi682ljjbvRNrk1j%2FhM1yHmYKXtCAd%2BdypJc9BupASNOdJy9FnfOblE9AnY8sFm9cAKArWOeB0pusXWrVo%2Bf0MjZxtE1Edr5l%2BBq07gvOmhX5vFCFyJtj7hCpvUQA6LZ4MnY0Lqw2Qkt5KfAbAU6PXgFTq%2BK2unieGZgk1hahbMp9tyja63YVvBrKRZtHkxhs1e3gtmWqS2bdWkO90Y08y%2FcsUtkq570xd8b%2B0gcSjtH8J1lsmTfkgGQzDx%2FtC9BjqkAc%2F0%2BErS0p4fTQm01MdpYo85HAZ%2FaNGsWCk34rAQ1QAP%2BO%2B7FvKPBdvrgS3G6f5ddc1p3j5IJehYy8xa7hKia4zabT94lOViPOXUaK9SUdaS1A0rNTctLX1voLFCJ5%2BcpaJwAERYHsnj2sOaKQsKKGslpHO3wkTiPOQp4%2FhToYaOUdUaPzn734xYHyyFYHRgM1%2BECR7vk5RC2p7N1ihJR48m57az&X-Amz-Signature=93738020897dfb45d55b30c23fcbd578afaaa2146edfac98ac8a77f5d1f29301&X-Amz-SignedHeaders=host&x-id=GetObject)


한꺼번에 바뀌다보니 처음에 /root/curl-test.sh를 수행했을 때 이전 v2 출력문이 나옴.


## Commands and Arguments


## Practice Test - Commands and Arguments


## Configure Environment Variables in Applications


## Configuring ConfigMaps in Applications


## Practice Test - Environment Variables

