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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/977ac0a0-6f7e-4aae-99ae-af3cd4e061cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFO4IFH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFXV9syvdcYzEpEva2ncUQqsvV0qOTmGqIZ4BSBAmCBwIgExnzH7mtGplZkPdtLFGdIH20nCpV%2B3%2BZ1VBHItC%2B%2B7gqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjscFaTP3NgyXZ3JCrcAyjEQ2fFgrvEorke7tXpQuuJzU6uz2HoBQPJ3Ik5uw0BaOXC57trgT7%2FOTOwnQeC1aQ5qvVeKuzH0cSHwCVBV6WxFkWUMCPLwkPFY9PsxLJ68d6kCWNFDJTb1XDZkAllaoqknV3%2Bb8IKLA%2F40FDQF1StCYOPVu3dlHScNR1FJkS3SjFtadBaXuHebgLy9b8N%2BiESTTRnd4QP9FPoHcwh7%2FniIaNKCx9TDa9cubD%2BJbKoWhMwWb%2Fe8dX6BaOMPJPwN6r84VGcVkKSalibOyPoLcCs9qhPB275PfLGmH5aPKnySNOkCeIRNDdyDGpX%2BwyUWjLU49n%2BUp%2BwkGVxm8ZJcMAVCBit7oJU%2Bap9oJl3wbbjxPhyL2ayqEOYRVG8hkotmaxi8NfLPFG9wA52p96bEdmaPB%2FqwSq7UHPzWSLvKNTYRUw5yD1%2BWIV7E7FJaSXJOY7Vd1yIMyv4JQzGez1lPxSg%2BfLar%2Bv6z9xDzLRAIMIiP6TwziQHdnmjyH9JIgCLOz4C5AT%2BFlSfuX0aHlxS%2F6YhvdJpk6Vtgwft64y3X%2BPiC4Xfu90eJF9EY7YKyWmuCzoO9MLaFeFLGoCjtam5MTL08cxVckP1SKTun%2FJESUgo5rz9lKHPYdWS%2BG5EMIKO3r0GOqUBDmep1tf8HPRauEMTqTGUOOufPTkO6nnzJa3hbvQM0SSk3qCCDCwMJovkSLfp3Qg%2BdSaEWeeB17Epjdm9H9xsbS1G8dymWY%2BrXN1LuoG3fo4zmKsxZbrSNuKDECDHzZwZOWMAhz9%2Fv4A1omUSrMQcEEFKHKKE7HIV98x0sJpif7GgXPD6NiURQvRf%2F0Volt8ZTCfaJ3RJg%2BPCHGzfvcPtQdH68Keh&X-Amz-Signature=0187a52628eef6170d91a69776a61fb8df9cd828899b88a9c4315b3926711380&X-Amz-SignedHeaders=host&x-id=GetObject)

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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/05c9a172-cfaa-4570-8937-288b1d07d12d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFO4IFH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFXV9syvdcYzEpEva2ncUQqsvV0qOTmGqIZ4BSBAmCBwIgExnzH7mtGplZkPdtLFGdIH20nCpV%2B3%2BZ1VBHItC%2B%2B7gqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjscFaTP3NgyXZ3JCrcAyjEQ2fFgrvEorke7tXpQuuJzU6uz2HoBQPJ3Ik5uw0BaOXC57trgT7%2FOTOwnQeC1aQ5qvVeKuzH0cSHwCVBV6WxFkWUMCPLwkPFY9PsxLJ68d6kCWNFDJTb1XDZkAllaoqknV3%2Bb8IKLA%2F40FDQF1StCYOPVu3dlHScNR1FJkS3SjFtadBaXuHebgLy9b8N%2BiESTTRnd4QP9FPoHcwh7%2FniIaNKCx9TDa9cubD%2BJbKoWhMwWb%2Fe8dX6BaOMPJPwN6r84VGcVkKSalibOyPoLcCs9qhPB275PfLGmH5aPKnySNOkCeIRNDdyDGpX%2BwyUWjLU49n%2BUp%2BwkGVxm8ZJcMAVCBit7oJU%2Bap9oJl3wbbjxPhyL2ayqEOYRVG8hkotmaxi8NfLPFG9wA52p96bEdmaPB%2FqwSq7UHPzWSLvKNTYRUw5yD1%2BWIV7E7FJaSXJOY7Vd1yIMyv4JQzGez1lPxSg%2BfLar%2Bv6z9xDzLRAIMIiP6TwziQHdnmjyH9JIgCLOz4C5AT%2BFlSfuX0aHlxS%2F6YhvdJpk6Vtgwft64y3X%2BPiC4Xfu90eJF9EY7YKyWmuCzoO9MLaFeFLGoCjtam5MTL08cxVckP1SKTun%2FJESUgo5rz9lKHPYdWS%2BG5EMIKO3r0GOqUBDmep1tf8HPRauEMTqTGUOOufPTkO6nnzJa3hbvQM0SSk3qCCDCwMJovkSLfp3Qg%2BdSaEWeeB17Epjdm9H9xsbS1G8dymWY%2BrXN1LuoG3fo4zmKsxZbrSNuKDECDHzZwZOWMAhz9%2Fv4A1omUSrMQcEEFKHKKE7HIV98x0sJpif7GgXPD6NiURQvRf%2F0Volt8ZTCfaJ3RJg%2BPCHGzfvcPtQdH68Keh&X-Amz-Signature=7ae32448e2e1406416b5478b914bcc70e84c3b9bc28e599f1e0575269a73c36c&X-Amz-SignedHeaders=host&x-id=GetObject)


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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/9e974328-4af4-45d2-80e0-fea968f6a9a9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFO4IFH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFXV9syvdcYzEpEva2ncUQqsvV0qOTmGqIZ4BSBAmCBwIgExnzH7mtGplZkPdtLFGdIH20nCpV%2B3%2BZ1VBHItC%2B%2B7gqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjscFaTP3NgyXZ3JCrcAyjEQ2fFgrvEorke7tXpQuuJzU6uz2HoBQPJ3Ik5uw0BaOXC57trgT7%2FOTOwnQeC1aQ5qvVeKuzH0cSHwCVBV6WxFkWUMCPLwkPFY9PsxLJ68d6kCWNFDJTb1XDZkAllaoqknV3%2Bb8IKLA%2F40FDQF1StCYOPVu3dlHScNR1FJkS3SjFtadBaXuHebgLy9b8N%2BiESTTRnd4QP9FPoHcwh7%2FniIaNKCx9TDa9cubD%2BJbKoWhMwWb%2Fe8dX6BaOMPJPwN6r84VGcVkKSalibOyPoLcCs9qhPB275PfLGmH5aPKnySNOkCeIRNDdyDGpX%2BwyUWjLU49n%2BUp%2BwkGVxm8ZJcMAVCBit7oJU%2Bap9oJl3wbbjxPhyL2ayqEOYRVG8hkotmaxi8NfLPFG9wA52p96bEdmaPB%2FqwSq7UHPzWSLvKNTYRUw5yD1%2BWIV7E7FJaSXJOY7Vd1yIMyv4JQzGez1lPxSg%2BfLar%2Bv6z9xDzLRAIMIiP6TwziQHdnmjyH9JIgCLOz4C5AT%2BFlSfuX0aHlxS%2F6YhvdJpk6Vtgwft64y3X%2BPiC4Xfu90eJF9EY7YKyWmuCzoO9MLaFeFLGoCjtam5MTL08cxVckP1SKTun%2FJESUgo5rz9lKHPYdWS%2BG5EMIKO3r0GOqUBDmep1tf8HPRauEMTqTGUOOufPTkO6nnzJa3hbvQM0SSk3qCCDCwMJovkSLfp3Qg%2BdSaEWeeB17Epjdm9H9xsbS1G8dymWY%2BrXN1LuoG3fo4zmKsxZbrSNuKDECDHzZwZOWMAhz9%2Fv4A1omUSrMQcEEFKHKKE7HIV98x0sJpif7GgXPD6NiURQvRf%2F0Volt8ZTCfaJ3RJg%2BPCHGzfvcPtQdH68Keh&X-Amz-Signature=bd62d463464929466841a8608bf39f4daa0f730920b995c6674014d66212ea72&X-Amz-SignedHeaders=host&x-id=GetObject)

