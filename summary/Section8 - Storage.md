# 🍨 Section8 - Storage

## Storage in Docker


Docker는 파일을 어디에 저장하는지 무슨 형태로 저장하는지


도커가 이미지를 빌드할 때 계층화된 구조로 빌드.


Dockerfile의 각 명령어 줄은 이전 레이어에서 변경된 내용만으로 Docker 이미지에 새 레이어를 생성.


각 레이어는 이전 레이어에서 변경사항만 저장하기 때문에 사이즈도 반영됨.


계층호된 구조의 장점 → 똑같은 이미지를 사용하여 의존성도 같지만 다른 소스 코드를 사용하고 다른 entry point 사용. → docker build 명령어를 실행하면 캐시로 변경되지 않은 부분을 만들고 변경된 부분부터 새로 만듦. 빠르고 효율적.


docker run 명령어를 사용하여 위에서 만든 이미지를 기반으로 컨테이너를 실행하면, Docker는 이러한 레이어를 기반으로 컨테이너를 생성하고 이미지 레이어  위에 새로운 쓰기 가능한 레이어를 생성.


쓰기 가능한 레이어는 애플리케이션이 작성한 로그 파일, 컨테이너가 작성한 임시 파일, 또는 사용자가 수정한 파일 등 컨테이너가 생성한 데이터를 저장하는 데 사용. → 이 레이어의 수명은 컨테이너가 살아있는 동안만. 컨테이너가 파괴되면, 이 레이어와 그 안에 저장된 모든 변경 사항도 파괴됨. → 이 이미지를 사용하여 생성된 모든 컨테이너가 동일한 이미지 레이어를 공유한다는 점을 기억해둬야 함.


새로 생성된 컨테이너에 로그인하여 temp.txt라는 파일을 생성한다고 하면 컨테이너 레이어에 해당 파일이 생성되어 읽고 쓸 수 있음.


코드는 이미지의 일부이고 컨테이너가 실행된 후에만 읽음.


소스 코드를 변경 테스트를 위해 수정하려면? → 같은 이미지 레이어는 이미지에서 만들어진 다중 컨테이너 사이를 공유. →  그렇다면 컨테이너 내부에서 app.py파일을 수정할 수 없는 것인가? → ❌. 파일은 여전히 수정할 수 있지만 수정된 파일을 저장하기 전에 Docker가 읽기 쓰기 레이어에 파일의 복사본을 자동으로 생성하면 읽기 쓰기 레이어에서 다른 버전의 파일을 수정할 것.


향후 모든 수정 작업은 읽기 쓰기 레이어에 있는 파일 사본으로 수행됨. → copy-on-write mechanism이라고 함.


이미지 레이어만 읽힌다는 것은 이러한 레이어의 파일들이 이미지 자체에서 수정되지는 않는 것을 의미. → docker build 명령어를 사용하여 이미지를 재구성할 때까지 이미지는 항상 동일하게 유지됨.


container를 제거하면 무슨 일이 일어나는가? → 컨테이너 레이어에 저장된 모든 데이터는 삭제됨. app.py에 변경한 내용과 새로 만든 임시 파일도 삭제됨.


데이터를 유지하고 싶다면? 데이터베이스를 사용해 작업 중이고 컨테이너에서 생성된 데이터를 보존하고 싶다면 컨테이너에 persistent volume을 추가할 수 있음. 


`docker volume create` 명령어를 사용해 volume을 만들 수 있음.


`docker volume create data_volume` 명령어를 실행할 때 `var/lib/docker/volumes` 디렉토리 아래에 data_volume 이라 불리는 폴더가 생성됨.


이 볼륨을 -v 옵션을 사용하여 도커 컨테이너를 다시 작성할 때 volume을 마운트할 수 있음.


`docker run -v` 새로 생성된 volume 이름:컨테이너 내부의 위치를 명시하면 됨. 이 위치는 SQL이 데이터를 저장하는 기본 위치.


컨테이너가 파괴되더라도 데이터는 여전히 남아 있음. 


