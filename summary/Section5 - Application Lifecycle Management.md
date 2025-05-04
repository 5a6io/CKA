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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/977ac0a0-6f7e-4aae-99ae-af3cd4e061cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QM75IFJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHULJ71v4zIEgu0JjMsiYJGF%2BOSDwK%2B0RX5qBbSTKoFSAiEAtfh7efLLIcxJsGGN2ODE8%2FZjLwMwpZsQg0XIkbJl4PQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIpsgwB2y%2FCkc1cNayrcA2bEVOQFzd5GIUZn2mTEX%2BOAvrqDENqs1xMJFZVkOQBbN7XWR%2BI0VlgulR%2Flko2DORTIwMBsGHdZSr1Q7YwF524TGZVfWCf6%2Ff2YKndhghUb42yyUjmgsjdu6X5wgyFIGFB6IXsS7sCici04770P44hneP4AajQ9VucQUezshKY1oQMF2tquNtPPTa%2Fa%2Fq769yKq%2BNOpMpL4gswmfP4Zle7wzmeUX%2FXvpz9IgOdokd3ZSqr1319pP6JdXJiIjO2tStXqmfhQew5HY8iFDsw%2BvuEHsjNBP%2BR1qDEZmYqHeyTLJHcwrkr%2FfOZQIk2dVkgT9D8kGMmE4kATAIwLBqu9Kk1j6ffDsx0%2BirwdTMVE4DMvUW5SljNG%2F8g0I3%2F6khDqV7Nz4GsiqJHQBt5SDFVYwANx1yIqOdcdSm9KBUKzWC9XM0Q2cy1Sfim%2FEwmiqavFOF%2FS5iuRjCqL7g3MJypwauF%2BzXg0S0RlCBWzRQ6uvhi0nOv9CEQRgBPNwiSdZOWb%2FXJZ%2BDB0SlF%2FMVSi32ahFWv%2Fp3vvn98uKTE8DioOAIvxD3JLw%2FAgsVkBO%2FLp2bVJM1OVSn8iYTexw5G0BAwQKazCpGV4D9hC0%2B%2Bd19gefR4iUK%2FdfBXJ37e3W1jMMImM3cAGOqUBKYgEpA4zDuTrXkDOKmk2sSOnK0arGCM9d11%2BXLkibDjnTBuyw%2FnMPm%2BNPGCzewlq9pqP3P5PrKEKjwfZIRWiPfTUcodSiOaBPTMS16dBEbg4rNOr8yOlGcu0sYMZtng80Z%2Brj%2FYQPQ34kgpSDdJcVZdXnkQ1OE%2FE31qBCeCF3iofsWxpzqckjhWLzA%2Bx%2FKSc4u3d0VhL%2Fhv0eNwNGNDd7us89vs3&X-Amz-Signature=8b3ea882ca9c8a0ad04be0575a2e83f824549d98f3cecfd5f74f4172027e5ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/05c9a172-cfaa-4570-8937-288b1d07d12d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QM75IFJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHULJ71v4zIEgu0JjMsiYJGF%2BOSDwK%2B0RX5qBbSTKoFSAiEAtfh7efLLIcxJsGGN2ODE8%2FZjLwMwpZsQg0XIkbJl4PQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIpsgwB2y%2FCkc1cNayrcA2bEVOQFzd5GIUZn2mTEX%2BOAvrqDENqs1xMJFZVkOQBbN7XWR%2BI0VlgulR%2Flko2DORTIwMBsGHdZSr1Q7YwF524TGZVfWCf6%2Ff2YKndhghUb42yyUjmgsjdu6X5wgyFIGFB6IXsS7sCici04770P44hneP4AajQ9VucQUezshKY1oQMF2tquNtPPTa%2Fa%2Fq769yKq%2BNOpMpL4gswmfP4Zle7wzmeUX%2FXvpz9IgOdokd3ZSqr1319pP6JdXJiIjO2tStXqmfhQew5HY8iFDsw%2BvuEHsjNBP%2BR1qDEZmYqHeyTLJHcwrkr%2FfOZQIk2dVkgT9D8kGMmE4kATAIwLBqu9Kk1j6ffDsx0%2BirwdTMVE4DMvUW5SljNG%2F8g0I3%2F6khDqV7Nz4GsiqJHQBt5SDFVYwANx1yIqOdcdSm9KBUKzWC9XM0Q2cy1Sfim%2FEwmiqavFOF%2FS5iuRjCqL7g3MJypwauF%2BzXg0S0RlCBWzRQ6uvhi0nOv9CEQRgBPNwiSdZOWb%2FXJZ%2BDB0SlF%2FMVSi32ahFWv%2Fp3vvn98uKTE8DioOAIvxD3JLw%2FAgsVkBO%2FLp2bVJM1OVSn8iYTexw5G0BAwQKazCpGV4D9hC0%2B%2Bd19gefR4iUK%2FdfBXJ37e3W1jMMImM3cAGOqUBKYgEpA4zDuTrXkDOKmk2sSOnK0arGCM9d11%2BXLkibDjnTBuyw%2FnMPm%2BNPGCzewlq9pqP3P5PrKEKjwfZIRWiPfTUcodSiOaBPTMS16dBEbg4rNOr8yOlGcu0sYMZtng80Z%2Brj%2FYQPQ34kgpSDdJcVZdXnkQ1OE%2FE31qBCeCF3iofsWxpzqckjhWLzA%2Bx%2FKSc4u3d0VhL%2Fhv0eNwNGNDd7us89vs3&X-Amz-Signature=f461e0611e2d9bc650dab537d91e1da84ce4fb26ec1927cfe05dc476be57d025&X-Amz-SignedHeaders=host&x-id=GetObject)


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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/9e974328-4af4-45d2-80e0-fea968f6a9a9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QM75IFJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHULJ71v4zIEgu0JjMsiYJGF%2BOSDwK%2B0RX5qBbSTKoFSAiEAtfh7efLLIcxJsGGN2ODE8%2FZjLwMwpZsQg0XIkbJl4PQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIpsgwB2y%2FCkc1cNayrcA2bEVOQFzd5GIUZn2mTEX%2BOAvrqDENqs1xMJFZVkOQBbN7XWR%2BI0VlgulR%2Flko2DORTIwMBsGHdZSr1Q7YwF524TGZVfWCf6%2Ff2YKndhghUb42yyUjmgsjdu6X5wgyFIGFB6IXsS7sCici04770P44hneP4AajQ9VucQUezshKY1oQMF2tquNtPPTa%2Fa%2Fq769yKq%2BNOpMpL4gswmfP4Zle7wzmeUX%2FXvpz9IgOdokd3ZSqr1319pP6JdXJiIjO2tStXqmfhQew5HY8iFDsw%2BvuEHsjNBP%2BR1qDEZmYqHeyTLJHcwrkr%2FfOZQIk2dVkgT9D8kGMmE4kATAIwLBqu9Kk1j6ffDsx0%2BirwdTMVE4DMvUW5SljNG%2F8g0I3%2F6khDqV7Nz4GsiqJHQBt5SDFVYwANx1yIqOdcdSm9KBUKzWC9XM0Q2cy1Sfim%2FEwmiqavFOF%2FS5iuRjCqL7g3MJypwauF%2BzXg0S0RlCBWzRQ6uvhi0nOv9CEQRgBPNwiSdZOWb%2FXJZ%2BDB0SlF%2FMVSi32ahFWv%2Fp3vvn98uKTE8DioOAIvxD3JLw%2FAgsVkBO%2FLp2bVJM1OVSn8iYTexw5G0BAwQKazCpGV4D9hC0%2B%2Bd19gefR4iUK%2FdfBXJ37e3W1jMMImM3cAGOqUBKYgEpA4zDuTrXkDOKmk2sSOnK0arGCM9d11%2BXLkibDjnTBuyw%2FnMPm%2BNPGCzewlq9pqP3P5PrKEKjwfZIRWiPfTUcodSiOaBPTMS16dBEbg4rNOr8yOlGcu0sYMZtng80Z%2Brj%2FYQPQ34kgpSDdJcVZdXnkQ1OE%2FE31qBCeCF3iofsWxpzqckjhWLzA%2Bx%2FKSc4u3d0VhL%2Fhv0eNwNGNDd7us89vs3&X-Amz-Signature=ec6121e59f72b0a2bc5cbeb5f1c6f239244f98dabac1b52126a3be9a81923343&X-Amz-SignedHeaders=host&x-id=GetObject)

