# 🍨 Section18 - Mock Exams

## Mock Exam1 Review

1. `mc-namespace` namespace에 세 개의 컨테이너를 가지는 `mc-pod`  생성. 첫 번째 컨테이너 이름은 `mc-pod-1` , `nginx:1-alpine` 이미지 실행 `NODE_NAME` 환경 변수를 노드 이름으로 설정해야 함. 두 번째 컨테이너의 이름은  `mc-pod-2`, `busybox:1` 이미지로 실행,  `date` 명령어의 출력을 매 초마다  `/var/log/shared/date.log`파일에 지속적으로 기록해야 함. 세 번째 컨테이너는  `mc-pod-3`,  `busybox:1` 이미지로 실행, 두 번째 컨테이너에서 생성된 `date.log` 파일의 내용을 출력. 공유되고 비영구적인 볼륨 사용. → emptyDir

    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: mc-pod
      namespace: mc-namespace
    spec:
      containers:
        - name: mc-pod-1
          image: nginx:1-alpine
          env:
            - name: NODE_NAME
              valueFrom:
                fieldRef:
                  fieldPath: spec.nodeName
        - name: mc-pod-2
          image: busybox:1
          volumeMounts:
            - name: shared-volume
              mountPath: /var/log/shared
          command:
            - "sh"
            - "-c"
            - "while true; do date >> /var/log/shared/date.log; sleep 1; done"
        - name: mc-pod-3
          image: busybox:1
          command:
            - "sh"
            - "-c"
            - "tail -f /var/log/shared/date.log"
          volumeMounts:
            - name: shared-volume
              mountPath: /var/log/shared
      volumes:
        - name: shared-volume
          emptyDir: {}
    ```

2. `username: bob` , `password: caleston123` 인증 정보를 사용하여 ssh로 node01 접속.  관리자로 node01에 kubernetes 설치할 준비 필요. 단계 중 하나는 container runtime 설치하기. /root에 위치하는 cri-docker_0.3.16.3-0.debian.deb 패키지 설치. cri-docker 서비스가 실행 중이고 부팅 시 시작할 수 있도록 설정.

    ```shell
    ssh bob@node01
    
    dpkg -i /root/cri-docker_0.3.16.3-0.debian.deb
    
    systemctl
    ```

1. VPA 생성.
1. kk-ns 네임스페이스에 배포한 nginx. helm 차트 업그레이드.

## Mock Exam2 Review


## Mock Exam3 Review