1. /root/webapp-color에 주어진 Dockerfile2 관찰. 컨테이너 시작 시 명령어.
→ python app.py —color red

> 💡 ENTRYPOINT 뒤에 CMD가 붙음.  kuberentes로 생각하면 command 뒤에 args가 붙는 것.


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a7a73a61-b2e0-4efa-873f-fd3273a38150/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFO4IFH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFXV9syvdcYzEpEva2ncUQqsvV0qOTmGqIZ4BSBAmCBwIgExnzH7mtGplZkPdtLFGdIH20nCpV%2B3%2BZ1VBHItC%2B%2B7gqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjscFaTP3NgyXZ3JCrcAyjEQ2fFgrvEorke7tXpQuuJzU6uz2HoBQPJ3Ik5uw0BaOXC57trgT7%2FOTOwnQeC1aQ5qvVeKuzH0cSHwCVBV6WxFkWUMCPLwkPFY9PsxLJ68d6kCWNFDJTb1XDZkAllaoqknV3%2Bb8IKLA%2F40FDQF1StCYOPVu3dlHScNR1FJkS3SjFtadBaXuHebgLy9b8N%2BiESTTRnd4QP9FPoHcwh7%2FniIaNKCx9TDa9cubD%2BJbKoWhMwWb%2Fe8dX6BaOMPJPwN6r84VGcVkKSalibOyPoLcCs9qhPB275PfLGmH5aPKnySNOkCeIRNDdyDGpX%2BwyUWjLU49n%2BUp%2BwkGVxm8ZJcMAVCBit7oJU%2Bap9oJl3wbbjxPhyL2ayqEOYRVG8hkotmaxi8NfLPFG9wA52p96bEdmaPB%2FqwSq7UHPzWSLvKNTYRUw5yD1%2BWIV7E7FJaSXJOY7Vd1yIMyv4JQzGez1lPxSg%2BfLar%2Bv6z9xDzLRAIMIiP6TwziQHdnmjyH9JIgCLOz4C5AT%2BFlSfuX0aHlxS%2F6YhvdJpk6Vtgwft64y3X%2BPiC4Xfu90eJF9EY7YKyWmuCzoO9MLaFeFLGoCjtam5MTL08cxVckP1SKTun%2FJESUgo5rz9lKHPYdWS%2BG5EMIKO3r0GOqUBDmep1tf8HPRauEMTqTGUOOufPTkO6nnzJa3hbvQM0SSk3qCCDCwMJovkSLfp3Qg%2BdSaEWeeB17Epjdm9H9xsbS1G8dymWY%2BrXN1LuoG3fo4zmKsxZbrSNuKDECDHzZwZOWMAhz9%2Fv4A1omUSrMQcEEFKHKKE7HIV98x0sJpif7GgXPD6NiURQvRf%2F0Volt8ZTCfaJ3RJg%2BPCHGzfvcPtQdH68Keh&X-Amz-Signature=df4beb07eb7cf688ef26be77a9b11881d252026569ce604f703245fb9295df96&X-Amz-SignedHeaders=host&x-id=GetObject)

