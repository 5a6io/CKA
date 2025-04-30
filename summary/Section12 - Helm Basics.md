# 🍨 Section12 - Helm Basics

## What is Helm


객체를 생성하기 위해서는 모든 yaml 파일을 apply 해야 함 → 번거로움.


troubleshooting 시 issue를 찾는 것도 어려움.


Kubernetes는 우리 앱 전체에 대해 별로 신경 쓰지 않음. 우리가 알고 있는 것은 다양한 객체를 선언했고, 그것이 각각의 객체를 우리 클러스터 내에 존재하게 만든다는 것 뿐.


Helm은 그러한 것들에 대해 알기 위해 처음부터 기본적으로 설계되었음. 때때로 Kubernets 패키지 매니저라고 불림. 객체들을 그룹으로서 큰 패키지의 일부로 보고, 우리가 작업을 수행해야 할 때마다 헬름에게 어떤 객체를 만져야 하는지 말하지 않고, 어떤 패키지에서 작업할지만 알려줌. 그리고 패키지 이름에 따라 해당 패키지에 속하는 수백 개의 객체가 있더라도 어떤 객체를 어떻게 변경해야 하는지 알 수 있음.


```bash
helm install wordpress
helm upgrade wordpress
helm rollback wordpress
helm uninstall wordpress
```


## Installation and Configuration


Helm 설치 전에 먼저 로컬 컴퓨터에 적절한 로그인 세부 정보를 사용하여 기능적인 Kubernetes 클러스터와 kubectl을 설치하고 구성해야 함. 이를 위해 kubeconfig 파일이 의도한 Kubernetes 클러스터와 함께 작동하도록 설정해야 함.


