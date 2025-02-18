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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/977ac0a0-6f7e-4aae-99ae-af3cd4e061cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VZPZQW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T005137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCXZyREfKZa3bM0g6n966UHUrP5CNSnZhzTrI2J6J0dswIgElTrQtEltUw7vgsSgdAsL4o8MP18irz8NaRwMqX2%2BmIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9YELvL3iM7Em2IOCrcA6IBfm04BzrRT%2B4fpwg0BrqYXyzW9uawpFItBJ0XqVGHs9U2p0aNNH2KunEfIHPc8KPPf8TuJoZLsQDDnZ20%2BwQBGKfQWDNGUEZazQQxlBObJqaOb4JfZ9yUOePpqYZNhIRO0lrjY%2Fen4GAqvMDPgnBLRrK%2Fe%2F1CbRHzS%2FHSJx%2Bsr6%2BHDqlf8xE5VJB2h6PPbmokUxlmtRhJiP8sip3YM0dy%2FS4%2FhwUJvEuQrrWB2l1Q53OGlcp1bJVuzFCnMadBSM6up9nwpmIk2Y5XUC2SrlQVqWD%2BR13315iFtSN0s8yWXnQUEgiGfP%2FpWoIAXIIUIicg2OwSibjqXckxRWKQJ2GPy2R8c%2FmlIQrX8f9Sq1qrY3VRbHP5zbpv5TGluYigrGMlmmKzBWsKd0f5A%2FG3WDey5TbYTuHhv%2F9jHmIyzY1pS8ZHFBQ6Aq9PIXq7wn6hSmh9O9zDbgvlgV%2FvzKB3EH6UXahL1i7oxlg8H6nZSQOWJSfW0MHmUk2c6THPxt509IqgOphrff1Q7vJgx2JftZ0OzrBRRIdxxQmkyof5aGJA3TN0ZAAfAft2gimSboNc5L%2BpBwUwMQzUUubvGF8bghTXpgsE%2Fxr%2FXCzO3SbBh1OQehtcntXlFtjPrZOUMMWmz70GOqUBkSQcr%2FHGhsEkX8uqt4JHrtvkYmijlRnFllsd4wT5%2BGux35skSIyB%2BFaynTOljdeHsWnGCHpn5g5IL%2FEw23DiH10flhj64smwOkCHJ0rvh5Ze%2BCjGVt0p08HfpeCq6Wc3QQjGWJ3y97vSp33dq%2Fj2c0WM6b8BCJg1eMsw8qdTTKjZPb875cMzKQ2EFSFMZW6PZMnO%2Bv9D77d0EmMk8fAtvtZw%2BjGn&X-Amz-Signature=32d85945f2f6fac30febeec7e8fd7fdb7656cf5e5aab691b837a9478c0923ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/05c9a172-cfaa-4570-8937-288b1d07d12d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VZPZQW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T005137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCXZyREfKZa3bM0g6n966UHUrP5CNSnZhzTrI2J6J0dswIgElTrQtEltUw7vgsSgdAsL4o8MP18irz8NaRwMqX2%2BmIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9YELvL3iM7Em2IOCrcA6IBfm04BzrRT%2B4fpwg0BrqYXyzW9uawpFItBJ0XqVGHs9U2p0aNNH2KunEfIHPc8KPPf8TuJoZLsQDDnZ20%2BwQBGKfQWDNGUEZazQQxlBObJqaOb4JfZ9yUOePpqYZNhIRO0lrjY%2Fen4GAqvMDPgnBLRrK%2Fe%2F1CbRHzS%2FHSJx%2Bsr6%2BHDqlf8xE5VJB2h6PPbmokUxlmtRhJiP8sip3YM0dy%2FS4%2FhwUJvEuQrrWB2l1Q53OGlcp1bJVuzFCnMadBSM6up9nwpmIk2Y5XUC2SrlQVqWD%2BR13315iFtSN0s8yWXnQUEgiGfP%2FpWoIAXIIUIicg2OwSibjqXckxRWKQJ2GPy2R8c%2FmlIQrX8f9Sq1qrY3VRbHP5zbpv5TGluYigrGMlmmKzBWsKd0f5A%2FG3WDey5TbYTuHhv%2F9jHmIyzY1pS8ZHFBQ6Aq9PIXq7wn6hSmh9O9zDbgvlgV%2FvzKB3EH6UXahL1i7oxlg8H6nZSQOWJSfW0MHmUk2c6THPxt509IqgOphrff1Q7vJgx2JftZ0OzrBRRIdxxQmkyof5aGJA3TN0ZAAfAft2gimSboNc5L%2BpBwUwMQzUUubvGF8bghTXpgsE%2Fxr%2FXCzO3SbBh1OQehtcntXlFtjPrZOUMMWmz70GOqUBkSQcr%2FHGhsEkX8uqt4JHrtvkYmijlRnFllsd4wT5%2BGux35skSIyB%2BFaynTOljdeHsWnGCHpn5g5IL%2FEw23DiH10flhj64smwOkCHJ0rvh5Ze%2BCjGVt0p08HfpeCq6Wc3QQjGWJ3y97vSp33dq%2Fj2c0WM6b8BCJg1eMsw8qdTTKjZPb875cMzKQ2EFSFMZW6PZMnO%2Bv9D77d0EmMk8fAtvtZw%2BjGn&X-Amz-Signature=97d55129a7fe3093e58449f62497f3cecc585a12a6e2accc7b519330fdc818ad&X-Amz-SignedHeaders=host&x-id=GetObject)


한꺼번에 바뀌다보니 처음에 /root/curl-test.sh를 수행했을 때 이전 v2 출력문이 나옴.


## Commands and Arguments


## Practice Test - Commands and Arguments


## Configure Environment Variables in Applications


## Configuring ConfigMaps in Applications


## Practice Test - Environment Variables

