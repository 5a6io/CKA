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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKDTLM2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDMSxRdkbvpgfFd%2FLlRM%2Bst0IWTGd3WHhJWkepjRdncJAIgceG3o28tYfIb%2B%2FdoSyMqEY36xWPQNEmZNarTO2hBetsqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5t1BhqbuqUTg530SrcA%2FN7LZs0bifhd6x0ngoaE7MwbzQDk%2FPymtrzvUMOt%2Fs71PMEYDUHkmexofQVUjLxuRQ4TSZQOMUgV38OhanfiqW5sdG5wSuPGUhPdehNbLKXQmvomKR9lqkeUcB1i984UgotwlLsUA56jc%2FnTZiR%2B04htvyLzrvFJG%2BLQTNLol7jeT9bSEZ3ArmFqK%2Fk8GMkKWp9X6m2y2s0FKR%2FSY%2FRaZfhRI2o0aAVSrHF%2FgE7YJ9%2B1mN87L7IyYJQcBCB65BHvq%2BKVNAM85jmRdNZDOyzh7%2BreqqSy8Ov53XkLWeNQ2sc%2B7Tpj30YQnTnoOtG3g%2Bz0n0db64p5vAzKR24KpK1y8WUqZnbBGdjdE0RlzmKCtmn044Fqkt6Wl8cmthFaK9TlePceQ8lnSoUDgfjrroVfDOK8rz1nnE1dSf8H0fKQu4YuhR9myW3X0EV49S%2BHT4siPA0IuSy7GdOllI6GzE%2FuzpK0Pu6E8IuPe25BZES2eUzYQFw247miUPzktl6JoVrvI%2FfRYclJlutVOVM7N2xtNagBqc%2F%2Fgc0oibvqbrLJjZO21XfiD6qVQmmiZ0SKPuU5Z2MeLzSkQLPnmahzBv2xQLZ1Ab0h%2BG3Myj%2B6nO3gSc2f4LKfIeOIl3YaqPuMLW97r8GOqUB%2Fug6wLv%2Fxzc5iLPDtpic78WRNMalSmGzPp1HtsSLAOAsl%2B5v90c2b6Cc%2BHRCL1B6hQsoljpGI%2FYT4aY4BZT8xUl%2BObR0eUx%2Fs8FjwMS0yxme0GnFJhBzL7y6IA0Bb0JdfxeNikxPKj4D5wPVImujulS7NAY0ipKIPJFN3YZ20HjDod0Y84gYEW3rDs%2B9fu8dmOTGFOEpkYch6jffsc1VHGSqIJhK&X-Amz-Signature=bdb6bca62a1825bef9496c0a428fedae8419633b0400f1f1f6f0b1bf6350fc58&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHHSMEP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCn0HKo3qK3xdJbA3073n1z4KRgu%2Bv3cPnMOzBDQxKyDgIgEPWS7ZuGj%2BCLq5LUUMfgToqFDqEvQgp4KvrXcDsZLqEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJv50L%2Bv89YP5nWQCrcA6xYvZEImqFE5yXv35U%2F%2BzYfMN22n4VMkPSAe5h0AAEKrUP1kG%2FukV9DT%2B%2F9tvGNEzBJmIrL9jolJDpB8Tv%2B0GQ%2Br3vQUCjvr3%2BjtaJ1JsTQ3%2FRDmrJqTWDbzt78FtdLKLxtJJct5SR4YMPaCNhH264jed9niwgSK%2F7lAH1YOdAFKVYZs43D8gTFBmQ2s6rCcxIWh0LdgxW1sXNRekUOmEub2bPrnWBN7C6yESsh3kMt3aH9QawdytHPQ1XLa4oP8Epys7ZCVWT5JgGRgh3hMIvLSEJtnr4f1B0C3cLq1yipuKOiEjdTwQgDHJ%2BWLH8dyRNKdEHAxlOS%2Bp5MkE2D4HKVhpANQHzP%2FL6dzQFDZSnkJaqtOvaBxB8kiuC467kfscWZ%2FABdrNVk%2BDaQ1LecVUg5MHOsgFHdiNBwfJblW55Ppjz4uNtRYnCBUVRbCTOeyVqJiIkVzzZ8atfywuVjXJE09TAJJWLRjHi98Rr5nqQ33o6MTjLmJhUymBnKs1L87wOCzjGjzTtSIjUfpUP1xI8pH0qClkcRSK0FP6vEklluMPM%2FxnVyqRCtCWjligCE2ZeQ2z3GV%2BFgrHY4LC6dOzhM826fJNfai5WwACqd0A2Uv1vl%2BVbKKOl8bGOZMI697r8GOqUBdVS62yW8ueXLCu00t%2BEXJbLzoWVwhaLqKpCZp8jVUjUx0q6197NahdT91YnoCzR%2Br3ZehupEQtWGK1CqamTzglv0cOG1CWiPuQD2csc9o%2BaiAHLZpOWrrl7UNTFOxSE5%2F6WbGBqscKdQ7tVCyULqY8I856ZCVxL3qxYHqZvsRYey1YhB724U67CdfqTIgEAeEXYLyEsLL%2F0IEeon8jtIgpkGYcZQ&X-Amz-Signature=b3ca0d0e71add997e132a651d82e6dbbbcbf1d6ed92bdfd729e0ce8b0bd6afc0&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXOGIUFP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCrQK9e%2BC5BY7uxFRDUknqdZCpGD7Nh7LyHApf2%2BAEOywIhAJhZThJAV%2FMUVQZsGL4GBSSoPrIyzDv494kQrjkefg1nKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7FxbQgmO0XzEA2R4q3AMManhEovgPPubUtPWPKlqY%2BqFSTZYhnNJss%2FGR16%2Bi4L46HfHnLt%2Beybt6wrvb9c1r7rKtnODEl6gZLNOVZ4f9WRypdbFe%2B7RP1QmtMvNLvNgg6r19GOzd0nSKccMTNW%2BTNAqZYn%2FHhOnHUl6lp3viR5WXlUn%2BslSXda4Ko56C9yQOaADQEMGfmwH9GXC0dEwi1C5f0wHm0WrIkDMiIc5H4DuezmjN1dB6EZvcWEo7KtYVNllx2Njrv9gc40VTHfu0jz5NTDBejBDxoGTZhZZCgT6fQdSjXJ0CVmpiWd9BaPQqeCaKAKQo3maTJB88DpKE13eejafDC6anYnwkeXAT0h0HJRq4fd1wAW944ROZe94mLZV2aeLxY%2F7Hq3WlT0r%2B6HfHn2lNpYk%2BemN1JF5AWKKiThp3653SJ07dcGPyDnTT4l7ARz153QijeUzl0oDc4%2FCnWNx6NVkA7foDpDrfW2zlKWkZe3DXwN%2FJCTwELIy2zmuDZKweFloeDTdLOFFT6WFO7GjPr2JaYt9Togym5qQSx2W%2FFAIV1oMKnnPG%2BrXgaMehHlVb9M5KY2mo%2F8ePzcz0srNH2d%2FGnW06uX9%2FimODB2kjwBMlIAdVEEzN1vCN75YcNXg6YnuweDC0vu6%2FBjqkAZi%2FzhMtXRUqq4jFouSqKu5KYzHS%2FRLj198oMD2QxdIksoc%2FkCJ%2BPM6r0y514LuM%2B%2BbngaHRC00lHTw%2BhQrjr74NzyucqZxQYX4LskLybF6XLAoGv0%2F9bov2xAq2f%2FHkVE9HUCzCJstljJwlZizc2JlY%2Fw8VF1SkB%2FBW6%2Bv3il%2BMzBR%2B7HrIP5bsGZ3PQUsDT9tp0T2vtgmCJ%2BYQKLgMk%2FJ3dLCp&X-Amz-Signature=cfcaa6b4928635f02d65c7f479fc1e7c556da2d6392250c1ab69f95ce6fd36ad&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674ZPMWIK%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDPSpmAcI%2BJS%2BFkKppUxs81%2Fx1lvcWwuUHSu%2BoIYdSP%2FAiB3XmVtSxlNdodZ1VM1zIRK9Wd%2BJF%2FEAX0OsSMKV5Lg%2ByqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEU78vk4EnvhCV8HRKtwDeAfLdaZPKIcmu%2FrbPte12RVFQNSglWjoPJYBHeBOUqtmkst5M%2B5%2FTQNOOjWwpJ0COenL44QAIlLAwo2wFLPrRsS5mIYYgSpzUc4wEZNoumsAJQStAHrq2rlpE6%2FHV85q2ZJuQMG9lkI03aez23fPE6M7IKHCHwmThJuf75wRbR4oK5epXrkhmHZzTewOuxt9r%2BsQMiq68HmW%2FL%2BrDek3bfD0rxnPXWCLGazvfDcPEljnwrGQHZkGs4Nodt7GSoD82K%2FRK5NUvS6dCnkDSYQigxOpoe%2FI%2BNQCmF416oayZM5oYQzq3osoDNc9ooUM4D0%2FbPjPbeGpgalcqGQbd2Kx0S01fmzGN9WCu%2Bz0tfD1eK3lvpsWbmQJjCjgnQmEPinVegSd32rT4usiA9YL1oC%2FyEyoWn5KoiO0E1vlfxe%2Bs%2BDe56bLIKGiOf9QH%2BYw9zFkEJv5e0SM68CRynK8qoKu%2FlWNGVWgJJB9V1AAjJEBnmX9Ab5Yiasm7sZKHx0YpxQ%2B1n2DFfwaybHfG6H057%2BQ4vE6m3vP8ga0Um9GnCS53Hw%2Bt74tkIqO7h8w%2BUnNRjlrSzTvCVtygfavEqIAPwbIfPikTP8LDv4E15R9VdLgXYYoWIBBzUDAiDfRVvQwi73uvwY6pgGAXuEYxQR0GPaWxlzS7HSiL5E%2BgGJ8jsJqD2z1pUOI0SQUyAZGJycKcqkypfh992NSc0iayhP%2F%2FDliimr7EM6RCFsqxIGaUdry2xPn1sTd2nnwOzX3AECuTZG%2BiQveNlWoqQowAE%2Bv2BcfoYH6R%2Bi2DyiSid4FAI9mOV4MMbxmJfB6Z84qma3klkYHs3692jmIk%2FsO3ubz%2B97YH6%2BMVcFU3D8Yj9Br&X-Amz-Signature=85544b48857eb21e4d5e86a6b1df9ed06fe4a417949752294513074123bdf352&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTVPJI7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD25BW8UWtpx1L3gW8LauA5ZgUc9lgHrsBcwXaEtcF7UwIgTKH5mbt4JVeTHdGkbF4V8GBMrSdrjhX99oEe5LTpsBIqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVnMYGMhyyLNQHP0SrcA8NYzAP%2FbICOYoDYUCAN0QJjzfyH4hI1zkNfky%2ByrhzlNRZvHNzsY0zgCMTKziJSwmVaHeriUAJWk2HkONYDbgj1vRu5oCw1dMQZs63W8l6lVDANhZuvOOaiBSPgm0HoUDy6ZqL5Tp3z7LCxbUoAANtsxPNN3E0aMJT4so2CILWiyhW%2BaNHqR64fZSWmjOPDvY%2BdYSK5vtLRZQYIIXumF1Ae0hB52%2B75QQ0e2fDy2JLxcR4EpEVEQCCAqi%2FFAd9BGFuBD52hQYA6wzxgRHf8XUPHeZDUaVhyF1oBFt8PZGsqnQMrCpuO%2BAyoFpeqLPHv04bRU4sBynvwNMa6gL2w5lNmKzq7hxviIa8Z9Zkjtcw5OemICW2bnZK%2F62nQ4nNrPnpS%2Fv9ICmoN02D8qHPlAp1GaoUUTZ14t8ZD7TzNuhhKBc227eV1fy8SXJnrZEQ0AaESt1m6nm2qb9I4E2CvJ0sYbI6HrVUQyTqnBgNO82wTcvE4ZUuE1iPDW%2FvjFcVHd7UFGIA99pktzYOJUine3gmrIvfdklxmTKKq0a2zaAKxNI79Im%2FuEH%2FBaaSJXBCc4J4mhNNjghPjCb21E23SpKWvASSjASzkVy%2F8sJy2PVkS5F2qZIe0i3uFc9qRMKyJ778GOqUBsIWHH1n77twM%2Fd3rzDZVr49t8oRJiWV34ocJbegFnCvltyJ%2FEQyCoU7iOGXNUCnyZVsLtlljCUQH1MPYKyQxDlwUB5U%2FqId8YXPVaAATclBO%2Bq3In5CT9YzlIj%2BnH2t%2FZZ6ip2Cv5bwxlnunRgbdgdZl4bj7%2FQQRvMvjo%2FOVGbJ8Y1gw6dzyGdvBWELr1KLa8BG1B%2FYBg7wqnOxqHSEdutRPjCua&X-Amz-Signature=907a39fa44491b21f0b369d3f34cbcb2518c8bf65ee4e0aee4075a1de11d8e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJHJ3GQ4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T141057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDZN5Cruqgf%2Fo%2FbNGsKeab89NbTX%2FDhsK4%2FaI4g%2FsVEcwIhAIeFWlUwxVmOshbBsqkPKbndWQ1iyJfk9jY%2FS5kiDz1vKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkpEpTqBfvFhhLOZgq3ANZGnnDX5x1Bg7JkLm2ToV4YNI%2Fayofs%2FGY288B9x7z5axp5dkBmrP4iGzaVZ%2BN5y50VTwapgJiLEX5COHPQBFvtwpV%2FBDHjwXg%2BRD0jcOxPcIk%2BZm3eK9oxY85U5pgkS8oRBw1ySDirZ1YMzQqIRcKpDowHQqIYFgvkY2pa%2BLIhkA3EybzqK%2BfnUkhAIvxH6iTLgGyrFfFc6KagSseWA0bcsv3V5%2Bgogdt4PcLw13JHNL%2FIzJ9lKDevheIs9cbkMgFP%2BJd%2BSd7aTS1nh7dXGcVqtLopj%2FOo7b2LQNSDqJV0cxBhKwuaTIwANMsSpODdADnrYPhPSSBN7cfMR1tfOcNwc3JXjdjC%2FW5pT2QAmSGWp8xIkZ2Dc8m7r5%2BHghVvnqVD9uxqgocKEC6IT5qQjdEdv4O2ssF6y0xBhTVq1C2ESZBBvQ1M0TKtKx0Vo0WrGyTQBK3vBKM%2FyQi14yRon%2B9inJ5P79syfrOFA0buILFJr3b8r6W3EK3Lx20PbZ0y%2Bjs%2FmDA80WPpeA%2BSRBMT8fXC32LXA6UeHj2%2FmncQGy4%2F7vEUvkbhDOUthB%2F%2F1AD27hA72XgEky6Rzzc0i8zOmy%2BDAvJeJqzTxf3aOL5HIqfw9s0AqpnwId40VkKNzDR%2F%2B6%2FBjqkAfS8YvRAJ%2FM2y0ln6WTYlKUFuckBt7RvcOa3n7%2B%2BBhdR9cKaOQwSEXugdzrKDTNWYenFPyMVaxyD4SCIY7KH%2F8DtEmnfaXCwo85Xd2qmEsYM99negPy%2BhEIQYw24ka55aIeunac%2Fw%2FyMYCH8AVpNWguZ5PUVstrDW6OEGvY8sADP3VVXZSL0cJLPW6QSBL5dUtejTLbmYBYNejuBB2oTOEUJ8T33&X-Amz-Signature=1d2f3b2157355250d404cc733f95953782709886e557ceebcfe9671854cdab52&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFPEJ33R%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T141057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCa5IAKgPMrwk1d%2FSrZCeFRPHEZmWxKbAdP0U2nLoEaCgIhAOj2URZnyk7lg5wQMtXjZ3eD7yJ2LQ%2BMGol82t2QfRnhKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpQof211iQIaYvDZ8q3AOYxF0akNiHfUfS2wF1O2F326CNWkkH5WCBghcDwzmSa8LfNQdodP4ANDU5XPV%2B2%2FJ6JuOQobabaqcaq8u5VVZico4pMdl5nN6iO%2FXK3Qu%2BOPFuNjq1KOwarcfawWHqBTa8crw3bE2YfesZX5%2F74XGWZozN7Idk1sHqylpCaiJRsKtbfzocdx%2BJc5X5Z8s52djaHpcrR%2BUN3yo5BUOIIS8diINpTL8FIWGWFq7QkGMR5sKrZsBQiav9rQibdD72akTEttDWhbhB5JzLgLtWgrn%2BZTMDrs5oAH5qs0dejTIGv7XrJY%2FTrDGYtPUBLde7RdI%2Fo6WjtwA4jW34q9yxGckQnAL6T0xmPLbNymyjalt4O7OzqvSEe1xJfn7ahM34MvvUYt5tv%2BoiOdsA8U7w15YNVe6ErdXvSTU1WkxYQz3Y2KMrVJXc1oEeXG5cKZw%2FFoDXA0c%2BCJPEmp6yIhNg3KCofFGdgjLr%2Bgo4vb1aXRQUTvzI0TT4%2FF1U%2BLWnGLTmJkOFLZAo8MHaybG9OUpjsv5s6mFnVGuZYrzoiB9bkO3cQTIyAjAmzBPlJzh2YzroY6NBKoZg3MuYMxF39Meg20oAf2C6TOSUlZy4pY8tc23%2FzTxgMjP5m5RSNTK%2BoDC3ve6%2FBjqkAS%2BJiOHx4RqPbviVUgHFXQIWaZTwBi%2FkmfOp5Im0njHQpKAdmlD2EEErwmynsdeg9KKRc%2FOmhaQZAKF0mRYrJtp42V4zKi0PrRJCeQmTLO7EYPnDSwHS6ZD5Wa2uQ9UDt%2Bu6jj69LyWFUmx3eO3Y5T192nLBUAi9RMSb9E72DpSXmOkvn3D8yt1IXm032ZR26e4tuoLwE21N2rpAHh8%2BUx55ni5Y&X-Amz-Signature=64e5c465f12acdbec5cd23815436d612b420ffd636695657ee7cdd19da7dc62c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32DIX2C%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T141059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHR%2FJkWmQ8aazkC3JKfbIIobEq%2FYQ%2BFY3KjR9T5zyNXdAiBs5Kbq8dBPso6icgvdfpXKSBj6VArlWQTF0eqNpaAFhCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9b%2ByNlHpHHzw1G5KtwDF%2B6eLTtX9KVOD%2BNIXqgyU%2ByIgarWR8uniAO4CE3U9yleyCKZ5OkjrxXAFGy5V21LwySgstk90EhPwAbo2F4AnZdn3bEoUGlTF5qkMz6EYH4b0l0pb3v%2BF7DeGLyPiDXNwKelCdQ5TWQkqeXQMrehCCMOUOMk%2FKPkZTAZV2EJkwfvEHkp%2FJSnU8lyReCgKzZL%2F%2FULH1ctCBXKlgezKB1KB8KKp%2BSjh0qEUubNiTmdz7URWCqsuc4X5Ce%2BXydD9KifMLN07WtFcBgOxH7mQCeByBTrA5vQc8GN88VqY0k%2FfWeEdCS10HUNOUlyxTx7fP%2FMRdstkKvPRJR2wzSwKwBq7aAQsVCFuLPv0cszOTgTtdxw8AD65vLLyiwK2q%2BZiE%2BLA0u%2FLwe2K6fESOwLsVLXuZsrqYF3ImYzu%2Bk6x2GNw8snc9jfzORlKb2jvhQIo0ofW3DI%2B7X3gzs293T%2BJQm4IjRqmHohunXLBDzsrVoJ8%2F6i5sJnUuEq4ZlQKYDM7BgNivbLAEPBbkO6giYGJq7wjNAI48fNgKWpOElv6YojiVyVj7S%2Fr4iXxoFn7xrIF1Iy19eP39liIj1wPJKrn1lZjX%2FMWSeAqSD3rAXlDIcYJhIYdff%2FvhayzWByUBIwzb3uvwY6pgH%2BZ8vivVqpMTU8HiIS9Fm78NtBWV9AcMn%2B3Ryx9l%2F7Ib7qaAqfETZgcRksjmf9I4r7xDydTfCVzDrF9aTNT%2BQf8u0%2Bom%2FSoWYFXc4cQbcxZ8GLsKJwbxBJgYt7uuCdc7acPNI74gJUrw77UCxpEZ6qh16E5%2BlF2ZIZZQpfzKPKNyujte8BPOBOmApnfxt7AUE%2BCZ3259rYbMSovJvIVxI%2BY%2FB1VXZ3&X-Amz-Signature=b76928372b7b56624729fb6d85e83da6f492ecb7aa1fdf4d8065f486aa6ecd23&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644IEZWIF%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T141101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCHkOhu6eSCkY8whG1MH2%2BRxhanS0yqMUr5HhcAqMpLkgIgamP1FO4jsXmGNUPG0sOq72fzqtvSYqRM%2FQFb26eEqrwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4moziucH9o%2FW3nqyrcA1jA4R7Sfp2mX%2BF2ciMJVs4UT8s0Df83skufxoqYmzaLFkU%2F2W265ncolgzMxM8MHyYywhxBP9zkZJam7jdJLpWI2Xd3Apgbu5o3PkpZ5xrG5CNx4oC3OS8cyo2jNdxaKYlL0y2RgkLIVP%2Fzrq%2BBkPd2579cOR%2BvMpyRtzjScGvBlwmsOWRy7mxquv0ZGWrB3eRZXFNO37jPUfksgdlZ2FG31vnKO0TCigZmc2%2BJinMPWFo26SJnjKk3TycB4%2F2OOk5ZMvDOuRda4jp%2BeCWOXftIckarMu0weBLbdM27O4UVFCD%2FRYJ2ZyDr2AjmIoBVTLbN7yoLyWA%2FXyercSsOCpAnVz9gfxWTa%2FZk%2BL5N2pVtGfPAw2sXGmdAtc08uK2%2FLa%2Fh5ke9c9Kj6dIvnn%2BOvPcFSQ%2FNsEjZsO0RNom7ejWHrM4D1ZWN7w6avA0N2yCUF9zwLTFzyXyln4TsosJc3vMDCFJV9Pu4IR%2BMlSHMeqH9Rw1EKl87UoOGtk9tS%2B7qQm06PAJKTU%2FDZrff7EJIzDsH5m0jgRDfKtjqDUPGr%2FL%2FSAeuyaDxdCJXihBtBHi%2Bhr1bTW1vwyT9tJ%2FHcQt35GVZiGvQ18%2BYdRsEFxfbzwYPXWg8TJJ1d4x2RJQdMN3P7r8GOqUBl%2BGieIh68i6aKrEEjxvuQYUzoRFJVmiHTk23EW%2BFlSWg8OTzQu5AWRkSJHso0u1p9jCmR8MzzGuKxnvur2S%2B2kf%2BpHYFsXjUPiAYiwv76VTqpg0ykUWA2xFM1PAoIoPkdB9A4BKp%2BglV3UmnrovXTro%2BhyTfksuZSxbSQRLsX65HTetpoXo0WuaC%2BJqmbf3sL%2Fl%2BH0Bky2iEPa891XkS0133iDQ0&X-Amz-Signature=530cc078872b4b6019c313d15522b9a15ecae1f873b13f8280bfb9dd72ab4e38&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