docker run 명령어를 실행하기 전에 볼륨을 생성하지 않는다면? → 예를 들어, 아직 생성되지 않은 data_volume2를 가진 mysql 컨테이너의 인스턴스를 만들기 위해 docker run을 실행한다면 docker는 자동적으로 data_volume2라는 이름을 가진 volume을 생성하고 컨테이너에 마운트함. `var/lib/docker/volumes` 폴더의 내용을 나열하면 모든 볼륨을 볼 수 있음.


그러나 다른 위치에 이미 우리의 데이터가 있다면? 예를 들어 /data에 docker의 docker host에 외부 스토리지가 있다면 데이터베이스 데이터를 기본 `var/lib/docker/volumes`가 아닌 해당 볼륨에 저장하고자 함. → 이 경우, `docker run -v`를 사용하여 컨테이너를 실행하지만 마운트하려면 폴더에 대한 전체 경로를 제공해야 함. `/data/ mysql``:/var/lib/mysql mysql` 그리고 컨테이너가 만들어 질 것이다. 바인드 마운팅이라 함.


마운트는 두 가지 유형이 있음. 볼륨 마운팅, 바인드 마운팅.


볼륨 마운트는 볼륨 디렉토리에 볼륨을 마운트


바인드 마운트는 도커 호스트에 위치한 디렉토리 마운트.


요즘은 `-v`가 아닌 `-mount`를 사용. `--mount`는 더 장황하기 때문에 선호되는 방법. 따라서 각 매개변수를 키와 같은 값 형식으로 지정해야 함.


예를 들어, 이전 명령어는 소스 및 타겟 옵션 유형을 사용하여 `--mount` 옵션을 작성할 수 있음. 이 경우 호스트의 위치와 대상이 컨테이너의 위치와 결합하는 것. → 이 작업은 누가 수행하는가? 계층 구조를 유지하고, 쓰기 가능한 계층을 만들고,  복사 및 쓰기를 가능하게 하는 파일을 계층 간에 이동하는 등의 작업을 수행. → 스토리지 드라이버


docker는 계층화된 구조가 가능하도록 스토리지 드라이버를 사용한다.


흔히 스토리지 드라이버는 aufs, vtrfs, zfs, device mapper, overlay, overlay2가 있다.


OS에 따라 스토리지 드라이버 선택. ubuntu는 기본적으로 aufs. 반면에, fedora나 cent os같은 운영체제는 스토리지 드라이버 사용❌. 이런 경우, device mapper가 최선의 선택. 다른 스토리지 드라이버도 다른 성능과 안정성을 제공. → 애플리케이션과 조직의 필요에 맞는 것을 선택하는 것이 좋음. 


## Volume Driver Plugins in Docker


스토리지 드라이버는 이미지나 컨테이너 위 스토리지를 관리하도록 도움.


> 💡 스토리지 드라이버로 볼륨을 다룰 수 없음.


기본 볼륨 드라이버 플러그인은 로컬. 로컬 볼륨 플러그인은 docker host에 volume을 만들고 var/lib/docker/volumes 디렉토리 아래에 그것의 데이터를 저장하도록 도움.


azure file storage, google compute persistent disks, cluster fs, netapp, res-ray, portworx, vmware vsphere storage와 같이 third-party 솔루션으로 volume을 생성하도록 하는 다른 볼륨 드라이버 플러그인이 있음.


예를 들어, RES-Ray 스토리지 드라이버를 사용하여 Lsilon 및 ScaleO 또는 Google Persistent Disk, OpenStack Cinder와 같은 AWS EBS, S3, EMC 스토리지 배열에서 스토리지를 프로비저닝할 수 있음.


도커 컨테이너를 실행할 때 구체적인 볼륨 드라이버 선택 가능.


## Container Storage Interface(CSI)


과거에 Kubernetes는 컨테이너 런타임 엔진으로 도커 사용. 그리고 도커를 가지고 동작하는 모든 코드는 Kubernetes 소스 코드 내에 내장됨.


다른 컨테이너 실행 시간(예: RKT 및 CRI-O)이 도입됨에 따라, Kubernetes 소스 코드에 의존하지 않고 서로 다른 컨테이너 실행 시간으로 작업할 수 있도록 개방하고 지원을 확장하는 것이 중요해짐. → 컨테이너 런타임 인터페이스가 생김. → 컨테이너 런타임 인터페이스는 Kubernetes와 같은 오케스트레이션 솔루션이 Docker와 같은 컨테이너 런타임과 어떻게 통신하는지를 정의하는 표준.


