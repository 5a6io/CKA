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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKHOLIZ3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T141026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV5yuevrY6FKMH0ipTAB7XRX8SJ0PBjRikFNxaXGpqgAIgCV6g%2FsshGZkN0wqImAXyI1KOg%2Fl1MhRK3MiFEIRGn1Aq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPpWavgHxcXnsmdqFCrcAw9rYZZkeX1BFqQ1sdPzuuXvAWjxVxXEy60h%2F5Q5fqbl0Ns6%2FszwDsje6n2UAhv%2BJai4mLNpp5jxsBuopcEwl7Z%2FwWGVlt4pYEm7yaRc%2BoqXMBHI0g2Ce5bdE3j2jsWC4TXqsea1vvE0OdBkrcyK0XftNy6OWzYgJygnKodfhcC4ru77SjkL48rpu6O3YxbhbKS1wmZYFjtZHHcI5IdFYslCWRaHmpb8hzdxOJEqEdJy6TzW3Ad5Oqx7xWlijtQWuxrmS9LKuOkaYP879fwva7%2BLDS02SBmz9f1Kxdz3jUN08N%2FHVv%2B%2FX4yAVqJSRdaOnjcYvgKOGP4g%2FkfK3hdbD%2BjYqaR3soOdUPC34mhrIJTVmH3ko3kn1rk3d4ufdfAbw8amsIVWcSGdmKUjPf6q5jeDLcWoWp0nBg8ML19hdV42Y7J3XN94PjsOUXR6Y%2BFugPzHuGyVb6yV3rGVU8ZTwq4nWvYlrXChUEZ6MTesH%2BGjtrsrKm902I61Yjs84oxerLsN59gSUc%2FMsaPGCR7LQZ2J5YjMaT96lIWwXziVSaQM5Pf35Qghi2XqEwPjBlm%2BMvETjjxXDvmmlK4WZoLE2DoJPcgqZJBbG4YDwBk1F5ZFmmSbydT4zkU97ZihMNCvosEGOqUBSlNOCPuYOGurpmamSSZbWnFcfGHTSZcL%2FXvMgpztjiaU32O2BDH6YuQ8JkpRMXv%2BU%2BgLsnQRWF%2F8IVMI%2FQuBnBQ5zknuFb4nMsrpP0agHFc43ErdEaPUrE%2BW6OUELkNiAch0PFQNPMfS9n4wliUrd4ppwuJY8ne2H9l%2BViXzPapM7fXBOF5AorEX0rj43wezc0Hf80%2FKrOPmJ9xauvT342%2BkaTFy&X-Amz-Signature=6c15aacb98060a8f6e5b0dcb99070929db94ef747e47d8a198cca6192c221273&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMH25RC4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T141026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQhUNU2e9P2p819F%2FfsuRV43jn%2F%2FYlUyt2JYPbidnYIQIgIuX8ttklW10r7Fj3GwviN5fotdPys7gCh9zWPM4uBQoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBdn5xa3EztFJBa5kSrcA%2BAG0AHBkLNrmkSCFSaTjbTVKhjmEuo4sCibHCP7QPdf5gQ4dUGeWcPCDwCtyThgfbu6i8AM3EewgKAxM2qu6nxn%2B0HvXM5oyoMwR7F%2B1WXV3GrCk%2BPim%2FMyH3F3eu6s7qwsFPOFV8DhxJ5Uj3VFYPk0iirq954vNC5vP98brn0IV2ulBBgbTgdm4cLUNqN7HopK%2BUfr1vIfI1n2B2VFKnK73zhcRMhkdHE9Q0Ti6oxwG1RgmlgO1XIhZqYqvzLr8GH45mwvqL%2FVC9imz4PGw6BoaU2P%2Fit9LGgxt2JOOJ0RF%2F3dayNIh4bCa%2FsgNNIW4t5Y1jRV5agxzvSTrTy%2FvlBEEk9E%2BcEK%2FR0m6ff%2BwyUgxDmWkTCahJFuqaJby00mjBFF%2Fr3uyB3dDU8BrCTmtroQdB6jgzseKXDC5oG3DZ1DwYCA%2FTxUJ4rG8Qfjb6t0CCKgZMDo%2BJspg%2F7Axy5N0yk5Lh%2FpU4%2BxEetRsKCT3SqOIil4j9yB4MWrxniD94gUOzLexcxXqGkIP33JMdUqvNCPB%2FgB0%2BHrGAFVwy9hYQLBkoju0JUOBQbeO2IWj704Ndp74NSK4XePrLo2JI8pV4tEQnMa6XbC2vqZRdgN4zQq6b13vDSoTun9c%2F8%2BMO%2BeosEGOqUBYeHp0TI0hJ5ySJJd8db6T3i6DPNERRurXZOhnBDKnizDrksyAi6cv1yBF0LwIlupFfWJiq2T7ui%2Fx1xkEf0y39HMialB4XqluJukPBzLo%2BjU4qaZEItAI4LCFwXQG1g1fKhLkH8PAeQRl5%2FFlcKy6SxE5LuWSKSy0HPQ%2BnFXrMkl7zpUpuExXI35mmkkbR6bJaHcNlMvlf0rF5rClCYLHxQ1v4bO&X-Amz-Signature=15f2399fbe74093970142642342e1434d69244a5506186861ccb8d4e3ae90c6d&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DQSH5VD%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T141028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWUF6CWPvwG5hR7fr29M3sI5SWjNBTUStr3Izw%2F95m9AiBG0fqeIms3%2B1qeqnR26jDGIS7yoVhdwAXpUptqFUdKiSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMB35ncS9EfB7N57TUKtwD8So%2BneyMaMhErkYlEUQzEHQAoJoX6Lz0elGGmiX%2B6NGYwDxDoGeHxXdoYZBh91vrLDNZWK%2Fvtpep7peAY7uXhJy35MvPKMLqIu3hbrTd6CSUL0jhgRQnWohD8FR131BZVUe7qAohiSV7q5e9%2BAKlvqxkL0aVas7j4H3rwfIBGOYtLwNORv%2FLkh9EMQtrbTPXNS3nYpTsDj6z9SzoqO%2BJZZURwPr30acu1mtYjiHKkMzma3WEzoIOWOqRgzWPSTzti5BZgkrs69oPkFtUeuEz2cWmiKpHamHvWwLcxilPv%2FQOT3lT%2B8CZG%2Flc3pi%2B4oOmXSBBk3FwRN8wdtSf3RgymWS4a3X7s1YG9cyO3ZT9GLO1A9fA1lYxPsMG%2BngSM0ejFb3T%2BdrLSh4R%2FQJqiL%2BEUgKTaBTIcXeDQDHAN71lW56J%2F6W4rQTl77%2FtPySTMvfG9UTtyFH2q9lIoVgUaAgX414Gh1O2cqTyCpD%2BTYx4%2Fb%2FBhxIxYxym3Yha0sUoBefNxmUT6j6RHHDSw8KFca4HrjA8%2BW705vcxgh3lhtcJe4Zp1%2BhG%2BzdTYzZdoqoob2KANdiaSLetzv818C0X4cnrBhkrqF%2BNlMimPRfX08Mn164sLFsfb6oTLx16LVEwtLGiwQY6pgH8hbl69LUCeEkAOc49Xj0%2BpodCCLYJJu6gp9M8ieRziAhXQF4clHd%2BbZ2QzVoR%2FeDB7VRMkKY%2BhnlWoC3GH1o%2BMmuuj4W5mm1YUT9me8B9UIRF1HVl1Sd9p78rgzchpuGdX0Al0CWiy15lWmvEvmRXi312hsMRpLc6OXSIYOnsxtJ07W35ICnJWe2ysKII3dkbQ67byVKel6RutwZMEEcZLrxYZaQT&X-Amz-Signature=ec9cad45cf235a1ffce127764095cdf50e0d0ecdfdfff1d97c5a9bfe21491b55&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFF3QUZG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T141032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbxGcz1JdfQIvH7d1eSo4eId6cv8hFYAgX81igEVrZkAIgIMY9mxoeerOxaNoELm6N2oyf7nOt4PhaQjRtF5ykMnYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDEQ7e5LWrSqgC%2Fuj%2FSrcA9pJT5v1PYAVsBLCul35gL9edQ11MWSqpnhnltRHJmsBs1y%2FcEv7Gac8M%2BjMOLb2%2BC95tK5Ehqu%2FbyjSJLJMKJRYNHrBWmPopQkCx%2BW09xrRbQzpN6ebIfw9TFAJ0VY8JykYnfH28sf83NkTvMcKP6EdTuDLTnHGPIZIyzmPWF6GaNdyxt4aJ7K0DPMVNc4hVFuj8tcsoH4PxZWfZHjNpaOkApFyQmuZkqD2zA8W9gyGAyNNgtJ88oe5b%2BH9zHx000UmDX5D2lhrKSEd08EDkZwv%2FVEeaJ%2FXF7OkaZo9POcsrk9nzQpoz60Cn%2FLQgEgXwnY1fAKlvtf3JkVID7fVPNZb%2Bs%2FpGzbDMyO2G0%2Fh9lnIG8pFVILsp0zpOVDu07V%2B%2BtJyK99Qzc4D9GmgcBnPedQEDzZIA9lcLkOMHxfoAUql5CeLW3vXYZYk1BTBFEqvlFnPn2SaGLgtWvFrPqoQjPwNCqGswby%2F01ZJmtiKoPR7jZ8d8iN3cAmMOtK%2F16rD8ZH68DGU1sa10NJrq7Tn9msEBAfQyp62gVLkFLr%2F6V2Frb3JjEypdLsSvbDe0m7E0%2FIfbq5VG%2Bc6nwP2DccwT6WKlpMnX%2B55UuOhXfwlKCQfkelf6pYBGh%2F%2FHwrRMLifosEGOqUBL9hg8jBuauCyQ5gwDILeAPWngZPi7LG8daSCVTxqpzbXG%2BShvTvFxNQXDfWRRnaioZjeKBtjhH%2BYPMmmOKwxkaQBThtHDyPfJxdHeLT0l8LwPm270g2UzSysRMXC%2FGXjK%2FbsD%2BrSD2emFdtvicmhtuOBrYlOm4tlUdQq08dtSdJ7dOYboyJKXL5j%2F6gQ4J2kf2dwCtdYatFmJ3tE9DWu5AGrvG1T&X-Amz-Signature=6504133d84a6488063dd122af550476439d92bec7deb76371a1a7d0921059cbf&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655R2RV3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T141032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfDiqku9Yf4MHM3eQpminebBVGE4uaHivbDHemCHorCAiBvuah7sNjtzo3ibRbpdop59i1ej4IgUGXNkyS1DnqC2Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMH4zDXOr22k7No1DSKtwD67Z6Kko5CJMi2jcazZ47xb5Gk3Gai5MKCTfHp28mnPIdqmq5k1m8SezWrfDMNp7QYeadGK5bdxIaf4lJSRS65AjKQtt3UQKW3juin2LBfhk0hOyv9JwTiCaeAxTri1AcC6AO%2BD6jA9LlIhOP3zY80YnuJhV34KgpWGZ4I8qAsoqgOX0sL8POO6H4fRJMsG1jL5%2BtWGvJXbYrR7HQ8leqMrYtbqBH23WnprXmIGizKE%2B9piqqxuLPaszjr8ZRMmLewpGqDaF1qPFRrz%2Fmrt9ipiIT6D9eg0PuyNr9gS624mJG%2Fqxa2pZx4g0UHbArty4Gb1F7rKMvsN7qQfU6vXegVOxO8nXJIWh4WfplyS77o7UWR%2FvKG5vchbKwlb394i5XGNnK3oL9ZAc0YCeivD80KwiFn4PCPPt3%2Bk5gWKR77rEptYuMq2JcNoLdtxC%2B0B51oqX9ZGI1HlbA0eUSqRAurYeSl6PUWTFwsq21gFfkLa8x5QRrjaObEJoeLq1VuwgTNa63OzSX3%2BjfAMqgGY8HcSQUJ7FjCfnQqNKxGqNXMGJfEzYd%2BRdPGEeFtul%2Bb6g1QeibJHVRrD1sfceSAHAoZMB%2BFo80f1cwWqQblTtTMsZMlATn%2F48guhXI3s0w0K%2BiwQY6pgFfV%2FbHVRLwjcqjjUzSPwv8akTE852WZz6KNH%2BT77h2Vw8%2FRnymPe07wmoOmRrcwW1n8JIPzxPb3gb9X8sS8qZy5qKj%2FZGjJLTRc9ZbOZdlB%2FKB842ZbNQeVFq%2BeMCR1K7DWRTYL03%2FrnuJuveOputvO4SmGP2LDuUheJw8SpbLp4vAhJSPf3mq8iujObIdoXT0pZQciztprwJ9r1nXy88ssHz6dRYM&X-Amz-Signature=3835430f19f4ca54d2e50c3577d9e769ffb86f46cafe207bf7d82fdd9ab64744&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJNIO5R%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T141034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf7m3faZg5be6mcIshbW%2BZu9DXUMmDLfQC69r0gKeuAgIgSKtII2kbmce05WQV4OvkIrhmeJ8sgfWjYDwvLuV2F7Qq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPwZb5pYXBtx2fTNeSrcA1pLPP%2BbSLATadlNUuqQXgJdE4%2F7pro9PG%2BfSYwiWKT6NlnMIMFIBU5ElO6rHV7sDTrSfpI0Vgm5i5rRWUbi4UgQTtZwMiXoFoZkJiJcs8QPEdP3ZZLGZeob13et6wVUqCzYF7nqqNKpx0gRMS3qRLNlXnyPcJXvHbj5go4vff3riw4jpjrv0MoY7EAj3xx3l8TgnIu116ivmbrAkn%2FxZseKQaZWLBnSuEdceos6b6%2BYFSezm4Spe3h5yNl%2FScKmvuecJqJUdHe41FBSaz4OyneIhULcuh2Txs%2BImimB2JCK9KTcmXKXgh18OPAdwytYYEUbmB3X5yJivdvuIg6lmGZ5C4vwKwfG5bhsbWmoWRKCzxRofJ8ZKJRNYxWXFJSplz48of%2F3GkT5H6OE1Ba0rVdLbYdLzogIcmRSlpvkZ9uKS1cqg7ODeHOq4UmRXC52dLiC6VqO14ADVLOjzwml0JrjPqB0%2BgLYZIHV%2FmG5QIU2PgE%2FEZPb2aFnVM72PTu7OR0C3QxAO2frKj5PGdtj7IucaM1BqWbmp47pmCjz3sbl85ZAGwUUz2qp5W2DVepYVA9k%2BkP94KELnInism%2B%2BLfBkW3dO2sjPY6Bn5s2j0JdqipbG8ClPT2rIGdDIMIGfosEGOqUBK3Kd%2F3TRjwH%2FPsKvDo6AFH11hiewfdR344kF4O%2BGi5gQCn9Lor4WTa76HTUDSZmt%2FGAT02LJHUIciGNf4G5pi8nfGes5vFR3mtGDqI6cFPMddqhc9Ffkcwt4e13NR1mZ40dSHaBDeJ9bC6fEITuMob15p7BlAU0VoaAgDO1%2FLX2wBG%2BS699LcFEUy4P4tYOoRUAx5JBdZvIxbVh9fcCcQjfwNZ53&X-Amz-Signature=41cb7945cbba4fb7e191392a32996273b4892f7635abedc36f0cbaf151d642e9&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YGKSTNU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T141034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFE7QcNjKUXuXfq9pPq1XKtzUr4FqaXmlv%2BbrIMekrTOAiEAlQ54eI8qI2rHnZ7e6O5LdTk9Ru2I2QkL2W7duN6EQq4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDElCJRucAyZes%2B0LVCrcA18pA0Zewu4ic3TcNzcWPJPBtYmWAWxnEB2JOvjoJvMH4wG5ojN5zJj3dvqlnB3CK7y6F6uS3dwdYswbHy5%2F5shToPlpbg58mzKfU3I%2BTnxWrAVrGcGXOucMkPmIxmT0jC%2BrxMbJrLcEJYXuE3cSbwszElA7pKPE6PZohKFdePt16VKiUWVDS9cbqvP71XDl%2FnJux8xg0shohLuxgGWnjkUCReEPiFhpyg1Bc%2BTESmzwW0IEP1BU%2BgCJWAJS1HmjVz3ZR3rQDkNIERykcKZqTMQ0REqI1o0IUFInj%2FjSSe2XpnTEb413%2Bao8VsmeS5E39EJOCJR3Qho2wqyeP%2FgWcnRcqOM5%2FW%2FP9m48MGtS0VtYTDRGeqC9jyvZ%2BPxf%2BjItA%2BPz1pCwtvydVZGnjj6skGwoUiIGHSlcfia2uAVOww569A67cp7246L4uCaqq3Zv0tqM0bWvfLSixHf4hv7nwioUmIwXrpOM4gCUnsp%2Bjzy40WAgYWNkg5xKd%2FhaAwj3okOTYSPjDnAWDSCCKh24GPXV0grTUvmaCLD44Yuqeh%2BhsXgZv3z7pBf2eDMpSGeTFqIGlQce4hL2KlD9VUoAm9FPM51cs7N5BHo8uwXSI%2F4AephMtyBbT0kI5d%2FZMMufosEGOqUBiGm1tJapVcpQ8wKwlDFroKnVEwIiMeJ2aGh4I3u%2FJVAbEJ2BrD5wuC0vng3QI9tkM2tGZeuundhrWlyciMgk0m%2BWB%2FLIXnA%2FxVZ0SKTqxMGQZRYE15qdSDayWarTsQpsmdgpO3BzP6wluloMr9vJty9oy16nnn%2FMoA8WmdnThkQRjcvvxi81Fre6WVwkYtwQwikVfGgK50%2Bf3JHFJ1d1bp5lCaHO&X-Amz-Signature=68f19b33a1e6f952c7cd6a0e82fcee1d5a9497c16b8e211956251085840267c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPX3SOF%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T141037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPgxZDZLCOLyIZ75rjHqyrwF1fQqyA3yd1fZBf1MAM0AIhALugS%2FvjzFuif7kGt0X5eYHDMcl5281%2BJJEktXAA83ChKv8DCF8QABoMNjM3NDIzMTgzODA1IgzFIZWb5zYnucZnJ%2B4q3AOdk3Y8buh2FEvmKF6NsVvq8WWLtXZ%2BtB8sCk1Fw9nf62kCxTvOmEe4GzlxD0g%2BFCw8uvA3fD7%2Ff7mmun21XN35J9e75v4CLpsbYZVQDeubbvivHofrbySVaUlc3BSZl6mDq0ZHW9ytxzgh9q99meZ%2BHFPYkvBzU1bvSehFvvHdUEjonX%2FvlVBy8vFwwalYllr%2FaIHVmmVlc1RWPDNeZ5AaZojMvQpncnCktWmZYBQCdr6wrqnLJVijIRPCVyjWuZvXDpRKaoJNawIepGj0cQ4%2BIhb4YOonw5vRcQ04hPi2l4lJv1Qex6lLK175jiN9htomAKkxMWPm5kFaeavJlGJdbnkauUGLfORyCinC9dgfh%2F6jYXNXiSrxKIukFlvwwpBUYJU7Kjhxhmyb%2Bx7uzyOBVlsXMk%2BwC2sKwptE%2BF1JrABUWRaZW%2Bh8vZHqceVLcr7KepQ1jxGghJN8JOu1II25bWzB1053SmEKOTtN532innzFX0c%2Beg%2FWRD3wPvMy%2BVyLHkFAICs8M4RBfJwsYOQvARwhfmoMutUA%2B9OutgQKxqu5mYFwxybvFn2NM8KbZBU922s1wlqYy6C%2Bgpqgxcz6MoFOCXZEEqYAa%2FDH9O%2Bou7PfrkXJFWkqryu3ZTCWn6LBBjqkAcqIaX8hZd9SfHA2FiAB8Md0tDofioJ2bn47Pfd2aO6AZ88c3%2BQNOjw4%2FqAFxHkG2vTq1I2bqgo%2Fhsg%2F14r2RiDTPkgTUeIPJJBBFBYs%2BrNSVduQ1Dp%2FUfZ8ZjwOAb6IcX3fHeXLYbun2DBphKaBTr1GjR5zLLdvoS5T5ZXBhfOT44ptr4bFAf%2FbJQnCuY9q3VuLmFBLlnmnH7BsrKljO4tBKQRc&X-Amz-Signature=f451712c3700e9a67212d8eea0c4917236346ee25834c6f0809054fde8c6bd42&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFLG6ST%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T141038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS5UdYvSA5xTza1uSbMw6koCPXunREdP%2BKVYSBKDiS5QIhAMplzPDAfI7Sx2GiNvMM18mCmyhW7WQ0IumtuwJleTzYKv8DCF8QABoMNjM3NDIzMTgzODA1Igw5pPiJ2r%2FmMxarOikq3ANM%2Btvbxa78F48DXvHkRtyAHQAHYkoR6eg%2BK1d2xj8au6TyOuUXT90t90nOlsocxJmGmEjBRCVka72sPkOPyQAVrQJMbbTOXGtZKXg5YWw4Tv9ifGlf6rrGACvaMS4c%2BAK5oTxNeR1zh6lE3e2F0rJI%2B48dENIdRw90%2FWxWqWLVV3k8SdocqKe2MJMZc8ANf8JHz8WEc%2B96I3kulX6l5Ng7HtR5tqX%2Byc04j5TuBgnIdzaTJ%2BMCpICC5%2FJThkZSHz%2BGHvj%2FdIkEzYJwfqoPI2xi822o9XQ59pe31VSUFD%2BDzYeOrdzzCsf1qurDpFWYxYH9EwmOz%2F8z7r%2BeaBMHGh%2BE%2F3jWe%2Blh3370uqg5IZZSYEryvGqyCOyCHxVMbJ1JIvngyXtpkU%2FaruXVeHNLknU7eq0n71PjLXjs7NYJVbRZBu9KK%2B3%2Fj9KGBTGqnBLzwlc97a0EzTSFc%2BTJ9kONO4eAtSp1U02LkdZRkvWKaFDavl3JTxJcF3AcGpNWEj1BPrMt8F%2FDpsMojVBXg0PVP99KP33KU2tmC2XDr9FNcVPCgDgGh5Z9OIdA1zYvP%2BY1J8IitdgtUPanOjXCH8aPPSywHVmBrGTSAYCxtpvuMFXSNFvMeBwJW6X4HeVlEjCXn6LBBjqkAZ9igwLksp4Oc35iTN4LBWQy4oGsTVAaDDRLhae2pzAyoyp%2FiEOe0AnXOLHVbLH7IDWuznfcMUTim0l%2B2T7gFu5caGl5ZRfnJw%2BJw48ZS9nIuGpmzntmotrvkZKJ9CrTE%2FlGj49YV4zlxtc2dlhOusyJfdSV2rbJyHna33hhrqHAkx4GdwnRvPEo3wUq26ouAxBTSLAcBXxZQ8Uj9h85fDaakvsP&X-Amz-Signature=07747a7fc19898080ecd57aa31b4ce87ff45db8d5afaadbaa5f53c5bdbb5c7cd&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