1. /root/webapp-color에 주어진 Dockerfile2 관찰. 컨테이너 시작 시 명령어.
→ python app.py —color red

> 💡 ENTRYPOINT 뒤에 CMD가 붙음.  kuberentes로 생각하면 command 뒤에 args가 붙는 것.


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a7a73a61-b2e0-4efa-873f-fd3273a38150/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QM75IFJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHULJ71v4zIEgu0JjMsiYJGF%2BOSDwK%2B0RX5qBbSTKoFSAiEAtfh7efLLIcxJsGGN2ODE8%2FZjLwMwpZsQg0XIkbJl4PQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIpsgwB2y%2FCkc1cNayrcA2bEVOQFzd5GIUZn2mTEX%2BOAvrqDENqs1xMJFZVkOQBbN7XWR%2BI0VlgulR%2Flko2DORTIwMBsGHdZSr1Q7YwF524TGZVfWCf6%2Ff2YKndhghUb42yyUjmgsjdu6X5wgyFIGFB6IXsS7sCici04770P44hneP4AajQ9VucQUezshKY1oQMF2tquNtPPTa%2Fa%2Fq769yKq%2BNOpMpL4gswmfP4Zle7wzmeUX%2FXvpz9IgOdokd3ZSqr1319pP6JdXJiIjO2tStXqmfhQew5HY8iFDsw%2BvuEHsjNBP%2BR1qDEZmYqHeyTLJHcwrkr%2FfOZQIk2dVkgT9D8kGMmE4kATAIwLBqu9Kk1j6ffDsx0%2BirwdTMVE4DMvUW5SljNG%2F8g0I3%2F6khDqV7Nz4GsiqJHQBt5SDFVYwANx1yIqOdcdSm9KBUKzWC9XM0Q2cy1Sfim%2FEwmiqavFOF%2FS5iuRjCqL7g3MJypwauF%2BzXg0S0RlCBWzRQ6uvhi0nOv9CEQRgBPNwiSdZOWb%2FXJZ%2BDB0SlF%2FMVSi32ahFWv%2Fp3vvn98uKTE8DioOAIvxD3JLw%2FAgsVkBO%2FLp2bVJM1OVSn8iYTexw5G0BAwQKazCpGV4D9hC0%2B%2Bd19gefR4iUK%2FdfBXJ37e3W1jMMImM3cAGOqUBKYgEpA4zDuTrXkDOKmk2sSOnK0arGCM9d11%2BXLkibDjnTBuyw%2FnMPm%2BNPGCzewlq9pqP3P5PrKEKjwfZIRWiPfTUcodSiOaBPTMS16dBEbg4rNOr8yOlGcu0sYMZtng80Z%2Brj%2FYQPQ34kgpSDdJcVZdXnkQ1OE%2FE31qBCeCF3iofsWxpzqckjhWLzA%2Bx%2FKSc4u3d0VhL%2Fhv0eNwNGNDd7us89vs3&X-Amz-Signature=44cc2997697cb46f4d2b0e9b0eac49b074167a4fe23761d605b04e1278348719&X-Amz-SignedHeaders=host&x-id=GetObject)