새로운 컨테이너 런타임 인터페이스가 개발되면 그것들은 단순히 CRI 표준을 따를 수 있으며,  새로운 컨테이너 런타임은 Kubernetes 팀의 개발자들과 함께 작업하거나  Kubernetes와 함께 작동할 것.


컨테이너 스토리지 인터페이스는 다중 스토리지 솔루션을 지원하도록 개발됨.


CSI를 사용하면 Kubernetes와 사용할 수 있는 자신의 스토리지 드라이버를 직접 작성할 수 있음.


Portworx, Amazon EBS, Azure Disk, Dell EMC Isilon, PowerMax, Unity, XtremIO, NetApp, Nutanix, HPE, Hitachi, Pure Storage → 자체 CSI 드라이버를 가짐.


CSI는 Kubernetes 특정 표준이 아님. 범용 표준으로 설계됨. 구현되면 지원되는 플러그인을 가진 모든 스토리지 공급업체와 함께 모든 컨테이너 오케스트레이션 도구를 작동시킬 수 있음.


현재 Kubernets, Cloud Foundry, Mesos가 CSI에 합류.


CSI 특징

- SHOULD call to provision an new volume
- SHOULD call to delete a volume
- SHOULD call to place a workload that uses the volume onto a node.
- SHOULD provision a new volume on the storage
- SHOULD decommission a volume
- SHOULD make the volume available on a node

일련의  RPCs, 즉 remote procedure calls → 컨테이너 오케스트레이터라고 불리는 것. 이러한 것들은 storage drviers로 구현돼야 함.


Pod가 생성되고 볼륨을 요구할 때, Kubernetes의 경우 컨테이너 오케스트레이터는 생성 volume RPC를 요청한다. 그리고 volume 이름과 같은 세부  정보를 넘긴다.


스토리지 드라이버는 RPC를 구현해야 하고 요청을 다루고 storage 배열에 새 볼륨을 프로비저닝하고 수행 결과를 반환해야 한다.


유사하게 컨테이너 오케스트레이터는 volume을 지울 때 삭제 볼륨 RPC를 요청해야 한다. 그리고 스토리지 드라이버는 해당 호출이 이루어질 때 볼륨을 배열에서 해제하도록 코드를 구현해야 한다.


그리고 명세서에는 발신자가 보내야 할 매개변수, 솔루션이 받아야 할 것, 그리고 교환해야 할 오류 코드가 정확히 명시되어 있다.


## Volumes


Kubernetes도 Docker에서처럼 동작.


랜덤 숫자는 컨테이너 내부의 /opt /mount에 쓰이게 되며, 이는 실제로 호스트이 /data 디렉토리라는 볼륨에 있음.


Pod가 삭제될 때, 랜덤 번호를 가진 파일은 여전히 호스트에 남아있음.


다중 노드 클러스터의 겨우 추천하지  않음. → Pod가 모든 노드에서 /data 디렉토리를 사용하며, 모든 노드가 동일한 데이터를 가질 것이라고 예상되기 때문.


다른 서버를 가지기 때문에 실제로 같지는 않음. 같은 종류의 외부의 복제 클러스터 스토리지 솔루션을 구성하지 않는다면.


Kubernetes는 여러 종류의 다른 스토리지 솔루션을 지원. NFS, GlusterFS, Flocker, Fiber Channel, Ceph FS, SCALEIO나 AWS EBS, Azure Desk, File, Google Persistent Desk와 같은 퍼블릭 클라우드 솔루션과 같은.


예를 들어, AWS EBS로 volume을 구성한다면 hostPath 필드 대신


```yaml
volumes:
- name: data-volume
  
awsElasticBlockStore:

    
volumeID: <volume-id>

    
fsType: ext4
```


## Persistent Volumes


많은 사용자가 많은 Pod를 대규모 환경에서는 사용자가 각 Pod에 대해 매번 스토리지를 구성해야 함.


