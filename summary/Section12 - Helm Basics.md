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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGOW2VQC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T141238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9idVGSoMtskPj6jQX0g0fn%2BSI%2FQQJgDhLEnM63s2BuAiEAgXyIPe2s%2Fsuh3e7shuNjpUJqt4WJBgDGxEwMAmkv5sYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNpXvh77yNjszEU2yyrcA2%2FEmpPDNrqhsVXqDVPYM1VptImVNWlqC5Zc8sAXJxWGEIrJkhC5zB2SbqyJd0E38K0K0HN7CeA4im7pgc2zZA8gQ14gxOwQEBtg68uerCIbQhxDs1KI7eBZYa3ItePWr5DgBo1mwb2OiBzEsKo0u6Wp4k0FlQzorZhRl0Zmajl2yulVdZ2DFzBfrhK9q7PiSyA%2ByL5vvrtQTKzBEGZ2%2BfStC6N%2BKt1M3DFgDU3QkT1AKEDK7AwSsOkXRi3yyaSlAE2h%2BZLTnXhU8efD6q5GgdAU0a5Ms5wvpgJN7Neo26O6brYyuUNzMsnz8w0BmQEcVKK0lLQ8A5OO%2FIizqyYH0wvXNShzaRHQmLb4W06jSyXEQk7MMMrS7gCbOk6fnznkCFayCJW0CWj2%2BJ6JGN5y8ofO3%2FA2F3Gh6QIYUimoR9EgoMZzzQ5YvmcmJowfOstcKTghnmW7EG%2Fv0FxY1I7925wXB%2BVjwAa1SDUgenkZWqfeNOKMllIn6mOfAWEaeI2F%2B98JoaTXRGdFb176egi1TOm5xiCEbFpjviSrflM%2BGapeTqWzTbUleiM8BtenlgnarhQrcYqzfAitDhRtM7%2FyEPA87CPJFpzb%2B7FG6OCFcQl4Lywu2QUhWP%2B0Tvs2MLWY6MAGOqUBAfVCMn%2FsqY70qG%2FPZ7D9M2qkqyqnZSmArZT7ZNqNFj8OzfNgleBoJovLkzWOUS5i3gUxZlpQcHeFhdKBpWunVq4AszwliREwHO4jDEml%2BwuqQEJLtCFMVp6jQFbVtdKFTn8gjqzfT5%2BXTICIRah9DgAx97%2BjGTr2r%2F1Dv8e%2BZnquHmCD0XHC9BFSQi3uZSH%2BwDbCj11Yowi5HBmBjrYWm1mTafRH&X-Amz-Signature=9fe166461183d139493a07843e8a468a72f6e8546e4a01e11e807f6ccc8f4cc5&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJP3EYKE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T141239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG13qgM3mqtXY2Lmsn7v2E%2FBg973QbEcWfY6JoIa6jFoAiAtOj%2BO9%2FbGAsefhvfcGouJPseBw7A5tk22zsVB90ZaLir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMpCAwb3KPaBCIkVPWKtwDgUr8uX%2F0FHvOyNTDkyAEzmZWJ9%2F3nZU%2F7Eniu1%2FVLZx9Aj1Rj1Uq2OjsVdatv42vp4wewIYcfIzJSKEGYCTCCewYmA2dwdAyFxbp2dUbhQrp4jufHkE2bcEiN3oHpAfla5a%2B01Lw88rdO9j7IOFvcrntY3dNwpRX%2BPNT%2F8M4shM%2F0SfazPuewKiNG2T8E3Cd1R%2Bi%2F3VCGllSisFmUM0gFN1c8M%2Fvfd3KjDsM1%2FHxd782QlWcTyPLpBSv95sFVMATquUo9UpP%2F9dZ0%2BfWcjdSYpJBwr7aZHnmAIaoB727NY0VbCU%2BXIpf5ErnfEKpqesNvJWaWsOKfSL%2FHXY%2B0A4j83KmMc61vea2AIikCMILsBP%2FvnZTDNJG2B%2FaEnUnUFtzclZpJLNE14Se1%2FwdKPN6OMedmZNyj3e9Wmjvq%2BHGYIPTS91HmUBxX92sFPOaTz4G72jvpJqRCdHY2LElZey%2BQ4KatIrrqSENFJiYKChhfcglJrQnZIXaAol64pdjdRl%2BXfFSuLZcKqHGM1TnkcWhvmCGG50Tfzgw1UndV8Vs%2Fk%2F2e46PeI5uWdW%2BVYBf2aaSIuC6Q5RqLMFk5cnoJL7rJzS5O1959MzX%2FbT3ZUDrhukdIL4GnbQonP00wY4wyJfowAY6pgGck1MDrmhTX4r3gJ4lF%2BxhebP3qKq4gAz0LSUCxz6ZKqWxT7mIfIcptyc1%2BeUlALSQa%2BnDLXhP5jZ6h4qVOPq0A2G6GCb5ZJ2q83Aehp93oku%2FkdiOeRiNiZP%2B4D37Hc2u2BUXfh%2Fsd4W90GuFZb4Bh8MlGl7whVIfXvfCeWdIjEcpSgj6cSqGiNH8bTBJEdT7lBp8OpdNa6N%2FzedFq2yXLl5Wd3gi&X-Amz-Signature=e40b8876dd94fceb34ac6ad8365e2d734f84ef9fbf7753f3f2205a86fad94f18&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ELU36DW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T141239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy23Jlbxaio%2BodwxAHV%2BkP7Is2E0eMkpSUrnC3Fk7ihAIgKuD52crh5x6sxa7menlmEaUNqDSE1VbEhymv0z8bih8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBZbUbvRTnD41YQxCircAyOGV5S32pJAQyp8eKhHZrcW6SX8P7dOUaQ2x53RqF%2BTmBs8r3eI5fWDtPWKCKpAoF5br4ojsbgK%2F18u53nW7N7FuqCw3%2BeCaLcCftassa5CpdPjsdYTQwPgvSpFzgo1O7dsGF5S3EOxEe3ZtPGYG1Qw4s2iIhteYKl4Qwdmakvi8tID0v3xxauQLQJIgZXypJs14%2F9eH%2F0AFdkmsu32CBeOFruquZsJf%2BmMDzAh4dune61Xu%2BnPpUzqgSZPuFaGPQ4l%2FCuq3QZZRep4zuxyJho88rXVLvz6zT6ZpYu6GWyU7Jfrf19NIHxdpT8Lw8WOyBIL3b04M17%2FpKdWviNxNjVuxWxZNGcRK%2B4EnldNEPS8L8G9fP9G6CKAuyzfA5sk2AW4T0cgWf%2FHYrbEDCyOrLNCWlclTY7yqHjWODuNnh0nk07NEcjsqVWvqIhcG9YkLhVvrGA9yUYwPHHufb80yrV6Lygoz5gzndLVi2IuvBPPx%2BhCI4V%2FdSpUeTehG%2FP0mSjVmzIBDiSBPhpkFNQQsIGlZ2YAOYZerfaEBZXgl1j731z%2B4wpFNI9Qwrg4220H7K5vjwLmVP9qiRQQ9FQR0YqAjUwM5j%2BV792zR3EfSdfY5G2IyiQGg1gV6zU0MMSX6MAGOqUBHFKULomNZP0qSTVwBUillazYtpdk1ZX4Cj%2FrOYrw31LdFZHG%2BbhG2OnzuLmEgKtWmpqbUuA89qf%2BhZTdOj%2BVPPAP3zWzFjZ9g9FbYXi88jCZBHolQJ6jnN5QPDp17Bh1OPuxwSxPeTbYdshxMX969%2BfoQv6nlzP5XGVq9u%2Bm8Cype0eZSlkggm5eK%2FbgNAkeKuUduXevoEOZDgJqOFD4KoZVvPUu&X-Amz-Signature=64e85aacfd0fd5a571f9263205ca9ca38c44b191e314627a8d6fed04f8d58cb8&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REYZ7FPQ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAf8nlHe0SNGB4psT7gZIulKzqnU2VMGbVmSYhDcXtVCAiEAqF2%2BXWfPghK%2FVnib%2FUIRMhJyvry5D56GZT5Z9lp%2F0ugq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIboGL8ka1N8cOGcdCrcA2MgePqbWiCltdb2Omcxv45VX9gZ1iIn5Trr8XMwtNLQiVUcbNu6gndLOwrvjF0V03WKyiLQuL1fmv5uAAXHwMdJhNQaGQGgaRlMrN3PAGz08zMlE1OF1hp0reUzwsH2Mo4XXoDJf2cv7bdqsz5RC13ljF0AdIQIg%2FqJCQJ0w8gLqPJ9U2%2F6CRknaUYBw1aJlRWTr7Y1SDNFy%2BFSLCfB%2Bo15PCmVmCQ57Fo5M1ymu3zebBaMTsF%2BDbAw0usL3I%2FveiUzd%2FbPQxIJonLnP8BQrTjyALyq7I5hKujGBZ0bDQBD03FIuyZGD2%2FdtPTzCnDXi5zsL%2Fl59r1YGUNZny%2B5bts%2BzKCbh9VlGvO%2B2kFx2TPVpNBmaIJuGJx5ZI1dgiCXl0x3ogub3LOuf0sKcLKot2spY3%2BPiSQyG%2Fy27esqwK6i5XGh8li8iAQeh7dKPhF%2F2g7qqbFRaLqSLZMtKUm%2FLyxgyseqzTwtq4wod5XUPi3iL8PkZBZ6v2kOVqGIBmAX%2FlTDaJzBmVX%2FbVCTDjKvuJH5meaUklTlOAQ425n10%2Bng44bxRFoBsPceM9nIcb1c0uu2iUDuFTq9lNN4lnZmX0j0gJ3gwqfw99smjGKypOhPcyS2bQ3EJdr%2BIygVMIGY6MAGOqUB1MsRgwEC5D5pQPn29tG0vdY7NalgXC2Eqo6xMAoIvXhPz9iyAmQMXDaekpXsjlZEgCEDzBLC7tYde2jG9xmmXR8304Y99pHqsqSHmsLnLp7myXRic065zA4nCmTrGNopCw9AC%2FKU4KTv6qZw1dx5cvVrtzDU8B1Mh2HJW1w0lyXrVlH5sAdcYMPTUcvogkzZIL5tCdEhJsY3eCY0GluUdpEn5rg4&X-Amz-Signature=deb9508e6b46cc730b3f139668bf4f54bf0e750ead3cd7b409168f8257ec76c6&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ROFDOB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T141243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9Ncpx59vgE%2BuSxfSZO%2Fu5yuou9OuMHWWd6z091pFZAIgH2necJcvwHewAxwH9qziXLJhjpGp4EW4Vl2tW4DTlV4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMTRSphUltgOQownMircA4cHBhwtLWqokyNCXaNHi%2Bu86wPYHvS3VGr4P0jsnOB0WUzj581zuiSbgyd7hzh9G%2FpSNPYTwMN4QE4Q4QP7%2B54No3tg%2BB4hL61zTa78C4gfJDSdHwrFDGni2U2cGbtvVCum8LtLd2BRd%2B7Z3RPk5R05jYMhfV8zdot0h3xFroyesBTQFt7mTxRB6IQgJy7fn1Qjvp3%2F5n13adfjNXPyfIRqE%2FQ3cuIITFrUfJX9z37hcpGOkr1koF%2BzkC%2BRgHEPYs3kbRWYv0NuH8swroAAKuTu12FyRq0jAioumCvEjt2gkFghxUB52NPGSRC0YKCj5rm9dGVg3YJ0Jwp2N2jjSPwMOwOsK9GK1Wx3HhwWqjTz1UCOhulvxZA0hPuoCpE2smx6xOvcK2X90Iz3We%2B737rlb6o8F%2Be%2FZHD77gcJHsxyNPwRwxTj%2FEqIfu65amlsG4znENNFsH7cCXXimnAReJ%2BaZKiwWMR7vhJDMJ1WydL0r4l679CBOlx6FPjXgeoGtTSRRPvlds2EYqbI2aB4H8q9JbTd%2FNuBGTP6zX4HZn71pfPNHxHe1hX%2BVtf8IjlxyqdhpOjtwndKx4RGPKRXInTqIJqsMPZslkyX9wMwHUIBKQOXYeRZImrHwfTeMICY6MAGOqUB0fX%2BJSFZKfbqCaLdgH%2FyuMhgpuq4C2h5jytT2g66FCybq%2B3ChK5iCZqcl8BaM0LefgLkzyEYgmXyJrPpYDJspRNdijtDy7EbViu2uJ7bGGplTddNtd2v%2FTgV%2BOFkNGp%2BZIXg3cgyZF%2F3qjTHjgjYR2Ga8%2FU6vYWemQC7nC5uo95iTNqYcoHAmfd8gxyKPDS2pMrjaHygDrK5UOiiK9Fe1MJ4wT5v&X-Amz-Signature=f39213f57f9549ca7535edf2c9133aae3f7d382f3f12aa09fcd05ece932ae7c5&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6ZKEL2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T141243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFAPee8VDGaoPQXlIKh%2FBanm3hOu2vjncq6qlUIiQv4AiBg8z24VD83HuzOOmntK5U8xSV3D6FtYRsF43YCAwHZhCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM%2F5xX6sBEukVpS9u5KtwDoOvZyxEDR6THhtaGvXlGnLFg1SdNlgAnZIEMRYa%2BLKziE7ayWQCsHBgl4JG2xLCBdtlcZfGeY1ymt0tqIEH1vAGcjMjQo8HGI08VCJeZsQgtNQ9p%2FM6eD%2FlOISb7j5obPQK3mD0SChxoeCZckTFhPucZTEEodDdvcUCB9d1tjjFVUY6LvAKNcuBUayOxNx9vJuyDsBqobMfDkmw0oGiC5t%2FJmh9cGvw2xZncryPELMsuHVSx0bCvkE4LZQjdsOehQb1UcNVyxeUD%2FjqE8VnvgApFsfQEnRaYlchZ0fRHZ4L2Mf08TdRrht8SWJ1%2Bw%2BWfPmaX%2BzbhooOHE%2FFeg7bH97CgLNzs4C8Yua7AH8%2FY5qI5%2B1ctzxfJcO%2FLwIbs2pYPGInQADGocgUWviAp9ywj2fQnmgPFEbFbxrGRCPiqdFDHMIGbxG%2Fw0JpEodg3VP144y6aWPI3rY5pK9vfy6Q11CjEc7qTAZJDjFmC0PuCQSN7a%2F2w4vEzOjUMscYdJBeEgPzJb4Ry%2Bn9jsGyiLomFwB4uJBNpSE5tigps%2FKh1uxqH7NqCD7SxV0LhaVmANsATFiHwWzw96D1xLitvXwqzfKswF3DJzb2i6p43850JFY1Y7lueeDpzj76RaWgwuJjowAY6pgFOFZ%2Bt6FrYDSo3ovskt10hYLmp8tTlRCtm5VGy9EySQcdlk4ZlrsYAHcrFUHAHyosoixpctH5rHz9YEjHpKyjPKeZz9dO3Exmtj6vw4bgjSLOh0ESTqXl8d0mElPJ%2BJtMAfSsfx492CF1co0bsN9sls7E4edRUomot%2BxEwafCsptXhH0AAs9SlsQjADAUC%2FX7Tc8ud0CphXkL%2Bl4aH68wl4o0i8Ytv&X-Amz-Signature=396b573b8551c454f20ea6c9ee6d74f35dd9fb1fff63077943a0513fddc74ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXZFSKN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T141244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDED0BLcTRh4lO1gTJY0EBTxiK4HFoM3%2BrH5CdYbKS18gIgPyeFJ8tF3ohqJxCsyezZDSVce%2BM6WxPmzb0Es%2BNXPtsq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGQBwmqvC0262%2BYwiSrcAz8WNUxA%2Ba6ZWNNQbrnLCqATEtiuM8TwKa5pNWVolnXBTz0P%2FUNSRtAoYn%2F0ZHdVEZYqXoSz%2BUu8NIDj9WOFyRRpHyZV29f0iIUoru6fwnkaBKGVSxB3sGz%2Be9ekWGmyrIgpX1%2BIZmEBSiK9IuaA6YOcIYWkc4rdtJS61yk5d51XTxnyE4clkavaVAjsdjibXUTqHJznYnmrF0U3efUPZCP3FiChOH5M3MF8XPTT9GL3ZatkY8fhfB3AAeu2wRGIJKIrXh7YQwijQBoXrrof0gFOcMT%2BdsevW7v0TguP7fDxGvZCRovWqet2RRFsuEG8B7z0UrU3xJ2HHkwBGJ%2B305WEQ4ngglwisNvTq8xWwURXrYdVZ7as22tvD0IrlbArJwENZnPW3ChAK9Bes4EIke4z%2FGTy40W%2B9G9%2BavTcUcTqBbJ4UFU8Pu35DzLGfiQ59bEuWtkG0bbf1QiaIumg87jiZW7wSp0SLXoPMZn0n5JP2obI60IN4L2gyEbqpdUFPygZkv4dFHFHPyMEgPm4UBv8cFTZwYxcstrSeC7A0byIrpgeKCC%2FNtmtsqtVLdizw46wRUMXDXBfYJyULj%2BX6o9uP9au9f4Ay90nBe1NxOPq1pleS42q5mqjxB5dMJyY6MAGOqUBbvBehRQHAU25XnTNBifklGjpQXwrkN3S1ZXDK3LyMmNFfkqGehYZudT1Br%2B2LthhRErfHyskn1Xu7N2HTr3voECL55YIhGXwuMw8aZtZy5cmmE2uxWYUe%2B5O84eoMQmjSKMDUNyHL4LKqKVs%2BFeVAug9MN3d2n8dkqRiiww0UvVQu3wKnBI%2BKQv4ZQVTBAY1MRL%2BDk5DqVxEOjZgIqfcw8pDr%2BMW&X-Amz-Signature=0310f1801419c5621e4e61dbbb795f910b12ba0c31d2af62f592b8d1184c5e69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5GGXUWH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4KGgGoRKVo8l%2B0Z%2Fyc0dXlRfzrYyqH%2FT6WyvrdqGSrQIgXd28p4xkhPU%2BHN8UYCxIP6oZ%2FDbc%2BKQin6u0qGgvZk4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKlVwOb6HkgIjoWR%2BSrcA7A9Ob%2BRl5211jz7LlH4wh4w8jDlm7gHdYoZs4RafwMGdSb67jcWDcKM2Yhk4gt08vMqEMtAgsA%2BtAJj7OYdCa%2Fa7WCwf7oPR9xOrpoFWEXn8PmVX%2FyvJ2tPd2zQVRjLXfwXq2QEBsHEoiDi7A3LFiuB0NKLJPvy8%2F%2B5wPQqAXiUD3LJgTD9z%2FLuS7sHIodLS5c3eSy6Psv%2FmxptPTw12vQskbXp61iWREa1N8wIdpfQxKucBqTODP%2BGErsL%2BVjMEIyWHvI5YxPF7KcgdLKKa7lLdEbJ6pAuKqwdf3SL4%2FfAV7zdOc8NMUMIRNW7RklY%2BC9V7A2oO8sSvo3q9p98curxdMEKjqZYLZnrSaanzPJa4DeEie9DxQEi2PPWn2oFuP8k%2B855ODqoM5V0RP78ajwacRTa1GlNTF7MMeZgXZYGZb2YKNcFRzNvs9RlkILi9zkcPLZaL9Hp%2FKCcGZTrdVPYLdf%2FvHTvplkFWGx954GTesZ60CTXOWmyq6EpW0NBkftcbEEl2Fsqbx4dCo%2BTOhLqvVM7bxsW3wnZ2KRW0Z7RXIPwD%2BxqTfXj28vIDObLDBC7YNeazc%2F24EK2VFjKBj1TG%2BtIBzHx3OzEHP4567nXT5LJPDvkZypUgjdpMOGX6MAGOqUB2GMN%2FoVb3YMbo%2BlJrBTSViS5ohZUgf7K9BZhv81ItriL3U4quXrTMALc47LEQzXHLgje7uRBCBFVRT0fQD7Apw6DM6CKRY7PdeXY4fb1I68P7DjWKVPm3ENLPqK%2FQuHnsV%2FFqSYwC66yqrmLeTE93MmIQtVzWujvLLIGI2R%2BT3%2BcapN1QVl0oGvS3U4xMfljyL%2BRQmLdWVofzR7ybLybMtYaCdx0&X-Amz-Signature=957e3e0fb3e1519e03066e6449fda2ed88f7bf4cb5573f4a5fd0160810236a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGF7BM5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3HJOQKZHtAkh1yLP4WW28ZceAvX0C3cowBT0VCnHvewIgfglWLFbVazKdzGHbb%2FfpXhfFgqX9Lbbe34c9QS8xNE4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKlEinO34aaqjzH47SrcAzu5cKhpnHwdM0dhZTPZ5cYzLiMWE8bVHWn%2BTGY2TQSiip4zjkuoge6w5ITe7DTro0HWLiFZO9qxSvoIpO5v4qA%2B5AGiYvn%2FYUb%2FE9pjPcYv2QlD%2BYpeJTQYKXmYQRrDm1HBLQ%2F6TlED1JB3IgkpA6lgTomNKXL4Dp3P3J5WDp4XwnI4yWJuwOzpvUDTfX8KHEIQy8e%2FxnTGbCva6EW68%2FigRvj3n2lb128C85ZnU87nm88nJvaP%2BM5AN3IcvFCNrTRosgt1BayTW4QjmZfL72m7eULUiRedZazWHv2XF7OaU8aFhE8d7Y2wNCsPVfh%2BiS1TJVOAsiXBvnBy%2F142jfJ6CejZ1ESjRGKdpFb0qDOkjHZlv93Vd3%2BGJp6JhbXYr9kaDGg6LJxsV2XDMTgctSmJBKwwGKlL6fkjc%2B8%2BH1YJNpBpOktrqjk9vn8MrvT%2Fvg%2F5TDqulTP9O0ujzSGUo98NVCEA2Qs8jkIPIpdNQM%2By%2FKrFF2eE0AV8Tib0ipXC87yGBpA0eollLN4Pqs7w16L6L58Kw50UTkwXZa05LMPTeCg4tjpGkJbrdROqGBYX3aRaMuwOl8BNFs8fkBMcLw%2BLfKkJ5jxgZwG68GUNdwXjZvpm2n4oUs8wCrxlMOaX6MAGOqUBzzMgx9GE91V8r061JOCY3whtpVRkfpL5R8tTCyLK1rlKJhEynLYnyUbA9fy5b9GfvFDHgav0%2Fct55vKw%2F%2BiutWP3o40p%2Be%2Ff%2B4%2B1KZJf708ce3kb1zP%2BvtDj5bsrpKxKIzynvjmgXes74Qy3GRrRu8kwKF91X%2FMoadw0O8Hrnfcuf6AQgtVkwS72KV5vwJSVfx7Usl3D%2BGmAK0wAliE2EZMjoylc&X-Amz-Signature=01e082f2b5105ddb5680a73dcd6b5297d7eb92cbaeafe685c24f7458d4ced49e&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

