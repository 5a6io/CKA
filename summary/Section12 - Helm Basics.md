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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYFDZ6K7%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T141207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFM4Ci0pwaVQlcuF4Nm%2BsHmdlLE02W4%2Bz%2BpjRShE0%2FmgAiBLu%2F7y6P%2FqPH9%2FOOI6TvKibki0%2F14t3vs5byJodbEn1Cr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMjQgdeWVypmZVv4SsKtwDBvp58yynxLX32zmFCvefq7fD92Wyb25z0RKZoszy6EjEEDyAI0HAKHOk13ENHSW8HuPQJhpRPjU9Z14F3vwljOESj4EZ2ch6BZwzZispEhoQQGOqaxRp40eHmqlcrMPf6tGgSBeaf61vdal9mUA1JaRVUX9CJmp13XaJmWdNUwH9qtid2IGyd9Mm0ewY8Wyhbp7RKlgmlAZiBuW4FLHFYCbtx0spebHibN9GUXezo4Mxk1Y9EaxKlSMd2xDdvhzox2ipW%2Fwa4d3BEzW693Fz9T8a4d%2BNY56pc1uZ5jEE2r7rQ5pf9hIk88zHwayHvvXYcFYVRFlrnAHW50qotX9YdlQS%2Fdh%2BSmugZhNDJIx5GQy1MJRUkk52%2BsH3qhVBGf1ISD1gyZKQX%2FbSawqWeBXF3Yed7gowHH40CLPHhj13IwE249B2aofvDWEMa58%2F%2BEtwB7yqnIVj6iATt6ZwARoslVy%2FA82jHH7plsh9Pk7rEgnfx%2FDAkEZ7xfF%2F4plwnFGOwmrejfsPH4Z5%2BdPG9c5FsuZWb4etQ%2Bbd%2F%2FfuWSBVXsmlH%2FZ2sjwAi7pzXe1vrsNZIQnpfE3w%2FQsTKrybETICVe9CV9A3mE47bMj5PFtEynNHq3rbDbsl%2BTTFUL8wxKj0vwY6pgE1TXueQw5Fl3ToUCxQK6Ebi%2Fce8TrwzhgES6Vh%2F6KUOSk5S6MBpVU2Ffo3%2FwAtBCM51EojOdY8USUtiMW1zJ2B%2BqBX7Hbq%2Fj9QEQLjzyeOzfUmvB5thmKEIJ2kwi91a6UKYT9a2xzw4vgaI2UU8N3qoR7TL1WP%2Bkj0o55cKEpSZc%2BS3%2FhSlL5O4DZbeQ%2FOEX4V%2B56%2ByaCuu7NBvr8N6D6glKphjuFG&X-Amz-Signature=520edd0ffc9d6167288ff164a0cc6956501b44a4f9d6e3531e7f0467fcd8811a&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QCITKVO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T141209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIBUMnF6M%2B%2FSzoVN31p1ifKSlRewVIzv%2FMW1prBeLCagIgQOyT1mAbkuCj7HvzRa2PT8jxpGLxQxgB%2F1nYJ68kWpkq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDBbsTxp9MKzSeSnzbyrcA74TLpLaxmcLcUTfXS%2BLLj1aIYNv%2Fc6A40%2B55Un9OQXDYGMXY212HO96ruys6Azwiu31gSaooCj7YJDblbf6VUQnMt5jxpxmtFEt%2FHG4548B7mepRylVjsRQ5KfxKQUX6wNMmrHazP2NOQRYA431MKh2tEWVd9ygG6DDUkbAGPeXyrmY4p5Y%2FtO90yqNL78Cr2Vxqd5I%2FUC2iyplbl05ZoHkgxvsZ4rV1XN66AJaEGLViGYXoAqnyIhDmO66ZEwlodlucO8Vlb2in46c%2FonT8wK%2FWAZ4GeM7N%2B9giZ%2F9t9gU9i3FOELMeGZ0fCQJOMamNwgzoTkZT0sRJWDRoFf3Vh%2F%2FFR8kvFnwJtwvJqkB2A76JbTctcPFkK0Nx6l5Y7BIJTw%2BYWGfbZ1vCOSlcY8LxKavR%2FYbis1GsCtjuNgsvZGD2SHz1kJZ5Qi8DE4yw3FvbkqItkcl4Dlk11sFRS2%2BbiAMYEgCffVtzkNqa1OgY6Y6zPayyEAwcmW6IrygmENwo3oJfM0nnTxdGCS18oJoISk4lrNk9wxuwX%2FKLYb4edHcxHsLY0mForB4IZ%2By1sRMlaHH5b2Fe5m9maxdc17B0FMqERH2FaBo%2B%2FZsnfSxiy%2BRqb71o%2FqBsDZO1akKMJyo9L8GOqUBfGCdZojdcyJMHs24hGrlJ9xrTLDFa4UahzWyvJyDkNPBqF0D%2FcRC7QWnF9MQPesWSIWAoHxDxBTzww9MX79asdeI8XZsazVBwUDAEraD%2BRhFgy9NComoo4Pw7C7AUDOjk9hLwAcxt3OfQfm1uxL%2FdxQ9Nq13pd4vBBl10yk2l1X%2FijhAFZAzURgx7rZAg7KcQrHMkyblXAWxwm4eQV2qpN0Qn3Ej&X-Amz-Signature=994b42c86a655ace9fedcd963e734df787e328e257031887288791314de1d13e&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDXI6ENM%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHKjOZhw692qpzHxUhWx245%2B7LXu27QOUm%2FMzyQIifwIgbJ5yjJBOlxnULl1Nx1kSjXeFmMLv9D0gtNGcR%2F2yR5gq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJnPsC%2F2QTRhHUwJxSrcA800RNsYMnqgdX%2BCk5f77amMPymy5fHmqTtWKlSHHsWuWSLd2ka0TV%2FT3wMx%2FjhB9YcQkzvchIhu2T1qPBHHX5g6jHKq6j1X8Y5Ei42cMsBLVzxyLjVZVKAWgZtZmtmEn9CYsoizKzQpP8p71k2RxQqSHaV%2FDGVpT3X4dBZCuzTd7%2BChDa2j13VzldxL00B7S25QlTj6MmYvyeckYkBsAaCEjS4tq%2BOUBm3mehuHxAXOVSjHp0xYm8Q1wpuuSCiNJAbD713CIhb2XZ7pkAHd8h2EzBgOGWkVRXuiWZa%2Bi7buc0T7sVQ5CnXiG0nrnPs3canZsTPM6Jr8cnH72fQvB23G3ZPzcBXTTJlkPW629zqzwc1VHQ6PsFO0LYq%2FzmvXPRgqizt9ODzDB%2BytN15ryhubgfbQWPoFnNEWedZUsVcKGANyY9HDDJj541MhHI83MYmdlU0MfXkfMFSiNHCTdkZeDuPq5Yj%2BUt%2FwmiZJLbqIjmb7hRdR16n0wzf8YCQrXLeRR0OT8lo9p%2Fqi7SskY9mmDrvepW3TxWwXNL8PM4JBfpnT8ATme86dgk1GV19JoihdJgutp9oFAHbucffImuWbjY0TcdN%2F1yTGnqU%2FaYaicyFaEira8vOvGM2PMMuo9L8GOqUBqOdEmtDvOiZJl5LO9i7LcvC6%2BSNKprxtwNHankhrQi6y5wtgVb9woIiDf3tse%2Fl9LeXkQaelCLEDWKmQ3z7c%2FL7yKSoVISX%2F%2B%2Fn3zSTNaOXy7gNcA3YqyAcyjAEa96VRe24cM1bdZWyskyhKvsnad%2F42ntxeVyv0gUpGg9mxv6ecKrrTeMBS5MhMQUuTULux5hbukRdb8jyKu9feKCC%2FzBJ3c738&X-Amz-Signature=b5429006c22026cc507f03d385bf0042a156eb68618ca057667218b2e2c2369c&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJUGBZOU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T141223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxLp1HeM6cDsE42u42TrH2rBG5S7IemL6Ur8a%2B2GoHywIgXXsNRrrW7abyHl5sBzbcfFSJiuJope1lJyzV3ufdbsMq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFUYpQd7FnNrNPAauyrcA0nMg001f3iwGronQX6J%2BfonRhgd5vqwlVQxcbs%2FK%2F1H71sD9LO%2Fx%2Fsqh6cNCh0CnD%2Fk27nLXLOK8qThOlkjD8I91uUBAFXqD2lGr%2F%2BrpmkldwfIRU0XdQdKPwYyZzkYVSNEZIPkmvTN%2B9UF5xHbCaECBzcgXXBaBrktFd%2FYhfdTmacshFXxaaedpqfdbcPOixsmQKSMmfUA4SRQHBQ7GpKrw21OQJqYktQNZUpj97Afr6FUyay6rjycMJtbsw%2FqM3yduVYyonF9GAzGRYS8zfTgoFXnUZ%2F0IYH4OOpIE5Llhiv5hDNcmsjEBFy7VsDYIIw%2BY4ulFZONi6ABPsC7NZtiMYp5i2B8pYX4sKmDiTxMpvv768nGL9qFj4buZt9bA3DRE0NWTzyFG%2FwyHVkOnkZ2F%2F%2Fih%2BvrRZmbqXa%2BvBMXvcRYmndIJ658s0g29GDrSILlhN2E79SS6g%2FhCSqkyvPZUs5HwgypwJ%2FCQbVnlD%2Bs98PqBN99%2FuozmUj4EA4Q96q0IDy1WSP1fz9OayEp3bwMk8CZ2Lbs3sHy63ozi8JMixtZ96ThCXcsOjzV4AZiATj3bqRQTpF%2Fw2BTao86SOfO7RbBcBlZuBpCxYcKsfMjm3832Uts7UT2evuaMImo9L8GOqUBVfLgPu8Xg%2FZ4EV%2FEZdzmI9KG1s9ARUIEI7VGmqG0arUmXWym%2B%2B%2FLb1vZwBeNbo2R65ONCbH21aYzdo5UYv9mxWRtAqXjh%2BgtGzRUIQd5uUrDrj2Ye%2B%2B5fJ7aL3VHXeQKtL3xXtS92zkPdh2LtZmMc4HJ344fs53YbkdXs1479w2y8soIhuRl5e0oU%2FRW%2BbyIcQeq39yVpD%2B9p%2F1iX0dQ7jrCF7NY&X-Amz-Signature=9bc482e12511a5703575ef0f39193e48a711958cf3783ce76e3526c4fca754f1&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BRMFG4Z%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T141224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUvO26klQWjHW0hCkV1bLacfEJgdvewStdNCqJM%2Ftv0AiEAjYS7%2B%2FglNrSFEFPZTBoTm8UXjPXRt6cDOmIfSgcYb7Mq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDBW%2Bi4dZpflcUv4hJSrcA8CSaYgw5cClPyklOH8zWUcRb64x5qnAKjzYOOwIGIOWCZULs%2FLK8gncA41XgnisZIcoigAVY5jf71WTb0lmK6pPGVBWBYigbmBvjFhqSAfOHF0Yhx0yrgIX8KQh04wGd19hkIQUjH55OiTE%2BPlHfIywZNtj8wT254YoiJPLaxbWpRSQvtcbYqzD9ulA9qKKrSvVle620DyhKlTL%2FZcZ3uKdxtTQ2pl2iE7ZdcJHzjPl1voKjAseLmWyVJ%2F2jz2dAm%2FZxJHFYFMKVVTYeVt9TKv7zkYBgUopBofaHtG%2BKa3RdZexu9qdWr7%2BcuHzMi6thkGvyzAo5dIw9m41dhgbXtlXRad9c9zzjyCyhutvcb4C7qAeSX4h8iN7ri%2Bn%2FasijDHyS6ocpE%2FyvztkESZVbwu95M1NJPyg9sEhYCnSkitfrGLTp3fC4oq3Pyx65L0jC%2B5Ww9rNKtUtFAAy4XVjTUM1ijnfzwt4y4tz73%2Bdddqeb25Api7qjq2l3GCl%2FTauQJdt08Ig0bkOrp9vAoEoCmRVvAq1g1GwDLVdlNh8JYpzpd3M8BiQpi%2FMxWfkAIGwkRTzW7qAYVbdlyN5SUVOqqP3NA6ET%2BFXj6w2xjtiZOxfBOb0yIyhLFBg%2Bcr%2FMMGo9L8GOqUBgf0dEzXSYzoAt0gMxjJvFtujwYSjy0HM9F97SIC1yRTUQAOU1mXfEIqZXQL%2BxLxWXdykhll3V%2FNpFx8AV8k5HW%2FEVAdkVvVpfYpd4yDLWWuJ5HW4zS2V3KDlAZonf%2FX4LltedHqOewPIllCeLcmxZP6oH0LzXdpxNWEMMAtBXlGkG8Gw7%2FSKurb8QQ5DFeY60JACz8IPHfsBQGqZW8I9rEAHFaW3&X-Amz-Signature=ef5fe6b670f2b141de2437da4f3f6b7b3dd2f1d4d97be9fcd49b79401f8bf15a&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW3PDEZF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T141224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fff5lkKXoYK3aKDTmTpGU81RS9JpRcJyws9KlitOsNgIhAOSj9plNouCnUmfQHGyyVH2iZgszX2%2BHDRwWC2MZ9zqJKv8DCBcQABoMNjM3NDIzMTgzODA1IgzZsPq2%2Fen4fdk%2Bcpoq3APjg0fLKTANrBj1wcDAYMCabdACH0aClw8ru9kuEJ6lFWli%2BDemL%2BDvInNWIZgtGUpuliGYU8sX8EgaXAfD%2FTESuq3O9l2JvdaFkFSgtr0%2B0nY%2FrUZogwijuLf7NcAr4QwRB2Wy9XrNxMqEdLi79WjljCTFAWIeMXHdkqyd3%2FrsxOiVGcehfia7o7GZ7451%2F6W6viut6vjLUpss3218TgJ5JM4UE6wfoHjI2dIsQwNGK8XDa%2BFeZf76bELTjeZgGNz9%2BYAFfDdlHYVulSQeDMsVcJgWdVQ9LKvkYs7cT5qx%2BhbmK%2FZNgtn%2B2Lb5vC239uwgrbx2Klb%2F5tSCtiA8a0T%2BmXI8enqCnB7SMrk%2Bifd3iY9JuO%2Fl9XH%2BhD722%2FkbyAICetmLZZbNiwscQQrbKJd0qbmevQDtBt4Rw0SJiuT4FUo1QcS0czavACdnTahsopFYzKR%2B5MgmbrGwu%2BOoVkMZNbAMYsOy8eL4GvydtXX7ant6EnjfGg0u0I6W%2FDvCsjg9htA6C3ZbDTsBXZta7qxQ28EpNvnUoJManzyZTxv8ymvJjzpuTFFfj%2BXS7FhG6mavJZUnb6ibCXY1l0U0EY%2FKp7g1rW%2BjZgJru2FC5B9cZMZVn0fnuedBpo%2B%2FFjDHqPS%2FBjqkAWoe9bJiiOISK4U7Pzy6rN3bYXB9EgZhrUFLqzgoVmf5y1f%2B90RxS76yyNQxg%2BOK8kEmB%2FpCQIPMdu8Wk2h3%2BUpiFKy%2BbLfonIUv%2BS7pRONdwEyYfi%2Biu98Qs9omCvp9TmjAOoGA5ywe%2Fj2B3Dc7mTZSb2Q93VNILbm%2FVEbQ7gxiHOzM9HqqdomCfVeKg34OMihz1jlcK9TqA3uGha4jsCL1DBVy&X-Amz-Signature=800beabedfb2a6a9edb34dda83595cacd93b419a3a8b26eeef8930ab5c75bccb&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HWM6KPU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T141227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR6yAuNnfKVZeqYWLfKLmBW1LTFEw3Huz7veuECL%2B2tAiB8v0Zpnf6ZTo05%2FKU4%2FE03mQog6dmjlDyyotcE%2FAFmeyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMyGq0Qpmgz%2FKtcI44KtwDFnUXkl46GAp6IEYK0uTVVrjoiGzKb%2B0A9A84trJOjaFKKtZJvk2IydefNpVNAsnubd4T53RtVPwkPtfsYZCuXCBQxJewOn0AvdX3uUg3ExezuTzczR6XCaTfQ8fzCR4%2BlLYI7wQ7NFP4OV%2BZ%2ByLhx30u7qOv0fmgwODdaEJSgmcUuwBH4YE39UfgTw7kSXCWtt4kzqsmATnrkaDQwKMCk%2BM%2FUq2%2B6l0g3IgIVXvqAmo2tMIZgNOglipGLmVOaRaUVSicBD119BDudvcWfYpgjwfxzZh8kzWbuNeQkVcx3gJs%2B%2FuqdZ2x9CXBPChLP68ucttlT4qTVP7sC6g0DE6VLqtXF3%2BqZ6B4WKIIgfErtwGAMuKm%2B37kypHduFbPAzCeGM38%2FjKVRSULJ7l1XHEwItEkJO%2BRBB8tBnRR7LzeVO2JwmsIX8uUiubYnbxxddPb8jpqBFyJha2h6lMk%2BPA70g6KLA4ekclAtewgfFsN7BNrzW6MLgBABGsx06yscVuHL9fszArYC0YPcA9Iuv0%2BL9zOhVxwbfOZ3jpW6K6kRu0C2gEkClF6zqiYXVi8IrkY8e7UDe9TlFaEcPKKdDHR3hRQyCljqFbx9ikT6yxA21kXDFqnxTjY7cR6pAMwgaj0vwY6pgHl9A0XEC6JVjAs1PygiIHd4QtSGXmBuuTntju2SGkJSVunroG9L5XhhCVNOEiFcxp2OIJkgbAwf%2B14Z2JRHP0emK74vc7XnDCj7MesOqCw5WGKJkHAPIrrG1z6WM3rAxDWST2FvpH%2BJjVFrYhIdAi7SD3Qu3%2B0R7EVckih9GdveBWGpqpE0ciiODAjUa8wCqvnLUsj%2BWdhaNaZ1eeBlQLb6iJN1hQ7&X-Amz-Signature=6635d3e66d5034e266349596e4c08f4d10a5742e6a00b105c3cc424a900f2bea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666I7X7AA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T141228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzp8ZNTFyQasDicCYmP7kCajoZbQA%2BS1QEUV9gEgNF%2BAiABz7PeTc9hQds%2FNJhxzDJBwpCjqNqmsPHapEqnBoSjZCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMgOLpDPXlNQp3YOX4KtwDsJVUG5q%2BowClENff6MBgxWPXFQLNutzcgFergwrDkYhRCyjcjn3b2KZ9hZV5izKoqNDnzvLz8SJKmLdEsYMBisfKbleIxrPty5zOi2IzSlDF4cqf%2FLfXlJCSmeNA3ZcGzKBhEB4Ewc2Aw3VyqCkqFbXVAkWwmt5rtp36rIcQsNibo4UMCFi1fYkT7DDtDPP3bcZWttYoK2aPmsW2lEuUk729QKh6ABE7%2FzQr3OdlvpyH9Tm%2FtJr3JRvCNISYGb3PpxiqCUigMTbpgdXIn4YuEAqpNbndA%2BaRE1R0J0TaOfU5W2qZ1DJpwItVdWWx5aUNNGzAxkraC2iAZUWCeJxHEZpPhrO9CdhVyinNq0HVb%2BY8cZjLI2HjabMeL85wJeYQEWrC3OBeP1zr2hMRXtI8mKfHDGw0%2BZxsRMX%2BctsyaSVqbH9v%2BFGL2GiCePUfxgOEjR4ST6TgkEh8AZwyv34dXBf6FPlvQz70luIMJmInzdfaoMbjzdOZ5BfJEJJt%2BuISmBbOm%2FHLh%2FcZWe8gSWOQf82TDhM5NxYSvVoL%2BdRhLaMOuBF8cmFg7gvRnPLgekd0pawef9F%2FXXYPuGtsJ5tK7vOjaN9WA8M5A%2BVisngta7yXzuKEpg2U0fZmLMEwlKj0vwY6pgF02gJh4evv6x3lKLD8B9iFjsUtlABNCIBYZ2Tq9enDJDZQUNYidNE0Zipif5kNqv1ADgD15GlzOle62t2njX4HRikLf3GpkuNS9PtajO3BsLOa47x%2FGSMm8KCOJXzUfRo05wjNirdbAA51BblH%2FQQPujC%2Fj5xg8ouGuM7%2F%2FFRJHS6r2Cqmt30CARxjw%2BQa3jDe2mAIr%2BRVH3QbF%2FWMoXSuowh2cqHb&X-Amz-Signature=94472e60d802f7d4fcd6f9410d3e147658c871a15e4f2716a8396c95573832f8&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTAHA5R%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T141229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPqCk08PsRihOO%2F5x8xlkX3POaTpB4%2BY09mVe4b25j3AIgaTT380NDdjFmdgKsumPH%2F7pCB66Ed3dXeovenO%2BMVh4q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDGwlh%2FlTtzhDDHTgFCrcA8uXEIliWW3JymeY3ADc2nJDwPhmTAD7OmvBoj0E7YMHuHfU4rCEZ7dYJd%2FXIq%2BY4kH%2BSAetrG%2FgDQUYyp4pkUNKIkmpfzNoNEqzrypmU3RbKyWYcMkg4bLUiGfnXmSxaZ9pQpsFDP3FPd0RaV%2FLDtUfZFS3c0VpyDNxbzNkWpNa4FYni5F4DlSQTop%2BtF6%2BrHJwWJgalW%2FaoiZTEWcc1BppF1yGEPlZsshA%2FZWqMFmdVpss1SuV%2B2tHGQ5fH6i5eSxO87bmJ%2Fob9fDM5KpE2dU14rhtrK7UHgX4suwmXtxpwlChj1YTizsrFnZjWTVN7SZijupcGqIn2z08s6Ke2FkYyOQrvF7jqXaJcMkRm5ilOn4phKJwcBZx%2FjF5j7Kmcw8mx1r36SXCjxJofGSOWFA9gyNUq5uNT2zfafmT4NI9iwLyN5Rgnyyi4RXRcon6zAEEQMkYhccxEKE4xg6v2W0OE%2FT6k2tMcLl2h0tFOJmrJ0wdb4KGo2GrwNQDX743548dDtcqYNAHRZ9ppLLdBnOlcI39ZITFiTTXMTCOnbsy8QUtYSgLif8vlR5xEALIlwf72jlDTMdoBJBt9ASbLG31CEABbooTLuy7bQQqO%2FP5auJcL9HfkSAOkiKeMP6n9L8GOqUBHqY7yYsTBlQ9r27qKEArccE1v%2FN4K3eJy%2FJ1xkZAnChAeLdvR2Qb%2BLKSTD7wajvk%2BVrL65Fcs4D3lTaeUSkypyrggd9Uk%2FVhmkjG9JDvqsaduZ%2FJQOegek04Al1XbIR1T7fJqyAbZtXoGCYk4LfPynPwXWdd%2BURrwkJU9L794l2xcAlNUqwpRUoz6SDFz7SHqwsJ2CmRwcb4iCNTURdwY%2B3b4h89&X-Amz-Signature=466e81a4344d714114fb584f795047716d473152aed7172442890898225cbcc1&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