1. webapp-color-2 디렉토리 안 두 파일 관찰. 컨테이너 시작 시 명령어. 디렉토리 안 Dockerfile로부터 만든 이미지라 가정.
→ —color green

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a9b0e3d1-ad6b-430e-93a5-81bb9a82fa08/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QM75IFJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHULJ71v4zIEgu0JjMsiYJGF%2BOSDwK%2B0RX5qBbSTKoFSAiEAtfh7efLLIcxJsGGN2ODE8%2FZjLwMwpZsQg0XIkbJl4PQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIpsgwB2y%2FCkc1cNayrcA2bEVOQFzd5GIUZn2mTEX%2BOAvrqDENqs1xMJFZVkOQBbN7XWR%2BI0VlgulR%2Flko2DORTIwMBsGHdZSr1Q7YwF524TGZVfWCf6%2Ff2YKndhghUb42yyUjmgsjdu6X5wgyFIGFB6IXsS7sCici04770P44hneP4AajQ9VucQUezshKY1oQMF2tquNtPPTa%2Fa%2Fq769yKq%2BNOpMpL4gswmfP4Zle7wzmeUX%2FXvpz9IgOdokd3ZSqr1319pP6JdXJiIjO2tStXqmfhQew5HY8iFDsw%2BvuEHsjNBP%2BR1qDEZmYqHeyTLJHcwrkr%2FfOZQIk2dVkgT9D8kGMmE4kATAIwLBqu9Kk1j6ffDsx0%2BirwdTMVE4DMvUW5SljNG%2F8g0I3%2F6khDqV7Nz4GsiqJHQBt5SDFVYwANx1yIqOdcdSm9KBUKzWC9XM0Q2cy1Sfim%2FEwmiqavFOF%2FS5iuRjCqL7g3MJypwauF%2BzXg0S0RlCBWzRQ6uvhi0nOv9CEQRgBPNwiSdZOWb%2FXJZ%2BDB0SlF%2FMVSi32ahFWv%2Fp3vvn98uKTE8DioOAIvxD3JLw%2FAgsVkBO%2FLp2bVJM1OVSn8iYTexw5G0BAwQKazCpGV4D9hC0%2B%2Bd19gefR4iUK%2FdfBXJ37e3W1jMMImM3cAGOqUBKYgEpA4zDuTrXkDOKmk2sSOnK0arGCM9d11%2BXLkibDjnTBuyw%2FnMPm%2BNPGCzewlq9pqP3P5PrKEKjwfZIRWiPfTUcodSiOaBPTMS16dBEbg4rNOr8yOlGcu0sYMZtng80Z%2Brj%2FYQPQ34kgpSDdJcVZdXnkQ1OE%2FE31qBCeCF3iofsWxpzqckjhWLzA%2Bx%2FKSc4u3d0VhL%2Fhv0eNwNGNDd7us89vs3&X-Amz-Signature=57694a8ee39bdf3080fe2ddd2e83d41f0a40eae248adde0408128152246e14e2&X-Amz-SignedHeaders=host&x-id=GetObject)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/d072cded-54c9-4901-8066-9f80315a1b60/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QM75IFJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHULJ71v4zIEgu0JjMsiYJGF%2BOSDwK%2B0RX5qBbSTKoFSAiEAtfh7efLLIcxJsGGN2ODE8%2FZjLwMwpZsQg0XIkbJl4PQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIpsgwB2y%2FCkc1cNayrcA2bEVOQFzd5GIUZn2mTEX%2BOAvrqDENqs1xMJFZVkOQBbN7XWR%2BI0VlgulR%2Flko2DORTIwMBsGHdZSr1Q7YwF524TGZVfWCf6%2Ff2YKndhghUb42yyUjmgsjdu6X5wgyFIGFB6IXsS7sCici04770P44hneP4AajQ9VucQUezshKY1oQMF2tquNtPPTa%2Fa%2Fq769yKq%2BNOpMpL4gswmfP4Zle7wzmeUX%2FXvpz9IgOdokd3ZSqr1319pP6JdXJiIjO2tStXqmfhQew5HY8iFDsw%2BvuEHsjNBP%2BR1qDEZmYqHeyTLJHcwrkr%2FfOZQIk2dVkgT9D8kGMmE4kATAIwLBqu9Kk1j6ffDsx0%2BirwdTMVE4DMvUW5SljNG%2F8g0I3%2F6khDqV7Nz4GsiqJHQBt5SDFVYwANx1yIqOdcdSm9KBUKzWC9XM0Q2cy1Sfim%2FEwmiqavFOF%2FS5iuRjCqL7g3MJypwauF%2BzXg0S0RlCBWzRQ6uvhi0nOv9CEQRgBPNwiSdZOWb%2FXJZ%2BDB0SlF%2FMVSi32ahFWv%2Fp3vvn98uKTE8DioOAIvxD3JLw%2FAgsVkBO%2FLp2bVJM1OVSn8iYTexw5G0BAwQKazCpGV4D9hC0%2B%2Bd19gefR4iUK%2FdfBXJ37e3W1jMMImM3cAGOqUBKYgEpA4zDuTrXkDOKmk2sSOnK0arGCM9d11%2BXLkibDjnTBuyw%2FnMPm%2BNPGCzewlq9pqP3P5PrKEKjwfZIRWiPfTUcodSiOaBPTMS16dBEbg4rNOr8yOlGcu0sYMZtng80Z%2Brj%2FYQPQ34kgpSDdJcVZdXnkQ1OE%2FE31qBCeCF3iofsWxpzqckjhWLzA%2Bx%2FKSc4u3d0VhL%2Fhv0eNwNGNDd7us89vs3&X-Amz-Signature=ee2ed971612b8885c9a8c98eb712f80ce0aa140c84e39bb993d2f7fd0668c517&X-Amz-SignedHeaders=host&x-id=GetObject)

