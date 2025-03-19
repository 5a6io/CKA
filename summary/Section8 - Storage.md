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


## Volumes


## Persistent Volumes


## Persistent Volume Claims


## Practice Test - Persistent Volumes and Persistent Volume Claims


## Storage Class


## Practice Test - Storage Class

