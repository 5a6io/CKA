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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSRG3ZL%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T141155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWax%2BDKpfcbwR6PlJSOqUqEHrBwyNQUtYzB2I3x41X4AiAfmFqrnhxVv6Vry766oWE%2BjeHnqD8oKyKGhE9KYP2WwCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM8BHSJjtzJyRH9Ed3KtwD40PTPe1Va1NgM1SwHT2aTRPdMmVsl3l6SPAl53ocglkpcvT26IAyH0okugbFaPcC26fJUVgqb%2BadWRLfwhnAe7Z%2FplkYTx3HLlnjXDhrxr1n1ilBVi%2BoYIMWNy1ZqF97LFkb%2BbpRbx20LsWufgmrRGphO8lL6K9VEAwnG7Es2Rp%2BDShdBX%2FXL2WY7rfOhBVy%2FqHgj9biBDOtg6bpMWsTDJeM1ksMvuDMm2D5%2BlU%2Fy%2Bym3WnoHco9R59wnyS7q%2F0fGSo0DGYi4sQ%2FuaOzt712IBwQlrxBch%2FDFCsfUgKQzLwbuA%2FDgUPBmQtqnPYOklv%2FS%2By8EDzMD9CJxGA3DLE04RF2zsNhpKUE8FgYWFKSjq0ArWIQL1cpa1DiU%2BqpqCH7UKEyfsW1kiaOp%2BJJTlAnvYuHYWcPGayMbQb8wBpY6GErlfuyWYkhF7Bo8Pk7D7cr6iZWfY6u8skLGOpBB5muZK2V6HpYxeylCbdnCuPJ4CjxoHMfy85bR9IiUmkn8V1STx%2F1YW%2Fb1nJq6i6kJ2Umw5N2EY2v%2FWooDjZcJolEcizaenkhhI5cWcMx32XNc%2FgfjMVE4%2FGvoxHj%2BZf1YMEGuMBno%2FWxh1ijRY6yBP4ua2XmkBB3P1cmVWn%2Fh48wxc2%2FvwY6pgG5cOqNEzGThn6gLV3xlS64YMl%2B5Xuq5QQLqdW0KsDzOwxH7CGBRQ0vXWCTZ%2Ba4mOKhIItCcj6rqs%2FZQPfZZ41LN989VrGbPwnG8sWzS2gHbhTIKMP45qieTenWXCEDyErEyrro8D2oVPHl7TqSPcBIxF8j8g8H7I0nyhCF7%2BzM5h22dGLqD1y2AkxzgOqN07YI2bB%2FOIAEX5xE5CJYe4wRG5ioV2HZ&X-Amz-Signature=89b7df65e70df985af1fcb917c35d3f9c615e45b971a0cc362eaa77859d0ed94&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBKPJD2Y%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T141157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtFw0gQQh8%2FQqvN8GVVYM81x7VGIxzh0teeAga3pm55QIhALq%2F8PKpf5tA4Vkhotmq24zWPN0LE%2FFZvEUK1GappWpeKv8DCBcQABoMNjM3NDIzMTgzODA1IgxSMxNzs7PuGdejmOUq3AOdFsgsrL92jSYWh3UWLFZFKY6Vct7Q9RmxqbFLHjOHrQB0CvsSrL9eBV%2F0zse6dY1Kjb8q2aa%2BaVZsOccdEGAOlNiD%2F4qR1sdf%2FKakYNgQfrupqDoZHxnVonpbikY0DuRQaTSzeDOVbRdvdEtid6pUwA19lUmp00pWs0yWVjMCAvr6T%2FO9S7INLnVtxcWG0i%2FzbK5IF%2BgNQgQFpMVGV9n3thcahZE8bl4FA16UMXJzFseY1nYh3Qdr%2BrPS3BWWJJBatfa9N3c8%2B1r15V1a3xtYVbHO24%2Fxtv7nAZWIXulf8R8CQZpV8B7HQgyCnXUUnEtqu7kY6pn%2BUK44C98I3r42MnbD5ey4vx5i5aiQHXm8brmVVK9uLGyD2PgEtaeK0s9vPLsAEY7HCeUBSeCnVh86ZcP9MjgVr4FwpSJ5jSRMpqBhFg9r25KbID7ydNBBTVqz5iu0Bzs%2F%2FJf6xSjXq5foAeYTvQ4EA46YPt6G%2B785EU9%2BJXCBaOflCpYEy4XmHcDpIR0QoZqhlVFNb0wdrPrFnQQwxGbaSt3%2BkJm2dqAJVw%2FwQsUHbIs4Gz8V7mkTFrCLshoAR4I3DjkBDg2aSZm2VJF5bC3n9bj%2BiCT8bOINM4%2FU8FCdC%2BJpni%2BjYjDmzb%2B%2FBjqkAb4%2FCFsbLjlBbnhDq08EHTPM9J4f0OIFcXJaEIUrmXSLonmZcxe6L3lADw8UrHhycxlh%2FxsVOfG1FOV4I5pB9mZQd0J9HERpVChRlHWqc6nDs%2FwicHJVmkkmzce6kia4jV%2FFBuEuDxdKNu4xBo9wWDqclYAyy4P9YBxbvssYbIoxc6p5xTqsJCh6WJcqhFoKVnIN3DqXRdqrxpi%2B8NLvVwRlBqWT&X-Amz-Signature=6e54773a48d84c93ac1dc0986fd43dd9cccc83d6eaecc6182a87d05dd2085d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MR6O36R%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T141158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0sQSAto6blZrZq6qKyTqXYpJ6t5l2gym9fxr0nyfL0AiAgF595Heatd2X6yaoNed%2FxtS%2BEvJ6Ui6kQl1lsNrNfeir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM%2FhHsqQj0MmpjP%2Fk0KtwDFo5%2BjoLUv88EhAl%2BdykOq10eF3rlSedDs19c7Vp4BK0wgi0lqVmvw3QjzcAFLVpCpuHv8%2BB9b9alev4S4dki7ZanfA8hdlCLGdu2fOiFCQKkmGzqW%2BKF9wqYOZCurfKOqYJlKle67lHOhje6Lgn3ch17Fat01LKMI4N7StpBoAlhhXITR%2Bvvi4hDpSK9CpzJfIwITapoYjmdZaqMP1Hkwu9%2F3XhbuyUjsI8N8jhbNrXof4sdNLHYAfOgtIGslzK9HWxtTPyUvmztoebghkBaf6tVhjlFTXgpIsrRExYNxZ6qQw7GlAm7hXLIasUrLFn5DmLsKSGMEuqM07qInfy3y1bqPaO29XO2sTJ2z98HB%2Bw729y1jQshyaPowA0thLsReNyONh%2Bo6qSyQcF7Q3YFOF26W5r1DrB0E97HS6rUyARWgf0isQ%2FEJDK1nb5j7td7okRSHzWEGU2WZrSQPB%2B3T0ATyd%2BT91R5jCbDUnS7Eb1hSl%2BDPRjSpGjHoug53rNDo%2FXjsOoI%2FD3ugZjvM03e%2FLFjrcvMenhGcDMQFkshn6lQhGiaccDuczIBbshlubUWpFa1hQrOUi5IICwGVBId%2BradY%2BQNddpeqVWhHkjv%2FK1pvXbA4oOT1XYvKukw482%2FvwY6pgGW0PNKZVz2m43ajYRZqXqOT8i%2BIpeORwhmzds6tSN9dncx5HgP0%2F10%2FLzibUlTJE2iLRZqVRDcezYvTGHk5%2BYG15MrJGTFV4%2BRif0pmZQAmSRMjC2xE6jctIDGfHttq5%2BGViKV8WT6ceJDB%2BMHP0iAB4wNSl%2F8Y49yXTAjtaXYul%2BuPEYdye7G%2BxYcn4Jz40IW3TpLcFS0sEMzVTt2B1NIYq0LFMaa&X-Amz-Signature=4bc93877c019a467b4e8909e12b1161e38d92c5940eece4e9802d026e73a1f7e&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ7VEF6K%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLLMsONXttrcUY1ubdZVMlisPk6H6IcLK%2BlM6a0ASyzgIhAMa2qvDKb3F8Lnc8akMXIcT%2Fam38eiullKkdDU%2BS6iY0Kv8DCBcQABoMNjM3NDIzMTgzODA1IgzZKoRxBJ%2FhWvlpfuUq3APcjIwjfOZZ1k5Awb%2BiUqb2KNDyTX%2FVb%2FdZAqGhDlrWPXrilDgu7kSNoDEzPKtwvx3IWJAAHB%2FmKQteEWjcF03N2hV6HXI5xVW%2Fq6vYbKQpTjRaHw6NsUyMTQW3ZS%2BZ2FEwaleh8Za%2FIJDu%2BrzVzGqKZyy8rDB7QtliDDvn39MZ1P0%2BzyUIaD2rotveZofMMcj5OPxKDYLvJGZwDBn7B26YSvnWSr6dTRbN6%2BUXkfJb0G6EcFNz8Q3lpp9VIEXI3lS72gMzjjDjG%2F9LsdJEHBo0Ihfi5IyAANR1CFPyuBHPYAeDBKaPFnNoMonbYjARET5syr7lfKhsKspsASm9u5pNCDKIrlOChHuogowPx%2FNuIFRJYeE2eAgaXFyaLRKM2Xh1LyxH5RQRUJFJMxhVldDhrGR%2Ft5ezE%2FA%2BvSdmfd4PP8cufXashSrLGuPdCy1dV7gPrAqh%2Bsj8VpKGO4PkjBo7O4ASZxOIdZYDxVvG46%2Bk%2B3PGieWEVO%2FaYv5dmgO7WCOSo02CPQAZCX3C0PnJq3MBpsmWC5rbItCXij2fV3vvQq%2BwRhdvNMs0QrY8rjS%2F5I6yfBgbdV51T5LVxCnz%2F01EPmqBdLNL7utkGdb1%2FYUZRG8n9Gh3kVeG2Sv2%2FjDhzb%2B%2FBjqkARK0WZhEj7TyhpfAlLhLxll2q2BDby4bBp%2FihKSrB9Za%2BKqpo8AZT%2BzU%2BUdyq9pr%2BCRk%2BLYFcpYiDaw06P%2FICY2cicEwfoxD30ZDLpqgPsRPM%2BN%2FSBaJCjbLk6BPEVQH%2B0TbSd8kb9%2Fde68t4EVuQstvXE1Saa8wTE3sjRXNjGNWV05PzN6CpnhWTW07XGeQ%2FHmom2vBxt7FH5YBFhTzIkbdZSz%2B&X-Amz-Signature=ae643e09b3dcbd3a1cf65d38526a5992400a40489aca1e68daf342f87a6f6203&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5B5J6MM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDv%2FMpcyHD9gdxReA8Ev7HkDQVsyjXFGrW9F6%2BYoG%2F2AiAKnrh255VVmGV4eR%2FBmuhuEKWBy6z5f48bOtCvxrFUnyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM5CH0XXexw4MaOTUaKtwDRXFk67G4hTnmSvjnyI7SYOlIbFV3es%2FDgB%2F64xKtd0aNY4JzSBCxvoWX6HtaC%2FmPfLe%2FQwpN%2BtQaba9fU5HTjjnm0h8u1epKAKw5bJktRhw%2FVS872dYRuTEi9s05DjLlngqz49Zh0yr1RjpmB%2FIGMpU4cwu%2Bs8SM6VNqSnDI5oFzmGuy6hbWtK7NIhp1hi6RX38pC3ep7GT4tLN6A%2Bo9wJRd7jPhTa7Ow8UOlOU0bMCp2V%2BiUL3rQ%2BIHiLTS9KwkQE%2B1tiQ4BUMhaeqQZGQ2DvGa8gZmlxRil43HMowVuGcsmRIaqtLG6%2FyV7wbsLFz3dDtgGDnhxndEfMY0tZ8ZfF4PeyUF7WqPkDpUP620%2BxTviw%2BwUufioZ1nZwC95cnYEB472gowdp%2BEqQu7pyQ2IL4eUbz4D3t87p5g%2B%2B7BC80tuNycMEgFHZN7ZX00DWaNsZUIe7cLwq4CPFYYN%2BzYuQljv2670QDE3PHLDw1TWd73ftric3PZd%2B4M9KonXMJftnntyYudqd3gSMVSdlTSvi3nm921fIZSY98kvcuGfVJtK4zlUCIXQp9SLElJVomHY%2BHLAuThCf6x6LPteopX3hm90Lm%2FH1iHJ61wMISkyWIlYUCqJmtS5zyxtwcw382%2FvwY6pgGAu0mhzvJncbDfq5Nu7MGzOY3BuhkRwKapMsoVe6eL8t6fg0m3NQdROvMdv9rtTVjQw6JZpW49PqBTER1eQQpp7s8knyPVbuDkDyThIyYJPMb6nyLa3iIGfRvDq%2FHb7i%2FaawPXNZg1fnj5U%2Bh5NCMWbTNOK2ILLy6JMh41CLc%2FnJlQw2LSVjUWBuT3lXj2Jg%2BTZsgp8NEHbMWLlVG2%2FrzDjP2u%2FbXc&X-Amz-Signature=30ac9d7a27e1b8767447665677899c07ef1bb695d528d23eb1f6ba0b6577f05c&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWYTAQJY%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T141200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD08mg6mvQRgwneRvhHVMu2SnV%2BBhjcMcjtenGvjOK3%2FAIhAM%2FM4L%2FEvGoF%2FYSxI1PCurGfVh9jJr0%2Fm1epCSHHb8S0Kv8DCBcQABoMNjM3NDIzMTgzODA1Igzgy%2FfPChXa8snaeVwq3AMplYMSCqOCmo2A%2BZHMQweaFp%2FihuEYl%2BSdem%2FQ%2BKJ%2FDrt%2B6ur%2FnETlFOGB552PcmDvPALRSfrcUWB8Ru2%2FPC4rzhS0XHGZyl08%2BFFlkX2UUHjk%2BGLs%2B7Y8XM1loEefBonMZc5I5k4vofggC%2FU04Ki2iylmmNPFaTqLx7Es7r7zGx%2BnavmV66kF9%2FQFjeNK5UeNEt%2Bixgr%2FZcyBqVEZNnl10gMmMeh7unfRThRYBHx6lzDOsIffOj%2BSL1kP%2FgJB4ADkhbf1nFWKSjjrlRp28RLyW1KnsD7vcp54uJgfH1RGVSbD5zLeBtmtxw4jiUHYAM3ycgKiQp%2Bty%2FMmpg2%2FNLuKvlvSEODo6ETfSmWqMWD8rK7hu3HJShwdycdiYJs3DVkOAWYZ6F41Zcp51N9DO55nmwbfgfF2k76th2VOwkRLNr82HgqU4MJsk9dlagwtbsPyys%2Bkrp5VqphnWZ405kMX9mC3WV7zbxdwz9Fnatoj89eUL3SOMVZhUr4ZcdK7lW0i6wTcbk7ozGvk4KbQo9u2%2F0bzLP54Orf0rpjLzOJ%2FipmoYTu9Msn0hV%2BTZa5wzXaD399NwYrafsyCilk9GyQX888KH5oMB4mmpRoGWdcBzk473Mh0K7iobktCIDDazb%2B%2FBjqkAfHWPU8KNoNktegMQOXX8Lmyf%2BJ9igPubgotH3CoeOdS67QSdXllRgP3UxEjtOmLJ4gE%2FjqGTk1xWH6DfbqHE7f%2Brs7AcKrILeKmv2c8CtCpy4AGPmwD2ugeDlLc5MJImgDhlnYuCy9QqByekydJ7kt2ZqSHQvmv87vCPHDPTcFd%2ByTXKXg9KFpHGLXw99KDeuIAhT9xdLtraaA2XE35hcrVnE52&X-Amz-Signature=9982236885f2fc8b714236c0a94426348239d02b667e84dc4a95776de7af41b3&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHBC53BV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T141200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnQ6PhJsWjpG9VgiimNkaoLoyBWWx4PTHoo9BlV26H2AIgZDcx0CnhOpU2HSJx0qORgcKMKiTgfyQVmb6%2FUr8advUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOO1OVsQgJ9ciC8ErSrcAx74PuYLdgdpKuy4CuCakLVwdJwodk4Ovj0vwdMwVjwp5RAx20QAn7%2F2k8eGj2zxWSL9HCzpNBtm3fcOsF7RokBaYC7iH0zlbjGLSX%2F12g7F0Upao47rf3ZKn%2B0OwxETxTSfRLPq2hsA1m8UNFfTskE0vmp%2B7IG7IeD6BqpSpVMEiRh5erEUBTSfrm8vLpGdlNhCXwv1SB5EV%2F4R7d78iGUuLhw3OspTNOQgMvCNEbyk1C6tIvVaZ8d2s1fYZLyNkjqVqPkMdhUngmfoV7RTL2dr0HjyFHFw9H%2BfzaxL4EmhEEDMkof1WQemruM3OVzXd2NFM9L9OkoYowUKLN%2FucmJsLFFwYvLK7TXp0UV72tVAmYxScBg55G7T0ITp5EiJppQrCaSjlGel%2Bcp5%2BBYmgY%2Bs4Rj3mrplHw47eUaK6x0GWmP6VHyLuhRDtVqpbcoTgTWVDt17qc7duVqmJQOV7kbAOaRFqlnCh0w5e3w6c%2FfuvyJMh9z8DUmbUYGw%2F9zkPAUqx360zSreo6y%2BPlYuDDbzEXncGL0qyiYR4E2BSKdOHuEvHPGUfr3RheNQWwyZv%2FSBJJgs4Lr%2FnlkM0jQg7MT1WSQ9EXiHTRD77%2BZvLOMY7ToSo7kZuwZezZm%2FMM%2FMv78GOqUB7UsjaDI7%2FRmCrkvpa59%2B7RDLkNmpa%2BQ982h1%2BxZd2z1vKW6C84upQIs4ZpHW4YFTt8Rt%2BdTzeZGzYUkf7GeftWIdWrrU4VSwsxXpVxge27zSjkjn7PDTBq1Lhy1WfZfe5a1kApWjaByI9bqTUXIbKoYVsKBUcH5qbfbRBFAJQq3yuBU9Cl8oqtUWxUvjpkfXMSA2j%2BAHt30BDuDvQl204s57U2wS&X-Amz-Signature=788f193c83b2261398e60f0718d0da8e4d3ff53bb198d3c073665150b3035cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ETGOLOP%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T141207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXGtn3SzDqSi04A%2FwgwWA%2FkLAL2jSEvKJ8Vqd800F9aAiEAo%2FYCVdn8Y8jP%2Fth%2BrlO9atQDGHjJ0Pi%2Fz%2BmXObQtz5wq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDDAo4YQflAjud17Y6ircAw4ud3wMu08J%2FsjY6FwPLfCqIXNa%2B455V%2B31C0neDEE8xR2AB9V1yv6JMSy9p1ckoSaWfDMLS4RqmRtMA6BVuwvjCQcx3qwEiZ02S4XWgGYwSCndYs2%2BIyL08NK%2BV%2FR37BhJ3UnXuxF0l1hZNaypewagcJ%2Bx1tPxmYjE1EVlZlzRBSjot6kAWUdPVhMVPverxlAGIUsaJA8u2ikH6vDJO2O0T1f%2Bc9YAeUsT42bA4Gr5Bz3yTb5HwjvMqYd%2B99N2HbbuODdsdT8xLZOw4ZD5DnTr80ywZrJIqYIuuIyp6uSnRAFPPqgkMZjkC0YFXC8IgTYyc8fNpaXZV3MLaC9ZF7Z534BxeyWQJ2pCXdET2KNp7My5D2tjl4wa4e86l%2FUIXhRun3Feus9atQBwjLDp7QtbHM1kl75MhliFFdVII3gM01EGsR3orbRuhVbWNcfBwiw2pLfOyiGVxWv3ywiOoXhRqIFf1MI8f9YRR2RvvSBcCBKXwjjRYutOr731WtD8Ho9kGF8RQ5zFeuoqKi3BKx8fuagP3DjWjjMgGRS1Ff%2FNCv91ikSIORKny6V9fxUqUsVKgccPH09w2R1c%2B7Q9h9bu684eGiiSyMFFSAI1p2vmGyS914GTXTLfFtktMOPNv78GOqUBGByfx%2BzEX5vQtAgATH5otY5iHlM%2FGk9PlFCyJpkn8Ly79oM2AsNAUa9QvlmAy6j8X87PJhv11rTJGwxtfiz5sH%2FolfOiAKfgIERlYqc7ovAO51Jr6nobrZNhr3IpjMRe%2B7b9k88Uypamx9h9rAT3t6t06PwInwh3knDaERqamJwUMO3AsG5Y9%2FcDCeTq%2FmfQ1OxAnVIrg4bxK9qJyCmsPfoUdZ33&X-Amz-Signature=4f693065a7f3970f45d122adf9c4966c33cc5bfc73a3758b817a3695e103de14&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AW525DB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T141213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFcsw9dFDOsCMNSr5W%2Fbv8kKI%2F14WEsr85%2FeZYUTkZqQIgRX7ad0XwRN9h4LalL0oBdoqU4JpoNSq4QiRG8jdaLDAq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMPtfKMUEEHXLTAPASrcA9Wk%2Bsq65d1vn3vtSleaA9GVgtqgBCbIJYiiQ4uxBbKi7vr7Mg0uATUmZOo6%2BHvTABci4pkAD2YcrISn%2B4S4F2aR%2BAJNn3QoxOuFaspQaAvE8gwoAIeekMPXziLIHOPNjvv6zSaqZ%2BhLrjXRD8ZIwk29DbNI4FmXIZoBSEKJX7NktAoR0PpSlEXGX1tc%2FlbVMVUaoz1g4UJbKgpDwZJQWBsp4zcxV80Ac8%2FUwg4VAOsJMHA%2FowVg%2BDov5rbiYm7kvafL8JFGC4LUuhrtyyoMVoeMW%2FMhxgCCNynLT2tOdblHL2a6dpH6JucI9o415gVQaRkak1fe4zXGtjCd7W6cLCAthYKCNky2awLeKjSsQtgkhCNZH8KStILIe8MhZTWy3b2MLBzevErP5yg4SGoQg2wG2pr1cn3eVjj6EhngYxEejU7qy%2FZViuVDARlgp%2BipUyCflj3RorVYw012w7OJ95W9qjFFjFWsVgmFs6pj7XGbs3v0Yi9X4lX0iDe1aG0133zqIT86bZSVaYqlnfcc2ZgB81TYInFrwluo7Cp0bbXR8iup5FAa%2B7MpQmnGQJXoswwbHuaQ5wG9VJ8EuAUNOo8FZtAzl48qmiDQ8L0JE4PpARlEwM4fqRDaXP5bMNDNv78GOqUBfD7acf6neogv6TWArjhc2tgEb8t2fAEPyAb17WoDXreCLO5nw8KzufQbg0RszZKlp3fQzD7YShbrcOVPyTZnMVpAJuZrib7FpAlhhqEHculdl4DBuOjHj7mgq%2B4VfrPY5K9EHSFXtPVuzKT7T7uj%2FoLxnPS2o9mqqsgpHdcxJvu%2FQl7COxsaWVXNHwIcJiN%2Ff2tQ5OU7kCLPJYukBZd5szXm57%2BO&X-Amz-Signature=c8d67db4b7764178666d5fc78d882420dfe931cb3dad1c43969d6d4dcaef5edb&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