1. webapp-color-3 디렉토리 안 두 파일 관찰. 컨테이너 시작 시 명령어. 디렉토리 안 Dockerfile로부터 만든 이미지라 가정.
→ python [app.py](http://app.py/) —color pink

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e62ca764-701e-481a-ac07-919d52c15a4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QM75IFJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHULJ71v4zIEgu0JjMsiYJGF%2BOSDwK%2B0RX5qBbSTKoFSAiEAtfh7efLLIcxJsGGN2ODE8%2FZjLwMwpZsQg0XIkbJl4PQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIpsgwB2y%2FCkc1cNayrcA2bEVOQFzd5GIUZn2mTEX%2BOAvrqDENqs1xMJFZVkOQBbN7XWR%2BI0VlgulR%2Flko2DORTIwMBsGHdZSr1Q7YwF524TGZVfWCf6%2Ff2YKndhghUb42yyUjmgsjdu6X5wgyFIGFB6IXsS7sCici04770P44hneP4AajQ9VucQUezshKY1oQMF2tquNtPPTa%2Fa%2Fq769yKq%2BNOpMpL4gswmfP4Zle7wzmeUX%2FXvpz9IgOdokd3ZSqr1319pP6JdXJiIjO2tStXqmfhQew5HY8iFDsw%2BvuEHsjNBP%2BR1qDEZmYqHeyTLJHcwrkr%2FfOZQIk2dVkgT9D8kGMmE4kATAIwLBqu9Kk1j6ffDsx0%2BirwdTMVE4DMvUW5SljNG%2F8g0I3%2F6khDqV7Nz4GsiqJHQBt5SDFVYwANx1yIqOdcdSm9KBUKzWC9XM0Q2cy1Sfim%2FEwmiqavFOF%2FS5iuRjCqL7g3MJypwauF%2BzXg0S0RlCBWzRQ6uvhi0nOv9CEQRgBPNwiSdZOWb%2FXJZ%2BDB0SlF%2FMVSi32ahFWv%2Fp3vvn98uKTE8DioOAIvxD3JLw%2FAgsVkBO%2FLp2bVJM1OVSn8iYTexw5G0BAwQKazCpGV4D9hC0%2B%2Bd19gefR4iUK%2FdfBXJ37e3W1jMMImM3cAGOqUBKYgEpA4zDuTrXkDOKmk2sSOnK0arGCM9d11%2BXLkibDjnTBuyw%2FnMPm%2BNPGCzewlq9pqP3P5PrKEKjwfZIRWiPfTUcodSiOaBPTMS16dBEbg4rNOr8yOlGcu0sYMZtng80Z%2Brj%2FYQPQ34kgpSDdJcVZdXnkQ1OE%2FE31qBCeCF3iofsWxpzqckjhWLzA%2Bx%2FKSc4u3d0VhL%2Fhv0eNwNGNDd7us89vs3&X-Amz-Signature=74e351c1ec482aeb2cd5813447c624f7348ada91b904fb5f094984dde1d2a658&X-Amz-SignedHeaders=host&x-id=GetObject)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/904b3c5a-88ac-4741-a78d-1f6db17fc6c5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QM75IFJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHULJ71v4zIEgu0JjMsiYJGF%2BOSDwK%2B0RX5qBbSTKoFSAiEAtfh7efLLIcxJsGGN2ODE8%2FZjLwMwpZsQg0XIkbJl4PQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIpsgwB2y%2FCkc1cNayrcA2bEVOQFzd5GIUZn2mTEX%2BOAvrqDENqs1xMJFZVkOQBbN7XWR%2BI0VlgulR%2Flko2DORTIwMBsGHdZSr1Q7YwF524TGZVfWCf6%2Ff2YKndhghUb42yyUjmgsjdu6X5wgyFIGFB6IXsS7sCici04770P44hneP4AajQ9VucQUezshKY1oQMF2tquNtPPTa%2Fa%2Fq769yKq%2BNOpMpL4gswmfP4Zle7wzmeUX%2FXvpz9IgOdokd3ZSqr1319pP6JdXJiIjO2tStXqmfhQew5HY8iFDsw%2BvuEHsjNBP%2BR1qDEZmYqHeyTLJHcwrkr%2FfOZQIk2dVkgT9D8kGMmE4kATAIwLBqu9Kk1j6ffDsx0%2BirwdTMVE4DMvUW5SljNG%2F8g0I3%2F6khDqV7Nz4GsiqJHQBt5SDFVYwANx1yIqOdcdSm9KBUKzWC9XM0Q2cy1Sfim%2FEwmiqavFOF%2FS5iuRjCqL7g3MJypwauF%2BzXg0S0RlCBWzRQ6uvhi0nOv9CEQRgBPNwiSdZOWb%2FXJZ%2BDB0SlF%2FMVSi32ahFWv%2Fp3vvn98uKTE8DioOAIvxD3JLw%2FAgsVkBO%2FLp2bVJM1OVSn8iYTexw5G0BAwQKazCpGV4D9hC0%2B%2Bd19gefR4iUK%2FdfBXJ37e3W1jMMImM3cAGOqUBKYgEpA4zDuTrXkDOKmk2sSOnK0arGCM9d11%2BXLkibDjnTBuyw%2FnMPm%2BNPGCzewlq9pqP3P5PrKEKjwfZIRWiPfTUcodSiOaBPTMS16dBEbg4rNOr8yOlGcu0sYMZtng80Z%2Brj%2FYQPQ34kgpSDdJcVZdXnkQ1OE%2FE31qBCeCF3iofsWxpzqckjhWLzA%2Bx%2FKSc4u3d0VhL%2Fhv0eNwNGNDd7us89vs3&X-Amz-Signature=b851bd2877b3dd6c229b8f7b2555616e4c70429bfd2ae41dd3b0b19c4f58d70d&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 주어진 명세서가지고 Pod 생성. 기본적으로 blue 배경이 보여짐. 주어진 command 라인 arguments를 green으로 바꿈.
Pod 이름 - webapp-green
Image - kodekloud/webapp-color
Command line arguemnts - —color=green

