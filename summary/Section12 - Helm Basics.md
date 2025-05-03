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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB47RDWZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIH%2FETAtBdHDO6u%2FgUgv%2FHhgQkmo6couMKk4VGcZUv2XyAiEA6bBGQRTISsnV7QQYHk2BkxVJmTEbrFxNnYMwsdN497AqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMa3bYZF%2B%2FqhxzO7iSrcAyDKaSywAqnniveroAoA4z%2Bb4EcV%2BLqlXKlRi%2BbxjcmpI9yhSnytyXxpJkUvaHOgDG27O9D8Chc6JuAKjJL%2FnD9nhiSm3tLswcTckQCmXV%2F8gAdYrXrwidB8kXTGT5hzmH9yc6Wi81eN7vtLk7aqrfqK1fGXowkHv1zC5MEscXjFw7sAa0m%2FBZ%2FRvSJkN0sO%2FCbQG609A1jbl%2BYHUEUsUFJDJNneHBx%2B8688Dg0gdDxmeK9H8fwa%2FTTvzL7BrFdijWKlvWz4VcbAzfoSFFXi2ilI1QPK%2BF7dpyLJxVh9IP%2Fy3e%2Fadsewpcd0KrVTLjlX96lBlesMnq2rd7SlL7cOz87s3mpAcW99B4I%2BRAwzPIh3mPOGp7zJ9v6WbG%2BHhM%2BiQjSmAOfPZb2KOGN73K6yM1HQfSdHOE2C6LPEbK3SLJS4hkZ82jkb860SsQUdgkU7bXlHMjS7xLcWrTzyvJdEMWVkjlJejvTwbG7GCsNJq%2FI2N2%2Fjh2xdBAIztsKh1GOkE4TotVgnGZ4IPrt5XFt%2Bds2YU4Hp1ShHpWUM1UuMS3ULwZ18%2BAXh4Vd8zXpiaOLj67X3k3aE1ckeXGBk%2FLITnSLAO9iRkWoOk3FBiZTQ2zWVk9IEpKv71io0BbsDMN7e18AGOqUB1hMjuoK0jrRzT4Yb6W4YSJ7QWmgzMOzVN8%2B%2BhnL7AheIsT4YXqzchwgNRRSt9plqSvUI2iS1JdU0M9HKkKqfpf8OPbgiVdQAh%2FtWeKUwKeDXQR3Ffq6vbVUDGKV7LEOuM9kpXoloEhJ6bqDn86%2Fc1623gMSX5NcWeAqYBD31QB6ZyMEH4kXq6N9ZmjyDfXMLpwfn2uudMaAYG7%2Fh50bN86zF8khj&X-Amz-Signature=418bf0e67a6a017a6d8080a72e5c33c0f07563a1efda7a76129c7267638441d1&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLJIHZH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T141055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCjhpXFOsNcibeBzkxLvya6Zmvez7n8Y48xIyZAp2mcawIgRr3RkQTJOCWEeZseXbZp9TEBPyMMYbDjm1ZRuXw%2FVdcqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyQf6AN2LY5ggKH%2BircAwNoe06dZNYuB5uQfyGBZNILCskkatzLDlV%2FcYczJcV8aV1v6yfrR7VKEUPfcF29yfcZSnw2YjrQPnJCD7XeQkdWtEytwa49yPTKg9btvgmTx8vMRbBeL8NkCDYu8pI4IrMXVdf9kquaOKcTniQHikefXc9MKBYLKhprQ7C5%2F0Rd%2FYfKPhL7fF6oM3Mm9EdQugD%2BjNJ9tVgkYmFmlL2apGvjXXS%2F1zqD9cJqXYccqZRsiudJOcT64fJyeRagh%2FfQ3QKoI73DMquTjVa1FSe%2FF5IjAsXdaANYimNqFeYx2wcREaanmJJg%2B1N4tjFY11ufZ4kq98%2FAwu%2F1joxNNEqT7zSly9Fv3aOutU5pWLCdXxk3nZIKgvvSfspYUXbr%2F3iyAJbfT5dyGX4c78H4Cu6iLHEblLbU6jnG1m0jlqGB3zDJXZTuAhceshXv0QrcZ0xoZKhV2QdVES1XeegLKImdUWfDy%2FAyQjjqV4j%2FmILKejU6qlUf2Ux%2By3Dfmqm96XxOSHDPWXTJYPoAdKvjJ50IMeHLA26qLx2451A4BS49uJGNYzGpExkST%2BrW%2FDjg9RJSYBLVNf%2BoYGLp1VqiJK9urDrHP0TxtSmU6Vc1oxGHZN0nSEmy0v1rPhFfWn%2BwMJ2C2MAGOqUBxx8lb7h%2BCU4BYlvU9xg%2BJ%2BefBeGMD2Ypayyldd51G4sXu2bliwgFxI1aX8Yn9rGpwT%2FbfeevNcmOVD2e3LO5eLcwiXsF%2BncRHe8gaoZCRW8PBw3nCjPtsg594nBnKOfKCyD7KaApxAQAt%2BMtqqrpSbrV5THJeFvxZjFuBFm6iCTJdcp2RzzM%2FmbTYiyyrw1zmn69%2BpRXsFxJstOWDPaJ1n9JPa7X&X-Amz-Signature=c9935b30da522dbb64b3619ff2b810a50fbb7198de01d96c76913b9e86547389&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666EELT2X%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T141055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAGNHsUbjg3fXlI2sJfEnfaA0oxGupUTqOAtTMbizT1LAiBDV0M00Q4L8mX8ipEz5cwI6Vsdjuzt6YGR8tPpAx5wkyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKBegYYluWg4zzLYrKtwDriwry5jr8Rf%2FpfOGciCwtOa3DEbIm2Ze9hRScDiTZlGFAsxhHmwA9aD7HJrEXow8ZQD0Gbq0ibpKtUDS%2BMElMs%2FiZGMQv5lZElFcGnipwjj5cZ4RKuyjIbtQFI0583P2%2FYc9ruwMEtdmQC3W%2B%2BD9GEN%2BXyqMGCP8ysM3%2FG39s%2Br1JYzxxuppgXTFLnmopX%2FEe%2FUKvSO5Kb7qPif%2BTsMNza8CNFQ5St4o8zXbNR1YCvyf%2BXPQfzjosdzKV6e6y%2B7VtR4ZyemN3O5L5s7cFAtD0CkGrs0tZzNmFjwr29gixRIrqSQoqr3S3nAHVelLsni3r%2Bu7FhXooSobFczv3dqHpYunrsYKx9KvITyOnpDNTG1Aan%2B8Z5sjE0Yiinn%2BaQET3nYQezyr4H%2B2IQuANbqEzgy4duRAxBTRod%2FjO6GuKdXpOxf362WivhWhFVXs8c%2BK2JKE%2FKW0FlcSuwV67%2FeYwaYzW1fFF%2FixNIyfRCc4Laazhw%2FCeOwQpeULx9qCbuZ0CLI8Idgzmdp4Xx4g3iZmu%2FLWfcx5zFyry%2F0xGOfkU0e%2BAYxCCPk8MuuVfWZTodmmcuzeUhcgk%2BGnBe1nNOn2JjZy%2BFzOWtvD%2FeE%2F%2FUcl8AI5XKWGoOnJsBtZJM0wwd7XwAY6pgH2RL38yq%2BIIfs3qeHPBZcwbiD7pp61LwBGchMNjymkrv%2BU%2ByzipTOkABrLZgt1y84y4gZTgVgNsS0dplRS4oPIuSYLinrmwTEX15EY1yRNk6tC5YJi4KIP%2Bd62aDoMGYg6xGH7VwkciL4lXeWtA%2B9fb8h3f5zHZZ8%2FZ1OScQVrKs%2B6NNgnN9P2NkkJrPjmeNP4YKE8Od%2FLfx%2F%2BRZqHS%2FRSivX%2BpttE&X-Amz-Signature=fd0bfeb2abaff0b13428d9c11cf7024a3cb1a54155dcc204b988cf68dfff3bd9&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWN4NTO%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T141101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAJGhu6Yb5LnCr5ukJWsLiJZk5Yc%2FNHHoCZrt4MNLK7EAiEA8gYJiQgTDlh3alzU4q5DrU5FXuSeETDnkgIQRCGlr%2FkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5uQryvg1Y3Dr7hBSrcAyGKAHRhZ4y6%2FF%2FroCv0sERKIL29A%2FAHwhPenB%2BAax9G0xstTtwUNWDm%2B4AmAdIelQOEy1HDZxlVLWYCUu0TRPru40mbh8EkYNeaaIye2fqk61yUZuNKHcY56Kt82UWpz%2BTy%2B4WJkHOtmOUPT8K8HKhzzJwVG6iNCUPP8ZtZS94fST9gKj9R4WjBfvLaINHwzPdPYOTDV2UDfauH30K5ggefbhihKS1zQSupBGP9YO5hOt0IU%2B8Jyvtxd1SXNaTtrSvJ1kVcOfrPNzF%2F%2Btgb6%2FltjFb21nueifwlMEX1DQ1H%2BbcFqvw0FyeO2BVxFUAwCL313%2FIRyH0%2BCHntzztmpD8kZqKr3aS27bilJECv%2FKYIaVnpn7s1PUOxMVEMXu2hszKPhNgmnOoC3%2BY3i34sULgRlHtgBJhCUltsFQM5ScT5hRK4%2FDGi32VbzqoWSLKVZywXIP9bZsz%2FfYRlN1mhiGL9gbclRuRu5fBG%2BtmmUfNcUvdxswlAqhkq%2Bhqqw60JvVMg9dNJhFErV%2BYKuPL%2FkHNfll78MjANxDjxI%2BE8ZqDILYIfax213qIZLtzkVxih1J3dh6gJY63%2Ffj3LZHgrYvH0DPwb8EhXslTBWrU3DjocdmmXLv%2FtZ37uGmJdMLOR2MAGOqUBreWeAfKtMxRZoBPruNjH39NzVDU2jVCkgjbLMCQRTUz4G9Ibc9yb4x5iSxt2S6C8JtQIeGrUNnQvx%2FM5oo%2B2Fb%2Bgq2pFgIQ0rFaee4kFwxAmAOwHeleNqID083jpM1btN2UoxYrSx%2FAhLe2qHpQb3X2BadVbt4pW1pULA3jOczukCaqDxZSP7cu%2FOPrDTGl%2BI%2Bc6j3LIIOzO32wmTeAN9LqjEhv9&X-Amz-Signature=146d57b7804404d16d1839b51ad2a09563e9171fa716d8b7290a60fd7c486edd&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3RXEB4G%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T141103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDXZ9ANJvtl%2B0KqSi7cEQE1yOkkjrI2MjO4Ea1yrImmcQIhAJ6f4k8ofDhx0SsNj2qTuegR09PPdGITc19WW%2FsNtWdnKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP2AIDcK%2FyxP7%2FycQq3APEJmwy0if4%2Bu0pSnKBDuEMJm8rDAv%2FWVgi5zJQZQxH5AaRIlelRT5X8eoJk7k6Q7hc5CMnxijBHK5NxZf%2B3uMZUDE8JB%2F5%2BWevl8Ai6engXFVyXjMHSlnX9AgBJlkXjrUW%2BZ1XVVcXiU8eBwYw5rmbMxBXUqSfNHs2gYJcYPKbvkcb1PMzmp8MdPzkDGzVKOMtl2CoGHq3H8p9%2Fn0TKyrfrCpO1SvA7Dc8Pa5cPKNgZ75V1e0w5XPqqXwX3hGMdFNnYipYJOlT4u5ig34Z1QowYsuzuhzxuUBzCm9cM22k059%2FYSoXMp4iFeHQnDTrxeCm3PcAcumyHVzeLxRD22Sl9XN5gZfVD6Ccy0HSA1l2o7vKx6M%2BcIFIHniffjQMLCfrJgdvjx8IKVMIkUo0CxXmfRQ10Ed6UGdwQ51EAw6nnwFS%2F9zMIBdRkM967muOZYO93Xsl0KQQDfWe0eVE9RxR4yOmlt%2FudxALY0N7jnLI49z49lgJjY1U9WXF7EUse6VfFTpGhyUKwrLR6GIYkeeEbwOt2pR4LJKDK5daC%2BIG6ynM2gvLgjTbKs9KhFRHOl0wTACKanCCnJOFT2BGF4%2F1NxCsRzkDG%2FKl6SXrMqTt2cx5MnyO5pRvm7LCrDDR%2FNfABjqkAb0ZJsX%2BqTwWN0aWpxz%2Fao7jltHoE1zxw7B25qT9LjxZhJvwmHBArnlupWwJF62vKOcJm8q6PfpFyl5evCmfCBP51DGjfqH%2FSQdkD5RGVrkpuc8d9EHH8lUFRt0KZ4I0HuLSHQFGI3UqUXS49qmwDTZqlvZwP4JYxZ1aImere88OtWKgj4DGbGl2lwLvFFLxbVcNqG7kxzgMwiDAUtZ0iXpkx5Tc&X-Amz-Signature=234e1f0bc7c70bc238c026fc03a05be6adc5821dff0395d1daf7a8fca5844403&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNH24Y27%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T141103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC5t5VNpqOnEAjTuj%2B7%2FZuYl5wJda5k2ybpNtPSOT9gJwIhAOd%2BWQkf5uB0H2tnrxM0PA4ymwwgiy8RwRVmu4J8c1RoKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPdGrDP%2F2cp2bSpU0q3AOLq%2BKiWWjE8SwhcdYEJQW%2Fz%2FIh7wOmNyck97fQHaG2s7aYbj6rzDflJ4covbtgpTCR2lQLalvvL5cqUHOItGcDBiOU3K7dElUFirNX0DpOK3%2BMJD40p5H2FN8hqXsTBVpFeEQQqdo9NirnEr%2BuKeswixYoVa%2F5EI4Go7zfd0wbPwwae3zd%2F%2FSZeFa%2FSMzVrKU9IE5p5WE8defkbh4c%2B%2FmjifnrRxvWWqN8%2BLX7A9faLX%2B4onnYi%2FfgAXMY1lO2DIo7zxQrmi%2FctMXI2ALrCYZxyUpUyQkHJ1eEtI4k%2BN2%2BAbg3TY3xOtv%2FKp03hGT7f0f40rVyqkcuzYpX634QgWETF3LVEbhmY%2FdNDllPcLie4zJPl7ZgJh1T9cNJlwrR%2FRHozMFOB00O7wi4Q%2F8uRZK6ksMfgQTNURpF29u%2BV4ces947eGD25rkN3a83E4wLyusuE9ezs8CN86Fd79mFQMMVLnNqQLQGllFCp%2BSlpMh%2FBmznVlUEEiOt%2FVnSHjEgT97s95EGX7zkJAUIiFTuwVz1HHPOkwx1NcQPWQy2SliFeoZjUJlTtdWc4sGdhKeW6nmaS9qKY858B6QavnaghCvDt3E7DlCGNgl%2FDCTZJw11ukbAOCQUABxi2dVljjC13tfABjqkAfuBY0xlohwo3DzNNJzlfcOw%2BF8tBIZNGh%2F5Z2GBkrqESs3t0iPYR9Li2KxRV3BeJwICXjvpHyWssFKVxE7912XxrHj2kV9TlZgYSoGSIEYfMInkzuZDA61J%2FLerCzU%2B2nWSqsTlwx0VLgypw52wktkGC4nVGpYwHEomwcx3ZP6kOHifSOQu5L2wg2Z4Qnb9zFB3W73qQkSJ5qPEHJ0%2FlLCxNBk3&X-Amz-Signature=362a95d39a71cc3d9bc660c5e0bc8c3dba41663fa9c3a33b3ffa246dea4b5c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664THQR2ZS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T141103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBr%2Fd0sNgRUh4MEY%2FErNvXyCj6oN0ixpYflOcsEiZVnyAiBSZEfNwm%2BDxXidALyANZcKmCd%2F3EOxNmVQlZyDL4quBiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyYTgEuXo5fM6jRn8KtwD9IZsEwaP6J1OVfM9Xu%2BkXuwAFzTtWeOfxWlHUdHLs5UTEVIq12zG%2BSdPWODlO72ME1g1sZM9xJulUcfH563rSIXb2gt9gd8QRYkt81ZImnhHjdj%2B8KYvKABU%2F6krST4ZhHAi3F4j8YXVmCkXVRRgeSeQrTquvOtWPafnjWfnWyIkkySBKI28wAhjNpCjSxWGaGW4t27r5AwPMdEEmApj3pUgJzkzjX%2BIs4Oq51EWGIwIkbo%2FrXymK3jL0ElXtsndRK9bdE96e0UVuqWmwutnmgmdRSgstP5izWCZ1zOaeP5qedIOC9YB%2Bmg77%2BAUQcc%2BSxuC04FgpIx%2BF%2F0wOiOPhTBskSRWDd8PsITMH1J4EYHk%2F%2FDuSNg1%2FFoJs7DOELBQ5ZergOmwoqbGRRB2NFiW6ehh4ZFTcRVIKonYVV6FVJIsFWezmPqkb24pA9rbiQQfh6uhQfZ%2BF2eBRKvZIj8LOck6tCdxM0bKCkKjn8Fn1Wa4ZcaD6mcS%2F4XmFh588jgVYdmtHEnKTkU7b0WfLOPKx1SCTLgsd2OaYK7uXeRmU3IUkn3CJchfMAvx%2FdCtu7MEJQuU%2FUMnbdBsUPo07rX%2BsHozgNCTxwb7pOXArIspjfA6DIT7RCKA6aSqh3Uw597XwAY6pgGoEd563jTCuppYoMMqOJnSgxlTAFixauTEL%2FVTtG7joOpJVshD98zqqZbFqaAbbROklaJHN8yOiOj9i6fQ%2BQ8xRQ1icSA6bVTL3PHB3yFHbrR3XfpS5mUE%2FqVrHB9AsLPOMNrBF5DvXFoCr1iochRHNDowzJFzgMTBc8ciRCM6KIibBpkyzbHhEo3%2BGT8FckkSYepRm%2FhClef%2Fs6wthZQOcVDiT6XI&X-Amz-Signature=31db7b19717a1627923c770437db2e13a58c026338dcb1db9ed3d8d5486f58a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S3DEQM7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T141106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICeznrSQeppWbD%2Fqv3xPJUBwky1fbqYwgMnit5g54EQSAiEArxbwmAto%2FALG4xyG496Ey0fXqNgQdFRBafZZ6LWtNCkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2iX9ifU43mfCQ84yrcA3g38X721WYK%2BrrOUQj5giFcTAyhYOaQ3ipcg8ONclc2jeHbss94AwN5cAPQobvPwqjx6Cc%2FqmFYADmJAiEl0zZheeQqCFtxrmCeZa%2Bh4rUwiywiSPLZbHDf1xFu9zy0W1fu%2FeJfystbyfkGIBE2ZB921CyWBfOpX359P8BtdK%2FRRMxDkugnBfTka9FVYwMat9IEPC%2BtEk3MSVb%2FGKDVhfGn%2FN0hFrW8%2BlkmcWuPDRdF4%2FqVQ%2BkSUXQSFWiMWf0kfBUwrpqH4DYnoazypkWLO3d87nIlbhkvAu%2BaYv6bVvDLAKiqmiJixhlrAN9DPUjishniusILmkyZLlRKdzbwMtlZ9N8VoVb4tTkGNDGl1rSHm7H1oyHc6DlcFzpnAAGCNB5h07swHUfF6VuViaJFmZBTkgPwKbfdiuUIxaVfScxXJhbJONlW1L7LSynzFbVq0pX4O%2F46%2FQmjgItkUauu108cyI1GItq54UBBi66oau0THJry7AfXFxXQEA%2Fded%2B4DcdHR9X0QRvBQVY2yC0uJWjzLcC8BTxaJDpctG1oUnIeCPB2YN36EhgOU%2BHa02hzzhR9M4iy8xg1H4S6iiD9aWLQYcMKU1dK0M4pgYNLrUGt1pfsLVTPHNUcxVddMOze18AGOqUBh7cqsp%2BAUajSdw%2BGSYXGXUGKO1zJ1TOaYVVqPCAdqMzXdVIpuD0ACnoqqacUmcOZB%2Btp92BxRWIkxhuBPBeTdzXa02jLfHPOXDPkmCj%2FAmjEVgShi5lY2PIKvh1HivNJVJqFpYcL0eCGjgofRtgM8VVbsZ07TcZuz8zEQGAHFZA6soUqvQ8M7CV%2BrAUS24ysG%2F%2Fl%2BWEJ7VrWu1R%2FEfq2nl4LPXqN&X-Amz-Signature=9ed231e08299e28a0b116d0d06b18b5004503e111b8195c568b888d9356ef07d&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I2DV7VM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T141108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDGBFZq2rgDx0GZTnla278FqQXjf0XXKGxvsayq972cZQIgDxfTDKayxzYDHi6QbxTU1CzztWKawq1HOR4kQmr0r9EqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqarK88mI5nTiGFlSrcA1YF%2FMRJB0RxsvCCm3yA7NIWcKNRI2p%2Fq%2FI1TFdXcjJaiTonpaHAEELUl5JV%2Be7R6lAQhNkvu9uw6FHJn2fsU9qsgeXl2dNsCndQM3u3rZH2CLsVv389x0CelfP2COedHIwveTqLqUGYywvT6wno6%2FWHhuLiAygUdG4txWnXnhuCAhRIE0ecoxUGWaTLcx7DlwICAlEdzubJnUQT47JxMhPnI%2BLSWq2AVKl%2FIGp0rhYHXXA3zNi7jVWNkDE9iuYeAm08si%2Bk4oNdsuWdLAQVhPqgxVybHWTCFR8kr6tmdT0khcju22OU9Jn0LsfrfCFdyL4FUtbo1Wc%2BOUhy2BWaXIIzMV1NHF6lm4q4ISPhjyNxmtGq8RxloiDsU%2F8ixTvG3gOIMHvu5QUdUUbAV6ZgZM3oVbAhl1FuSADpzT%2BvFalso9DUHbkHeRSoE2VpKsQSM9UbgEzyxg3h0PqB%2F4grS1CAMz4fGMHwlaYEPCpxKJxgTVzVQ2dhluM5Ytn8xuwRBzepKCAYYHgbAnGtFgZDk5XCcPe7H%2BX2FWH%2BWVVGd%2BEoLlN066JeEbSlmBQprhy75sWcJ21oarzrPVH19jWtFc5D6CEwHshM2CHPg3DFJ6gS0CSnGdjbaQv7qizDMNze18AGOqUBozRRt6b%2FB%2BB2l8cYQJO%2Br7GbKSsz9y04U48chGGUjmbSWR2dSIwEZxok48xYeYj0HH%2BnrLP2WoI%2F0kwsHuQ9PiS5pcqB3OTwdkjzFNs7zzvxJDTmD%2BVcCD8M%2B67CqG2jNj82XjABxIDWL%2FEX%2FOe%2BCtvU4mPzNoZd25DolaTZQfPJC4PrvCSwlMMXEtBbpm%2FvUOka3GU0NdrnAC01dPlmJoQFfG8m&X-Amz-Signature=36d2345dee498c8cd0a4dae9000b7edcf13e3b6c95bfd2b8ee8919a26b589cf6&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