어떤 스토리지 솔루션을 사용하든, Pod를 배포하는 사용자는 자신의 환경에 있는 모든 Pod 정의 파일에 그것을 설정해야 함. 변경사항이 있을 때마다 사용자는 모든 pod에서 변경사항을 작성해야 함. → 스토리지를 더 중앙 집중식으로 관리하고 싶음. 관리자가 대용량 스토리지 풀을 생성한 다음 필요에 따라 사용자가 조각을 분할할 수 있도록 구성하고 싶음. → Persistent Volmes이 도움이 될 수 있는 부분.


Persistent Volume은 클러스터에 애플리케이션을 배포하는 사용자가 사용할 수 있도록 관리자가 구성한 클러스터 전체의 스토리지 볼륨 풀임.


PVC를 사용하여 풀에서 저장소를 선택할 수 있음.

> Persistent Volume 생성.

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-vol1
spec:
  accessModes:
    - ReadWriteOnce
  capacity:
    storage: 1Gi
  hostPath:
    path: /tmp/data
```


accessModes는 호스트에 어떻게 볼륨을 마운트할 것인지 정의. 지원되는 값은 ReadOnlyMany, ReadWriteOnce, ReadWriteMany가 있음.


capacity는 Persistent Volume에 예약된 스토리지의 크기를 명시.


volumeType은 노드의 로컬 디렉토리에서 스토리지를 사용하는 hostPath 옵션을 가지고 시작할 것. → 프로덕션 환경에서는 이 옵션 사용❌. hostPath 대신 지원되는 스토리지  솔루션 중 한 가지를 사용.


## Persistent Volume Claims


관리자는 일련의 persistent volumes  생성. 사용자는 스토리지를 사용하기 위해 Persistent volume claims 생성.


일단 persistent volume claims가 생성되면 kubenetes는 볼륨에 설정된 요청 및 속성에 따라 persistent volume을 클레임에 바인딩함.


모든 persistent volume claim은 단일 persistent volume에 바인딩함.


바인딩 과정 동안 kubernetes는 claim으로 요청된 충분한 용량을 가진 persistent volume을 찾을려고 함. access mode, volume mode, storage class 등 과 같은.


단일 claim에 대응하는 것이 여러 개 있고 정확하게 특정 volume만 사용 싶다면 올바른 볼륨을 바인딩하기 위해 라벨과 selector를 사용할 수  있음.


마지막으로, 다른 모든 기준이 일치하면 더 작은 클레임이 더 큰 볼륨에 묶일 수 있으며, 더 나은 옵션은 없다는 점에 유의.


볼륨과 클레임은 일대일 관계 → 다른 클레임은 볼륨에 남은 용량 활용❌.


사용 가능한 볼륨이 없으면 클러스터에 사용 가능한 볼륨이 만들어질 때까지 pvc는 pending 상태.


이용 가능한 새 볼륨이 생기면 자동적으로 새 이용 가능한 볼륨에 바인딩됨.

> PVC 생성

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: myclaim
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 500Mi
```


`kubectl get pvc` 를 하면 pending 상태로 보임. 이전에 생성된 볼륨과 access mode로  일치. 용량은 500MB 요규 그러나 볼륨은 1GB로 구성됨. 다른 볼륨이 없으므로 PVC는 PV에 바인딩됨. 다시 `kubectl get pvc` 를 하면 pv-vol1에 바인딩된 것을 알 수 있음.


pvc를 지웠을 때 기존 pv는 어떻게 되는가? 볼륨을 어떻게 할지 설정할 수 있음. 기본적으로 `persistentVolumeReclaimPolicy: Retain` 으로 설정됨. → 관리자가 수동적으로 지울 때까지 남겨두는 것을 의미. →다른 클레임으로 재사용할 수 없도록 함.


`persistentVolumeReclaimPolicy: Delete` 를 사용하여 자동적으로 지울 수도 있음. 클레임이 지워지자마자 볼륨 삭제. → 엔드 스토리지 장치에서 스토리지를 확보할 수 있음.


`persistentVolumeReclaimPolicy: Recycle` 도 사용할 수 있음. → 데이터 볼륨의 데이터는 다른 클레임에 노출되기 전에 제거됨.


### Pod 에서 PVC 사용


```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
    - name: myfrontend
      image: nginx
      volumeMounts:
      - mountPath: "/var/www/html"
        name: mypd
  
volumes:

    
- name: mypd

      
persistentVolumeClaim:

        
claimName: myclaim
```


