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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/977ac0a0-6f7e-4aae-99ae-af3cd4e061cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW653HC7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlaNcCh1kUAaHoLrpcX69Q2TyKh5rdS1BhiN15IxpIMAiAOMM5jMelw4oZ3QFnvQDBZKkwdyJh%2FfwF%2FX9jhMeYJWyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUcXLhAy9B0rL4K1RKtwDuAjJqwSPuwS9x67HsxlJFSD4kL3frspJRmExaAerah%2BpjWJEKvMIt6J51CGwNRSmsMRusVmM8KUwDJe3gO7d7Dr2%2BhaHIMMAkhKxk6QLeGgqAHJsPK1O0BklKXEZi1nwDd0pX5nGKCmA9N%2B%2BGrTArLozoDbymM%2FBJzncQdDEE3UwRk4MZ5KHgvzMIfFXVF3trS4T0dV12ZhWKrByM%2BFBJMpyiBz75XPdEvvpe2oPgkHFjcOQeoW0WO%2BCSjth3lA6cllj%2BOhYvxq1Y75wxwPXFAQBGQaBfp5FS65co%2BGXJ9MPWmRirKF%2BYgm7pRygcCryeq8G%2FL6i%2F3ob0ubtJlwBCZeCtrH%2BR0cr%2FuB5cYgpJcE32iE%2FrerfXX6wmsJfpSKaVAp1NTeGQ%2FPZCSPFC6zXQxLPsh1t%2Fxq%2BF%2Fp5G%2Frx1iFn39WW7DMwx5x2ebzvIj9z6altnxO43CXP%2BVLuwMBfK%2FOjKWOqpRgZtEmIxCHVcaFrbwXza41B%2F9Syj4%2FQi%2BYBy8GmKEiPkCyd4A%2B9HwdpOF%2FgGE4rm0pYYoZ9hLaUtfN7kat03o41VLuxDw8j3A5RXUO3jCPFHGbichk0h8p36Km7X%2FG4%2BVCHojdsr4IzMDxxNWqEbIxSVSowoaMw%2FdDtwAY6pgEjSHdwqq74Q7xW4q1CGn50G4XzRl8XSFlmFTIhqlbFrQPxyBBftMrrn1gCe0seb0ftayuldzSJNyuG4nwuGYvzwGQJFr9LggtvrOIYcRrigFMUREY6ulsdB8OVlZ1w6YpcK1JJs8xzSMFbqmJq%2Fu6xVsVHoKZv%2FecgHkR4%2FKPTgB%2BMQ%2BEveHEThMyP3yDokgrT6LCDnJp8VPHcgHhNH%2BxMuEejMsu5&X-Amz-Signature=239706217df86b59d6fff38bd9c1b94c9b6533f892a15804697c04d2ade55e07&X-Amz-SignedHeaders=host&x-id=GetObject)

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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/05c9a172-cfaa-4570-8937-288b1d07d12d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW653HC7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlaNcCh1kUAaHoLrpcX69Q2TyKh5rdS1BhiN15IxpIMAiAOMM5jMelw4oZ3QFnvQDBZKkwdyJh%2FfwF%2FX9jhMeYJWyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUcXLhAy9B0rL4K1RKtwDuAjJqwSPuwS9x67HsxlJFSD4kL3frspJRmExaAerah%2BpjWJEKvMIt6J51CGwNRSmsMRusVmM8KUwDJe3gO7d7Dr2%2BhaHIMMAkhKxk6QLeGgqAHJsPK1O0BklKXEZi1nwDd0pX5nGKCmA9N%2B%2BGrTArLozoDbymM%2FBJzncQdDEE3UwRk4MZ5KHgvzMIfFXVF3trS4T0dV12ZhWKrByM%2BFBJMpyiBz75XPdEvvpe2oPgkHFjcOQeoW0WO%2BCSjth3lA6cllj%2BOhYvxq1Y75wxwPXFAQBGQaBfp5FS65co%2BGXJ9MPWmRirKF%2BYgm7pRygcCryeq8G%2FL6i%2F3ob0ubtJlwBCZeCtrH%2BR0cr%2FuB5cYgpJcE32iE%2FrerfXX6wmsJfpSKaVAp1NTeGQ%2FPZCSPFC6zXQxLPsh1t%2Fxq%2BF%2Fp5G%2Frx1iFn39WW7DMwx5x2ebzvIj9z6altnxO43CXP%2BVLuwMBfK%2FOjKWOqpRgZtEmIxCHVcaFrbwXza41B%2F9Syj4%2FQi%2BYBy8GmKEiPkCyd4A%2B9HwdpOF%2FgGE4rm0pYYoZ9hLaUtfN7kat03o41VLuxDw8j3A5RXUO3jCPFHGbichk0h8p36Km7X%2FG4%2BVCHojdsr4IzMDxxNWqEbIxSVSowoaMw%2FdDtwAY6pgEjSHdwqq74Q7xW4q1CGn50G4XzRl8XSFlmFTIhqlbFrQPxyBBftMrrn1gCe0seb0ftayuldzSJNyuG4nwuGYvzwGQJFr9LggtvrOIYcRrigFMUREY6ulsdB8OVlZ1w6YpcK1JJs8xzSMFbqmJq%2Fu6xVsVHoKZv%2FecgHkR4%2FKPTgB%2BMQ%2BEveHEThMyP3yDokgrT6LCDnJp8VPHcgHhNH%2BxMuEejMsu5&X-Amz-Signature=4dcd50fb3741a6492d9aa13acc987483357ac6cd98a806c39769a55c04b41835&X-Amz-SignedHeaders=host&x-id=GetObject)


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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/9e974328-4af4-45d2-80e0-fea968f6a9a9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW653HC7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlaNcCh1kUAaHoLrpcX69Q2TyKh5rdS1BhiN15IxpIMAiAOMM5jMelw4oZ3QFnvQDBZKkwdyJh%2FfwF%2FX9jhMeYJWyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUcXLhAy9B0rL4K1RKtwDuAjJqwSPuwS9x67HsxlJFSD4kL3frspJRmExaAerah%2BpjWJEKvMIt6J51CGwNRSmsMRusVmM8KUwDJe3gO7d7Dr2%2BhaHIMMAkhKxk6QLeGgqAHJsPK1O0BklKXEZi1nwDd0pX5nGKCmA9N%2B%2BGrTArLozoDbymM%2FBJzncQdDEE3UwRk4MZ5KHgvzMIfFXVF3trS4T0dV12ZhWKrByM%2BFBJMpyiBz75XPdEvvpe2oPgkHFjcOQeoW0WO%2BCSjth3lA6cllj%2BOhYvxq1Y75wxwPXFAQBGQaBfp5FS65co%2BGXJ9MPWmRirKF%2BYgm7pRygcCryeq8G%2FL6i%2F3ob0ubtJlwBCZeCtrH%2BR0cr%2FuB5cYgpJcE32iE%2FrerfXX6wmsJfpSKaVAp1NTeGQ%2FPZCSPFC6zXQxLPsh1t%2Fxq%2BF%2Fp5G%2Frx1iFn39WW7DMwx5x2ebzvIj9z6altnxO43CXP%2BVLuwMBfK%2FOjKWOqpRgZtEmIxCHVcaFrbwXza41B%2F9Syj4%2FQi%2BYBy8GmKEiPkCyd4A%2B9HwdpOF%2FgGE4rm0pYYoZ9hLaUtfN7kat03o41VLuxDw8j3A5RXUO3jCPFHGbichk0h8p36Km7X%2FG4%2BVCHojdsr4IzMDxxNWqEbIxSVSowoaMw%2FdDtwAY6pgEjSHdwqq74Q7xW4q1CGn50G4XzRl8XSFlmFTIhqlbFrQPxyBBftMrrn1gCe0seb0ftayuldzSJNyuG4nwuGYvzwGQJFr9LggtvrOIYcRrigFMUREY6ulsdB8OVlZ1w6YpcK1JJs8xzSMFbqmJq%2Fu6xVsVHoKZv%2FecgHkR4%2FKPTgB%2BMQ%2BEveHEThMyP3yDokgrT6LCDnJp8VPHcgHhNH%2BxMuEejMsu5&X-Amz-Signature=ae89a7bd5e436130b2766887e9be379272c2832a22021e6a3d8a526cdf5f26cc&X-Amz-SignedHeaders=host&x-id=GetObject)

