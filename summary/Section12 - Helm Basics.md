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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLKSJCTC%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T141205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIByT3Pip%2BCiaCwkqSVJLWbhL8t9efNG%2FM5NDXpvdYUgKAiBNXoWeZkXkVN%2BvIPxcLIvL%2FYfKa8a5meEWP5H5xPTvsiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9uuY2dJN4hf9RfjEKtwDtuDWqjkXhJ1s7PfE75LjGmLnc196gbrYKxga26uM6C3OQ9W72sjRIpatTLLa85TNt%2BI50wMs2fFM%2F3CTFhHtAEaf5CTvF%2F2M%2B%2BPyspP6qwG6htDT4qL9P0wRp%2F3%2FwhIr11QyWrpwEIlihFCfLxBeQID%2BHuUxJBFUzhQoP08%2BRIHXmTnRBKGwFAHQ7qJdIia1WQw0XhrXdycYfYJckWr34AhbXR%2BbMkmoOB3rOUqtVmuxrYSXMRf80kKz2qySMf4He4XaI2A5nNyhLmrw%2BzQ0PBOxMVGYHhHxgRU5jx7i5eDB9uDSV3l3jLI3d0crBDdB0t%2F6VrwvP0dtemJOGA0TCkfIGNv7u8ryKkt9UCqtq%2FfMfetT%2F6rzbp3nkTGei%2FqKFjAsIKpnP0Yp2%2BBgC4AhOncZ8G3Qlyl9%2BZWJ4HebSwP%2B63KBAGbFZq0t8wuRU0SRBRe3IIicI%2FCYU%2BS%2BtYgQ%2BEDfH%2FQbsPox7WHCxt%2Bn5sk24sITeCrW%2Bz8vro6Q8fmfeZJ2%2B2T5RpJUgZxuDqR4lRafp2nXSHXH%2FuENyQB5c7Zp5HEGhxlcmPBGgLEU9GFQ%2FRXvtZyQDaRF4JsgJt9IufVf3BkBJ2rGsW5emIRZ4ajO3fhRR11nIfHVkbUwyN2CwQY6pgGA95tDw5qgVN7NEGg1EsMr8OeKRT8S%2B9deRqsU2ndFY9vSRGC7oceh4r0N8DSKzFDFOBAI29FJCM%2Fn2IL%2FNfq7sj7EfXfLZ4sfZY7Qfpy35NSopIS4NUdWOaEL2dIV%2FeNhlkdZkGtkSlT5kNlZZXMQwb6HNJH6eDIDbRS5U6xRZiOVpG7ng5o0%2FBWIu9EfDJGYUSzDEMAkKa2uPqqP5%2FCHHyCJ01v7&X-Amz-Signature=c9dad8ffb233775259eb4ec57b53dea3f2eb6fa815eaf7aa05629d0053eff5ba&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC6INFP2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T141206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGKbWf%2FgE9N9nZBRskXRerASArOOPwvNtgwuxms3T2wnAiEA12GtsYKdaZoVsd6aCVY5M%2FTa%2BDHOHbgsKH2wK2QaIzIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy3EZAIajnBELMikircAzWwj4OdmLAI%2BXtJ9OAOC26CQEkSCwHoF4dbw08XjVCErc6ocuIwWZsMLISDeAXqXLQkFSoKv3lXEOiw3eFtpMivLsfzskl3r7pw5fKHPc9XuxmrgcBFEqY6StWcSuAgfgYxGTSZol90qCLfteMg9pLu0MOT4t1WMTc79lQn2b9IkbIrjPGrmU0i7wFNe6l0cPdIS%2FeOW8wnWAg6MOMSrAMtdTcQYUBYnW2pRDJJhFtg5m4Xgqe7kHvLY9VsFDOj4gyYS%2F1zarZlV9UsB9IGfLKiqBNbPUBvm%2BFuaXG9mTGgJkxHr5rk1xmtcXUG%2BlD7n%2F%2FVf28fz3CXWTnO3L%2F5F2zMv0NQpFZgFbV79kGsCBhkODn1Xd4409%2FzVbj%2BCNUNnHLVusN374bWuYLBGeldzpzoFzeNFvjDhvzHALFzdvpye0CPMW0tgCEOawIePaY8p6V0CrkD7d2%2FY%2BCI9WVupLFqOkHIMZpzhrukpGdAtUZWrvqKyGcMpk5L2NevS50nV%2B7b2e4XJFg0CKGbwtwYf0t9RtIxN2UdxXiRrTHvGiOgNL8N7Ompd%2BiRbU4Kl%2BI%2F8jECsCDQc0gT0Dkzyqnvwl8bVEJVI3PILajkchRy4jJMugrngywlME3zCgekMISmgsEGOqUBFw0RbiJ8hvLeEGp7GGfK0SLMRxkIfUkrCk5b1Q0Ln%2F2vgenmuX7prm8q07%2B5hDY%2Bxy%2BdlrJaqWvihKLJrryVEOhGZqn8opaobsBSQICz3%2FPVUVJt%2BlSRqMtBDak9QFO06LRJMv%2F5cOd69hbwFmSauKrzJETPF0v0quoQRudkZyXZBv4uFWH%2FxDrI6%2BFoISmww2Qn3HAgEtbOkP78S7PEIQ7lUVA9&X-Amz-Signature=305d0a04a02b00e96d5bf9768c73adfd081404dc95b4e80fa910a6cc8d98925c&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5YUFHPB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T141206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIH%2FbMS4Hw2hOm7lpLdW4gBR2I%2BWtIaBPycLqJvyV%2BbsvAiEArgjSURVqoLZVGzE6v8%2BJNYZw4d6WJzmxPN8VAMI68hsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6w8s1D%2BJCf7fx5nCrcA69IDxXawvTiIWBfeuufz6%2BfTldKJqhliD0f7BWj2ORPzRW4lXHV7TXkqX8qKWOq8pr%2FKLCYdxPZhalnicaHnSsRskq8sA3ydI4%2Fvn84vMnUZ719oPBljilHk7qw1DVfDYgqhSoIp0k4HNQ95YHVM0dcMp3p9fu7QJF41aRqz6My9jYIbEYag8anSAU42hpb4KtKf0gNQsYTsgWV3nA5LQGK5EldL%2B8Bb%2BPOjBEXDD2iEykOnLD48vZva452xSRsE%2B5AHVwueHL69h2pdBaoBjpvckHWZolnVoGEkromdwisOS7dS9T8n2eFVvN5dMBb5pgvaHZ9tCo8kcl0bqXOocjGSl6qRS8Tfq5SdMiOUs1fkSQQvU1a0CQMKT182Il%2FCrlEP8sPe6BgSRLKcj96Yj8%2BWcP22K6jdk9Aik%2FDB%2BXwK6tm%2FuDBN5kUXMorr7bBmgng2hId%2BxWRBHuDLPciY2RQFiy94RP7bLOkCqjLq2kPCnL6cWXTnAU3jaZC%2BEaL1xPCAtRUc9UgjqxwUCS6Kj3htTIDrscgQmmVhDggO0x1W2LAG57jmIGf%2FEl4uPURhkWiyURbq1OKg4vmfHUSb1RWjnhtwX2SP5PPzAN4xCaYqoaZGX8vN7G9Kyq3MKXXgsEGOqUB6rQGwXcOVTUrGqyb5Ab1lhL00WeOwhsEk1R0nbw7cVVJS%2FmfNo0VItASEo4BJRghOMXKukRtDdhq%2FRAKAAkAnVIZpwS8rK0vFryEXY5PljhWMhAra5DVoWKoMR5nqoYoil9ZcbocTApd4W%2FNbihin%2F%2FHaMvLSAd3Uv3xm2zsXL%2Bm5AO8jZ4EfRTR0YPtHhnwP0NsfLoll6MeP19%2Fo2%2Bczs0B8BJs&X-Amz-Signature=13ffc8a2e24371d1afb17d478475764d66ed68873f3a4e2e536b0843f06b484c&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WANTLZJQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T141209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDWyfOz9ldy5PQ0Irqar%2BT8h1x0No7BAvH5IsB8vVHltwIhAM2YoA8MNIjsuX3umJv9qvu0MgL%2BnV45LQOjC36x1w3IKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXndcxe8vsxIt7KeAq3AMMKUy%2F7b1ZPikaeu%2B3XOfSZJIoIeQvU5chIiKkaRMjwjG8JjzAJdbl7n4MDVcu71Xsh89OnsyR9235jJ8ZP2ZAB2d9lnCnDPuyvCDGSbget8xtAeTMsOl2vP1ijM4x6ZPblI%2FCnE%2FQlIL2he38rwZxBQQNJJy1h82zBAtKltfTtGr04ZHEOIIzU98c6stJ80v0USq2o2aRxY1%2FKzqBJYpGwtF%2BADdFy49%2FAUS%2BpsKILim72YewxeOYKWf9Yk3VckCv9RV01er6B3iFzqyEv%2F5%2FmUMw6ZzEcl1c0enJ0GPFbXuEYJi1b1Y%2BDJkOITYI3niS2rbDEI3N41jZTZpvZ3s9qHmEgX8d6nFIXAYX5XOrewBqpSlz6OPxbX2RPfDj5JLf1ugv%2Fb8Gdp5VSa7znYm3gFkCaIqcRg%2BM5MJszlnE451jyqPcBYuDT8OpMZE%2FMSdog9y3XHv93wbT4ftJeguv6ePKeoj%2Fk9QdSigT7UO2JGBSCkn4vFSCt18rssY6MoDv7Kmbh41JjSl6Hr02LiV%2FUbotdbnxIL%2BjhEhDfCLKzuLYvO5E7t0HZIB16%2Bucaj6S1sfIC%2BpqAWZ4L8Zh55ZTQAegupWPLl8fxPU22PpDWfv6aQvk2HQ5HgLCkTDR3ILBBjqkAUasfQrogb85zJEu02TCA76c5IQQj%2FXr3cjkvnZh9NDoahDiUsHUdQqwEKB4VpRjGkoSR%2Fuio4zj%2BPUcARstBQPXfrlAFm4JpnxTau1flRW%2FvDF9edMQOM3W1ElIIglYBsBSCWNb6%2FcGPmz91hth9n8Ix3sSZh0N8Wm2fuHGPf%2FAOLBBA5aqbYt%2BMeDl%2BL0fetDJi56ZWYMGC75yuowvjYEoeLXt&X-Amz-Signature=bca9271348162dc53d76c7387d022544c0bddbe8c8abb558ac055bec0a4601c1&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHIPJ46G%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE%2BRsjNw%2FrVV2OoXXBPKfSA0c8O81WptSIQ3ZsnNMDFYAiBVAZ8v%2FV0rIG6%2Fv3uznDLlp%2BiEu%2F6wn6lnaRZV%2FAN7mSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBvn3ycOKyQ47kQ7TKtwDLsiAVRaH30HKbzOTT1vWT9Nzs2J2zEbdNO2so5SoHLETmEArfFgBekvRzIrC2OJKrDd2fyr3S4lXaFgKxv6d7v%2FTXYuQ44YCxC%2FUHuWk1w5ZBa0wOv5dlKvvzwJqDnsJW0xtwh7TUlSp6GqZJT5f6klo2UXiluolUgyUP768X2C51XssC%2F1R3vvF7HraVnx9yOLefPXm1TuLn%2BMx7gZCJutmibGEOnb9%2FaOGlUhrQ%2B4Es6D96SpXxhfEv9nA%2BRqd6sHD0qMKls%2FcI4ky1ZzQseMmdYJeWlCM%2B9Gty8zOqLCR%2FJHrtgy%2BsbtH2UH%2FBoyxuhmLWOZJk%2FL7jam4OH2vBbZCrzzZ0LI8TAtQGFGbEta6QBYDmkSUFnMHGL80y%2FI%2Br%2Fkc9ONlWvdlWhJ7iuDIVvzDhhJ13rbZ7CIDVaIW%2FCjMUVkReCbbYzRsiOGQ1PbX7tF5fMFz69mehGpVIQLV4jIkt00CxFsycSdgGaHyB9Cp6bviUFePGBewuLJz8JsY9sFkPAAeVKBYDDQ7i3ZT%2BfpIiIIH%2BHmrS2IBERyzQ4qRKncdsSe2sZI61pJLqR7e4pKbPtQ9yjPwDKesJVrvHEk3HjLPB0vJUB3OaDVv2Th402BpPJQ7WGCsAngw0O2BwQY6pgG3HEw6zCPqcSOl1zr2yIGNyDuHEePq6cDYT99Pnp07YWSvpYBZY7ZKtAPsI5XRXEAlRhNzUe9W7fNIk%2BDcp0XWksstlO9WLjvvTged9j64T%2FwW0JNHxLUjqn5JJ%2Ff7okY9sIBs65CnDLwbNqT5nEdNV5sddbH8YmsfeJEp%2Fx8at56SemlASeid1RlS661XEqnL1U5FAoWvDY3oL%2FK2kpnaunnscqr5&X-Amz-Signature=5132d1512423823efcbb5e4dbc3c2fb955b48eaa567866c2b9b9f5ee9c76db5f&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q252MPHZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T141217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDZ1BrxLTr64CURqI01V6sQUgediAYycC%2B2gBQeTybS4AIhAOJCyGCagA6TXM9m0ym9OVhA00trXVZgc4z72xPJUr1PKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FXLwhPdLdAcsSSuEq3APh135JaPyn2Fr1WsdbkQpafOEHSe8eKuWKqrMWqeAUKZHCF2Yl%2Ft0b1cGLPQ6aaQ%2BDKx8sS2dzYfBeQTPdwTGzpB3eM1FfbVlqHkh4oJ98tvrZX3ugY6CElcDoNC6hoWTK0%2BGfdtglVATNKkd6hmU6jnVuhOMLPkcUYex2vAhWo%2B6Hm4Ro1fMRIZ7ACXknQ65ZtgFi8BTCZ5oJjDJ7Fef7TP%2FwoPgUTQB8N7GPdePobtlhtmlOm5Ceh%2F7oQqM4qldbnzH1pNWqDfWj8XvgXsOQYjB6lCW3hpCqQmphrfWP1y8zhTXYjVz24%2B9I%2FFr1vqCV4%2BsvL7fPfYsz7vKVB%2B57nQRZR317dHM3fa5mcE5S2oqhldplPkWXujub%2BVWdU5CyB5Tg3UMMGtxe8yJKr1aKu%2Fb4Ox18Nhle9tFYqAuwN0vXMV90aV8Xp9iNQrX7wwfnkIi%2Fob2ZHwYVEEHs9YON78%2B3Sa8kMwMKvBwlC5GGgcyvyI4dK1dthLyYccnxF5lsH4tNXjMxeiu7b3m7rqBrVOwnOtDL4XVLXbg421L9t4WkEyDVs8fkB2s6zUTt9OMPFj8e%2BeCcj3I8OZWgH8BH1tfAXHU5oGlLXupLQztftQt67598lA7%2B7YbLkzDd1oLBBjqkARLhUK9TI5BVs8cxI%2BehBMiDqXNB77ZHQv9kX7WMrztgBtWqOtGtibEgzIs0p9BIB51clqd6vG%2BaKiSDgPRcPVY8gto%2Btf4BO5Do3eILv%2F7faEE%2FYVgSS0TYeYauatQfmGUbZNnXuxO%2BhEuWSLCsUyTdVOizNbQPrT1bkc64MJVYlt6mi4oVmD5jPPcbIiI9zoyCoCcVzqtOiueyuM%2F0tdUzBQjl&X-Amz-Signature=c35b1c7c6efb1bc93fa25c24cd163b47111159ecf159eeed45a5e6ad40ff02b2&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIEZ35JB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T141218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDQe9Kss%2BE%2FAmNREu6EGCVwftnN1apwZDLpictIbMKXrwIgcY9h1XBz5SjcBiHKcQ0vYscE%2BBoGiWAFtu1zhYVP%2FJQqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKWA3%2B%2BdjOdNkl83CrcA0C%2BawJ%2BkAk27XqHZHXoUNvjVju9SRLGGe%2FtZEt2QEazX%2BbhKgKHYnEJYSCczuvmYzh3Z%2B9GLyxKUE4VBwVno3EcD0ZnpNFRYuYQyFFlR9pvcuZ8cOQHdiK2PK8JXC3YmqtPc5SYOLZwWIFpx3OXk4w2a7lxr%2BmqpfnJVMc8lCCq%2BguHrTh%2BORB4mtsS9gq2q1S3o0N66pVTujFvzTleZ7Ybe4OD2YAajrx0O76zOGe09EkPgvj9aIsOTM3dSoLiaPDbrexx9rGchY6T9yTdNfiDjgf3Yi939XXx%2BRHSo%2B2%2FMM5HrdDga1CWceT%2FiTtTEILO4Yg%2BmsnB3F2eULkQEeoloo8tcWyLzfJwpXacITcTinA1KOaG%2FTF5yOMBLLud8lSJOqOV0NVmAyLF1UYVrmN5toqgB7siPzvkudsWTmJiaDQ5NFdRlYBK1vKxEmr8%2B11q0qxBaeM3dd5lQ2wE56CyNmvnECo6mckEOtwG5KzoljGxkQsiwB7yKbsVLNa8uFT%2BbS4cglZsX7285NEOdtUklCZM7J7aaCLELgENdM%2FEwuGshH0oJLXyQ%2BRwcvmizA6t1amBzPRdeiUqqAUMpmVvyAXpNdZa552qtIk%2FaEIr6kivRFA0P7EQ%2F2wRMM%2FngcEGOqUBMfpZ%2FRCwpY1ekPVvxtteMc1vFuuhZc9hzdMOqvL%2FIMUSVX8LBGR0FLwVhF4KLNte3OCw%2FaePmhacobjohLgluUluDtUL9UaOP6LfNvCa8a5JFCC%2FkEsT%2BovWZ2ymjj1UDHKXKuC6t87FSx4PNVbIPAkghsF%2FmLAEGupUEPE49dLCi3I1KXQm0bG%2FPOPfq9h%2Fw6zR1ecafxmNWqY6yPJxLfFcGHrJ&X-Amz-Signature=0b51320628164fdc8aeed75f58d6ecbe0b585254d1e4d269f4bbafe2a61d8115&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSXZA4V7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T141224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDx3flih%2F63ZDu3FNXGKWIE8fzoExkB1GgmTrwqFjgMEAIgRfRt7yC3VOqxrPzb56FfBx6ITDToRs6W46youh5gTO0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBlBYr0A3ycrw%2FFoircA0XVeMh9maXn0qFngFhISH7FYrzf6qJKJnaC3oKCI1sGoXBzaXJwV3T0EuOfzSaGZH4ZxnySum7GE2gCurVaUr3iMpUSWf0NkuxFHNf0%2BWnQZtIDH3WADG2PMJtjIRczIJfIbVTMn3ztJOsP%2FZxu2HgY9dg5VyxcLQkIjrqzDTvprNUW7MwAPpCBct2tVeSRfaSDdi1rH254s79HFmIUVzj2t4mSBV%2BsoVdIUofPc%2FsceXq63DSlGIOW6tqNgVMCnHJCGmPwYDtOVl2pKhVX3ulz06hvukxC%2F20wY8CEU%2BHBISVNfynd4vykPB%2FdLNBuf5mE%2FSPsZD22ZZK%2Btk4gLcOpj%2BU69g%2B%2BFY3XoixgS63JlVLewyroH%2F2DZtv3MqHSpYERDSO9P6EUTrRWHIDDMOQcEMiCVBbbAWXKPAjFfiVkQ%2F07TgEKIuv%2BpaLzo4xJMUbVnKXtje444qIAYJ1xM%2BmaNZsCKtilPqpUKZmnAKNA63yUMYUOhGVcgCCWreW4boSqGu5ub1NGqCjl5Sf09tpeXYsIuL%2FxlFYlvwwBhl5XPdJZpr%2BFfYUvvjKhKbeOcr3FLSw54NkzZvxG1qVYjhQmSCfXs%2F%2BWXi26lGgQBVCtZeq5dW4u325hQ0eGMKDXgcEGOqUBtYIiga%2FXOITyVZwMiy6ejsKMdToiZYXJN8LDddqXmBs%2BbXQKIoJ%2FGoV5dieynqva5a9U%2BybQTCSXdKyOR30bToYFQLKoIqMZUh085fgbO7ba1ayhrWmp%2FBr2cixVeoAUf782sZK14tiMfccpW2PJaf8mAnWu%2FrUVykXc96W6bhLlVNWS2exF%2FO%2BOi3LTXA9FniB3ecLWhU1p2XoHyhIJMot3sgnb&X-Amz-Signature=34d54ed29f94d499c9aef0bc070761eb980f9f80fcc4d4df70732d63d361c1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NAC5TCZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T141226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDez4Hn2jyuibaLiIuyU3tUWhGnwhx4jj5HO3S9KYXcSwIgTdYUr4ntYs8YqIhCJsk5Br9m6cRmNZKPYTcXXLccTwYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BGrkHMOBEJskD1FCrcA1pQ%2Br78%2BjurzCYA%2BI%2FjuQ%2BXH01GZeA9oCOiDuQrh12JAtyqZjHVidD5VjhsDbBlpkfrvfKRIsxKZMjMDF5xEtdhlhO1NYRAXP6biXaOAEpLy7jJbqe9MHbKq0%2BXN5KeH7ZhDkgRFxRprUpFlu31CQADM27yaLegbeUgIvDZF2A2qyKGudF9Jw4oagl4p8NOM45rwsk8fR9RFMo8i9Eb7qt%2Bknbd6Ng8gSlcDrYbVrMacQabYh3DtjATjMKGVd%2BecautPL%2BfDJoce5fdh%2BNa%2BSBOi9qJL%2FRS9ya6t5UQ9zqm6BTST4z%2BT4r9uByIShY94LVDFNhOqajGvfRsDtOSRmcx1BC8frLCtMiqn8W7mzAmlObrFTD4uR1DDnB2X2kMtqLZdWFhXkmwqD3iG3Ew34gVTqhxSJ2t%2BuRilRd5N2w5g4AA0sDxI%2B6Y4SeGz0mgo8DloYn4%2BIJmjgt4vKzQah0VQGspHG%2FbXStnwFbZnQmbkLqAdhZn93ufSIVaAcsthbhZKCs6wowziAfYzZQcg70JrPddoNGZ7eFU5OqUssPJUjUDIAarFdG4pghT5RTHK73wae0tk9XUxd0Jmj6%2BApMso0tEFOrDo9bperX%2BqPuDa8noqKJ3ipC942ZUMNDJgcEGOqUBR%2FdQ4DuXKmxqZ45pvykicEfYl7JCnW7R8xYDNkUAHFx%2BkOBiQzKYXL8x7jS%2BMQLSNdQdmzU2Z%2FZtGHiG%2Bx%2BHbdG70fhv5w0cPNz8e9VhyIWd%2BTOBjx1bGuTiY518oucBtZjXWjK2Bk5aw%2FdWsJpwaAvtijxWVH3VbikWmQ5ffAc8N9Om3rs%2FHrBi3EVzadJ7ybg1VAJUqt8OSZ7sfzVc%2B3%2FdWQjp&X-Amz-Signature=180a89509b8fffdf4be2f103de10c9c5bc19f950c3cbfd91f0fee6d8f7e41598&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

