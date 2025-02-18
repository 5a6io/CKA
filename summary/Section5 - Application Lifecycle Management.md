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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/977ac0a0-6f7e-4aae-99ae-af3cd4e061cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWT6S3P%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCrPORrZJM202Cxw%2FQkvaJfmket0RRPEVuIPwjLNOr7AwIgAWs7so9Y7SSxCeCUBlyj1w6sqzv6f9UYURxK%2FKYTR28qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOySTpzEv6%2Bh7OwTcCrcA18H7ODMVPlVZw9Z1oh5msAV0LAmKDBL8rZqf%2FldW%2Bbm%2F9Y2J2edbtFzx2ubxaaIUqML%2BiLZIFSloIi3UmlL1RTxXZgQ4z1VLDQUmy74QBKuhKj9fiGrR4qj03aiiFtrGeiGz7dhQKnEGbKL2m2Nt6XwlATRZD0enCUGzg1q0%2B0jDkJvsz7l48bLWDUJ%2F4C7ezbJYB4HXSyUGBAQvw3C73%2B43DjQt285zHr6nhnFOHKmMaxz6dvdPfgfU0I2csyxBmqSUgKXI31dKQCcjcfNQoFey4suKMUQ%2FVZNOK2rsRcFoO%2BWWJjhHAI%2BuSMaebAGZR6W9EbfrxOYzK2YopTJLdMEojXQjzHqn3CcKbQc0Gh%2Bs4kKX9mmev3wuQnTM%2Ft%2Btnis7cEfHdM0jywqiF2HbJvoIwJjemy80nwteZpniJk8viHtgZomXGb9IxBtcb5WxdiHKdpJKGzO2UoydyJ%2Bri6TUNeiZjffYae6Fxl4c8jiAta7znLpFMBHL2rd9eZG6JeBy0C288X56mVJkTqH4amKXHg8v8IGRSbVmuCM9qNp5zyzAef5sBSTPPrSeMMpYcqwFOfmxKtF7KRdQybWp0YkbXjEHqatvaMa9g6NOrrVRAbP2Xz%2Bvhy9FUgSMNqx0r0GOqUBTn6wanSANRggzIcuAAkjO%2Fs5lDE6yS6g9SrYU93R22NGKm47YB4NW%2BssiKokOgf1QF4Y%2FMqQBG4EWFkHN9cGC%2B9MfVvv80yVc4nXS4aMvpVV%2BsWHRGeAEEbfBYWhVj36%2BsLxkY1mS5U8bwWolE%2FO7mfBPBGhLgMjNW%2BUwjep4m9RueD%2Bp46zf5VkGhaJXQk1xGN%2BCay%2FQ%2BzTooGypFPsa29QHWVb&X-Amz-Signature=310a32b54626bfbe612a0a93f598418cee14dda9fc51b621d67a695e496b2819&X-Amz-SignedHeaders=host&x-id=GetObject)

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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/05c9a172-cfaa-4570-8937-288b1d07d12d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWT6S3P%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCrPORrZJM202Cxw%2FQkvaJfmket0RRPEVuIPwjLNOr7AwIgAWs7so9Y7SSxCeCUBlyj1w6sqzv6f9UYURxK%2FKYTR28qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOySTpzEv6%2Bh7OwTcCrcA18H7ODMVPlVZw9Z1oh5msAV0LAmKDBL8rZqf%2FldW%2Bbm%2F9Y2J2edbtFzx2ubxaaIUqML%2BiLZIFSloIi3UmlL1RTxXZgQ4z1VLDQUmy74QBKuhKj9fiGrR4qj03aiiFtrGeiGz7dhQKnEGbKL2m2Nt6XwlATRZD0enCUGzg1q0%2B0jDkJvsz7l48bLWDUJ%2F4C7ezbJYB4HXSyUGBAQvw3C73%2B43DjQt285zHr6nhnFOHKmMaxz6dvdPfgfU0I2csyxBmqSUgKXI31dKQCcjcfNQoFey4suKMUQ%2FVZNOK2rsRcFoO%2BWWJjhHAI%2BuSMaebAGZR6W9EbfrxOYzK2YopTJLdMEojXQjzHqn3CcKbQc0Gh%2Bs4kKX9mmev3wuQnTM%2Ft%2Btnis7cEfHdM0jywqiF2HbJvoIwJjemy80nwteZpniJk8viHtgZomXGb9IxBtcb5WxdiHKdpJKGzO2UoydyJ%2Bri6TUNeiZjffYae6Fxl4c8jiAta7znLpFMBHL2rd9eZG6JeBy0C288X56mVJkTqH4amKXHg8v8IGRSbVmuCM9qNp5zyzAef5sBSTPPrSeMMpYcqwFOfmxKtF7KRdQybWp0YkbXjEHqatvaMa9g6NOrrVRAbP2Xz%2Bvhy9FUgSMNqx0r0GOqUBTn6wanSANRggzIcuAAkjO%2Fs5lDE6yS6g9SrYU93R22NGKm47YB4NW%2BssiKokOgf1QF4Y%2FMqQBG4EWFkHN9cGC%2B9MfVvv80yVc4nXS4aMvpVV%2BsWHRGeAEEbfBYWhVj36%2BsLxkY1mS5U8bwWolE%2FO7mfBPBGhLgMjNW%2BUwjep4m9RueD%2Bp46zf5VkGhaJXQk1xGN%2BCay%2FQ%2BzTooGypFPsa29QHWVb&X-Amz-Signature=5bfb433abe4137a9a34dfa3bbb5cb1ac86928eb223b1e532281c765d024cd405&X-Amz-SignedHeaders=host&x-id=GetObject)


한꺼번에 바뀌다보니 처음에 /root/curl-test.sh를 수행했을 때 이전 v2 출력문이 나옴.


## Commands and Arguments


## Practice Test - Commands and Arguments


## Configure Environment Variables in Applications


## Configuring ConfigMaps in Applications


## Practice Test - Environment Variables