1. /root/webapp-color에 주어진 Dockerfile2 관찰. 컨테이너 시작 시 명령어.
→ python app.py —color red

> 💡 ENTRYPOINT 뒤에 CMD가 붙음.  kuberentes로 생각하면 command 뒤에 args가 붙는 것.


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a7a73a61-b2e0-4efa-873f-fd3273a38150/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW653HC7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlaNcCh1kUAaHoLrpcX69Q2TyKh5rdS1BhiN15IxpIMAiAOMM5jMelw4oZ3QFnvQDBZKkwdyJh%2FfwF%2FX9jhMeYJWyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUcXLhAy9B0rL4K1RKtwDuAjJqwSPuwS9x67HsxlJFSD4kL3frspJRmExaAerah%2BpjWJEKvMIt6J51CGwNRSmsMRusVmM8KUwDJe3gO7d7Dr2%2BhaHIMMAkhKxk6QLeGgqAHJsPK1O0BklKXEZi1nwDd0pX5nGKCmA9N%2B%2BGrTArLozoDbymM%2FBJzncQdDEE3UwRk4MZ5KHgvzMIfFXVF3trS4T0dV12ZhWKrByM%2BFBJMpyiBz75XPdEvvpe2oPgkHFjcOQeoW0WO%2BCSjth3lA6cllj%2BOhYvxq1Y75wxwPXFAQBGQaBfp5FS65co%2BGXJ9MPWmRirKF%2BYgm7pRygcCryeq8G%2FL6i%2F3ob0ubtJlwBCZeCtrH%2BR0cr%2FuB5cYgpJcE32iE%2FrerfXX6wmsJfpSKaVAp1NTeGQ%2FPZCSPFC6zXQxLPsh1t%2Fxq%2BF%2Fp5G%2Frx1iFn39WW7DMwx5x2ebzvIj9z6altnxO43CXP%2BVLuwMBfK%2FOjKWOqpRgZtEmIxCHVcaFrbwXza41B%2F9Syj4%2FQi%2BYBy8GmKEiPkCyd4A%2B9HwdpOF%2FgGE4rm0pYYoZ9hLaUtfN7kat03o41VLuxDw8j3A5RXUO3jCPFHGbichk0h8p36Km7X%2FG4%2BVCHojdsr4IzMDxxNWqEbIxSVSowoaMw%2FdDtwAY6pgEjSHdwqq74Q7xW4q1CGn50G4XzRl8XSFlmFTIhqlbFrQPxyBBftMrrn1gCe0seb0ftayuldzSJNyuG4nwuGYvzwGQJFr9LggtvrOIYcRrigFMUREY6ulsdB8OVlZ1w6YpcK1JJs8xzSMFbqmJq%2Fu6xVsVHoKZv%2FecgHkR4%2FKPTgB%2BMQ%2BEveHEThMyP3yDokgrT6LCDnJp8VPHcgHhNH%2BxMuEejMsu5&X-Amz-Signature=691ae0dd2451472f975434f72da3a24bfd1a2aee511ea60363833ac10b6b0596&X-Amz-SignedHeaders=host&x-id=GetObject)

