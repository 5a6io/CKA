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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/977ac0a0-6f7e-4aae-99ae-af3cd4e061cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO4OPMXF%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T201155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHJZTKRnVH4CknGAWNd6gmgCWEaCYdAGMSx7gOGwMWXgAiEA2O6fwd9syEwupp6i4oulRieZtcpCLZN%2BmvaUkgLQ1r0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHPzHMGEpPmAtCSjKSrcAzoiROBBDnFsUt8UyEuX0ONxz%2FA3EJCZBAorwB01uzRoa%2FHDfhHKsjjZtz8SrURQ9aMSvhy44nmAt2ZLh2Xp66goPa7Ec8ZReFclT1DEBFkSBSNhk16Wj6kCSCmu15qzDxNFW6DufXY2wpT8lG4wdteJIYM%2FSAj4yyZ1kjw0EJ9t1MCDN33hVmeoHUJ%2FCU6y5eolLUEs3vwMH3taKLszglq6fZNGlsDleO8HZfzddX9%2B%2Fk4ffDeJ%2FPD%2Fxok6zGIfnxy1wqmv7zdN12zsYbPKcu4ToI9zSo4sntQ0LLhZwQlGPVUCc7ns4Dw6GgA%2FFr1xB5BULJwkBHZt%2BGNmXv%2FOiU%2B%2BszxlskuMttN35kptXmWL09E4cAtWOzqpGFP3QM3TkJO%2BSc37YVgS%2Bguq9fklPuyODQU7MC5k5NMbWQU%2B%2BT5uUR2%2Fp727msLQp9AroGcgSYXVouOkkv0p1s7SoG6NQ106ckwcvTo2XMImY2UG%2Bqn4KLUO5PIUbfvZzF8QnQh9CEDc0l5WyaUNmHFO5tRrGZd3Yx1EQvAj%2BN7EOMaqmei1jQwww1Rggv0RtlwPlED4nJJmWTuAtXSf7COyMU3hAtLW5XbKrtSmTXgwVXYyFcKh%2BOgYgzGzSvCKIB4AMJSmzr0GOqUBFy3%2F%2BgTmOhYmMN4f11a6CmRqP55jqMdYv9nrwpRIBepe%2FjJQbnG71TXRFhTZh%2FK04NG%2BtkawldWKleXqAxCyMqhFSUBFvDTFy7Ev8xkHQmuXWW3kTYGwrcYyNw4m71lH6QhStp4E8gWp%2Fz3PuN106eSMas%2FYBj39F1SOT%2FmrVMNt%2B9t1vOgYnWax2PRTBL6ePv7ESnjr%2BT4ZCDi40ERewX%2FyaqWy&X-Amz-Signature=fe8eeae654ee9ea6b293e487f9b30c27eb52b0438b04b269f945ca101a0ee2a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/05c9a172-cfaa-4570-8937-288b1d07d12d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO4OPMXF%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T201155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHJZTKRnVH4CknGAWNd6gmgCWEaCYdAGMSx7gOGwMWXgAiEA2O6fwd9syEwupp6i4oulRieZtcpCLZN%2BmvaUkgLQ1r0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHPzHMGEpPmAtCSjKSrcAzoiROBBDnFsUt8UyEuX0ONxz%2FA3EJCZBAorwB01uzRoa%2FHDfhHKsjjZtz8SrURQ9aMSvhy44nmAt2ZLh2Xp66goPa7Ec8ZReFclT1DEBFkSBSNhk16Wj6kCSCmu15qzDxNFW6DufXY2wpT8lG4wdteJIYM%2FSAj4yyZ1kjw0EJ9t1MCDN33hVmeoHUJ%2FCU6y5eolLUEs3vwMH3taKLszglq6fZNGlsDleO8HZfzddX9%2B%2Fk4ffDeJ%2FPD%2Fxok6zGIfnxy1wqmv7zdN12zsYbPKcu4ToI9zSo4sntQ0LLhZwQlGPVUCc7ns4Dw6GgA%2FFr1xB5BULJwkBHZt%2BGNmXv%2FOiU%2B%2BszxlskuMttN35kptXmWL09E4cAtWOzqpGFP3QM3TkJO%2BSc37YVgS%2Bguq9fklPuyODQU7MC5k5NMbWQU%2B%2BT5uUR2%2Fp727msLQp9AroGcgSYXVouOkkv0p1s7SoG6NQ106ckwcvTo2XMImY2UG%2Bqn4KLUO5PIUbfvZzF8QnQh9CEDc0l5WyaUNmHFO5tRrGZd3Yx1EQvAj%2BN7EOMaqmei1jQwww1Rggv0RtlwPlED4nJJmWTuAtXSf7COyMU3hAtLW5XbKrtSmTXgwVXYyFcKh%2BOgYgzGzSvCKIB4AMJSmzr0GOqUBFy3%2F%2BgTmOhYmMN4f11a6CmRqP55jqMdYv9nrwpRIBepe%2FjJQbnG71TXRFhTZh%2FK04NG%2BtkawldWKleXqAxCyMqhFSUBFvDTFy7Ev8xkHQmuXWW3kTYGwrcYyNw4m71lH6QhStp4E8gWp%2Fz3PuN106eSMas%2FYBj39F1SOT%2FmrVMNt%2B9t1vOgYnWax2PRTBL6ePv7ESnjr%2BT4ZCDi40ERewX%2FyaqWy&X-Amz-Signature=c1dac076327a08324b495490e9d5f16dca54d71213951a963731921425c858e5&X-Amz-SignedHeaders=host&x-id=GetObject)


한꺼번에 바뀌다보니 처음에 /root/curl-test.sh를 수행했을 때 이전 v2 출력문이 나옴.


## Commands and Arguments


## Practice Test - Commands and Arguments


## Configure Environment Variables in Applications


## Configuring ConfigMaps in Applications


## Practice Test - Environment Variables