## Practice Test - Persistent Volumes and Persistent Volume Claims


Pod가 배포되어있음. Pod 관찰하기.


애플리케이션은 /log/app.log 위치에 log 저장. `kubectl exec webapp -- cat /log/app.log` 로 log 확인. 


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/82778cab-7cc7-4f36-b3a8-064410ac5353/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXDFH4P%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T141113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBl2DwiLzYWUb%2FAY0FhS83jRxUfvIbaBclmMfBcCLcWQAiABJ6RoAkU9V%2BKMZtW7zTqmV%2BXQcm%2Fijk6siUbowonbiCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMonYQJ1XetDAjqDzOKtwDLJE3YEXKr6rxRYTbRPfDKhZE%2BKsg1HI5vV3bBLMG8q%2By%2BeHdndx%2F13jifyFeV0FRRJeqVDY2oaZKzVqMf0sAm6%2FPfZSex5J%2BL6chPDth4Fz3XWAXLL09bMERfuHCYG0RRcciXZILIC3WaRSF1p%2Bqad2ycihs4NC330i1%2BJIS%2BFMW8n2DfsvBAKY5ESShWZIauUBWki2MDwIe4eP%2F%2Bi7Y5MJmnXn%2FbH7lU2qCUzV41zmJZtXgocLtHGdDKznAD%2FAsAhIMw%2B7rf7XaNthUIPrZ1vrPXnlHPIF0IUIKUUf40tMoEKpkFmKgnsyG2V33DcTSGoVR%2BTFUsGwS%2F7nuEJyfjdpmG4UNYghnysmqypDpAyIaJCgLoSTyz5PPYs7DQxmRtd3HSKZYnhP8lOv9bqcVoPgPffcGHZSkzz9vqx9gKnknnB2StkmC1JtsQVY5wvdBOdVawdH4h5%2FtVwhTEsmVm9pCSQqeM3bA1jkZ0OvOERPrekwEywKcqCKyXpGp54JrWh1IuvLDQcMp6TuGlbUgR9UU0bwqHTSqu5NvRqAuueq1pMDOOcjKfqDU3ABJTKuVd0dvx8%2F1LG9IDJtUMD1clpF7lq61GBRiLDnVyrS91LlAZB4FZ6SrvrGkJZgwmtaXwQY6pgENFtR9ejAyp7lQQ74dCQcvny2kyYfBu6LeUugCM4maHZ8noeDSKSH1ZXfT9MvUFBlqajWuRMiGBVHrtkLUc1KqT72Au1cNKG5deushBDsVFV%2BOMl2mkXS6DOyRhxqLuaNbUCQtW6qqPcsGvr%2F9aaBydNYASWCXiNoYaIcezES4qsvHPPNMHz7mWcuTskQNZwZwRcVFBLiqNvO8X7ECfDk7sUzmOEQ8&X-Amz-Signature=a204611e6cea5abf375ad2eed9c8786850dfd0d970dc459bc9d23fd85f3c6d39&X-Amz-SignedHeaders=host&x-id=GetObject)

1. Pod가 지워졌다면 위와 같은 로그 확인 가능? No
2. host에 /var/log/webapp에 로그를 저장하기 위한 volume 구성.

    Name: webapp


    Image Name: kodekloud/event-simulator


    Volume HostPath: /var/log/webapp


    Volume Mount: /log


    ```yaml
    k edit po webapp
    containers:
      - name: webapp
        volumeMounts:
          - name: webapp-log
            mounthPath: /log
    volumes:
      - name: web-log
        hostPath:
          path: /var/log/webapp
          type: Directory # 이 부분은 선택.
    # 위 내용 추가
    ```


    `kubectl apply -f <임시 파일명>` 으로 하면 경고문 출력되면서 적용❌. `kubectl replace -f <임시 파일명> --force` 하면 기존 Pod 삭제되면서 바뀜.