[bookmark](https://helm.sh/docs/intro/install/#from-script)


## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치
2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETHNF6F%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDUCcAuMiatddUH0mL27XSFKwZ0nYPAEP34HmCanhY3XwIgDh1V2yhvh9NykeVcY9D0G9fxTEBYsr2oyUKtz8mE%2FdkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS18yDM46qYRrjHHCrcA%2FHEn03chuA8wpKJhvyS6XPuH%2FtAdK9DTGl0XCvt7%2BWfQjtIlEjHvAV6c%2BL27rpNxVvpcscI3KarnIvC6o8CAydsak6AFvfPMsd%2F4qrVvxzwoytHQKRJ%2FwRHKyS%2FL0XsLRUq5zNsKJ3e6gsGIptULkS1w4fYJM5FKZYaQz5m4xbWF9sqvIbGsNdaemmxnmD5neXl9b3h0KpwdcPRqiEegr4GM0XD6KRhZ8qTNFB8d95BTJFDvL8nvEBIwJy0h48%2BvPM5xQBH%2By0UDmSjUCrMV6ZrKmcN%2FgxSLmjdcNFN%2FQlJKXH0VtAFWXMDvAXbzbRcvh7UXaPDd6VDQVxKNsnOKvFIG9bwjhVNlYd9vZKDhZ%2BgrcsM%2FnsKVVWvM%2B4GLeCdzOZDBJr1fH2%2BUf9B%2BE13%2FRWqZi5Yf03lsu%2FcsTm7lOLRZkjC8LFC65o2acOytQJGU21gn6CWTZR4rNL8EAVMffiJdFHkgB0rMrItc3R%2FgdlWPddT6Kam2I8zV2ZlyZulfATJw4MD7nWEwqgebo3iMiUfTSyG48zRExITUkoLsLFhrHxdrepGEw3PilbQWOjQdnHud7rqtLnXxxizIH95ULJKG%2FO0XzHuUlsNsPXTzjnSUSVFQGkMDKX7HF6KMMzEyMAGOqUBnrkfcRSlAkAYXr7qEtQ4D5or%2Bj4yKZcCzatQqrn6i%2BsQRGfiQdLgL9iKe3FQLeSRpDNhiaRiUG5UjouwpBdY0wItgbDFKdlVBKQc7EwPT5EAskUW4YvHrbddPXQ1GzpNANOK0i4C4Ju6n9AaEW4QVvwSCnzS0qRxH6vyEg9155INhHWUJy5M4hp700rpFZMKkjoLH8K6UhIXwmNxC%2FgW8LquEVWi&X-Amz-Signature=61a646a9fb4c2760bd8101f89a7e7df1eda0547a791da020806c23c0b3c778ad&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BPWHIL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGhYwPUpqBEQF7PieFCWFnHEfxhz1Kuv5VCYuegBoo%2BAAiB%2BdfQreNuc%2F1OFtA9ZHhsf2vhDYQXKgnbmRe6XWHiXSSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPMKITeE1EMDVxwPVKtwDTbhALFzmybHRlc2Dtir6CLeaXDkaNIW%2BuWWLwKJ6kJDAm%2FlxXKIJXHlOOqkruJcLRmwhVTYtRwg%2Fvi2NiyltUtM0jvj1Uxr%2FR%2FYjG2Cz2Px3OID5e%2B5w1Vtx86GSNf1%2BLUwQ54rs4DdnVnw5h6BCVZDMYGKxIkz0gVSOVsPWFnC1stw4d%2FJkc0trWO5qwbF4w22sB2kwgzndsmLsvFPRT4Fo1SpV%2B15RTsJzhQoQlV7BoOBu85et6lwSHw4zsNcQ7TcNukq7Vx4tXpL%2FpBDyOt1LLbWffDt96lOopvTThWWnubPD1tpiJ%2B9hk4ApQIcTW6w5mDhCJgbdV3McC%2BPd53z8gF4VqkrhG4yDNw9YPLhytO0ho3IrwB1saYD4K1j5RV%2F%2BOBy6vEQrg0SUo9KUANTnTDVemtydZbNw%2FBrbfzAdpltD%2Byqu%2B0nWFIqVsGudiy%2F%2FRCQhWDSPPEfYIS9f0AvtmOOMufeWVGjp4xf7pZPwB6I%2F%2FA7WpGmrMTnZp9gWvMM8vN2kLqQ5lnOiHbENQbGXaf9tiYW9mY7Lx0LEBiULbUR5T6IV7ogDUvn9nhQmE%2BKAmUQKmn%2FTkUlV2PvNub%2BKlOADaywmkmhKZ1cVdG2on%2FxpOToGEbBsCmowvsTIwAY6pgE15Hk%2FZvPIHZCHmFpb6KZ8t8UAg20CR8MqtRzQMzoATvxm9%2FjHNsLd4%2FV8Taib1iF0zBHT9zBxOGJpcalQTIB4DEUODpTmwaDRWUqUBZTcz30PxqsMdtDSwZhR0fLQPkPI9FXWgIMgB1NW9GFrDcd%2BG1bOxKxFmRMnHjuIjTK9IzhoRCXxUCt7PboJ%2FEwV2elKaqgNdKYU9OtzXPRNmhx2MBEfcRhE&X-Amz-Signature=d6f75222adbbfbe5f0ba080f47230f42e7546a48a2f45442f69e3541749d46a4&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CLUVAMD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCOAR537JjPbZta%2Bk00uqe7bB2QFVxUC1Qnw05TW9O02wIhAKJF4d%2F5oED7rMCWHVn7RbhJLDkXUgasy3J4izkQ7CoTKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU2eJw9UG76f2vfWcq3ANuQ6djNEN7L%2BPQTq1Vvm6jwHSI37T8Sj6PQu7YgRDRchoOaYvWXIB2dfLd6TezCkT5TlwuKLt7bvrGZrh1yzgZ45du5577fCQFpNsKQ269GRZi54jJGMeW%2FJ0buaV7phoMXTgXulOvzULqqF5RnUXZqFFkc8dEFBasBSElHaH%2BhitMdlg3ptXA6vfNPiLB2qTQhQu%2BsCMSPpImyMO9gt%2FRRFxo0P7UtdHTNESu%2B%2FUs093OJ7nrYGr9txexDUk6Wwi985%2Fpvc2reNfpDJQGakMP2SoZl5fKIakP0qd4zgYqlDqKeP69sobBok9zB%2B21SDbePAc%2BbsZZchLiCPF8LdGbeRgMn3Aa%2F9plsZy8rIhH%2BPUkEHWlcd4g8NASKBKu%2BcfY8mCykpZ9rnVYv7G1EIYlPi%2B4gltq%2B3cxyb8bJk33Yt7v8udGTt1hoUpIFvn057CAS7ui8cz419YTOe7bZVi9xcx1wde%2BjPrKyQAOsLMDqTNrmwa9vqarMtp9ObaPwaAcHm2levbntDpctr%2Bi2p1oEEVPwMe9KL0uhF%2Bw4YmiZRxL9tyW9O5wx2YWriqGmXzIlEGN9%2FD9HluvtS1mASOOl12TuV22BaONwAsZJoSw1wA04FFRNi5VrVvefDDow8jABjqkAbG7mlUxMTzj%2F22nq7Kgj7gIT58gdP7pIBRTKDWW0K9ZHMWLBUMlErKMYZq%2BiE8u3k5AxdCloAAd4VHRG%2BLzwvtm2p6ceY8uz8fqDnMh%2BivZhxS%2Bo3elzKebkpnzmS9er05H74kVw3D%2FmniHD%2FpAMUVemHvXfiiGLQ5fDT8FaiobFuaTIHPak%2F9hAiE%2BrYZp33fs%2B1zEM%2FYkU5fveRs9YZJ8nogf&X-Amz-Signature=f836c9ee931d525b2777a3341d02d725ed655d12ab6bda376f04884f9ea0fd86&X-Amz-SignedHeaders=host&x-id=GetObject)