1. webapp-color-2 디렉토리 안 두 파일 관찰. 컨테이너 시작 시 명령어. 디렉토리 안 Dockerfile로부터 만든 이미지라 가정.
→ —color green

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a9b0e3d1-ad6b-430e-93a5-81bb9a82fa08/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW653HC7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlaNcCh1kUAaHoLrpcX69Q2TyKh5rdS1BhiN15IxpIMAiAOMM5jMelw4oZ3QFnvQDBZKkwdyJh%2FfwF%2FX9jhMeYJWyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUcXLhAy9B0rL4K1RKtwDuAjJqwSPuwS9x67HsxlJFSD4kL3frspJRmExaAerah%2BpjWJEKvMIt6J51CGwNRSmsMRusVmM8KUwDJe3gO7d7Dr2%2BhaHIMMAkhKxk6QLeGgqAHJsPK1O0BklKXEZi1nwDd0pX5nGKCmA9N%2B%2BGrTArLozoDbymM%2FBJzncQdDEE3UwRk4MZ5KHgvzMIfFXVF3trS4T0dV12ZhWKrByM%2BFBJMpyiBz75XPdEvvpe2oPgkHFjcOQeoW0WO%2BCSjth3lA6cllj%2BOhYvxq1Y75wxwPXFAQBGQaBfp5FS65co%2BGXJ9MPWmRirKF%2BYgm7pRygcCryeq8G%2FL6i%2F3ob0ubtJlwBCZeCtrH%2BR0cr%2FuB5cYgpJcE32iE%2FrerfXX6wmsJfpSKaVAp1NTeGQ%2FPZCSPFC6zXQxLPsh1t%2Fxq%2BF%2Fp5G%2Frx1iFn39WW7DMwx5x2ebzvIj9z6altnxO43CXP%2BVLuwMBfK%2FOjKWOqpRgZtEmIxCHVcaFrbwXza41B%2F9Syj4%2FQi%2BYBy8GmKEiPkCyd4A%2B9HwdpOF%2FgGE4rm0pYYoZ9hLaUtfN7kat03o41VLuxDw8j3A5RXUO3jCPFHGbichk0h8p36Km7X%2FG4%2BVCHojdsr4IzMDxxNWqEbIxSVSowoaMw%2FdDtwAY6pgEjSHdwqq74Q7xW4q1CGn50G4XzRl8XSFlmFTIhqlbFrQPxyBBftMrrn1gCe0seb0ftayuldzSJNyuG4nwuGYvzwGQJFr9LggtvrOIYcRrigFMUREY6ulsdB8OVlZ1w6YpcK1JJs8xzSMFbqmJq%2Fu6xVsVHoKZv%2FecgHkR4%2FKPTgB%2BMQ%2BEveHEThMyP3yDokgrT6LCDnJp8VPHcgHhNH%2BxMuEejMsu5&X-Amz-Signature=2b9e318e3c50c33c64aa9ab91f40ead8b07b33ad07522e26c3f08aa7316c6b72&X-Amz-SignedHeaders=host&x-id=GetObject)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/d072cded-54c9-4901-8066-9f80315a1b60/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW653HC7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlaNcCh1kUAaHoLrpcX69Q2TyKh5rdS1BhiN15IxpIMAiAOMM5jMelw4oZ3QFnvQDBZKkwdyJh%2FfwF%2FX9jhMeYJWyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUcXLhAy9B0rL4K1RKtwDuAjJqwSPuwS9x67HsxlJFSD4kL3frspJRmExaAerah%2BpjWJEKvMIt6J51CGwNRSmsMRusVmM8KUwDJe3gO7d7Dr2%2BhaHIMMAkhKxk6QLeGgqAHJsPK1O0BklKXEZi1nwDd0pX5nGKCmA9N%2B%2BGrTArLozoDbymM%2FBJzncQdDEE3UwRk4MZ5KHgvzMIfFXVF3trS4T0dV12ZhWKrByM%2BFBJMpyiBz75XPdEvvpe2oPgkHFjcOQeoW0WO%2BCSjth3lA6cllj%2BOhYvxq1Y75wxwPXFAQBGQaBfp5FS65co%2BGXJ9MPWmRirKF%2BYgm7pRygcCryeq8G%2FL6i%2F3ob0ubtJlwBCZeCtrH%2BR0cr%2FuB5cYgpJcE32iE%2FrerfXX6wmsJfpSKaVAp1NTeGQ%2FPZCSPFC6zXQxLPsh1t%2Fxq%2BF%2Fp5G%2Frx1iFn39WW7DMwx5x2ebzvIj9z6altnxO43CXP%2BVLuwMBfK%2FOjKWOqpRgZtEmIxCHVcaFrbwXza41B%2F9Syj4%2FQi%2BYBy8GmKEiPkCyd4A%2B9HwdpOF%2FgGE4rm0pYYoZ9hLaUtfN7kat03o41VLuxDw8j3A5RXUO3jCPFHGbichk0h8p36Km7X%2FG4%2BVCHojdsr4IzMDxxNWqEbIxSVSowoaMw%2FdDtwAY6pgEjSHdwqq74Q7xW4q1CGn50G4XzRl8XSFlmFTIhqlbFrQPxyBBftMrrn1gCe0seb0ftayuldzSJNyuG4nwuGYvzwGQJFr9LggtvrOIYcRrigFMUREY6ulsdB8OVlZ1w6YpcK1JJs8xzSMFbqmJq%2Fu6xVsVHoKZv%2FecgHkR4%2FKPTgB%2BMQ%2BEveHEThMyP3yDokgrT6LCDnJp8VPHcgHhNH%2BxMuEejMsu5&X-Amz-Signature=39e5fff52d5029a6ad07f7393ceb5b9f7c695299ec6ec933cdcd98a5da18adfd&X-Amz-SignedHeaders=host&x-id=GetObject)