3. 아래 요구사항을 가지고 Persistent Volume 생성.

    Volume Name: pv-log


    Storage: 100Mi


    Access Modes: ReadWriteMany


    Host Path: /pv/log


    Reclaim Policy: Retain


    ```yaml
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: pv-log
    spec:
      accessModes:
        - ReadWriteMany
      capacity:
        storage: 100Mi
      hostPath:
        path: /pv/log
    ```


    기본적으로 Retain으로 설정되므로 명시하지 않음.

4. 애플리케이션에서 스토리지를 사용할 수 있도록 하자. 아래 요구사항 가지고 PersistentVolumeClaim 생성.

    Persistent Volume Claim: claim-log-1


    Storage Request: 50Mi


    Access Modes: ReadWriteOnce


    ```yaml
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: claim-log-1
    spec:
      accessModes:
        - ReadWriteOnce
      resources:
        requests:
          storage: 50Mi
    ```

5. PVC의 상태는? Pending
6. PV의 상태는? Available
7. 클레임이 사용 가능한 PV에 바인딩되지 않는 이유는?

    Access Modes Mismatch

8. PV에 바인딩할 수 있도록 클레임의 Access Mode 업데이트

    ```yaml
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: claim-log-1
    spec:
      accessModes:
        - ReadWriteOnce ➡️ ReadWriteMany #로 변경
      resources:
        requests:
          storage: 50Mi
    ```


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/ba52ad7a-cb36-4531-b51e-dec5c1529098/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VECKKPPA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T141118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIApvEc0NmNTb6vVw5rNOd47U422xV4WZdwYfJghsCGBDAiEAhPmuXLePJb%2Bpp9m7cSD%2BGgEmfXnNwf7aFYzRUNsQmmAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDILlKc8j9Qfn1hvm8ircA4PM6%2FqSIfbuliA4C%2F2KgCfjGKFm4mOQhj5tkvniyU3fRc1S0dRfbO%2F%2BwmMuHV7Q40jXS5hujCymH51ZEcZizBIGVpktvgZte287kTvJ%2BsNQ4TINnFmrsMOUY77u8FFEXQsABZL4p4ewKQiGZaliwZFJsK0eG1dMgSfZ%2FmbhXQmYVDfbZKgFTji02Y5Zvv5erETEFkp%2F6ftOuE66IPu5CX0S3gEigKLSsz6ZfHJ6rYsyjXRZ3TR4Q7tjbrPaRtGBOzDK%2BKwR3H6XQ6We1s5RvTWdyfdpkCjWdUUm4Z4zoZ4x%2Bz%2BKTHKXSsz0kdACaOWbvSjKcdeg9G8PdXkBOPjmjpxiqgMdoRAjyxofJEHBJCe4V%2BCd6bkR3bBQLUqbNl%2F1BI6TkZqEdfahrTQsrWrY7SdFgEh2UDGhOoaMGkKsPvjncSVgSBOrao37Hrc%2BA1lv3q%2BtvjIoDd50Y1D%2F0gEjG08xtob04gpiI%2F3dW9felfzHBsuYRlwaJ8kmC6UMSRHfdN7fnwRiI78bs%2FPFNNZHh1zZWA%2F3PzuAeSW0lFu8NWcRS3%2BJh1oYOT%2B66QUB0KFtxXWek3XN5%2F209pIHoyXfRoUg8EN3mAvwAVSl8vJ8adqaTC70ZWCWGPR9n7QsMJPWl8EGOqUB9OYi8kJcr1ADsUCFAGShWqzz4FMSkgz6ZzYTcFOrOrMbzUqMfDEcGBUCzhoQ71IAaYMEP8xckf8rS7XVm1gWBAwV1s0cw0zVFqqiR5tinNkZwiS6zPvNLSbKTtBySKoCjKsbvpBbilrpHBbcDuqlP52nIvULLUoshh3hSJwlKNQ9UYBS0fEHSvpJLzObxPRvbVGq1VqVZCi2YPpkU8%2BSbN6eEOLM&X-Amz-Signature=ac42ea0af3553161ee35436a7db8a6991e1320bfec15351a8fc1854b2acb6003&X-Amz-SignedHeaders=host&x-id=GetObject)

9. 50Mi를 요구. PVC가 이용 가능한 용량은? 100Mi
10. PVC로 스토리지를 사용하도록 webapp Pod 업데이트.
> 기존

```yaml
volumes:
  - name: web-log
    hostPath:
      path: /var/log/webapp
```

