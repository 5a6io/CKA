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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/977ac0a0-6f7e-4aae-99ae-af3cd4e061cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBQBGB6F%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T132834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD5Z0oshsJenbNhe%2BhVDSmNgwxQLpnqt3e9QNO0%2Ff1m3AIgAYi%2FMYA4C8Ari8VUoFu4%2BCnPVddjNO22%2FsLuKltrbqQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK8OYEH%2FJSKuS4g9SrcA5QBkfw514NcViPTt%2FTMnajMrmoWY1vq%2FwTExaijiaksZBtXbJLzqQrJzBZI0Q43f5fHFeybS9WJvRaBUmUG2TmpN3Jye8FFtClZlpX7xgXMTXb2hKdjTcqqDt51u8ZuceJXnvxW7NDeTXUU1GydYH7V4a5B2F0FZ15HPWU%2FsWs%2BA%2F9RN%2FYMFkns12JmDExozoIpQSTxOvhUZUjTWuptZTrbOzzU2CELLk4YaZ4Gx%2FloKp3un7cb1Uy1PP%2FIL%2FeGuCKpmnD%2FOJQtaE7W6TUepuMREvwJe4Uem8pyLhSZCXN%2FkUTU45oAV9mdxyz2rL690aKTKwEQ9oteKdpr1cKEOvMelljh2tvZTLluhJ6CL3yyduwbNVM5EYMzpwyLET8EvCtMRfEuvMJ7IGHBSx8jbU%2BPLxICHABE0Mjghviz51R0PJ18%2BAydfjVuIBMs2TvhP%2FrpPShvLDK9Kly7lO61thLyXoRGZgK0TfV2KyevmfLpUGJ%2BsiLs5EpZZWUJmjokxyLMd5cabOPDLpc4NN1S58mxDTsSeGJq4nnSFNz0zJUVnJHDvBZlKW6szkYruA8u5KSB419hQRV%2Ft421%2B51AAXps2g%2BcAlNjWznA3VsoVRjS%2BnyBTM8NVojXiRaPMLSU0r0GOqUBAidzclCimPxXwNXR57%2FJx7BPzwrfYgv6IhAoWptz25Sa7wdn4XDaUdLyvcqICfGsPXrxPDclufMg9L3%2BPZfw604vWF20lT5cbyoTBBNDM2yphjLajjC%2F%2BRlEwVfWnne3cffdpffINBC%2FXAOwcLq1MWs6pAMu%2F1IFXLPOk2MwTDuEBRZL5ZTKRyt7%2BV7wIyruHVPPYdcP3ektkkh78Jn7exxatCrW&X-Amz-Signature=a1540a579b57ed03da8014bc5c8d29be86c9b763188342cb4c42c6f0f6eb8af7&X-Amz-SignedHeaders=host&x-id=GetObject)

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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/05c9a172-cfaa-4570-8937-288b1d07d12d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBQBGB6F%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T132834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD5Z0oshsJenbNhe%2BhVDSmNgwxQLpnqt3e9QNO0%2Ff1m3AIgAYi%2FMYA4C8Ari8VUoFu4%2BCnPVddjNO22%2FsLuKltrbqQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK8OYEH%2FJSKuS4g9SrcA5QBkfw514NcViPTt%2FTMnajMrmoWY1vq%2FwTExaijiaksZBtXbJLzqQrJzBZI0Q43f5fHFeybS9WJvRaBUmUG2TmpN3Jye8FFtClZlpX7xgXMTXb2hKdjTcqqDt51u8ZuceJXnvxW7NDeTXUU1GydYH7V4a5B2F0FZ15HPWU%2FsWs%2BA%2F9RN%2FYMFkns12JmDExozoIpQSTxOvhUZUjTWuptZTrbOzzU2CELLk4YaZ4Gx%2FloKp3un7cb1Uy1PP%2FIL%2FeGuCKpmnD%2FOJQtaE7W6TUepuMREvwJe4Uem8pyLhSZCXN%2FkUTU45oAV9mdxyz2rL690aKTKwEQ9oteKdpr1cKEOvMelljh2tvZTLluhJ6CL3yyduwbNVM5EYMzpwyLET8EvCtMRfEuvMJ7IGHBSx8jbU%2BPLxICHABE0Mjghviz51R0PJ18%2BAydfjVuIBMs2TvhP%2FrpPShvLDK9Kly7lO61thLyXoRGZgK0TfV2KyevmfLpUGJ%2BsiLs5EpZZWUJmjokxyLMd5cabOPDLpc4NN1S58mxDTsSeGJq4nnSFNz0zJUVnJHDvBZlKW6szkYruA8u5KSB419hQRV%2Ft421%2B51AAXps2g%2BcAlNjWznA3VsoVRjS%2BnyBTM8NVojXiRaPMLSU0r0GOqUBAidzclCimPxXwNXR57%2FJx7BPzwrfYgv6IhAoWptz25Sa7wdn4XDaUdLyvcqICfGsPXrxPDclufMg9L3%2BPZfw604vWF20lT5cbyoTBBNDM2yphjLajjC%2F%2BRlEwVfWnne3cffdpffINBC%2FXAOwcLq1MWs6pAMu%2F1IFXLPOk2MwTDuEBRZL5ZTKRyt7%2BV7wIyruHVPPYdcP3ektkkh78Jn7exxatCrW&X-Amz-Signature=f206424c4951e7f257f70ff7d70523f0bc267bf505940d2ea86f664936d2d5bf&X-Amz-SignedHeaders=host&x-id=GetObject)


한꺼번에 바뀌다보니 처음에 /root/curl-test.sh를 수행했을 때 이전 v2 출력문이 나옴.


## Commands and Arguments


## Practice Test - Commands and Arguments


## Configure Environment Variables in Applications


## Configuring ConfigMaps in Applications


## Practice Test - Environment Variables