1. webapp-color-3 디렉토리 안 두 파일 관찰. 컨테이너 시작 시 명령어. 디렉토리 안 Dockerfile로부터 만든 이미지라 가정.
→ python [app.py](http://app.py/) —color pink

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e62ca764-701e-481a-ac07-919d52c15a4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW653HC7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlaNcCh1kUAaHoLrpcX69Q2TyKh5rdS1BhiN15IxpIMAiAOMM5jMelw4oZ3QFnvQDBZKkwdyJh%2FfwF%2FX9jhMeYJWyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUcXLhAy9B0rL4K1RKtwDuAjJqwSPuwS9x67HsxlJFSD4kL3frspJRmExaAerah%2BpjWJEKvMIt6J51CGwNRSmsMRusVmM8KUwDJe3gO7d7Dr2%2BhaHIMMAkhKxk6QLeGgqAHJsPK1O0BklKXEZi1nwDd0pX5nGKCmA9N%2B%2BGrTArLozoDbymM%2FBJzncQdDEE3UwRk4MZ5KHgvzMIfFXVF3trS4T0dV12ZhWKrByM%2BFBJMpyiBz75XPdEvvpe2oPgkHFjcOQeoW0WO%2BCSjth3lA6cllj%2BOhYvxq1Y75wxwPXFAQBGQaBfp5FS65co%2BGXJ9MPWmRirKF%2BYgm7pRygcCryeq8G%2FL6i%2F3ob0ubtJlwBCZeCtrH%2BR0cr%2FuB5cYgpJcE32iE%2FrerfXX6wmsJfpSKaVAp1NTeGQ%2FPZCSPFC6zXQxLPsh1t%2Fxq%2BF%2Fp5G%2Frx1iFn39WW7DMwx5x2ebzvIj9z6altnxO43CXP%2BVLuwMBfK%2FOjKWOqpRgZtEmIxCHVcaFrbwXza41B%2F9Syj4%2FQi%2BYBy8GmKEiPkCyd4A%2B9HwdpOF%2FgGE4rm0pYYoZ9hLaUtfN7kat03o41VLuxDw8j3A5RXUO3jCPFHGbichk0h8p36Km7X%2FG4%2BVCHojdsr4IzMDxxNWqEbIxSVSowoaMw%2FdDtwAY6pgEjSHdwqq74Q7xW4q1CGn50G4XzRl8XSFlmFTIhqlbFrQPxyBBftMrrn1gCe0seb0ftayuldzSJNyuG4nwuGYvzwGQJFr9LggtvrOIYcRrigFMUREY6ulsdB8OVlZ1w6YpcK1JJs8xzSMFbqmJq%2Fu6xVsVHoKZv%2FecgHkR4%2FKPTgB%2BMQ%2BEveHEThMyP3yDokgrT6LCDnJp8VPHcgHhNH%2BxMuEejMsu5&X-Amz-Signature=327279aab5ba9a75b4d834ac963ed1fd4df6dba9b4c7aaad66b0d493a3a5c80e&X-Amz-SignedHeaders=host&x-id=GetObject)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/904b3c5a-88ac-4741-a78d-1f6db17fc6c5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW653HC7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlaNcCh1kUAaHoLrpcX69Q2TyKh5rdS1BhiN15IxpIMAiAOMM5jMelw4oZ3QFnvQDBZKkwdyJh%2FfwF%2FX9jhMeYJWyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUcXLhAy9B0rL4K1RKtwDuAjJqwSPuwS9x67HsxlJFSD4kL3frspJRmExaAerah%2BpjWJEKvMIt6J51CGwNRSmsMRusVmM8KUwDJe3gO7d7Dr2%2BhaHIMMAkhKxk6QLeGgqAHJsPK1O0BklKXEZi1nwDd0pX5nGKCmA9N%2B%2BGrTArLozoDbymM%2FBJzncQdDEE3UwRk4MZ5KHgvzMIfFXVF3trS4T0dV12ZhWKrByM%2BFBJMpyiBz75XPdEvvpe2oPgkHFjcOQeoW0WO%2BCSjth3lA6cllj%2BOhYvxq1Y75wxwPXFAQBGQaBfp5FS65co%2BGXJ9MPWmRirKF%2BYgm7pRygcCryeq8G%2FL6i%2F3ob0ubtJlwBCZeCtrH%2BR0cr%2FuB5cYgpJcE32iE%2FrerfXX6wmsJfpSKaVAp1NTeGQ%2FPZCSPFC6zXQxLPsh1t%2Fxq%2BF%2Fp5G%2Frx1iFn39WW7DMwx5x2ebzvIj9z6altnxO43CXP%2BVLuwMBfK%2FOjKWOqpRgZtEmIxCHVcaFrbwXza41B%2F9Syj4%2FQi%2BYBy8GmKEiPkCyd4A%2B9HwdpOF%2FgGE4rm0pYYoZ9hLaUtfN7kat03o41VLuxDw8j3A5RXUO3jCPFHGbichk0h8p36Km7X%2FG4%2BVCHojdsr4IzMDxxNWqEbIxSVSowoaMw%2FdDtwAY6pgEjSHdwqq74Q7xW4q1CGn50G4XzRl8XSFlmFTIhqlbFrQPxyBBftMrrn1gCe0seb0ftayuldzSJNyuG4nwuGYvzwGQJFr9LggtvrOIYcRrigFMUREY6ulsdB8OVlZ1w6YpcK1JJs8xzSMFbqmJq%2Fu6xVsVHoKZv%2FecgHkR4%2FKPTgB%2BMQ%2BEveHEThMyP3yDokgrT6LCDnJp8VPHcgHhNH%2BxMuEejMsu5&X-Amz-Signature=9734af6b1590c6755551d512e212cdfc1eecff321e2e9e6a6bd18fb6942f5c99&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 주어진 명세서가지고 Pod 생성. 기본적으로 blue 배경이 보여짐. 주어진 command 라인 arguments를 green으로 바꿈.
Pod 이름 - webapp-green
Image - kodekloud/webapp-color
Command line arguemnts - —color=green

