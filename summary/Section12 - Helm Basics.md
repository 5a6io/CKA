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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FG5AVYN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T141324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWYkdvJcF3ZpkI8sqlRWFfYlSieFdwsZddwJnk21eMwAiEA%2B6TYj2EeY3ngd%2F7b%2FV%2FWlfiAX%2FGZQ3ZbWzXahsgHv4wq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMAXc3saFZ8EiIoMNSrcAyqMz3cirS5mQYUz%2FTmYrJ3so07YD3%2Fi9TQ36nbQC3okmxIsSkci1Cf83q0ExHcEheuPWNugSrydI3D%2BqHlSes0f6d2vAd8wjB1XLIQl%2FG5onj7H61vW9XIPapO8WcH%2FInpujeBwapMUuL4szuGZcW55S62E8dMabct18esww3MkMi%2FLITIZ60qPf%2FS7tpi7Mi4AfjGb7WCpC3mbILMSsTNRf8vyP5H4st5Y0usRW1mZ42I1HTr1c3dDvJSiHSNpzy4OCTOeOwMWA5UG%2F9jXBQPwoEL7gpHlTvVzeFBlINrzRaQ0ddKRosDwEL7upTpLEHjWc7uWb3dWvNRsGpH8I6%2B43Qu3EDOFi%2BwLHlViOMUFgtJa36WJVgL9c3Ry1OHvWitiS9iRRkhmDIrcwJisBIvf5sC6WnqzstoEX3xFljVjS%2FA9AK1w7D9phsggYVVAX%2FRhv0sP8ZPclH8i3NfCe2GuIrROV03eM5jjm1iXh4lS1eF%2BQeiLFEysnSUIVE3Nl8jf99yxOTgKbx9TkoB9G%2FjKuPQnPaXpwKl8SEVzTZEMJY2JwnoNxhC9dQGHaHXMDpo3ajPpapuqREoTX6WZa3txR%2B8oIX4pqZDGpQAEITXNFXTxsZ5G8Ps3EO6dMKKEvsAGOqUB17GPGKtBFsgHy%2B3p7gyZCwa6q9pkVtHgshjffljHCllBvEp6%2Bi7WCkknRBACG%2FdI8wNvojTbZwrPVC5mNF%2BHCtPtpzAqqY8HTvVNBW7fAbPOukyZ79fIcriZRdjkqzQyTljOt2mygBC0GYq8FGtlo7dbJp7dzOR6n5it4TKey0MagHPxQGaL%2BIpmXYax2LMbp1xJR8iaiwWTKFUQuiQfS7ZZygJi&X-Amz-Signature=e9a68fc2216368121ef46577a796e93c3f2d18ca95fe74370f7dd99bd3c06b5b&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDEQ76F%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T141324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpHSZRlqgdQxV3pe7I6UbhXDAtFovoefrb1DgUzxMtlgIhAJPpAqH9acxVCd3tNBz8ouqmpkxMhSw1vascZRGQmrtTKv8DCHYQABoMNjM3NDIzMTgzODA1IgyN7yQj%2FsJkldteipEq3AMFOOxqD2R6EFtClT1SWA1q5tKysjqBWU8vHCBMfuaxxVfjQq%2FekUXWFXEEd1IebCroeAPTUOaB%2Fo1JTdmm%2FpVf4nqXn9RILLw6BoHUa0zU15aFVez0BZ1kzrad2uIPXAoekjIxRpy%2FtSu424t5GdXTxnraXo3zjPTSh00SQdVPqCV0hpv%2B5EJ0yjQilrxNCIv7E27b7jVWBNNzguf7vScNl9xFMzJFCMvjktzY6gEeXofpfHVEnwx00bJO2HrUPzRQDdcjrJvvNCMmHsf5LXrcKVAhEHyF5PR%2BAv8OT0e5t3d1n4ZmFCKiE08COSJ4FM1s5pO%2FD6Gv%2BL4jQNFAvQk%2BFEyivigqi82wYovG17zziXjmpbQuPAmwTAD2Fan7be8yPnhdN%2Bf8rU1Ycl46ygDYPFWDT%2BlICpzolTr2TXi8zuyE%2FEifzZVRTjP6NeeuF6Rk1MRBTyc%2BIH0%2BB2AZDMjOLlnbJhGdLGp58VfJK52%2B7GwoB8TBclZloJd345CMCwEvvgLLLu1mOnMhJ29tPRFmr70VTDisTGgrJz6YqIsoXMTSHW05uIOloHBuMxZmbeIf0KjOJmhgI6m0jnVP2v2LJGVGCIT9pJZqTxLNhker%2BV0o7vwW5NT9C63M1jDqgr7ABjqkAXWlqNSktC8aZxFH6FQzP9rQyJr6duecWvbpFI2L49w3lcfm5kb2eyatU6T7wUd9mx7ijubKbGOKTmrIsbKwp5qc04xUzZkrzREVFsza50K2lWlrrIokvdGB9e1lOcAbPKgFFyvM6fQNtzMwg0lv2t86Si%2B6uBxRMps1KXgLz8zwoctHgT1SOpJfUDENo82lUvKAa2G5satJa%2FZTms2nDaU29%2Fv2&X-Amz-Signature=aba4df72ba50479ed8dc63e6f254864a986cbedc43b361400b5976644436bb73&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6624LY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T141324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGSrnDJUozkD9LsA1C%2BLwElG2cy0leetL6XeeQO6t7uAiEAzRk%2F3t66xQ4lHypzLzqcd02TcY3TQzjWYHA5y7r%2Fx7kq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDO%2Fq67lRZV%2B3GqBaeSrcAyBhWagjJu4V13sSeBgIKBxZIg7MKnsk8%2ByKJw8ZUSmxGfnpmtG49mmfm3Xtn8WLutiR%2FzCoiOglHlddrkI5BlIwAZ4t1c2y1oRrPFL5TokxfFpbj8C2V1aPHW%2Bs67HQ8xX%2F8FZuytN%2F40RhKUUG4p%2FAwggWVtHal6Q%2F1%2BjDNRimGxrQJU%2B01YHte2mGJ7OyUfZIRnJiLqpGSVT%2B9nsd2tzr1Vnk2sNUGWjsUwlLsuQ3dt74MVmfQ1akLu9PxFoEcwJ8uvsZ7VF2%2BlVFHHDRLW3J%2BDfMEgZWd9Uy%2B0QYCOwwWBswN%2BtbOPCs6Gef9VdJ0kfB0jeBPXAen7eqFkw98L6Ejyowhy3wo5RHpyVCeguy4QZa3Ki5B%2BS34IMcl5bWfI1nLToQWBJynaCwQEENw5lnT7qaL0TN9%2Ff%2FwPA4Xm5WlczpsJkfOH4um%2BWHB2R3tnuswdHPSyU4xXwN1WVOYXa3%2BmI7jftn2JOIOdjfTA5UOm2Dn4XxcP8uGYBC%2BUcwGC1aZPKlNk%2FKF3tkkLkD9E5oWyoUj9qMykMYbVR3CQsdVTQEUgJF1mCRZc%2BgKmiUfoVKkioLamBtN3BXgkFccmcCT2xzl7cYjviM9N1Ar4DjyXDsp2%2BA%2Bgcf0mtsMKGEvsAGOqUBRF5QV3o5IY5weqV8ptfDCq6muJjVuRhFUdoKzqxWByU8Ud3z%2BV9ktKMqD3PYP8K2vPmtqIkWWn%2FejFapk2LLrouGiF3PTyM%2F1VEIn4MD2vbSPIqXuarh%2BO6d8Kwbyjx2gQWK%2B9KMbPzoff%2FIDQQTTc86Fz5Zq9H8wgc6jXS0x%2FEinAq4cxYgs3XL9mmP66HMnhY0mrjMXwgPpVoNmpU3%2FJRC3gHO&X-Amz-Signature=1b0ce35c042a574282ca24468a7d5a516487ebba42dc24478c6ae290a9a89aa0&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EQEBPH7%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T141330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgz0SRviaPptAv3hjDHDQ9id5OKE7G13JTK8av%2FJMVggIhAOWGp0rGe9db4AILVdjxcKNJfWnlGFYIZzqjrFITy93sKv8DCHcQABoMNjM3NDIzMTgzODA1IgyZhr6DAYYxHEn%2FmEwq3AMtFKmZORMBBZNfntTc7kUOUdwoD4BwzsQse5CA9U4g3eUSQ%2FIUjm4F0SeyBWoSkxZVQW3T6oV0vgAyJ3SkfjaOOLDH5Oj7hQUEjGy%2B%2BPF8DBEygXfOLtBf8%2Fpf%2F942%2BalfbTHQLCMiqSYh9s7WgXXnlFLKGPrv2XrqKiXsfrLWWTZ2I5%2BvsbdYrvRiQvaPf2wa5f6t%2Ffm8aJ53piSh7usWw6RE2%2BPB%2BHDkoVrWRAou6VHHfpmcTpWUISz4y88LSSXDeVUhS18X3JwtkzmfD6MyKgPbLGy0exxLbL6mZ%2FXI%2BJwpd3wJ5N1vL1e0z7PvhDu6RXul6ZDb4Fzja4%2FpxYZPkQmh888ccoNVlkk0umeZdjdIwEFA2OYlbhGqeJuqIJx%2FFaU%2FpOMSM5m537VbS2Powko%2B5sip3BZpEbyTrkIuOlz0LbEZ9rJCC14kYQRS1sG8ai2SDThxPa2IINZzw2nG3wsdckqZ%2FviwLIKc%2BvxZ3vYA34S4jpJi6ziEszLI2LX%2FGewtcALgB2c%2FNzgGiE2UnQQ8P%2FsuCJDHzXrcrX%2BYjwezU53wjbB2C%2F2GfWRTw9y7duVAP%2Bg%2BRgdTZ2ABtIyb%2FAzDNCzixqhkOmqvRFewAjP3vjH8rktKU4QWHzDmg77ABjqkAW54HspixzzP0qd87fmEe%2B%2FExiKaWwaLyQ0rK2oPN3KfzDr2t%2BENdJtQ0TlirTz%2FMjvnVcvSpUomjuz9BRMljVY%2BQqJLJL3D%2FvkPtfvWj8EE%2FvqfNwKs9LUhebnnTRl2diuoiecCY3pyONxfGCvdXEdgiSWKGzIJ0jlTi8Q6Z2RAZpS9Yf9LXQoCDV%2BNGPuh8hwq9UJCuyRNJGtYUqizB57dkFFb&X-Amz-Signature=ca652f835eefdf1e6d4628a1e263d0321cfd61f79536c28a09e9c870ff61fdc4&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TCJWXP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T141333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO9XbBhyaZ91hjGQLqaxj9EhCj2w%2B9TsMCgD6DqXNbGgIhAN8RqTrvM8F%2BKPF6t68v45xuwFa0eST7GviaxH23L7SYKv8DCHcQABoMNjM3NDIzMTgzODA1Igwj0ePceFiFDf5tgF0q3AOcFS9wG7jsUtBPU%2FPvyZ9Rei5wBmh3QItXM%2BKgu7rcaoY9DmtaEPtH3vrrBLvGAsR%2Bl9wjEc62a80cFCTCOLdGexBqifJPxYCKVKZcJNQ5Lt33%2FRRaEbau5rRypMRkDELV05vbKzVcGmI3Yt1o1UzLr0FB6DpsRqcf37He0EHP%2FwP1VL%2Frw7yX7ORuaJD49y%2BRUmfMxQ67HJaQSgKA6mBfcOLxmOjPe3J2o9t6XyTWUYsOGPV4Xrt6Jy0%2BeYcuAOUmzsaWgpFJ4qXS%2BKqG8UnfngYwzaOACowoHpFrjjbRSqcf%2BtewZrj0K95s7UlyLpAg0T8yr9HRQF8GwGTDFXd1Zp9jai9dIuPBBRU1PttO7XqXQB1%2FhYpeIRQ67CCGDcZw%2BehXVKpQTr1%2B3wzr2ssAnEF1nbuvS5Gzirk2sNwTz913jH%2FOIThLMQoopDGvwQg7cP5iYXALRD%2BCLz184q7DDm4yhM59EQ0a1%2Fi5L4Fqw1FG73qKGwtD8rNllrarW8n66iXUtj8GijeBYrWIGJwx7lx8med93z5uFTb9B4gnSTRQy7i%2FJMbA%2BV5%2BAbyC1QkfsHlm9%2BzpAEngYD7WoEdQ5FWL3yGEQuOUiB2zpmdqMKtaSXOda%2B55zQMn2zCFkb7ABjqkAQvw1Bb0VJY1vnRc6JIrz%2FPZs5MML1zgf2PRThfYbsXBCJpjnQXT3JKz2VtACkR6SlRSqG5gk9A7X5Oi6yqD527KtWJnuxcamwqATuvDo9thVYNwpu7Gn6ECnJG4xPQ8qFCJmKLaEf178WclwYyQvYh%2BzVoFaKpHYi1KlyrZkTAkS4ghZDJHTptbpParUnG20nzdJ3pqh4qH88g6%2FnuK0bdEKKCJ&X-Amz-Signature=4b0cb30d635f72bb77d23f8a78f0aae8e7f9de5b8c6051ec7675538620a4a312&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLCSC3K%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T141339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbJQmx1N0eScY49T93pKNwSM9A2nrRq64dGlyTaajuwwIhALd5cilGlcrLqP5up1iNT%2Fe%2F%2Bhv287a8u1%2BXdxBtgtErKv8DCHYQABoMNjM3NDIzMTgzODA1Igw6lABAARWdy1tH4yQq3ANmNMHHACW6Tu1ayVXOQAbCMqzpMfKOvktHkYl%2FNwKYUG6qCd%2BcMup4lUai6oNqU%2B5MlmwXGnKWLT7xjwjg9GK0H3yavduAhJ6F8D4Roro693LPxNx1wDzeN8C4ODzEH0jAU44uj9YgixCzeYK1Eg1jXaU%2B0qPdTq3GMCnUa5EK%2FCJWiEAsSNtgJ%2BKqFFwKKprDV7WDBGFVoG%2BweqpwA%2B6HogKwC28J0wm40int1OIiOuMzH%2BW5HtLW%2Be1gn7s0R4HEb9hsGpOrpz19d20B4%2Bunv%2BNp5V5suDxfuRyerEwXu0Tzp3RTEb4Tiw4aySnVDiD1EYa18qi6iY3R0jeJ5NojvtvK1uU18WaIZnUsfP3gbCb7Ec4t9QxquSSXE76iZeeR%2BAr1%2BgdeB%2FUkD3Rf5MCqZ%2F77mr6L34iI5ekD5OCu%2Br%2BwecE7Cr8zQOOg9E93ekpqh3nkeg94PU4YmsVC%2Bk1Vwzee1M6gY3xOuYS7oyzwZZPWVZikUwNCr7FeBOYsAQOqlk5PstOtaJFvyYwAkG3EMgal9gPTBFoTLN4wsmXS59z3OHXsr1wOQ6CX7%2FJ%2BBdkPWILxXVwgEp4mmuPdXvm7getpwVgQk6wbbcJcO%2FoytSU9kx4JqZUmjFIgYzCYg77ABjqkAeJ9cr8TUoDt%2BYdTYXcqw7uFbGm%2Bm%2BE%2BRVIgzoOScDVQTcq6FClK3jK%2BAflOr%2FALLs5t6baKvLZOrBAP4tKoUf2oxid%2BYM1gbhq7Q6shQ1LrG4cGzg%2F0uS5jqg0OjhNLcvYM8pfw75kpq4z%2FZE0cR0gD2KTxSIyaNdrjY3JQB5SKpCqWMKs4kWvsztsy4KS9XPy%2FuPefKxfyafEBnr7N090Ui7hO&X-Amz-Signature=6d7d8942dbb34275008f4b9d00b9a9b3fbaa4098aab3a1868fe5a813fe996a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATI5U4I%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T141340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7VxQcXnD8LPSAGaPLxs7w79x2%2F%2Be4MCpIaMuHVNN16wIhAOyhTOaObqU%2FtWMHnuxi%2FZ4b73GF8NVVsQzJuclQ7xKYKv8DCHYQABoMNjM3NDIzMTgzODA1IgyfGsfeK3S9%2B1vMwhIq3AMTO0iRnFPO7yRdeA46J6fuYjPjGYfSVj4G3ANrWU07f9Huhqz%2BBgk%2BNczmxD46j5otyPWLK8Xgzl2FryAJPDDLDysAPvum%2BU0goDmyPiTpUSSerJVEhfDKmMiokNOLGdWbeaK0XUr3UIhaqqQxAZOdlEhwsrG5S83Xgv3yOz4U94bwb%2B5epbEnyWuI5dd2xVaPyBe%2FWp86Bku%2BtHKz54Zv0eb6tR1uzYemCnp2I8rDJt9OolRGFp3mrvtfyKCGqGZ81arFgPgr16m%2BQeVy%2F%2F9%2BVtk7tlEx1oOwPidoIl3oitcI%2BhtokoLugetq9Q%2B09zD2WlqdszSgSr3ryp5UubGyul7BmCD6g8QV6ENg%2BDuabwb3Gxh08uNYbhjvDRn7hu0Jw7rvKthyD%2B7pnXJYPjCWSk3aY%2BVGEDfN%2F%2BRA1TuPlYkB43vCGiRdukAQlPAKlKTycYWkxT%2FVbqo%2BiLU1ecCHDHjCZoNfeblDQMHc95YD9LHeKbc0kN9tHkdc4Q021wZGhf5m9tlKvOYcUWdx3WvTGQk5uLd9teEwPNFA8rVcwU0jR6lWTKXhvOfncf4BnHbX7awjtCHmnILijmtfIdWZ5p9%2B95iMsek8bjXhi2EW1NmGEpx%2FH7Eau0eANTCJg77ABjqkAfk1Ew4kBl3b%2BY4JD9mXAtkN9UacYCA8govmCtJJdyybUo9uZ7i64iCn706affqL86RnYFyGAp96fPTBxuujyts%2F9Sr1mWC%2FYdSvvAivtddeCuCNpV22ecYoxbc4fqHxMrId%2ByFQw0HZSO1hepwszIJpjxgcNHUIsEyajxunVb1DSduu8ADpNy4x%2FnwDeuq2fgGzMToxve7ybgu1u9fyexZ9%2FPWA&X-Amz-Signature=c400c36868792560714bdeb898e1fb7f9a932744177af5bde3800e3555a833f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDONIR3V%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T141341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvKuqD2dykdhnQtuYwIftVnafe2KSsLIm7lBxDA3rJmAIgB0SJpt5jW08SGC4NAfiR%2FdHBkJh9wsOS8H%2FFxirTH8sq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMqLUEY5Y806yyHT1SrcA%2B7oz8d%2FGZxmYBn%2FiwMc7aSupFWPVK3ctC8HoFwIV%2BPowjDhj9xMw8%2FFKgfeGAe%2FEdyWhdASWTIvgUzzD7RHkqnwVmIsSHnWeSCBrGt7yqVD167d%2B%2B%2FrYXhMwDXFaF2AEkUQ6meIVvmchAL9cPAQupDIt2safl99tKvN4gcGfjOpgjYCdF9fxcPKgtHcPhvVxksw7g3i6n%2BfbpnDX2TdwVhwUiUKqQx8xxd%2BD6noQeWZrUQ3VIiUGMXQFgVUUVZY8iOTYz%2BSx81t68iDEIUBLRqNjdH8mkZe4BwCelIGR00KBCTRM9fu6c9Tw14HujXn8GOg%2FYtjOF0CsgpQkCbuu1IhxXmBf%2FzzUYB3Cd58VBvpWIQtdGudmvOLRgBdQJQimDbWZ6ndJyTxGxENGKjkl1RBKKev4gHi866XDWi0osoKJc9RQMcZlwPPhsd%2FJq0fYEww6EFF0mn%2B%2F5PdwNN66fk%2B0HlA01VV6yxviNqjhQfRrgbnBj0kwtLNFV3jCe31k%2FqN97c52bJBN6gB80%2Fv0d8AmnKBZ%2BKBWsQNrCe%2BD3fh1loEvAgS6FUWOBMg0A1J74MKI1%2FheuaAfiQw2v%2FlIg9JJQehCjP1CqGaJtoh7YJQp%2Fgg%2F5KkXnel%2FhFTMO2DvsAGOqUBV6%2FqTYpcofvtz%2BlaeS2pXNv72DXHL9ceD6LqW%2FixTQljhXThavA6Bv4OpST5Ij6w%2Ff0utXPl234zeQWBgP9SWFvDm%2B5PY3DmXV3QNPCKVQbVVTCOp1Z1JCOfK0nK0B9TBn7FhDtblNIzt5naFAecuJIDsrCY5desFqLS8GK4O7EzwS%2FtRgSpvPpjDnF7hlBXsLfFXxCk9zlXVHACiDRIPPs%2FBkKf&X-Amz-Signature=78a0b0a618f5f5a91fbc045e42be1598bf13e403e8bd78fa1cf97258e86f0d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA7F3NPJ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T141343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGOybxzlF86kYsqi979QP%2FOX6LkdYuyVPoCtBfhk9BLAiAWAnTDgZlzj1OSVhcSMxgvu%2BCeXKgtZYapl4sGhZwChSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM3AzUGdxxlH5BCd8vKtwDEBWunA2ttjj%2BEWM5CbThwQ9FAILi6%2BH8qP7f85F%2FPjt3Z7qmiOqIvE64vHrXrCHCPJpxDiK4MPd9wZxixhGYRzDrSdX%2BXsjXxIauboTN8qPwnZsHrdYnqdZ%2BA7iUhs6xImSzVlF%2FBNNCyIZLwbevQLIwPfk6v6QzrHphDC24mKB%2B8smJPZmh01gs7HNXk7dhpq82kLRx9o%2F7a0cWm9g4ePJvMLP%2FLugEKRS5XSyz%2FrF8ODLGHsPt2l97qVoAb%2FeutjYWqG2d%2BJJ9z9mEzx49mZrGj7gpUk9UboG4oCaYJC6dEE4ztscRIft1twMpo%2F2%2BEy2tPEo9sn5ijqBhIqj5hobJC7quO43E6s%2Fb%2FwND9wBtcq4a94zwTjtSpwaqwYIcA5yY9wg0whl34f4tnOX3e0lhtQte85GpeNAy7n2v965uYu%2BPC9wyNfPt4rtfSMKZHFGqO%2FJ%2BhvP4b%2BnqKucgMFEZ0KQUXfUVlhkUWVO%2BjIRIJx%2FC6Bz7%2F6LtLSXWGe932mHNktpIKHHvvN7s4as0HEFYZz2hkw4qs5FzuXOJGJG6WCQqspc0W8vxMnOOfWxB%2BaEc213pxu3FTSMryC7wk9VuwPmvt2HaDxV0u6U2bBzCPTBi8ILv07RPiRIw2YO%2BwAY6pgGQctUeVvwgY%2F%2BHAmohCUOIY1ROYkiXBUmcF1IBN4fUgAYJusWw4rKkUhshYCM8HxMB5miOrdA3czN6UfIY3TyMvE8HNDnb77mt9uHrvgph9WGM1gTx3EDQI5hW7o%2BcbgXP5Qi57Phwmaf9zcboT1SkzVHGsfsSeUq3HjRSV2JKJufNye0sYI36b1eqDDdKzvhiOkkw3HNE%2B9dF7Ec9WbL224%2FSC%2ByW&X-Amz-Signature=871e6e282302128222c2ee04658aa7225c8805f49159c1bc96cb960d6d707caa&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