## A quick note about Helm2 vs Helm3


Helm3에서 Tiller 없앰. Helm과 클러스터 사이에는 아무것도 존재하지 않음. 또한 RBAC를 사용하면 보안이 훨씬 향상되고 모든 사용자가 Helm으로 할 수 있는 작업에 제한을 받을 수 있음. 이전에는 Tiller에서 이러한 제한을 설정해야 했는데, 좋은 선택은 아니었지만, RBAC가 Kubernetes에서 사용자 권한을 미세 조정하기 위해 처음부터 구축되었기 때문에 이제는 간단하게 할 수 있음.


|                                 | Helm2 | Helm3 |
| ------------------------------- | ----- | ----- |
| Tiller                          | ✅     | ❌     |
| Three-way Strategic Merge Patch | ❌     | ✅     |


 helm으로 설치하고 kubectl로 이미지를 바꿈. rollback을 하려고 할 때 helm에서 현재 버전은 이전 버전으로 알고 있으므로 변화를 감지하지 못 하여 rollback을 하지 않음. helm2는 이전 차트를 가지고 현재 차트와 비교. 사용자가 수동으로 바꿨기 때문에 여전히 바꾼 버전으로 동작.


반면에 helm3의 경우 사용 중인 현재 차트를 비교. 되돌리고 싶은 차트와 라이브 상태, 그리고 현재 kubernetes 객체들이 yaml 형태로 선언된 것처럼 보이는 모습은 three-way merge patch 이름에서 유래됨.