```bash
kubectl run webapp-green --image=kodekloud/webapp-color -- --color green
```


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/95d73da8-076e-4fd5-9512-26ae91309514/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW653HC7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlaNcCh1kUAaHoLrpcX69Q2TyKh5rdS1BhiN15IxpIMAiAOMM5jMelw4oZ3QFnvQDBZKkwdyJh%2FfwF%2FX9jhMeYJWyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUcXLhAy9B0rL4K1RKtwDuAjJqwSPuwS9x67HsxlJFSD4kL3frspJRmExaAerah%2BpjWJEKvMIt6J51CGwNRSmsMRusVmM8KUwDJe3gO7d7Dr2%2BhaHIMMAkhKxk6QLeGgqAHJsPK1O0BklKXEZi1nwDd0pX5nGKCmA9N%2B%2BGrTArLozoDbymM%2FBJzncQdDEE3UwRk4MZ5KHgvzMIfFXVF3trS4T0dV12ZhWKrByM%2BFBJMpyiBz75XPdEvvpe2oPgkHFjcOQeoW0WO%2BCSjth3lA6cllj%2BOhYvxq1Y75wxwPXFAQBGQaBfp5FS65co%2BGXJ9MPWmRirKF%2BYgm7pRygcCryeq8G%2FL6i%2F3ob0ubtJlwBCZeCtrH%2BR0cr%2FuB5cYgpJcE32iE%2FrerfXX6wmsJfpSKaVAp1NTeGQ%2FPZCSPFC6zXQxLPsh1t%2Fxq%2BF%2Fp5G%2Frx1iFn39WW7DMwx5x2ebzvIj9z6altnxO43CXP%2BVLuwMBfK%2FOjKWOqpRgZtEmIxCHVcaFrbwXza41B%2F9Syj4%2FQi%2BYBy8GmKEiPkCyd4A%2B9HwdpOF%2FgGE4rm0pYYoZ9hLaUtfN7kat03o41VLuxDw8j3A5RXUO3jCPFHGbichk0h8p36Km7X%2FG4%2BVCHojdsr4IzMDxxNWqEbIxSVSowoaMw%2FdDtwAY6pgEjSHdwqq74Q7xW4q1CGn50G4XzRl8XSFlmFTIhqlbFrQPxyBBftMrrn1gCe0seb0ftayuldzSJNyuG4nwuGYvzwGQJFr9LggtvrOIYcRrigFMUREY6ulsdB8OVlZ1w6YpcK1JJs8xzSMFbqmJq%2Fu6xVsVHoKZv%2FecgHkR4%2FKPTgB%2BMQ%2BEveHEThMyP3yDokgrT6LCDnJp8VPHcgHhNH%2BxMuEejMsu5&X-Amz-Signature=910f01446f4fc367f0567637867abc0038a66496dbb5c56455d3abd82b16ba31&X-Amz-SignedHeaders=host&x-id=GetObject)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/1ec7b2df-e700-423a-a17c-9c153e2d04d0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW653HC7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlaNcCh1kUAaHoLrpcX69Q2TyKh5rdS1BhiN15IxpIMAiAOMM5jMelw4oZ3QFnvQDBZKkwdyJh%2FfwF%2FX9jhMeYJWyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUcXLhAy9B0rL4K1RKtwDuAjJqwSPuwS9x67HsxlJFSD4kL3frspJRmExaAerah%2BpjWJEKvMIt6J51CGwNRSmsMRusVmM8KUwDJe3gO7d7Dr2%2BhaHIMMAkhKxk6QLeGgqAHJsPK1O0BklKXEZi1nwDd0pX5nGKCmA9N%2B%2BGrTArLozoDbymM%2FBJzncQdDEE3UwRk4MZ5KHgvzMIfFXVF3trS4T0dV12ZhWKrByM%2BFBJMpyiBz75XPdEvvpe2oPgkHFjcOQeoW0WO%2BCSjth3lA6cllj%2BOhYvxq1Y75wxwPXFAQBGQaBfp5FS65co%2BGXJ9MPWmRirKF%2BYgm7pRygcCryeq8G%2FL6i%2F3ob0ubtJlwBCZeCtrH%2BR0cr%2FuB5cYgpJcE32iE%2FrerfXX6wmsJfpSKaVAp1NTeGQ%2FPZCSPFC6zXQxLPsh1t%2Fxq%2BF%2Fp5G%2Frx1iFn39WW7DMwx5x2ebzvIj9z6altnxO43CXP%2BVLuwMBfK%2FOjKWOqpRgZtEmIxCHVcaFrbwXza41B%2F9Syj4%2FQi%2BYBy8GmKEiPkCyd4A%2B9HwdpOF%2FgGE4rm0pYYoZ9hLaUtfN7kat03o41VLuxDw8j3A5RXUO3jCPFHGbichk0h8p36Km7X%2FG4%2BVCHojdsr4IzMDxxNWqEbIxSVSowoaMw%2FdDtwAY6pgEjSHdwqq74Q7xW4q1CGn50G4XzRl8XSFlmFTIhqlbFrQPxyBBftMrrn1gCe0seb0ftayuldzSJNyuG4nwuGYvzwGQJFr9LggtvrOIYcRrigFMUREY6ulsdB8OVlZ1w6YpcK1JJs8xzSMFbqmJq%2Fu6xVsVHoKZv%2FecgHkR4%2FKPTgB%2BMQ%2BEveHEThMyP3yDokgrT6LCDnJp8VPHcgHhNH%2BxMuEejMsu5&X-Amz-Signature=66aeeed394f46358759f5b1b5c2cd16c274c1035aed286b3dafa8ecfcadde40c&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/0bf8add3-bd24-4223-9f63-0aea074c7073/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFGCNR7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJs8XMdLeiEtaeG2PWXHPpHFXNzB4i6lRLKdbgxsgysQIgLXek826aWLuTE%2BM1sW79tafaOB8Ai0Xn1A%2FfuTqZdb4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBS3EgtNXBn6eVyRKSrcA7%2BDWmQd8pqPGqhZgvlsN9Q88PyN9DqqoRugRsfXmYkS8GLVLxRVY8lu6sUb3reXGpZ1B3KSBpSEBQDAZz7ImqEtECPpxOPGNifDbccn4xPPTgFfJ40P%2BxedXYkpsoFNupSse6K4h22358sGyHCfs0wwffq5fhc64baPXZZcnn%2FfFsBFtpFvMj0bEA5VJg0NEFViIMMv82CIfR6KYKgki3v%2BvLJtfzntfk8uhj6IXASLal9Tym%2B6R3uGlpUd3QVSanxPzY6BwD7Cm1uzTdZQKZiI%2FYqdD1Fn7KdUUdAXCjwQDTq849527G4A8ap1iI%2Fll5JOgqXLL5mEL1KZ1SgEu9v7revaUusc8kQb04H%2FxNzzj0wPbrgBsTJ%2FSUWDKKObjLziPc4dU2qrsaxLPYVFIjU%2FnicjWB%2FuVcVq1Kf3lNwmB9boQ8cF46XKME3qN0uOtG9nWBGkaLKvXY3Uf7v%2FMtbFB5epo65OkdDR8m21NLDcidduBzM%2BOM6ceOquxksWgPrPKkBZu4ug3A9XvBXMS4OkYOSpTN6%2BqP74iheTcAw%2FURfG%2FH6%2FqX02b28LYL3BHiFHYlpKvajeq5KiKZdcFyf%2F1ETnObscJa8hNjVsJMrToaYEixL3KBR6Rkt3MLHQ7cAGOqUB9Br63ombAJ2M6ZOaIHys6I4SBJKIxxUMWQSawqlXkdl7MpmLPHtZ6V5B1KqbKn2kvAV0rkTgP7ebW2kfWTziljyFkqVBziOD0%2FLONjfCQvYeHkddKW8WFQ8TxJAsr0y7iP%2BU4c3BLQbsV5CopaiqP3xKCCgtS4sEBqz93gFxKzknJhmqEBj4l103HruGoYp7Cv%2Bq0%2F52VPLB0CjGu6pkENIi39S%2F&X-Amz-Signature=759d4ec99bdc9a2436fbd77417f8750056a8b9a8310f27fa70097a85ae399782&X-Amz-SignedHeaders=host&x-id=GetObject)


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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8e1b23d6-8186-45b4-902e-c67bb9d9369b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKUJNCDI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJTR44DISHCl9CrkngcRYW4lCPzBlpOFWSz17hzfgWcAIhAJY1T2Fxfjm5NrdSUjYAYSffYfU3kqU%2FupJAvA3D%2Bs7HKv8DCF8QABoMNjM3NDIzMTgzODA1IgyTO6R36gHFU%2B1QaO0q3AML9cAvx40ny8jLXlGgDLQxLSz1mrn4Knka%2FyJisTMeqlHqym5%2FrjSO%2FqObG5YYBh9zk%2B21%2FzGBuNlZF0wYn71fMwjf5CC39kGK7F3fuQU9rct5S0qyFFckUXWQzRkOXz2mtZFkn8jvk4tHMTWvyUa2l7I9zhQuz6uyMmbolorHPfL3o%2FjMlufYkQTFGSxotpV5MoySsM5M4zr%2BJnjjVUAR7l4vqmoq6WgOCRN4A4ljnNrTy0HBZeo2FOsx72BOyFxBCa4xw0wF2nLh9U4bSwjVlVymFQ6vGwKyDfulaFQqa%2Bt93sL1R4jdhyvxRysdgmjPiR%2F2K4ARL5yrbpgCJ%2BCPw66OUzGszRQLAvM9D%2BJ6r9dhY32ivzmg0wrhI18jCIeX0%2FvAsdvs3SsWfni7tNsZYgp%2F5MrWEEESjJPK3%2BxHE%2BER%2FDR82O4U9An33L7ZXt0VfOg8X%2FJ%2FEWITvEJuP0srR0VmpEXyf%2BKkWOJE4hWuFtS6mVQSkf9u6bFXUpjTg1s0ZkZTgAxPUMGN4x7uYa1aW72qdTNVEKnqQUXatSOdFwK9pepGx3PJJQMSLFClxa5zpq5l%2BN3ie8BFy4oS5XeiX9niff6p71z4hHP1dsGLW7VfkqvkransqS%2FQTzCf0O3ABjqkAck7mex%2BrUzLa1Vce5uEC8sw7oHLtCSaGP3soiF384%2FMzuazMGAIXdG2Q9g2mD1UAZ1DenNZer33TGCp4Xw%2B7WtFJfHRlICYb3%2BUbxzL7on4O4qK8n1P1QnHutDY1mSYLc6izSuvjHNzqYS7WTel46aVAB095VlPD9HB%2FIDu9GlMpN6sJNkjHUVaCF4xB9WzPIFttQMjRdAdT%2BmZrszFehFOG6xg&X-Amz-Signature=dd2610fe3f4c3aa16eb2fc7adafc4cfdd3894c959fcc0b8993e2b962fe98ded5&X-Amz-SignedHeaders=host&x-id=GetObject)


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