1. webapp-color-2 디렉토리 안 두 파일 관찰. 컨테이너 시작 시 명령어. 디렉토리 안 Dockerfile로부터 만든 이미지라 가정.
→ —color green

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a9b0e3d1-ad6b-430e-93a5-81bb9a82fa08/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFO4IFH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFXV9syvdcYzEpEva2ncUQqsvV0qOTmGqIZ4BSBAmCBwIgExnzH7mtGplZkPdtLFGdIH20nCpV%2B3%2BZ1VBHItC%2B%2B7gqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjscFaTP3NgyXZ3JCrcAyjEQ2fFgrvEorke7tXpQuuJzU6uz2HoBQPJ3Ik5uw0BaOXC57trgT7%2FOTOwnQeC1aQ5qvVeKuzH0cSHwCVBV6WxFkWUMCPLwkPFY9PsxLJ68d6kCWNFDJTb1XDZkAllaoqknV3%2Bb8IKLA%2F40FDQF1StCYOPVu3dlHScNR1FJkS3SjFtadBaXuHebgLy9b8N%2BiESTTRnd4QP9FPoHcwh7%2FniIaNKCx9TDa9cubD%2BJbKoWhMwWb%2Fe8dX6BaOMPJPwN6r84VGcVkKSalibOyPoLcCs9qhPB275PfLGmH5aPKnySNOkCeIRNDdyDGpX%2BwyUWjLU49n%2BUp%2BwkGVxm8ZJcMAVCBit7oJU%2Bap9oJl3wbbjxPhyL2ayqEOYRVG8hkotmaxi8NfLPFG9wA52p96bEdmaPB%2FqwSq7UHPzWSLvKNTYRUw5yD1%2BWIV7E7FJaSXJOY7Vd1yIMyv4JQzGez1lPxSg%2BfLar%2Bv6z9xDzLRAIMIiP6TwziQHdnmjyH9JIgCLOz4C5AT%2BFlSfuX0aHlxS%2F6YhvdJpk6Vtgwft64y3X%2BPiC4Xfu90eJF9EY7YKyWmuCzoO9MLaFeFLGoCjtam5MTL08cxVckP1SKTun%2FJESUgo5rz9lKHPYdWS%2BG5EMIKO3r0GOqUBDmep1tf8HPRauEMTqTGUOOufPTkO6nnzJa3hbvQM0SSk3qCCDCwMJovkSLfp3Qg%2BdSaEWeeB17Epjdm9H9xsbS1G8dymWY%2BrXN1LuoG3fo4zmKsxZbrSNuKDECDHzZwZOWMAhz9%2Fv4A1omUSrMQcEEFKHKKE7HIV98x0sJpif7GgXPD6NiURQvRf%2F0Volt8ZTCfaJ3RJg%2BPCHGzfvcPtQdH68Keh&X-Amz-Signature=c5cb5648338862298d9307521c6fb32e819f3fd2c784fd4307453abc7d742590&X-Amz-SignedHeaders=host&x-id=GetObject)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/d072cded-54c9-4901-8066-9f80315a1b60/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFO4IFH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFXV9syvdcYzEpEva2ncUQqsvV0qOTmGqIZ4BSBAmCBwIgExnzH7mtGplZkPdtLFGdIH20nCpV%2B3%2BZ1VBHItC%2B%2B7gqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjscFaTP3NgyXZ3JCrcAyjEQ2fFgrvEorke7tXpQuuJzU6uz2HoBQPJ3Ik5uw0BaOXC57trgT7%2FOTOwnQeC1aQ5qvVeKuzH0cSHwCVBV6WxFkWUMCPLwkPFY9PsxLJ68d6kCWNFDJTb1XDZkAllaoqknV3%2Bb8IKLA%2F40FDQF1StCYOPVu3dlHScNR1FJkS3SjFtadBaXuHebgLy9b8N%2BiESTTRnd4QP9FPoHcwh7%2FniIaNKCx9TDa9cubD%2BJbKoWhMwWb%2Fe8dX6BaOMPJPwN6r84VGcVkKSalibOyPoLcCs9qhPB275PfLGmH5aPKnySNOkCeIRNDdyDGpX%2BwyUWjLU49n%2BUp%2BwkGVxm8ZJcMAVCBit7oJU%2Bap9oJl3wbbjxPhyL2ayqEOYRVG8hkotmaxi8NfLPFG9wA52p96bEdmaPB%2FqwSq7UHPzWSLvKNTYRUw5yD1%2BWIV7E7FJaSXJOY7Vd1yIMyv4JQzGez1lPxSg%2BfLar%2Bv6z9xDzLRAIMIiP6TwziQHdnmjyH9JIgCLOz4C5AT%2BFlSfuX0aHlxS%2F6YhvdJpk6Vtgwft64y3X%2BPiC4Xfu90eJF9EY7YKyWmuCzoO9MLaFeFLGoCjtam5MTL08cxVckP1SKTun%2FJESUgo5rz9lKHPYdWS%2BG5EMIKO3r0GOqUBDmep1tf8HPRauEMTqTGUOOufPTkO6nnzJa3hbvQM0SSk3qCCDCwMJovkSLfp3Qg%2BdSaEWeeB17Epjdm9H9xsbS1G8dymWY%2BrXN1LuoG3fo4zmKsxZbrSNuKDECDHzZwZOWMAhz9%2Fv4A1omUSrMQcEEFKHKKE7HIV98x0sJpif7GgXPD6NiURQvRf%2F0Volt8ZTCfaJ3RJg%2BPCHGzfvcPtQdH68Keh&X-Amz-Signature=f317bd63854eb165f919d94b7c59d2e53981ad229d3dc0f3d8372385952e06a2&X-Amz-SignedHeaders=host&x-id=GetObject)