[bookmark](https://helm.sh/docs/faq/changes_since_helm2/)


## Helm Components


차트는 파일 모음. Kubernetes 클러스터에서 필요한 객체 모음을 만들기 위해 Helm이 알아야 할 모든 지침를 포함하고 있음.


릴리스는 helm 차트를 사용하여 애플리케이션을 단일 설치하는 것. 각 릴리스마다 여러 개의 수정본을 가질 수 있으며, 각 수정본은 애플리케이션의 스냅샷과 같음.


다른 사람이 helm을 통해 릴리스 작업을 해야 한다면, 이 데이터의 사본이 필요할 것. helm은 이 메타데이터를 kubernetes 클러스터에 직접 저장하여 kubernetes secret으로 만듦. 이렇게 하면 데이터가 유지되고, 쿠버네티스 클러스터가 유지되고 팀의 모든 사람이 접근할 수 있는 한 헬름 업그레이드 등 원하는 모든 작업을 수행 가능.


## Helm charts


deployment와 서비스라는 두 가지 객체가 있음. 그리고 이미지의 일부를 배포하는 표준 deployment와 이를 노드 포트 서비스로 노출하는 서비스. 그러나 이미지 이름과 복제본이 다른 형태로 지정되어 있다는 것을 알 수 있음. 이것을 templating. 여기서 values는 values.yaml의 일부.


두 파일(deployment.yaml과 service.yaml)은 템플릿. values.yaml 파일로 values를 사용하여 커스터마이징.


values.yaml 파일 외에도 모든 차트에는 chart.yaml 파일이 있음. 여기에는 차트 자체에 대한 정보가 포함되어 있으며, 예를 들어 차트 API 버전은 V1 또는 V2일 수 있음. 애플리케이션 버전을 지정하는 데 사용되는 앱 버전도 있음.


helm3는 apiVersion을 v2로 설정.


type은 application과 library 두 가지가 있음. 기본적으로 application. library는 차트 빌드를 돕는 유틸리티를 제공.


dependencies. 여기서 wordpress 애플리케이션은 2-tier 애플리케이션. database는 mariadb로 자체 helm차트를 갖고 있음. dependency로 추가.


keywords 리스트는 public chart repository에서 차트를 찾을 때 유용.


maintainers부분은 maintainers의 정보가 있음.


home같은 optional 필드가 있음. icon은 icon의 url과 프로젝트 홈페이지의 url을 공유하는 데 사용됨.


```mermaid
graph TD
  hello-world-chart --> templates
  hello-world-chart --> values.yaml
  hello-world-chart --> Chart.yaml
  hello-world-chart --> LICENSE
  hello-world-chart --> README.md
  hello-world-chart --> charts
```


## Working with Helm:basics


## Customizing chart parameters


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2W3GJJG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCICD9YNZoV1bsihSyX6BvzLeS4M8Wz5B8ARTBxihosHMgAiAvd975Y6nue1xW0Qq2HeRpOvK6KUBh%2FQM9HzU99Hi%2BEiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1U%2BoYWB7TcyjBWp5KtwDqU3FV%2B5An%2FMSvjYFzJJnDkUeA1I6Z9TatmT05UpHf%2FWsB5IMelAjmP%2Ft4ZhGzikmDeW7qaR%2BWc463bhkcO5XJawk4opWY%2BjpV1ltoYdlc4lyRvqRc6syTK10pB%2BfSPC0WG3P2dqyECnZNT24BUhBRIy9nMANDf5wOqiW%2FzaKoziU2xk38WAMkSY74DCuakhoiJJwqaxheMtx1WO%2B6BSm3yZS%2FFKl3nXpenlRqnckmCcTC67BElI70uZ5TztN%2BfdwxzIEnLabZGiT44lFZR55zzVABJTUjH0f%2BukLiEloEkIeO2R5nt0Kgb6%2Fm3KufK9xss2S1ayyy33KZX6Z3Lo3jDcK4xbI7lvW9MkztBLP8X9D9tbqhAVrQ4gsj827hRxjkE35PaDEqsSXqtS4tIsSMswSszF0TDTCUI0m%2BsxoFzRWxqBpegc9SuD0JDeI4JpL3GwU7ZEsz9imcxtBRcjWFA92bulj6sLfRSSkGuNqzla5yzVI%2BWWenTHn0f8xCjZGr4LPsXTpp7JiXHZjByEumjZtnedokQygmJLwj807TjuWd7mSsxrDuaEh2hm7f0HsS7TEFCCrdh%2BhmJTpyp93Vh15SjswvVMJNwtyqbEEkPTyLKorrODy9hj6xUow8sTIwAY6pgHjyxk8Vf7Uew8yw%2B7LBt%2FywdSzuwOcXdtmTp6hmZepQVaWipKSPh2VccV4yE2mtZ3kf1ufF%2Bw5oHrSmFLZvN3ocKgFsIjGMmsq%2B1OTerb4PdXMTcCVtVjFIAQ24ielxwATzwRLwVdulPeuttj082%2FAIyJVZZ9l%2BLTIauh6Kps8Co5kIZ9UuaOOqF%2B%2FToERqXToARmQcm1yY49oDL2%2Br5P%2Fd7VMEhDM&X-Amz-Signature=1f08c9b313290524c408b6acb6515457125fde6d7e674c37752b5e959e6d63ef&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FH5VO5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T141216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCQrBQe8tkkEXIiY%2FeyGZdB0pDlurra2dbS3Ik%2B8%2FpyRAIhANMfWt2%2BOZW%2FpIjrk2r%2Bd5c1K%2Bd0OyX7pyJXqxVMph7vKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoDKAAlTnxsIiivVoq3AOFa0SG0HAjwfILrKZj3FqQ7LEnFggC4cJ%2F8%2FiZvNteP5Sfb7Ae7DsimY1RcjQEqo5VcxQDfzpwOBPnHFBUdKt4pMYrjT9cl3pfiy4b2vWF%2BQBhh2UV%2Boxo5ycNfz1x%2FtxpUY4wqAdGqBtDA3gnGoucHGDrHGozuXXbXyJbGDh3HQDX720S%2Bqs7mOqS14uas9MHSnQyv9xEYhKWMFugzyh5i%2BpFw7aJuesNwAWkMll%2Bju3Zl%2B4JNW2HFK1aRYkGzOFSm%2ByynsMj3KaP8Qr%2B6QK8cjQnZJPQ%2BSWHZvtPNFv7%2Fj%2B%2FKw5VhuXNFCbKhha9e1sQOozW5d2TkH0ekYB1N3zSb08M3j%2FOlg%2FRAJ%2BojvgoyRYydSluxis2GN53Gfk6eDtuB02ZQYnWpVtbdlP7ILsozU%2BHvYyQMIzVbUg%2BoWI%2FZXDZMM9ELpmKpUAMDiNLCyP8lAREKObZaCkHEfHm6%2BpxIAzk%2FEdkHBRATWN%2BAuS12ySLMFjHYa9002P8QGOdzyr%2Ff%2FdMD3DTVafknxoFWv8fcZNYjmz4u1XdO9XukpZdmMcDnz6%2BnDMc2A0prX4TlgzQShbXkvpVu%2BnnfdhwBLkXT1F8OxorqBcULWwfINZgtduaVQkhwWypAdEIHjCFxMjABjqkAbd6M6inumxFIwExPlRBtmeFTY0rePLQeVw9vBAmynTDg%2FOTwVWeOVxQzUW5NgfFpxII%2Fi%2B1kBHOwTH8NgHVqtdybBwmCy3Dx1idQVse0ubwiJTFNUFDE3bn5GkYxCXmzltCF8ZaadyI4H5yRcrd8%2FRIBdf32af9ACzEkRVWj5t2exSxdK8E7xspKUN2MfhgF0csE3XyWiauhcfyBdK85c0xQ%2BLs&X-Amz-Signature=63fc093d82fe09bce5e3d5a33ef19bc4d924c278f925390ab26d1b8beb0a0eb0&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXT2ERVK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T141218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBIr9BsMvqjl%2BT0RxhcZrGzl43HRVGPgbwdrn5boqvFpAiEA5X3gWxYxdgb0JwkLqEf2mtc0gdcJmW9pD9g%2B2efrH9QqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPridgsQqyqV9N8uHCrcA8iagrPRa4JPza3yfdi4zo9MzaJgktI6UKki2ttVBBJXUKSCgizR2gOwEiRxFkyrQ0Qfi3T1ooInYcnzlIcRXO2pvmaDTq9GpoqIri7yl%2FSGMUEoPP62HLOZpMclc%2FxYTbtnhD92kAwZNPt5sTcNa%2FEh8OUvUtkp%2B6RQopBrxr3e1C6yddaSxAVmo0KY8VWBYJJoDYLQf3jRZmn2SE4ygcqr2avJg86QiY3Q5QT6VQqCdfBcP9D7bC%2FnjxhN8XQxIWagSrRbJIe3VAcOx9xBuu4lLYTEGwyglaNU1VVEoF40VXhFqS5nyGuYNrHQ2l9jGuC5QpxDS6nuIA6LSwdFU6x7IVa6WKMhIhUaxesPqb8z4sSDboqxB3X6ZIz%2F2bCfJE%2F50ZwblS8kkKpLT8IcTMH2q6rXOHbULfeD8vubZg5ltniwoBVE2n9XiicFJ8fB2q%2BKdZNyPhty5UtzOBQsHmP%2B%2Fl6SBxteJI5%2B8M%2FCRWqumyHgEEp9sfK6WbzXB259RSMB32JXKEyWS4baj0eZeg9htH2ZFJj%2Fx%2BDhgDOC10UMLpjNfpoow%2B0zooeWt8kRUW6RdfHMROxzLm3Q4AYIsLOUA4eKlhFlRQAITwtDzzuDzGp61deTo2QoV7XmMM%2FEyMAGOqUBeKgb1M1IzXq3vRcTRpM3aKIcW3uZpnU%2FFLDFfnI3DbNSEhNJMnDQfCF%2F%2F7ekUTPjimduL6SG8fPGRvxHKfGrrAii%2FmHKPQcq8MFo0GNw073%2F%2F6napyrGWbIqBdLK0z05FoR4WsVkcMiBpyILsXjcO3pPERLwX7v8D1IOK9wLx1xuM9wtCOTTVn5JmUZmFiQzd965mmt9OnEted6dMdvp6JdATndM&X-Amz-Signature=03929ea5e71129462f74967ea79229a62f1e274ef43ef7c910e1a475b19c55aa&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FYZWWC2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T141219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCb8MOSB0k7X6l0rQGQhZCpQxGwEzPbSZXc9PeNFQd4EgIgVqxSf2u5O%2FnAYo2oA6SHGpE%2FlXQ26pUhWXAH%2Bmq%2FtlUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiyPPu7EXZAwy2I9SrcA27%2FcYdDckF6odeGXrimqBaGB8b4C1S0olz9y4oC2R6OfedmADxJEeuXz3%2BwJ%2BOnVuvJZjbrav3%2B6YwsqanMp4ixTr%2F2DyxE13u2cA0IxQkzxbFJbJFuaXAJ1WDeiZFWd2%2FiwHw20jY1gc1AclQ2P4q7N1ZEk%2B08Zgk%2FBSfxS6N3EmH%2FfAHD1L0vtkTkikMjAIX2NOuzQb%2BLrMn1oHcZTUUr3Ew2ENmD21TK59%2F8uH7Zo9G5rO6rBoGF6ZSYCtDm6uEJTDkx2ZseLMzUzpB0cJklmQMPHm1Ug1anN5DZ2TWr3lNisCFOaAdkixh1XEeyWxF%2B%2FAAOWMqCCiAfnOADVDHVb9gxXlnco2j58hPyIaz04wjlcT7TPizJjJJ9a6vqGcbOpcc8e0xLrtNPOTCcVU0kSBrjIOOCfU1MyDIeI1szyBfDXrH7OAaR7CagW4RRWLmlSn8ZuqTiI5I%2Fgk27Hvma75K8mWvV9cX0HigOdilgn9JGMWqBCCh7e2fHXbG6imJvh7nUrDEL1pKo6%2FYRUjOrM4zNlJeqHdtgtutI2I9%2FiXgMQ5jj7Jz%2Fubstk06JO2v380uZLhkHJ4Img7DICU%2Fl2AxsWWKUInCY68vSjgr7qSr5iJjHD0EjtI8hMOPEyMAGOqUBfZn6BSFxGmxf%2FUDhSbHeBXanUEWTsbrLspTrtJtP7cCrglu9H9UlevLj5jGgcawHzfXsi34BhL0KS%2FxRKW1dObKla0y%2BSTtQSx2rujevJ24l2MySPuIm4hJ9xTZYQrxeRhxwXlNaAKuptT1tVWy7SEsLninrYBa07OzgU0SPewnuEKoE2dBLO%2B8gllJ%2FRekAQQdGwpPGzfBOTmZ3BYAPKr%2FEqxgh&X-Amz-Signature=c7e2d7807f6389ddd6fc7e29298e5c1c24f0c6f71445447962889d8540d59dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

11. 클러스터에서 nginx chart release happy-browse를 제거

    ```yaml
    helm uninstall happy-browse
    ```

12. 클러스터에서 Hashicorp helm repository 제거

    ```yaml
    helm repo remove hashicorp
    ```


## Lifecycle management with Helm


명령줄에 매개변수를 추가하면 쉽게 해결할 수 있음. 하지만 왜 이런 일이 발생할까? 이 경우 Helm은 일부 관리 비밀번호에 액세스하지 않고는 모든 것을 업그레이드할 수 없음. 필요한 변경 권한을 얻기 위해서는 데이터베이스와 WordPress 웹사이트 자체에 대한 관리 권한이 필요. 또한 모든 롤백이 백업 복원 기능과 매우 유사하다는 점도 언급할 가치가 있음. 이 기능은 우리 애플리케이션에서 생성할 수 있는 파일이나 디렉토리 데이터를 다루지 않음. 대신 Helm은 Kubernetes 객체의 선언문 또는 매니페스트 파일을 백업하고 복원. 따라서 외부 데이터베이스와 같이 지속적인 볼륨이나 다른 형태의 지속적인 데이터를 사용하는 경우 롤백을 통해 해당 데이터도 복원할 수 없음.


따라서 차트를 업그레이드하기 전에 데이터베이스를 일관되게 백업하거나 데이터베이스를 롤백하거나 복원할 수 있는 옵션이 있지만, 이를 차트 훅이라고 하는 방법을 사용하여 수행할 수 있음.


## Lab:upgrading a helm chart

1. 클러스터에 bitnami helm repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

2. 현재 클러스터 내에 nginx의  release 수
3. 클러스터에 존재하는 nginx의 수정본 수 ➡️ 3
4. 클러스터에서 현재 실행 중인 nginx의 version

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TEB7NWY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T141221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC%2BtYgWXq3W8uZfbpub8NQwg8YQ%2BQ6h0v73DJWvGgWVZgIhAOKRYEoFUBWqZceC%2FskceF4R%2FK1wuDbbGH%2F7O7V2bn94KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPDT86NgSawubuLvkq3ANVtfGfX1YuQ2hA4y5%2FLv9WWQBahfKmM4qX%2FJjbLvuNX%2BT1nlBcOzrifHmwxaOkNX9yRUGifbCeeiA5bKAEv11jWAKBTZp0s6ztnV5Leq1HWmzDhsgRdV90bHkd9VenHTRvlmU9HneDvgoyNpNs73sQ3YW9FXFLPiULlsQ3p%2BLTmLLknLhfHMFubCm9Bbi6wyddo%2BOF5GTj8fpVXiy%2BD45dS05TJ3HNgv%2BUdPl%2BEUoISFJo5ApCTlB11klHGfQ63qo6uOpZrfcyzQafkgHFwIj6UjvToHHN5TwxXljqzl1LkJ%2FM0CWxQ3Ch75k6WcgzbbDeVf434zH1obeaWuLbckSYRvTzBYIVdTEO%2FXxQEjD2SYnJYzBgATouvlxAEffSwJgAv8Wlxj33%2FVrGDpoYC3PHTRUaPGCpZSkEk%2Bv8rlnXKtNb1H5Yr1XmUZ4x0CttoQ1dyaDHcToqp8WrvggULuM97x%2FrMicNcanz1VHsS%2F%2BbPt097Bvp2JHJzOdmcsyu9EznMBfrXEn21fTcJL3gmLwy5Ab6kklV8chP6NOs5uLhGYySsC%2Fi4NX3ez%2FK3B6A2Igp5HlCbK9qTZ1CKpW6klzhJh2sHfCSNX2p760FWQ7z8FJDU%2BEWZQPkg%2Bhu5TDjw8jABjqkAd0U9%2FL3mASsdTTyEwi%2Fsaj%2BCcaIZMATyKRZzcRQWjgg5b4EJy3nccC3Bi4%2F2onxFbQWMphBU7PlI1FMCgbYQLuNKg9%2B94K93xu3QQNaRBOq0Bp3ZvYHkeZU3NXlAqel1sfFY1Qwqj%2FThi1VPQYs%2FojzP%2BKQcymvaum0s7b1%2FL2rrZyzPhU5FkubUM4gI2ELBxrr1EM4QSsVbkOi5Bq1ZebLKMGN&X-Amz-Signature=68852edbda6e46fe470746cb0f6c648feac3ca4546d0bb75fdbb1c8f1ce56f01&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7D6HQM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T141222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCuTqKy4AXU0D%2FgXEqh88pXCXRaxjL0VRUaBYo0EgL2JwIhAIyRNDTw%2FdK%2Fnf%2B37wIBJiEG3Pc5WtsN5%2FywOm9synPwKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkJbNTBKw13nUsA%2F0q3AOL778Q3a4rp%2BqxHOobN4sgpfS6sqQtWcI0S28m2yW8sfuXF8YmV8GJSfxK8I3If9HOOAwHLz4zO7Fq9Hsqck3cX3hnpgcLHhmzzYVY3jT7h7PHXE8A%2BdPOr40XKJWh70ZgFSZGMdirQ67df6NY%2B1g0XK%2B4KO9sUZmqvSRbLAXq%2FzFC4EKKK2eOWA1RPDgsR7ohSTj%2Ffmv6yXKeE7HjMwTGDD0tI4GEjUByhtGYW9Aw3NH5r4pqFIEup4ADW%2B4qf1sV6R70kv8YzemlYVO8m4ma1heDOmWWigNHjNt9xpnr2uia2Mf5ElJ2fZSsy9n2hSBvxch8OAT422Lx0RJj3dKgPPPw5nLbEgxxwoWwTYeNTcaCwKYQqlbbBrEo791xaXcbBg4mTDajJBmrqeRZdqj8N32w%2BHA1vu4KsaDB8QXuVDlFiz%2BAZlW%2BjOZVwuDaCnQwKx47sA67bPUgTg4fdkhTxGPqlh%2BBAvFoht8OPWpDl8oPkrdghdqboH%2F3h%2FknI5GHvwnQ7Ta9fTYGNI76CQh5kzV%2BgGyvjXFLwrRnOLbN3%2BpnZhAiUhKSMdxJPjrhXHonNL59Pbfl7PIC7HHZVNAHyHFjZn4vYlsZB%2Fo1nb6wo0AUk9DHxyMPRxtN1zDWw8jABjqkASIyZIWRuSL8IsqwV%2BUIAR1p8Jj7i%2BuXRW9LpLpJpZp9JjiCae%2B%2BWpERqumuYndoQLE%2B58Rd3aigRn0A%2BPKOqgIi4277CzSq8nMwUvuHLBg7LH%2Fn5IE%2F49jGu5jPqQh6NkAJm5A9sq5y9ehinECQCCbUdxoWtZPdTlf%2BurbUNOr1yFvb6j2duFrFNR%2BB7qezVQYbCQF0eH%2BzY%2BMbWlnE7Qbj1nFK&X-Amz-Signature=b38843ec0b4c0a9dc9c984b337ff6effa720217de728971b3bd53c1b4ace9f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