> 변경

```yaml
volumes:
    - name: webapp-log
      persistentVolumeClaim:
        claimName: claim-log-1
```


`kubectl replace -f webapp.yaml --force` 로 적용.

1. pv-log에 설정된 Reclaim Policy는? Retain
2. PVC가 삭제되면 PV는 무슨 일이 일어나는가?

    The PV is not deleted but not available

3. PVC를 지우고 무슨 일이 일어나는지 관찰.

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/743f11a7-597e-4eae-81c9-c74638efb734/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKXLIEI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T141121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIE%2FIJr2c5Q3M%2BKbvTdNFSiFNf20zLV6l%2F6K4bYfJpJX1AiEAsu8eRnMwsaM3z7VogO6%2FTR2uNAEE8Mo0tXJjx6ePdbQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFmMOq%2BhgyiOkpoQsCrcA4Af55OjKdBSK3XsVgv9gCTPmj12uJK3ZUkfV15%2FPOLlwDWyx2gNUmWSoLxRSx6q8D9gQTaVsWOkZgubpMLrLJkWdtYXIX4srshZ0swWOMjGcuD0ETerrSHsI2RhACxgWAurxaI5LpsPqxf6wO4Zt3NUbDTVwVZ35bMFJMjfr%2Fr5VgJjE5VMWez0ThH3ARmCnPGrD6etek7UEC5o7Khiawq%2FsICEcpsv7UmW95kr5zjxp5VXL82rZ9eGVO2yE4i8cLPiwK4%2FrcB9%2B%2BpYt28ZZO5sBlr2Wvk%2BjLIGsdAwHhcT73UwOHKL96gx7%2BpT9oSkcOhMt6HbxqgTwWFS46%2F1gMaEWLtD77nWGnu1AinkDLD9VfSnPiyYHX1Es%2F8eUTVfyQ6%2F5filWbhUdMzc159uRBm55YVZm3r44j0UnE176424wWPk9YLu%2FbR%2B0Q5VqXXPP8jKWdN9LX1g92zslu3nBIcr53%2Bsnn8blgpDSUizWqIqL6WMv16PyO9rdfrP7lUKKe5k%2B1StEGbBPiS596Z7b5qfw76tycmnfA59RouF0qowHj15Wfv7ydduY8zts4WOln8uFyGFzyYZ8l%2FvJTMaAwBh9WGwQw9PxS7fxty1ID1CKWh%2FVrLUOOebP1FuMLrWl8EGOqUBhqDPQPFWA7HFeZ1o%2Fz5Pp7K2Dz3UWvmosZCbnv4nUB%2B6UfZu5UnQnSmYsKR75GZ8Bl%2FJeZPwbVfGscE423KnSAjge4c%2B05Rpf5oLCXMPhLd%2FuStEeoXiM7X0N4A9dfBNcKqky%2FXNXGJF1WJUx%2F9B%2BUQSTYTQALBiLYvK5FEfar0E1MTaxomsh5cURpCaZbZo4b3bkX9WjDEF8bhgVm0caaeEXYmn&X-Amz-Signature=2598fe8be1d5a6cb28afeb555cca67cf3ccb16a6ec14d37bb55595aaf8e5cc64&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 왜 PVC 상태가 Terminating인가?

    The PVC is being used by a POD

5. webapp POD를 삭제. 일단 삭제하고 Pod가 완전히 끝날 때까지 기다리기
6. 현재 PVC 상태는? Deleted
7. 현재 PV 상태는? Released

## Storage Class


Google Cloud Persistent Disk로 PV 생성. 문제는 PV가 생성되기 전에 Google Cloud에 디스크를 생성해야 됨. 애플리케이션에 저장이 필요할 때마다 먼저 Google Cloud에서 디스크를 수동으로 프로비저닝한 다음, 생성한 디스크의 이름과 동일한 이름을 사용하여 Persistent Volume의 정의 파일을 수동으로 만들어야 함. → 정적 프로비저닝 볼륨이라 함.