1. webapp-color-3 디렉토리 안 두 파일 관찰. 컨테이너 시작 시 명령어. 디렉토리 안 Dockerfile로부터 만든 이미지라 가정.
→ python [app.py](http://app.py/) —color pink

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e62ca764-701e-481a-ac07-919d52c15a4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFO4IFH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFXV9syvdcYzEpEva2ncUQqsvV0qOTmGqIZ4BSBAmCBwIgExnzH7mtGplZkPdtLFGdIH20nCpV%2B3%2BZ1VBHItC%2B%2B7gqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjscFaTP3NgyXZ3JCrcAyjEQ2fFgrvEorke7tXpQuuJzU6uz2HoBQPJ3Ik5uw0BaOXC57trgT7%2FOTOwnQeC1aQ5qvVeKuzH0cSHwCVBV6WxFkWUMCPLwkPFY9PsxLJ68d6kCWNFDJTb1XDZkAllaoqknV3%2Bb8IKLA%2F40FDQF1StCYOPVu3dlHScNR1FJkS3SjFtadBaXuHebgLy9b8N%2BiESTTRnd4QP9FPoHcwh7%2FniIaNKCx9TDa9cubD%2BJbKoWhMwWb%2Fe8dX6BaOMPJPwN6r84VGcVkKSalibOyPoLcCs9qhPB275PfLGmH5aPKnySNOkCeIRNDdyDGpX%2BwyUWjLU49n%2BUp%2BwkGVxm8ZJcMAVCBit7oJU%2Bap9oJl3wbbjxPhyL2ayqEOYRVG8hkotmaxi8NfLPFG9wA52p96bEdmaPB%2FqwSq7UHPzWSLvKNTYRUw5yD1%2BWIV7E7FJaSXJOY7Vd1yIMyv4JQzGez1lPxSg%2BfLar%2Bv6z9xDzLRAIMIiP6TwziQHdnmjyH9JIgCLOz4C5AT%2BFlSfuX0aHlxS%2F6YhvdJpk6Vtgwft64y3X%2BPiC4Xfu90eJF9EY7YKyWmuCzoO9MLaFeFLGoCjtam5MTL08cxVckP1SKTun%2FJESUgo5rz9lKHPYdWS%2BG5EMIKO3r0GOqUBDmep1tf8HPRauEMTqTGUOOufPTkO6nnzJa3hbvQM0SSk3qCCDCwMJovkSLfp3Qg%2BdSaEWeeB17Epjdm9H9xsbS1G8dymWY%2BrXN1LuoG3fo4zmKsxZbrSNuKDECDHzZwZOWMAhz9%2Fv4A1omUSrMQcEEFKHKKE7HIV98x0sJpif7GgXPD6NiURQvRf%2F0Volt8ZTCfaJ3RJg%2BPCHGzfvcPtQdH68Keh&X-Amz-Signature=997da3db27d2e472f2e40f9dffbdad6d61642bdd5cfac47f0f9e75844eccd165&X-Amz-SignedHeaders=host&x-id=GetObject)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/904b3c5a-88ac-4741-a78d-1f6db17fc6c5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFO4IFH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFXV9syvdcYzEpEva2ncUQqsvV0qOTmGqIZ4BSBAmCBwIgExnzH7mtGplZkPdtLFGdIH20nCpV%2B3%2BZ1VBHItC%2B%2B7gqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjscFaTP3NgyXZ3JCrcAyjEQ2fFgrvEorke7tXpQuuJzU6uz2HoBQPJ3Ik5uw0BaOXC57trgT7%2FOTOwnQeC1aQ5qvVeKuzH0cSHwCVBV6WxFkWUMCPLwkPFY9PsxLJ68d6kCWNFDJTb1XDZkAllaoqknV3%2Bb8IKLA%2F40FDQF1StCYOPVu3dlHScNR1FJkS3SjFtadBaXuHebgLy9b8N%2BiESTTRnd4QP9FPoHcwh7%2FniIaNKCx9TDa9cubD%2BJbKoWhMwWb%2Fe8dX6BaOMPJPwN6r84VGcVkKSalibOyPoLcCs9qhPB275PfLGmH5aPKnySNOkCeIRNDdyDGpX%2BwyUWjLU49n%2BUp%2BwkGVxm8ZJcMAVCBit7oJU%2Bap9oJl3wbbjxPhyL2ayqEOYRVG8hkotmaxi8NfLPFG9wA52p96bEdmaPB%2FqwSq7UHPzWSLvKNTYRUw5yD1%2BWIV7E7FJaSXJOY7Vd1yIMyv4JQzGez1lPxSg%2BfLar%2Bv6z9xDzLRAIMIiP6TwziQHdnmjyH9JIgCLOz4C5AT%2BFlSfuX0aHlxS%2F6YhvdJpk6Vtgwft64y3X%2BPiC4Xfu90eJF9EY7YKyWmuCzoO9MLaFeFLGoCjtam5MTL08cxVckP1SKTun%2FJESUgo5rz9lKHPYdWS%2BG5EMIKO3r0GOqUBDmep1tf8HPRauEMTqTGUOOufPTkO6nnzJa3hbvQM0SSk3qCCDCwMJovkSLfp3Qg%2BdSaEWeeB17Epjdm9H9xsbS1G8dymWY%2BrXN1LuoG3fo4zmKsxZbrSNuKDECDHzZwZOWMAhz9%2Fv4A1omUSrMQcEEFKHKKE7HIV98x0sJpif7GgXPD6NiURQvRf%2F0Volt8ZTCfaJ3RJg%2BPCHGzfvcPtQdH68Keh&X-Amz-Signature=62098ed5c28be9257062107d9ac7fff03909aa96a7ae7cbf85bef04d00506ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 주어진 명세서가지고 Pod 생성. 기본적으로 blue 배경이 보여짐. 주어진 command 라인 arguments를 green으로 바꿈.
Pod 이름 - webapp-green
Image - kodekloud/webapp-color
Command line arguemnts - —color=green