```bash
kubectl run webapp-green --image=kodekloud/webapp-color -- --color green
```


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/95d73da8-076e-4fd5-9512-26ae91309514/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QM75IFJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHULJ71v4zIEgu0JjMsiYJGF%2BOSDwK%2B0RX5qBbSTKoFSAiEAtfh7efLLIcxJsGGN2ODE8%2FZjLwMwpZsQg0XIkbJl4PQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIpsgwB2y%2FCkc1cNayrcA2bEVOQFzd5GIUZn2mTEX%2BOAvrqDENqs1xMJFZVkOQBbN7XWR%2BI0VlgulR%2Flko2DORTIwMBsGHdZSr1Q7YwF524TGZVfWCf6%2Ff2YKndhghUb42yyUjmgsjdu6X5wgyFIGFB6IXsS7sCici04770P44hneP4AajQ9VucQUezshKY1oQMF2tquNtPPTa%2Fa%2Fq769yKq%2BNOpMpL4gswmfP4Zle7wzmeUX%2FXvpz9IgOdokd3ZSqr1319pP6JdXJiIjO2tStXqmfhQew5HY8iFDsw%2BvuEHsjNBP%2BR1qDEZmYqHeyTLJHcwrkr%2FfOZQIk2dVkgT9D8kGMmE4kATAIwLBqu9Kk1j6ffDsx0%2BirwdTMVE4DMvUW5SljNG%2F8g0I3%2F6khDqV7Nz4GsiqJHQBt5SDFVYwANx1yIqOdcdSm9KBUKzWC9XM0Q2cy1Sfim%2FEwmiqavFOF%2FS5iuRjCqL7g3MJypwauF%2BzXg0S0RlCBWzRQ6uvhi0nOv9CEQRgBPNwiSdZOWb%2FXJZ%2BDB0SlF%2FMVSi32ahFWv%2Fp3vvn98uKTE8DioOAIvxD3JLw%2FAgsVkBO%2FLp2bVJM1OVSn8iYTexw5G0BAwQKazCpGV4D9hC0%2B%2Bd19gefR4iUK%2FdfBXJ37e3W1jMMImM3cAGOqUBKYgEpA4zDuTrXkDOKmk2sSOnK0arGCM9d11%2BXLkibDjnTBuyw%2FnMPm%2BNPGCzewlq9pqP3P5PrKEKjwfZIRWiPfTUcodSiOaBPTMS16dBEbg4rNOr8yOlGcu0sYMZtng80Z%2Brj%2FYQPQ34kgpSDdJcVZdXnkQ1OE%2FE31qBCeCF3iofsWxpzqckjhWLzA%2Bx%2FKSc4u3d0VhL%2Fhv0eNwNGNDd7us89vs3&X-Amz-Signature=1616c2af315d98f17d8cb5640dafae8990168e1c16fdc3c28e05925849dbd44d&X-Amz-SignedHeaders=host&x-id=GetObject)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/1ec7b2df-e700-423a-a17c-9c153e2d04d0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QM75IFJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHULJ71v4zIEgu0JjMsiYJGF%2BOSDwK%2B0RX5qBbSTKoFSAiEAtfh7efLLIcxJsGGN2ODE8%2FZjLwMwpZsQg0XIkbJl4PQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIpsgwB2y%2FCkc1cNayrcA2bEVOQFzd5GIUZn2mTEX%2BOAvrqDENqs1xMJFZVkOQBbN7XWR%2BI0VlgulR%2Flko2DORTIwMBsGHdZSr1Q7YwF524TGZVfWCf6%2Ff2YKndhghUb42yyUjmgsjdu6X5wgyFIGFB6IXsS7sCici04770P44hneP4AajQ9VucQUezshKY1oQMF2tquNtPPTa%2Fa%2Fq769yKq%2BNOpMpL4gswmfP4Zle7wzmeUX%2FXvpz9IgOdokd3ZSqr1319pP6JdXJiIjO2tStXqmfhQew5HY8iFDsw%2BvuEHsjNBP%2BR1qDEZmYqHeyTLJHcwrkr%2FfOZQIk2dVkgT9D8kGMmE4kATAIwLBqu9Kk1j6ffDsx0%2BirwdTMVE4DMvUW5SljNG%2F8g0I3%2F6khDqV7Nz4GsiqJHQBt5SDFVYwANx1yIqOdcdSm9KBUKzWC9XM0Q2cy1Sfim%2FEwmiqavFOF%2FS5iuRjCqL7g3MJypwauF%2BzXg0S0RlCBWzRQ6uvhi0nOv9CEQRgBPNwiSdZOWb%2FXJZ%2BDB0SlF%2FMVSi32ahFWv%2Fp3vvn98uKTE8DioOAIvxD3JLw%2FAgsVkBO%2FLp2bVJM1OVSn8iYTexw5G0BAwQKazCpGV4D9hC0%2B%2Bd19gefR4iUK%2FdfBXJ37e3W1jMMImM3cAGOqUBKYgEpA4zDuTrXkDOKmk2sSOnK0arGCM9d11%2BXLkibDjnTBuyw%2FnMPm%2BNPGCzewlq9pqP3P5PrKEKjwfZIRWiPfTUcodSiOaBPTMS16dBEbg4rNOr8yOlGcu0sYMZtng80Z%2Brj%2FYQPQ34kgpSDdJcVZdXnkQ1OE%2FE31qBCeCF3iofsWxpzqckjhWLzA%2Bx%2FKSc4u3d0VhL%2Fhv0eNwNGNDd7us89vs3&X-Amz-Signature=a1bfa46684b231404cb5492bd24dc49b4841d4987832078385919b6095ae4b3b&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/0bf8add3-bd24-4223-9f63-0aea074c7073/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OAMD4SE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEh4dUMzuT5NAvFpCo9nrd9kmRzicfa%2FXwSLFXIrcLzeAiAEvHoH8y0ki4pHL%2B8dmcKkzR5ewkS65mO0I0ABTp9JNCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMWsI4nv%2BrxiLa%2BCN7KtwD3qc89ez9y%2BOnZk1xf000Q1vwya%2F%2Fip%2BaIPE3JMtxfTtsADLZYQ%2FSUPlnWfMVodm2dP2DE5EBxT10Web7zCc70EWr0rvjcZoU6BQdPGpy5fAW%2FQq0vIIbO40LcpB%2BqXkowXMhMnSW9jxdUwnVzscx17Qygee%2BFmTvIMJqBxbBUiJudj8DU%2BwUf8y7YwNhtImOkesVXPdmniT3oMsp3jBlUL7mgVtmMTkZlm5Jvynqwy4EgD9RzIB%2F7p9NO3yrPtzQcC%2BqnUz6zdPTrTcBerGqTloGeZ4FcdmiSb5ZU9VhLB%2FqQgBo1y59hH6nfZN1xHM4ejdxEB19ho9lL%2FjbkXYuIiB49d1ImYIy%2FDqlIk1swxh0WvrsXyNWpIGoUk85gVg289nXaApQlQjSHhx1%2FZIPC%2FKx7m1RE4sNYCoJo3JLHga4SvQ5pL7Q%2BxLb1I73NoLMOa78hUnfy3WsiME32bpO0hrPF6hf6H8Mnhx%2Fc5dvI%2F06eMMMqFZD%2By7ZCoc8js3JXOJMGq8wAvX%2FrOR0QHWNKpauiq3OugjErt3vysJoGi0VrmDzqVs1HpRnnTQb5NUv%2Bs8803yEHlw%2B5ut6RouCzBkZXSuPxn8%2FooGlG6uglxOE59dnGt6NOlAe12IwzY7dwAY6pgGPAH94UWMxBq3iZ1q7HL9aCpbPIz0aSlBQqsVjWG5RN1Qara8Njt46d4%2F1hwKnwhRuVHi5MgvQMn7tXK50ai%2BxYpME%2F822YbQMIXMDbrKQ1lY3Np0XdL3nATTBSg0d6TZC8lW%2BdWFpLKR%2Fc%2BU0zdSVkhiZeV4%2Bx7ZnwwI4dqw%2FShTzM%2FjwwOL6ptLsXNNOoYXd44MD0QoAt19zlY7gu2wS2jhMnn8i&X-Amz-Signature=aec99360467bf2b37697248625efe57eceeca06853b2f77c6745569c70aead5f&X-Amz-SignedHeaders=host&x-id=GetObject)


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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8e1b23d6-8186-45b4-902e-c67bb9d9369b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NQ7IBYT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHhty1a08Lzu7GZXPYlR1s2%2F5fJ8wfHU2mgrfyyy%2BhcsAiEAl8QcKpHSwzyCOPuVaP4UP2yNYdMmMFB5ITxOC0y7avAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHYio1eS%2BeNIeevoxSrcA2olzVoQeVj1gmTOGMOmAymYLm0H82KPNaey9gbLDjAGyDCttGrqAWxvS2T6FZE8AcUoBjhYLZUWFdlLFueF2ONfauvpk74SqMw9KW2q5KfGiGGECVtvrOzCHPeXZMlub%2F3i%2BEIPZN0Hu9KErKoufdvgU8ZEZMl8GAcpUT8nTz4eVeK1LkK2Ce4bzxqY7bQjlPGvk9cIcNnsWjX%2B39gPCO4JFU4krydsGpABF91YSIHM9XyD%2F%2FydeVUZTgPVPYT79ECya0qa9u4otvSChGBGnv%2FcyLYnCzm9SOHiK4z4GNOdyOVD1T8xxn%2B6%2BgXq2ybKz1TP9f9C75klDyub7TbFUBQu2XhUrp2a10%2FjKC9IUP9q8jt8LodvSMDksJeUd6g66PX3kjL%2BR%2BG7GftW%2BqaI7H0SKGZVv0Zm6Ds1745ixJNh0anQRnoUFQVtK0Flz3MlcybbLJdB9%2FtAyUV4QKVsY5MnzDatk%2BDnSoEuvTZxF9RESy9jjYIKFgCY0%2BAj55xkjBKm41zyIdeyb23Mg7eWsR7HD5Ovr6fUt2bUGOrlhJV9YsvpS3Xz%2Fxm3V7k8HsudSKKh3o9uj1wYziGSlYrnzo943lbWs9ZqFJSx67EstNZ58h2DRbPkK2a5x8JPMIXD3cAGOqUBU%2BFyqw9XM1ZJzXqy3W2eG4BBm5o2Ntsu0yGJEhW7buPv%2FR6fEpdSA7SMH8F8Qr25CQgthC07AAXSY8pQ4tkQWdOSN3UGTeTsYxyIfUCp%2BkRu%2BXLilGikjSECnEPDZUcYKiD%2FvkvMB0j6072UWN6khNnIVCSj2H%2FEUfwa7AcGYmn5D%2BGMQuHCggqYpwVMp%2FDzvj7mIIst%2BLPqn7gGVePAlwc%2F4v2Q&X-Amz-Signature=9b7db263afe40cfa32466746eb2b8611e8335f63731dfc2ac3f4bcf451530980&X-Amz-SignedHeaders=host&x-id=GetObject)


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

