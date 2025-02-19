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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/977ac0a0-6f7e-4aae-99ae-af3cd4e061cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBFTI2S2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T005212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEThpgNs5KqU%2FGBfDxGiR%2F50kvyIcz82JYoDpIpsh1kJAiEAghgFA2wUgFJVoj%2B84puRFD%2BH71BEwMEQSHhmIINeUlYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9Tnqo6a4qwvC9IlyrcA2F5R7OB4ZWk5KZ1m1yQ4o4mp16hAVjwORMkiFPCdDg5yAkrBkHJmZHJGOs%2FRIJ0nUR%2BiKEB3BW78nH8ja1vI0t%2BPDbehb2YUIMGgY%2BOeDZMtddnrZh4KngzQFKcat7TYhyP6W5dIf1tXA7vpU5Oaxi%2BFXLPAZQwK6LdkWAs3gAbKIsdWxGahzemwUzrb5izyKvtEEaYFJzEQ8Iv4zXiBFbdzVgnuQk5XqswjwX4JZqO5H2nj%2BSzFHlRN8OzI1DpBl3ZnF0uswFCQ4qzs%2Fxno5jpNfbJEZe%2FhZ0gqNNCb74Uo1Apa8Rv79V7pQX7Gn1s6D03QFG4kZ%2FjRL6NxlIwM%2F%2FC15jtx%2BqLtJ2WybFgZk7SXFoHj2hCGKwo4JP6onQIpCm%2BLvv%2BGVbAniPeLmq0Nk%2BlA76hneQMyQcJCyAzTDgOQOlWLRL0DAXRkaWwNQZpQbZtkcoGHtr0xUg9cqhK%2FGYBr30zCWJeKELIeQXO2INRjPQ06T5ZJlzciCKQoKC0dJyj0maW1K5KZyYtXmWC8ksXi0qTcO2SUrq8UO2OYHZFMVAnzck0R7O5nGhCZ7ucqow8O5Vw8no%2BxkQ9CfGYB227rSHWUcE4h0qbqfR3jkYoviBUsAmgMtmaKTgRMMbM1L0GOqUBGy60RORahVFdVQk08Gq69KDMG9TE%2BTZ5VTGr4ZAHDOJ3Wb%2FYg0y9ZOCD4VqTP1ZMH7OyLh%2FQDlQ0%2F8x7AhsV2QOEAj8fkucA44t00OR2Mh1gyEiq0oEU6z3ZxgXSMHBMb77LFTmg6pd2m0xnJyicsUw3xuV8ZG28KVY5fg8xCC55BS08PLdo8I1KNYNIYe3%2F2iK3YMTt90FQZ504K%2BDsCRrh9rK3&X-Amz-Signature=c90c91faaa45832382a72e641a0c4c9fb467a15138f3c174a5d9dc05bcb93885&X-Amz-SignedHeaders=host&x-id=GetObject)

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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/05c9a172-cfaa-4570-8937-288b1d07d12d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBFTI2S2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T005212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEThpgNs5KqU%2FGBfDxGiR%2F50kvyIcz82JYoDpIpsh1kJAiEAghgFA2wUgFJVoj%2B84puRFD%2BH71BEwMEQSHhmIINeUlYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9Tnqo6a4qwvC9IlyrcA2F5R7OB4ZWk5KZ1m1yQ4o4mp16hAVjwORMkiFPCdDg5yAkrBkHJmZHJGOs%2FRIJ0nUR%2BiKEB3BW78nH8ja1vI0t%2BPDbehb2YUIMGgY%2BOeDZMtddnrZh4KngzQFKcat7TYhyP6W5dIf1tXA7vpU5Oaxi%2BFXLPAZQwK6LdkWAs3gAbKIsdWxGahzemwUzrb5izyKvtEEaYFJzEQ8Iv4zXiBFbdzVgnuQk5XqswjwX4JZqO5H2nj%2BSzFHlRN8OzI1DpBl3ZnF0uswFCQ4qzs%2Fxno5jpNfbJEZe%2FhZ0gqNNCb74Uo1Apa8Rv79V7pQX7Gn1s6D03QFG4kZ%2FjRL6NxlIwM%2F%2FC15jtx%2BqLtJ2WybFgZk7SXFoHj2hCGKwo4JP6onQIpCm%2BLvv%2BGVbAniPeLmq0Nk%2BlA76hneQMyQcJCyAzTDgOQOlWLRL0DAXRkaWwNQZpQbZtkcoGHtr0xUg9cqhK%2FGYBr30zCWJeKELIeQXO2INRjPQ06T5ZJlzciCKQoKC0dJyj0maW1K5KZyYtXmWC8ksXi0qTcO2SUrq8UO2OYHZFMVAnzck0R7O5nGhCZ7ucqow8O5Vw8no%2BxkQ9CfGYB227rSHWUcE4h0qbqfR3jkYoviBUsAmgMtmaKTgRMMbM1L0GOqUBGy60RORahVFdVQk08Gq69KDMG9TE%2BTZ5VTGr4ZAHDOJ3Wb%2FYg0y9ZOCD4VqTP1ZMH7OyLh%2FQDlQ0%2F8x7AhsV2QOEAj8fkucA44t00OR2Mh1gyEiq0oEU6z3ZxgXSMHBMb77LFTmg6pd2m0xnJyicsUw3xuV8ZG28KVY5fg8xCC55BS08PLdo8I1KNYNIYe3%2F2iK3YMTt90FQZ504K%2BDsCRrh9rK3&X-Amz-Signature=3270ba2119948ffd749fb2b6110020ca4dc0e4fffc5d63ab553903a5675c1427&X-Amz-SignedHeaders=host&x-id=GetObject)


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


## Configure Environment Variables in Applications


## Configuring ConfigMaps in Applications


## Practice Test - Environment Variables

