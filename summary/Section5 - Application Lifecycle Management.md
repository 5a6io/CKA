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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/977ac0a0-6f7e-4aae-99ae-af3cd4e061cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJR5MZPB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T041323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD13ByTVGkcXwshqSc1Z8UjS8UV9qxhMdW8NK2urvE2VQIgUKrN8PsxPEFn9xPBxQpmLkJ2sdSmwFQJ65vwKV8afgkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3ghQW0x986cASWdCrcAx%2F7jzD32nl3JBmQUwgKRAoKR6rk1jd6Op%2FN7D7R6stAbFvITY71hhaaNUhmvbO8Mc2w890T3t1Oon4sDtTJQFadQ6tyOE%2B7KMuiQffCH%2F%2FjYT6I7pvQynA1hDJaDmsvHAsjsArhLIQWFtdMOXLbf%2BB%2Bg7S1mEVlwKwVNxH05gSkuGJrPXr%2FFuCAR8fKDiGdgNJ3u2kZmS96Pq1rEb8c%2FAcBDB0ZDHnFSeEqc72kK4FIDnVluNRvQbxbcfEnBj4qr68jz1eBv1xBnvgigzRB5z3DIFjeXAvRoYwuw6Vz0iu9Ljkd2uK4ZlDLp1xRPkMitbdIGm26VMDWgaGmW7DokmQFBx4NmM0vdboyMBFbi4P0FvzYbQRM%2F6SjfObzAJtWhEYEv5HKOkpQ7kY5OjWm%2BpM8CWrf4pW0FrfE3%2FBrH%2FDGRg%2FOYiNCt4O700B0d3Yc3DO8q%2BzcZoi%2BfRzJ%2BYKrx2LJqBxqfsjMjUMRr%2BB82n3BA4cBvDcOBy9q1shhktjeBwA7r%2BM20MH4e4%2BwlU5nlU2FIHGrzU12Dy6YD63Qa%2F8jqlh6yaKr77r6KcNxr2viwHcgxBwfXKY1hSSnOcoop9V9ZJbXlkQbp9ieAwkwUocBElSc8vEl8AAutrmJML2M0L0GOqUBZq68UyUJzNheWOB3c1iHWDx9vsBh%2BFgxoTBpqEx%2Bu3cqPuvUxKz8X4hoRsL36hqLhb9l33ePwZvk%2FEi1oHzk41BMAVLCl3RDbfX2zRnIoz43tiyk0g3pXPpMbMVB39QD3JsKkeO4Ptv13O7v0OHG33UUeqql988XNWHyRg0lIFuZQd%2FOd9bAbjS2YDmlzkGUZB9s9sd8AGomcAsLEE5qPkFD6gfe&X-Amz-Signature=4d8d5766a06364ba9e0ecbdfb8708a600193fb65b28e334e45fc2d71363d307f&X-Amz-SignedHeaders=host&x-id=GetObject)

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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/05c9a172-cfaa-4570-8937-288b1d07d12d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJR5MZPB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T041323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD13ByTVGkcXwshqSc1Z8UjS8UV9qxhMdW8NK2urvE2VQIgUKrN8PsxPEFn9xPBxQpmLkJ2sdSmwFQJ65vwKV8afgkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3ghQW0x986cASWdCrcAx%2F7jzD32nl3JBmQUwgKRAoKR6rk1jd6Op%2FN7D7R6stAbFvITY71hhaaNUhmvbO8Mc2w890T3t1Oon4sDtTJQFadQ6tyOE%2B7KMuiQffCH%2F%2FjYT6I7pvQynA1hDJaDmsvHAsjsArhLIQWFtdMOXLbf%2BB%2Bg7S1mEVlwKwVNxH05gSkuGJrPXr%2FFuCAR8fKDiGdgNJ3u2kZmS96Pq1rEb8c%2FAcBDB0ZDHnFSeEqc72kK4FIDnVluNRvQbxbcfEnBj4qr68jz1eBv1xBnvgigzRB5z3DIFjeXAvRoYwuw6Vz0iu9Ljkd2uK4ZlDLp1xRPkMitbdIGm26VMDWgaGmW7DokmQFBx4NmM0vdboyMBFbi4P0FvzYbQRM%2F6SjfObzAJtWhEYEv5HKOkpQ7kY5OjWm%2BpM8CWrf4pW0FrfE3%2FBrH%2FDGRg%2FOYiNCt4O700B0d3Yc3DO8q%2BzcZoi%2BfRzJ%2BYKrx2LJqBxqfsjMjUMRr%2BB82n3BA4cBvDcOBy9q1shhktjeBwA7r%2BM20MH4e4%2BwlU5nlU2FIHGrzU12Dy6YD63Qa%2F8jqlh6yaKr77r6KcNxr2viwHcgxBwfXKY1hSSnOcoop9V9ZJbXlkQbp9ieAwkwUocBElSc8vEl8AAutrmJML2M0L0GOqUBZq68UyUJzNheWOB3c1iHWDx9vsBh%2BFgxoTBpqEx%2Bu3cqPuvUxKz8X4hoRsL36hqLhb9l33ePwZvk%2FEi1oHzk41BMAVLCl3RDbfX2zRnIoz43tiyk0g3pXPpMbMVB39QD3JsKkeO4Ptv13O7v0OHG33UUeqql988XNWHyRg0lIFuZQd%2FOd9bAbjS2YDmlzkGUZB9s9sd8AGomcAsLEE5qPkFD6gfe&X-Amz-Signature=4f8f3d774f2662bc9ce89772d8f68f28aa073ae496407a8b50dcd9f543dd6533&X-Amz-SignedHeaders=host&x-id=GetObject)


한꺼번에 바뀌다보니 처음에 /root/curl-test.sh를 수행했을 때 이전 v2 출력문이 나옴.


## Commands and Arguments


## Practice Test - Commands and Arguments


## Configure Environment Variables in Applications


## Configuring ConfigMaps in Applications


## Practice Test - Environment Variables

