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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ISH6ODA%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6%2FTeJ4qXFmYRX0IEFtSzRrKAcqFpF45qoDzxUYU05sgIgdT47FYAATD2sAMvKuy3bVayXaGfwRp8GWWX98mdKBR4qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsJOLSZXAIEajKWnircA1TwbtLD%2FtMY45W2WGU0NUkpL5MAekxngCmQhfEywkq%2B023SL0TR0yejrXXYqpb3TABnaHPCc6lS4kjOcbkBz4vtjZye2FKrB%2BdS9nMu1q3QhUPW7JG%2F1JE7B7rsPElwrVFRdHzNPBzpZl1KYEqkkxiK%2BNmpSJPE%2Bg6qQRAgOwIGoNTuvIRkVYW0IsL7BDHBb16379NXSp8lKHVygFdX9lg6Ux4xwYV7yJZW0FfEflBkvX7QHaxqY3h%2Bppy3nFcUh9685J8RuJTT02paXnrHhJqtcThZQb6BKOUiNgQpoENfriOGemXxZP1vtDWFTAFN88MhgOpZdx8eweJ%2B1nuEVe5dUu%2BReNVSN9O7njVzH%2F2Mi5yu1489RfkgfvFGR582Ju%2FNcQw%2B%2BWLkPvPjGN3KbXZwM1f%2BS28nC3pyav4%2BalgrKnQM9d5SHclkOkDOGJvQnf8vj9FfoOeWYQ%2BFukVUbWK2KdrPCALy%2FkyrQR5UsIP2jlE8%2B1wYdg4DJYoOBWGgk5cg7XyPW7TbRBMQX2AFusKIYhIkVaZxmd4S%2BaGZ%2F1%2BTyagCFgNaI7xB3z%2F9QYW8ayUC6iWWR6jIStLVHtpypa7YqrefiM6XEbjY%2Bikg7CljC1i5cM8a8bO12hPcMOajw8AGOqUBQWQxGViM0Qh5LJ7A0wH6tT1aXl9UViB6KM718NSNprziiIPlhw63JGLbMHkuLfe4%2BGAD4y0YAX2kpSKIz5OmuIEVRdGGPVth%2BnGyNiRCAmTB6XAbdmwB4chriHBJU3R9rjxCZM131zUyZL0AhZvmp5rmOhsbeq2%2F%2BFLgDU5ETd1n8yueEOQHJXVn526OCzyo%2FfdMf0IECnqJvenxq0rKzL6fBk9d&X-Amz-Signature=0faeb300b3f1a0a0a08ce923652d24eb3502f519c985e63aa2b5288cea2230f1&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LOQ36N%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLTWSZPgsjg1e6Xaw96dqZibkoVf45wFh5lggjBaVxtgIgIGKVAWHanOAQuMI2hY96fhZiXALYdoQE%2BTg6H7soRugqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzGczdmd6wiuZtETircA0H4dF5DAeM%2Bs7sdaEm57URKEcN6l2AsRgiJRK%2BoIxd6gxp3UEoxnxCFCKnJTVr2sAGhSUeByrWSJxuOSYzpKWFfJfttUG0lJZVSBDr9meZ6QVlPY0%2BA9Ww50ZD%2FsWDeIOMRKRfw6q0%2BtFyXvWpu4wukbTVVr5QZXQw3yJUvs5GsuGE9RAraLcCsV54vnsUyG3kdVP9o%2B44ekAwPeaHPyoILfGA3Xd1u9urDHBvd%2FBa5km4CC0AnXV2j9XLmD1XBpNRSJjwf0be9YEX8UX3CfIsDxIfPjwIL4XRJiSzV2xRzUjUotjH3Fx6Y26MKt%2BUXRXp9Le9C6Twox3ebd0IrEWELRRAOQJUqWa2GThWCIXHFtBfuiLHZyUPtG6H4sEq6FJK2syjQZl1xc7NE7mlW6telLjkvpqh2gi2WOunIi2SBkzIf0IujkDPuQoZ6ao7xFeklFB4%2FrvBZ8dVIr5EF0L%2FdXHvAc14WmF4Fx76I0SNVZWShVpZbt1ymQGfvifz4hEkfkBJUJ937yaMk7snHN4M8gJOroYPHd5%2Fso6rkBoQXkBEfHF%2FDeyP152HfvkqZ7AWvknLE71MMLgVwrEBtJC9%2F5FNOuf760M1kIcrD2Pp9NosU7QrSd0bCxJptMIKkw8AGOqUBew0BSFh6URYNmUydLWFDXzZc%2FKCRr2IYSW8MQEVk2KaIvajHs6n%2FfmP77p5D6G95ZxUf32UiSPvjoLaPIw3F7s1zzg%2BovOBkLqi1P1nrQJwBolvH3x1Cs6x8CFbHUF%2BCVg8OmnQLF5H70T4h64S8wAShuz88H7Lia%2BAcSkArgc7x%2Bu%2FjdetTNzihGJ1iRUFffCkTs837jwHzXCOzw1e%2BmqhUTJ70&X-Amz-Signature=e533744a900a95111b9ddd1a4b079f17d5e8010d6349b04de6d3381b15ff40ae&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466432ENE3S%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T141217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0k03890lVSYHaX767hgf5Kv6ifCiq3Q%2B%2FFJzMf7FZbAiAjWWlExAosz6XK3wuliTilMssca%2FMqecx5oRSd4rdqxiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkwnbDb72OcHWvLlwKtwDidxd%2FwNAdBkfvkfFYpkHQ4xd9iG8b4hDr5x2a7OzHDNv4L3KuYi5Qtkv3q2qzgRwXKfxrE1Tdn2s7vPdpuzmYLxMrYlo6jMLuK7XQIPBed9RqXou1arkYTJLiYdgZMHQ9hpKC%2B9sKXV5a0yB5R0tRR%2B5dl0A4%2B4nBLiXpPcDlhciY4U4e%2FhzukHs%2Bbx8fOWsmZzSp9Kw%2BFh%2FYmHfhW%2BcHuHZfCuCX2LLg%2FXmF6ibtzRCsdmIhzwiCJ1ph3Jj8UZz0Hp6CD5A1sl7MhIYefzODruv4%2FOFfHktZIOswhLJinT5EfliKKQuOkry7brEoZa9JnrltcDti4l%2BHsmZOWpYveh%2B%2FMJL%2BiasbyIWxiDPJt2jH%2BPxbSjLALjjdQZO4fmofzDeddsvoltMBcRwZ2MOfydLZeLfpXaOlrJFfalgjQBSfQ7KJCRJyKMQAUcVD1zM9xoPQTQH7FV1ooNlrOyKfHOKCY1dtDw%2B9rm4ojTlX2I1KOBGpPZmuEzb25ALKGfV9NfOmF3EkVthFdTv4E1z539Mdckz1dbvGSJO3pkwn6DGCee2nvesLcmI6U2TdBTvtn1QOjekEZgWAaCuTrc1JAYS6DiIKOBHG8b%2FW%2BBS%2BU5YT3Y4YqK9GXi5cPAws6TDwAY6pgFxpoI8g251tG%2FUmMd1lCdpmUzb6551Vtssspv%2BCa4pdyeCWrcnxz8%2FQu3WtmZg4VLAiDlSyaHlsDArxAhGvH2S%2FpkM9jNrtzFwVrS7ECaFwaQdF%2FFZemBjT6Q1EqAQtyJH%2FXACrOgLXJf%2FyZFUE%2BXQxwWVkzG2CKDp%2BvHe%2BY7RxMrpET%2Fcrd5LTUj5BZ9D9XbuemDIAihjZX2nJgJsmQVTbYc6W2hL&X-Amz-Signature=3c677af95693d1382e52f1ee8d2e3f53aa6401a97ad123ab907969516700b0cb&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H3FOCXP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T141222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ7GHq3F13FppTL8bimW6Fm52hzbE3MebsRpeWBBQY8wIgLzd0lwAQQCIVEnfwaWokh29NSjahlRVCt%2FO6difGaswqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FjzMHaX4zKfbrQvircA2%2F%2FazG4UVs0MT7Tbs7AhSyYF48vsYzTrWBV%2FCh6eKAUFj6yJ%2BWpgTu1KLGPT98lk1x%2FEEBhzDhhot%2B5S9FtZ1JxguEAV2%2BoLMwkya2k%2FXvPyo%2ByxjaHQUxhcGx52EZX3n3PT4WaGJt0Y4zvEysEoaHsp3U0jvpgoMZNyImLYPUBQQUeS1gPdWd1caREg3L5neMS4Y9KOezEsg6jiy%2FdleAqqNraUgPqNTWYOI9qwL3nUW0MlojBq4w0nb0PPT%2FyIT18Fy8zZIi0v3f3JCd%2B5GVHO4IMpcVJg%2BBv8NtOZzDUsFFGF%2BdMMPpn1Q0O2p06KUmCFa8ujaQOJkCU81sGn%2Frr1g5%2Bne%2FsVZ0WDjj071W2Nal24OxVSJUOXjGiL7n6IZXFwmXDNf12Fa7KApEejB%2FuXkxGA9cqChDI8mrMnFXpfjLhIG%2BzTxs7XABTpt7zMG23VxAQtQfx4AtCsGD5mHjG1SnLNZyepQ%2BVEYk6wIiFd3CaUPTK7Ie9LkBeRrMN31B7g%2FkG6ls7iwFxd5DBL94H6yoCLtrE5VCtzAnWCmosjf0kQxJsvXSU0dd13OFtbpjwa%2B1l%2FHFPMK4tvHfTOC0BWZ72gCBehyGuRrJlZmcPE5QZQt6IDCaLotsyMLyjw8AGOqUBVnT1Ux%2BtGxF4L5XJo0LwkL%2B7rt8A%2BsLVbk9L%2BsKlPscsGQNvO9kAkJOgk3yyLKnlCvjaFbLMgKulUd4eZZdILg5JuZ0eFSRd0NDfUVHJWYKbovt5k8Hd0%2B%2Bv27aWWzhH43wCAlnUYdbTS8P6rVc1u91UwoIR3Jjhh1Pj2J7XoYtaWw4pYgQmCtRSxXeVzMix681SjQ56KupnZrsP14eE0LMYj%2B60&X-Amz-Signature=b45c39928b13b9bfdd11c23ff4addb41f4c17ebc4c65cf070c3c75311b965481&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626IR5NKL%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T141222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHa2Nu3WtOFayDkRFCM9FYOsIBwZd%2F7%2FiYMUybBipAjbAiA3OIFbjyr15e0I1y4oMAUL2jqfT2STw8njTjji2JcgNSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY6DgU8cB4WvjN2UdKtwDRF4RVXCrssHv9gHAvLlu9qkGuiDINSC3D3HDSZ%2BvbfwyFl2A8QQBea4B776E7i0voiJ0ys%2B63mEtAsOn1oBNZP3n060AXL8Y0WFBPvzyQnFb6kwIiVsWojsggxSBzDapISizg4%2BfgivIxEw58ny%2BB6zQBipk4ymB%2FtQWGzEBOa%2BlMFGp4tUTBG0ozTGFtJmkERu9FpxLcbRvoJAE9zp1xnUm9eqRp%2FDVxVWnLVpPeU59jlO0KE%2F1IrtOHc9%2BuvoOXrAFInJpvir1RghnfqS5sk5ZTVOnbeiPvWtZQJKOgJWUtCfCbvGqVbO%2FDeL5EQ0AnfMw5g2JLV6G7JLLs4OFAPumGAOrEcD6Jc99%2BGL%2FJxztSGDvNdWPnN228ELPJd0NASo10kSjBf7Zd7L6DwxCyV5qRhHUt4b0YESKBOIHVyFomSaHmwR%2B89MtPWQsN7ZKDIZBoCECTgjFhSGkW9Zgk3ofb2sTpHb1Wll5xA43HDTpaiJZ3WdslbmFEObsB5XYa0XA75Ml4R6JTSLmKIHzpQq4Ik1VQlZXfy3pQGsh5s82%2BomfwQ%2Bthvgs1LXlCSiPS3rypKqfI%2BNTD9yZ%2BF%2FxksQlcEh1Jybh5K43AK40i2rJBUjqbNZtTbnNsQAwnKTDwAY6pgF2p6fI3ZZlP5A0TdQAYuGmTKBK%2BiQ1fpeWgIoBfVPSe3zzWakhuZmBKvbnptogJEb5u90ZcP2i4DAiQIMBfEAQc21f053YbPa9TJ6W0Zq8dlUZKjeKHfqXZJN%2BD96nUhyWVUXKuBzOJ2CWdZfigWBljL%2Bdu9C8SloZfX707jTBlAStOJeI7svq%2FNAGceVus7sFxEWaQqAtytzEoDVHvtYuSQ%2BRSxcH&X-Amz-Signature=e7842a104b4f802575f3f1481c99ceb928aa2faa80dfbb6b929e26f99f350d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6YLWIO6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T141222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDmBOxgYcmZAi8pPD5dngnbjFXQFSm3e8KEEHJIeHqjQIhAJtn8XCQwpelpFqv5CVrrVhgbBkBF2yXbx6YjJidU9rFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIaht6ZBaWyxwINrgq3APsW%2FvnTiRFhPv2Q5v2el1RLKBDn6xqzYgMFVmUS8ZVLSdclk86%2BcTXJnDa%2BCGkrct2J5NjIsvoP8kAZoq34Ts0QZiPnXyUhqOeHaorrVG7%2B9BnKUlYtcbzqFrlRwuc3P2yLjSaCkCBGi2pGw6Sn1DdV%2BaS%2FJNgVv1dLd%2BllLUw8ezh3YDadroLah6%2BbiX7nM%2BbQXFgf0ubIiXJiOm3mwDkyl%2Fg8zH%2FJQBJK7M4991GjK5xVASW%2FoaNKlY0zNz2OvVsGjWReR5IccsdLuFAyBA4Ss8UyngJDAKTCiCmrPQ5WIoTlrehpVV%2F4aEu55438%2F0kFIwAsqdwUHxiA74%2B8gj2v5jhtk3dpVBwWjIU6EcjmPLJNKkbRv4X3xNv4fsDW%2FIjSwv3f45dGipo6w4yYA5Vz%2FXRezPWkjIRLqnYr5GQXK%2Fsa%2B6flJxGNbu5j64hh3XTt9206GZRTOf6u5Fxf%2FTobInLdQ1HttDrStpLTSMsZsfXGs28v%2F4CVzZmGMDbKDLLdDMoSirDArJEJjPNFOiGl7LRbozPmIFJfU6gByvso0BMZwiN43RtFaA5DUn78xTmBLZllxLXRa2q7qYQ%2F3VLSUxkLsWQbq8jtPEsRct5giYIPqHYK%2FSZXmvpVTD4o8PABjqkAYNnf%2BK0m9rxt9PvWDMUkWCG8D6%2FkZmsNjbjsBjgsPkfp21CGttxXzTUB3r4FICSHUry52nmgFPebF%2BzyzZUK1OABE15bfjgVIh6h5wmLpXfL%2B7LBZs%2F7EjP%2BuZ86RUrQZtjn6Kd%2B%2Ffzn622vXMIug2AGDU0EOTpMT000TEZBTbLOzkaFKVx6Z0dzHaDb529gzxijj4YpdbdrbrOeWuj3WmKs%2Fet&X-Amz-Signature=914f6e58c0c054808970a47b41410d44b376cd46575a87d6cfc17845915e6fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5OFY4C%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T141222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqmNdScqC%2BBA87BpvVxt5I0jkifdr0hZ4enmPpBsNVdAiEA3lh9RoU%2BdplOIn8HepaMGq6FN%2FAWePl%2BtbtwmJ8Y8lgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKCxpRudo0PDPNpjCrcA4Ee2eyyZQ1nvt8WEmIZ%2FWdA1xKuGiwigj748xFCdHMwv7dit8K19KLZGtUtQZ0%2Fvo9%2BBtGeELxQZmp5fS7IwHcuwO2CR6TYDKa7JQgKu9xidZcRskYpOA4XowNO80chgq39zNlgEgNbYzk9eDCqjsTymiz7hcP%2B3JeuFoW9kfDjnKA51RLAuIqGec7nfCLQaXvDSvhj33DzPfpnxuWPGNTiYXIeg4srV%2FhLmw3cxW%2BUs6wSGc6qveO6SW3zDFObCKLxRW3aRABNqiN0zB6aX79FDuxu6AZxjloDH2ZMbYDXunD8YzpRnaPy4YYzSzkXVNT7Wxf84xxhGEV6HJ19wTdyV4uh8uiqeXAxcwd2%2BZMkB6uefDuZbx77%2BLstyEsytylfJ2vDqJ22WK%2BE2zuu2RFQAD24zRmwQoBtHTGIliCgWPzvblvfcb2QsyjEm49BqoO8DrIEHCNyLfZQdCCwQ37DEt14XPtBZsuWUwnEHfQjgZYotezabrIfH4R8g5fNUGSy3s3Y2xT8RfRfxNZVksDptMxWOOscSpsQ1lfWsJO2xoWqpRhrlWMSjMbWq9XCD3UAR1HEnCnUn9Y2xqkKKwVDxnLZr6kBZDOMZxf%2FObIipxVG0TSA1L9UH76UMJOjw8AGOqUBJDoAQ3JCmE%2Fcmc5cFb7fWt2kSR3hhlUEQo16jYqGR2eb9dXXn3HdqezikDvFzY8KohTRU5xIXbVmAOxEVyIUz1lMv70vl643muivEwFvxfYcAfmxybZQmN1L4rdZF%2BBC3Z%2FagGQfzgdVoz343pN%2BR%2FaTgS330mtpk9f5Z%2FIb11KTBemVaGo9Bz8w1Q1AfUfTOe%2FIOMOaozNuFV69qlZdVIUP1vXd&X-Amz-Signature=885c80dbb124c3d0a867b396c982e5bbea3c31d7e78c38b945dbe467d7a4bd69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHD24OK%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T141226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK%2FPheZqzYp1uysjEDNEUMlxi3P2DSNoks0kc7BG%2B%2FjAiBfgmgKKAZOLoyQbge9zS4MC3xG9tc8dEKOeNV%2Fl9gp7yqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxCHGhaot2meibAxKtwDpyYTWLqPqenc0%2Fm4Da5zLU7QXrOfhO1qb%2BfFJeDzHw11v1vnui5%2BAIusuNYPETja0wcd%2FY0ZjXZAibfgZJsvK5TjrCWYCQYXB4XVGePP43BLLKaq6%2B1Sf8PRcsukyzLQOP4OornVo0Abjljsn10VyQ6UaaqTxS%2FrAa1Y9AwR4l8JMr4O0p%2FVYs6X6C6Gb2Oaalc6kcPEpwnUZ%2Ftj9DW1PP%2BDobmi5NEo5wPrZak2C7IIdpA5EJb3Bb0ObDKBvAv%2F8cw3rrjFL6vx4fbSWU4srq%2Bjra1rMFCCaQwl49zOaJeQ9t0shuA7HzylpEUS3UTBh1rR8eW5%2FYm0XO2aP2OjTP8w%2BwpEdEXmsEhCoqOCFanPnPZj5HPL%2BYXuM1PUmyWPbrhyfWmNyh91A6iXckE3kaEue33OQaFXcvzA1CaY48SMVn9YJc72eKpz469ElCqdmDylaMOSrJevBGeTrP%2B7b0p0k8gm6rMmjfYZD5xRInAS8KO9I2kxxCtDIIKJQn9w3DTbkKc%2BIweJBoWl3p4iePL6H3njaokKZyzUow6tqWJ%2BWs%2FFle8v1xzSJmGhj7S9hhwKZ1PiXI3I8Goo2LhcbAKXDKgBxN%2B%2FjRt%2FjKhjQEmX8CnzHbUTBfRk18gw%2FqPDwAY6pgE2dxBgBHXsNzZjPfjsSXOR%2BM836zKOYivciJg0AMeScyVrUTR5mypRX6dSJTMROt0uqrQ19%2BasqNuoz4n9Tx8CoA%2BbxhkS7u7SHTehhnM%2FGtsw%2Fgsn7Wlkq0AjlkytqfKLqwbwO9khy9kGV9ekEGU5LmjuxbLixKlo0%2BRmCNSeE6qikqZNjNWi%2BPhD0UHePlJI8Y9n%2F%2FENxXm3OCcB7%2F6UHdrBeZHw&X-Amz-Signature=f3b587f36f5a87dc5d827952acc1f7aead2f06a7047a15fdb7b85ac4a7a1e75a&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7V2EVPO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T141228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTa%2FLld%2F3nbnR9ykMl32DRXcHH1rUu8VX4%2Blf0tG8XpQIhAII5Mojq7jRcnItwtyFk%2FlvFMI7NbtQdxLo4JSV2K5iwKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY5AX562vHXX9nKVgq3AP6A9PrQOGFg29nC0lygYHylsGTPnVcliYgoc6yjNzOkEHkAbAAEDgUXIIGtC1ZhArNzHT80kzGNNT05JVMS06JmyEEeJxJL5KkHHeLqslN%2FvqGV4K%2FaTHYhKnPdw8z%2BzEjThdlsQHxc23Q8sBDK%2BSc68FaCyTfhiDgWNzPp71ihxgBVgxWC%2FaBdweU9XYBbWWjs8N9kYUg6Dqp9dHMJiSQF9u132Ax3uTmtLZWZEeLy6o%2FMJg34McXnyCmfX4%2FFHl8yfudGfoDFXZxfr%2BxOy4%2BecGkmGTET1LvIzDT5q7g9pq4ybow1YIh86gOGpqxMAAGEJrs1%2Fo1YFEXT4WZCzpJATl18l1McN2e52KzIO830F5iU%2F2w8qZMOTAFJakVuBv2bRceKNZqbjdwBTPMiot3TLls3zNODa8b2XvK95UN5m1inPadVimyW%2BaS0Itpuf9EEPz9kXF5XJoGP5XhNaOr4M9sSry%2FkJ9B0vPCtMesNyUSA%2FFcJ0fRuQMhyA0t9tBhwCyEpcwEP7iU4%2FCFrlrmC11SOuFXpHYUVRpjH5HYRtZoFwar6QH9IQVjsS9zHOn40gmhK%2BbxfQqzo5I3PUZ5BIJ7GmQtylaCAVqZ1fCqXFEf6TCAVAM97J7alzD%2Fo8PABjqkAcKdqi6AJi%2FHqL55uBNbR0AzTraW6hub90XJDCaCWovD20VjSDxUEmNLH1XRiwG6bgWFn81hoXj4IIXQP9EFBitKJ34h%2BNOvK2dFV23HA5QHaCzGydYDFwML4kFFNTYVPZANSvMul3a1M2veUEQiCaeUdtOYc%2BSmny%2BrIIUJorSmXnTvAMIrQMmyNAQSRR5j%2BVrvqMIA8DP3ka7OEDYFZlkJtWSw&X-Amz-Signature=2021b2ae21f9bc7f9a38c4f2ad77417131efa4197c6ed34bdd4ea72d04cb8270&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

