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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/977ac0a0-6f7e-4aae-99ae-af3cd4e061cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VL6JB3L%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T161317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHJtm%2B%2Bg2ey9jIexoEpOjdHzr1imPetIF37%2FqJrQ77RwAiBgBOWZf03m7MzoGgRuL7ZtAqgbCqbgBGLnR0eozrBHtSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMOF2OmOHh22Hr%2FiPpKtwD%2F3lthbN2EdXTcOh2wcI5AeagT9OO%2FvsXzu49l%2FcT4XbPymg41xiNVz7TfS%2FdLg2NSJ4ysQIqmcN0uRaAZ6UX9ZNTZ0INa7now%2FdGKlS7cPJO6eajy5a5uiufVaLIMezRtySLopngHUL642r5VdX8kG7tgrezBxvnYSgkWIBrjQjTToZ0k19NqRnaqRKhNbQILp6DtZsJVSL960s4zX5RtnC%2FkDEoQnkbj4EO%2BWlE84qDTIrUzyg1quFwb5Lgcn4%2F6lYH6diG%2F74OzBPoL%2FGXzLT12XZDZbA5%2FyTwt%2FULs8ihxCKrmnk8RzmQ%2FuCQtOaGGfWM6vwAWHlY5h9cQosH5PLi4Z5fx%2BSgjSgBEUG2XQWJV%2Fzj193rhYss4ZaAa1mnLspi6y4LG3Z7ghuiR3hYv%2BEVNbRSxXeq5bqm2G%2BOmYTk2z2iGNj7E7bHkpwI58b4VkVaTTUs%2BYwTjKxYa0n1uA6fwnCUlsgC73DNzJVc9I7sPoDC%2B5zkTSgwVg4%2FELzo6jvH5GLGzcZUcmlFtqv%2BNAjUcHECTUA4Jfona6THiE5zQpBEWpxEUIzTmFOgCE%2BoNZUodKwqeYSgB3p%2BJtxAAjH%2BSygp9LWIeFtlkjARUA6eiNAakAIQz8IpSNkw1JbNvQY6pgFW1hGrKiJ6HqHTeZot%2FIEmEtKp2FR5Ff3yNZEwS8svLrNcV8JZCaP9I5jF6T6%2FwPM3dt48PrSIaQMRApfeB1%2BvExPM5kf4JVXgIFeAw8f3WGuJus2uZ6BYb6vF9RRAQnhzKf0Gr%2FVIZRUSFA6FgeMTt99wIEt43TfhcJG6tRY6MbxU9W93a%2BIbi6xfn5aGNQu1uYNAR%2FnmHNgy8y8ZqbyK3g1tn49E&X-Amz-Signature=d1ac948dc3926630f8bc83bdf73d2a91b4ddc6e57b4426fa0476f258ae1dc181&X-Amz-SignedHeaders=host&x-id=GetObject)

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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/05c9a172-cfaa-4570-8937-288b1d07d12d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VL6JB3L%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T161317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHJtm%2B%2Bg2ey9jIexoEpOjdHzr1imPetIF37%2FqJrQ77RwAiBgBOWZf03m7MzoGgRuL7ZtAqgbCqbgBGLnR0eozrBHtSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMOF2OmOHh22Hr%2FiPpKtwD%2F3lthbN2EdXTcOh2wcI5AeagT9OO%2FvsXzu49l%2FcT4XbPymg41xiNVz7TfS%2FdLg2NSJ4ysQIqmcN0uRaAZ6UX9ZNTZ0INa7now%2FdGKlS7cPJO6eajy5a5uiufVaLIMezRtySLopngHUL642r5VdX8kG7tgrezBxvnYSgkWIBrjQjTToZ0k19NqRnaqRKhNbQILp6DtZsJVSL960s4zX5RtnC%2FkDEoQnkbj4EO%2BWlE84qDTIrUzyg1quFwb5Lgcn4%2F6lYH6diG%2F74OzBPoL%2FGXzLT12XZDZbA5%2FyTwt%2FULs8ihxCKrmnk8RzmQ%2FuCQtOaGGfWM6vwAWHlY5h9cQosH5PLi4Z5fx%2BSgjSgBEUG2XQWJV%2Fzj193rhYss4ZaAa1mnLspi6y4LG3Z7ghuiR3hYv%2BEVNbRSxXeq5bqm2G%2BOmYTk2z2iGNj7E7bHkpwI58b4VkVaTTUs%2BYwTjKxYa0n1uA6fwnCUlsgC73DNzJVc9I7sPoDC%2B5zkTSgwVg4%2FELzo6jvH5GLGzcZUcmlFtqv%2BNAjUcHECTUA4Jfona6THiE5zQpBEWpxEUIzTmFOgCE%2BoNZUodKwqeYSgB3p%2BJtxAAjH%2BSygp9LWIeFtlkjARUA6eiNAakAIQz8IpSNkw1JbNvQY6pgFW1hGrKiJ6HqHTeZot%2FIEmEtKp2FR5Ff3yNZEwS8svLrNcV8JZCaP9I5jF6T6%2FwPM3dt48PrSIaQMRApfeB1%2BvExPM5kf4JVXgIFeAw8f3WGuJus2uZ6BYb6vF9RRAQnhzKf0Gr%2FVIZRUSFA6FgeMTt99wIEt43TfhcJG6tRY6MbxU9W93a%2BIbi6xfn5aGNQu1uYNAR%2FnmHNgy8y8ZqbyK3g1tn49E&X-Amz-Signature=bd042925d38bf09d8cdec6ca561f76ccc040e2edf6afe9e58a28c57bf69a0a16&X-Amz-SignedHeaders=host&x-id=GetObject)


한꺼번에 바뀌다보니 처음에 /root/curl-test.sh를 수행했을 때 이전 v2 출력문이 나옴.


## Commands and Arguments


## Practice Test - Commands and Arguments


## Configure Environment Variables in Applications


## Configuring ConfigMaps in Applications


## Practice Test - Environment Variables