애플리케이션이 요구할 때 자동으로 프로비저닝 한다면 storage calss가 제공되면 좋을 듯. Storage Class를 사용하여 Google Cloud의 스토리지를 자동으로 프로비저닝할 수 있도록 Google Storage 같은 프로비저너 정의 가능. 그리고 claim을 만들어 pod에 부착. → 동적 볼륨 프로비저닝이라 함.

> Storage Class 생성

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: google-storage
provisioner: kubernetes.io/gcd-pd
```


스토리지에 대한 PVC를 사용 중인 Pod가 있음. PVC가 PV에 결합된 상태. 


Storage Class가 생겼기 때문에 더 이상 PV 정의가 필요지 않음. → Storage Class가 생성되면 PV와 관련된 모든 저장 장치가 자동으로 생성됨.


정의한 storage class를 사용하도록 PVC에 storageClassName을 명시하면 됨. 이제 PVC는 어떤 Storage Class를 사용하는지 알고 있음.


다음에 PVC를 생성할 때, Storage Class는 정의된 Provisioner를 사용하여 GCP에서 필요한 크기의 새 디스크를 프로비저닝한 다음 Persistent Volume을 생성하고 해당 볼륨을 PVC에 바인딩함.


PV는 여전히 만들어지지만 더 이상 수동적으로 만들 필요가 없음. Storage Class에 의해 자동으로 만들어짐.


AWS EBS, Azure File, Azure Disk, CephFS, Portworx, SCALEIO 등등 여러 Provisioner가 있음. 이런 provisioner를 가지고 추가적인 파라미터를 넘길 수 있음. replication type 등. 이런 파라미터는 사용하려는 provisioner를 더 구체화함.


Google Persistent Disk에 대해 type을 명시할  수 있음. standard, SSD. replication mode도 명시할 수 있음. none, regional PD.


그러므로 다른 유형의 디스크를 사용하여 다른 Storage Class를 만들 수 있음.


## Practice Test - Storage Class

1. 현재 클러스터에 존재하는 Storage Class 수는? 1
2. 지금은 클러스터에 존재하는 Storage Class 수가 몇 개인가? 3
3. dynamic volume provisioning을 지원하지 않는 Storage Class 이름은?

    local-storage

4. 그 storage class가 사용 중인 volume binding mode는?

    WaitForFirstConsumer

5. portworx-io-priority-high라는 storage clas에서 사용 중인 provision는?

    portworx-volume

6. local-pv 라는 persistent volume이 사용하는 persistent volume claim이 있는가?

    NO

7. local-pv에 바인딩하고자 local-pvc라는 PersistentVolumeClaim 생성.

    PVC: local-pvc


    Correct Access Mode?


    Correct StorageClass Used?


    PVC requests volume size = 500Mi?


    ```yaml
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: local-pvc
    spec:
      accessModes:
        - ReadWriteOnce
      storageClassName: local-storage
      resources:
        requests:
          storage: 500Mi
    ```

8. 새로 생성된 PVC 상태는? Pending
9. local-pv 라는 볼륨에 claim하도록 유효한 요청에도 불구하고 Pending 상태인 이유는?

    A Pod consuming the volume is not scheduled


local-storage라는 Storage Class는 WaitForFirstConsumer로 설정된volumeBindingMode를 사용 중. PVC를 사용하는 Pod가 생성될 때까지 PV의 바인딩과 프로비저닝은 지연됨.

1. nginx:alpine 이라는 이미지를 가진 nginx Pod 생성. Pod는 local-pvc를 사용해야 하고 /var/www/html에 볼륨을 마운트해야 함.

    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:alpine
          volumeMounts:
            - name: local-pv 
              mountPath: /var/www/html
      volumes:
        - name: local-pv
          persistentVolumeClaim:
            claimName: local-pvc
    ```


    `kubectl run nginx --image nginx:alpine --dry-run client -o yaml > nginx.yaml` 사용해서 빠르게 yaml 파일 생성하기

2. 현재 local-pvc라는 PVC 상태는? Bound
3. 주어진 요구사항을 가지는 delayed-volume-sc라는 Storage Class 생성.

    provisioner: kubernetes.io/no-provisioner


    volumeBindingMode: WaitForConsumer


    ```yaml
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: delayed-volume-sc
    provisioner: kubernetes.io/no-provisioner
    volumeBindingMode: WaitForFirstConsumer
    ```