```bash
kubectl run webapp-green --image=kodekloud/webapp-color -- --color green
```


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/95d73da8-076e-4fd5-9512-26ae91309514/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFO4IFH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFXV9syvdcYzEpEva2ncUQqsvV0qOTmGqIZ4BSBAmCBwIgExnzH7mtGplZkPdtLFGdIH20nCpV%2B3%2BZ1VBHItC%2B%2B7gqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjscFaTP3NgyXZ3JCrcAyjEQ2fFgrvEorke7tXpQuuJzU6uz2HoBQPJ3Ik5uw0BaOXC57trgT7%2FOTOwnQeC1aQ5qvVeKuzH0cSHwCVBV6WxFkWUMCPLwkPFY9PsxLJ68d6kCWNFDJTb1XDZkAllaoqknV3%2Bb8IKLA%2F40FDQF1StCYOPVu3dlHScNR1FJkS3SjFtadBaXuHebgLy9b8N%2BiESTTRnd4QP9FPoHcwh7%2FniIaNKCx9TDa9cubD%2BJbKoWhMwWb%2Fe8dX6BaOMPJPwN6r84VGcVkKSalibOyPoLcCs9qhPB275PfLGmH5aPKnySNOkCeIRNDdyDGpX%2BwyUWjLU49n%2BUp%2BwkGVxm8ZJcMAVCBit7oJU%2Bap9oJl3wbbjxPhyL2ayqEOYRVG8hkotmaxi8NfLPFG9wA52p96bEdmaPB%2FqwSq7UHPzWSLvKNTYRUw5yD1%2BWIV7E7FJaSXJOY7Vd1yIMyv4JQzGez1lPxSg%2BfLar%2Bv6z9xDzLRAIMIiP6TwziQHdnmjyH9JIgCLOz4C5AT%2BFlSfuX0aHlxS%2F6YhvdJpk6Vtgwft64y3X%2BPiC4Xfu90eJF9EY7YKyWmuCzoO9MLaFeFLGoCjtam5MTL08cxVckP1SKTun%2FJESUgo5rz9lKHPYdWS%2BG5EMIKO3r0GOqUBDmep1tf8HPRauEMTqTGUOOufPTkO6nnzJa3hbvQM0SSk3qCCDCwMJovkSLfp3Qg%2BdSaEWeeB17Epjdm9H9xsbS1G8dymWY%2BrXN1LuoG3fo4zmKsxZbrSNuKDECDHzZwZOWMAhz9%2Fv4A1omUSrMQcEEFKHKKE7HIV98x0sJpif7GgXPD6NiURQvRf%2F0Volt8ZTCfaJ3RJg%2BPCHGzfvcPtQdH68Keh&X-Amz-Signature=18c150b18dc58898e1ef91e98698696df740606a7bf064a0a8a1b30a47b65d0b&X-Amz-SignedHeaders=host&x-id=GetObject)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/1ec7b2df-e700-423a-a17c-9c153e2d04d0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFO4IFH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFXV9syvdcYzEpEva2ncUQqsvV0qOTmGqIZ4BSBAmCBwIgExnzH7mtGplZkPdtLFGdIH20nCpV%2B3%2BZ1VBHItC%2B%2B7gqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjscFaTP3NgyXZ3JCrcAyjEQ2fFgrvEorke7tXpQuuJzU6uz2HoBQPJ3Ik5uw0BaOXC57trgT7%2FOTOwnQeC1aQ5qvVeKuzH0cSHwCVBV6WxFkWUMCPLwkPFY9PsxLJ68d6kCWNFDJTb1XDZkAllaoqknV3%2Bb8IKLA%2F40FDQF1StCYOPVu3dlHScNR1FJkS3SjFtadBaXuHebgLy9b8N%2BiESTTRnd4QP9FPoHcwh7%2FniIaNKCx9TDa9cubD%2BJbKoWhMwWb%2Fe8dX6BaOMPJPwN6r84VGcVkKSalibOyPoLcCs9qhPB275PfLGmH5aPKnySNOkCeIRNDdyDGpX%2BwyUWjLU49n%2BUp%2BwkGVxm8ZJcMAVCBit7oJU%2Bap9oJl3wbbjxPhyL2ayqEOYRVG8hkotmaxi8NfLPFG9wA52p96bEdmaPB%2FqwSq7UHPzWSLvKNTYRUw5yD1%2BWIV7E7FJaSXJOY7Vd1yIMyv4JQzGez1lPxSg%2BfLar%2Bv6z9xDzLRAIMIiP6TwziQHdnmjyH9JIgCLOz4C5AT%2BFlSfuX0aHlxS%2F6YhvdJpk6Vtgwft64y3X%2BPiC4Xfu90eJF9EY7YKyWmuCzoO9MLaFeFLGoCjtam5MTL08cxVckP1SKTun%2FJESUgo5rz9lKHPYdWS%2BG5EMIKO3r0GOqUBDmep1tf8HPRauEMTqTGUOOufPTkO6nnzJa3hbvQM0SSk3qCCDCwMJovkSLfp3Qg%2BdSaEWeeB17Epjdm9H9xsbS1G8dymWY%2BrXN1LuoG3fo4zmKsxZbrSNuKDECDHzZwZOWMAhz9%2Fv4A1omUSrMQcEEFKHKKE7HIV98x0sJpif7GgXPD6NiURQvRf%2F0Volt8ZTCfaJ3RJg%2BPCHGzfvcPtQdH68Keh&X-Amz-Signature=3f097f796ae74c76cd416e6e12ae90169f3f225bac857f8da837cdda36cc63c5&X-Amz-SignedHeaders=host&x-id=GetObject)


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


## Demo: Encrypting Secret Data at Rest


## Scale Applications


## Multi Container Pods


## Practice test - Multi Container Pods


## Multi-container Pods Design Patterns


## InitContainers


## Practice Test - Init Containers

