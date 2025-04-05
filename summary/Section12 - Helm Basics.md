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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHZGVZV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJGTXwY5ldeQRLQ6O2bnp4Y6iS3VmHdvt97aU7v6OIEAIhAMnBWGhjYP06m2cvOPNeOKuTe3LHWwqWv5ITbKc%2FPjw9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwcINvTjy78LY7j60Qq3APICcumHW%2FcNl5Mb2mEXsIve%2FxweYaxjVKgoYn4AjO07JTzxmKpulMVH2dNwPPyPAngzvrxYJSAAneMCzRwL%2FkcakylqnC8HGMDci2Lvq9NZ0eMBm5FSVEn2Au8BpeQP4ZZJ%2BfWN6iXUFdmX1VqLlnI1f6vKTijhYv%2Boy1ScaASCjS3vJBXB6blVeKbRqnaoI2nLvKeVMs8p%2F58tGuf6Otr0Qgv9%2BNV%2FFpQQg0%2Fth0xDq3Wc%2FeHw%2F6S2P5v6K%2FMqtwh1a5vI9XuYxde91gxsO5GTxpjfuDRwmM3TT8PdNP9erwvGI77kOEz%2BXW4PD1Os%2BuDV1lYoJGwVj7no7Skit%2FMDFdwwdcvFjylNVTRrNHueSr2sKSG82xQyqZibNx%2BupB8awHeXrsnE03YgoSujsCoswKbtwOAnyGZoHFMPD4fGApWU42%2BBdRmV%2BkfUUveIfkfvtpr1VEEPiM3GZhf8Ey0n26v9M4ClgAZY4fU35dfOXogCM675JgGeHqAi%2FHGqcjmmiq1LwU81xiD6RS0GESZupofDsUx%2BE9QK%2BXma6xnKJAMtQYzlMuWoIzl2qSIxAQmJkVciqVPGDy2lvEJhQ4CB2O9ayDYTSPSpwX99v5qiEmcod9ld96zBcNwtTCf5MO%2FBjqkAZqahacNm5%2BxyP4WYWMKacV8%2BEsgdBQMcV8nJSYORNKsgV6qG9OvWQEExl5WRApBsvr6EjJ%2F7wL%2FGW%2B439DDgN2A5cM6g2qgTdZn6RJd5GIaBSRDQ9x%2FJ2xBEXjpuxIPBXRXxpGdYEcDFnXo2FJvn4ZXNcp9muyBHmvNyeUJFjZSjsR3JqHgxyduwdLb499wF4IVQ5dz%2BtCrYycVNZRkXLZkiDqC&X-Amz-Signature=98c04771ed9ddc86360f491ef23d73b55f87c3ddf456ca8e328e7ec41d999a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UIPF4B6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTRmxwnU27%2BHUAiHA5myNE8xjF7XL0OpHE%2F72he1L%2BJAIgTLTMWQ9QxL6AUrJTvO4dyxdsG8CfA%2F8AOsLineUmM9Eq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDM%2Fn%2FKmmLxWm2hrqrSrcA8vGTQZMfr6RLNbVEu2LLHIXnRof9%2BE2RdZWfWpR7C3wI3FWhQoH6ielEsZgKx6cebYGWZB2RdnZw3bKoDMvdiMi02XoGXe22%2FtLLa66vfsXqqQaFiSxpSYUfjMjeDGL0jkJnqteZQBZpm7GB8fDhqVNT%2FCCimUo5zN2bW6DXGqu3OIcpNilCTk2nniY%2FFD25xj4CsZgzGDTsSLBrlVQTGf8ohzKvmFZqotiup8OKqGRuFRIaLdKTbnPXnKkIrQ2Nq%2ByFQSzOZsWmt6Tz4YMDykPW8lKXozq7GkUS847AXk1MtqWfnPobOztRHp63l%2Ffvo7EsDDU149a9CHu20h4MLH4nSUkPkiISRECibv%2BLrXVaaRDDXASo1uuIT0rVi8vYWZg%2B057hSVvagAkhkBkl9Qek7PNvwExOIBZN1SmJ261pXWBQEH1I4QKC%2BC9O%2FP9Mgh2S2otBLBUx5DFAT3Nvxj5VxhDiIG0lbF2jWd5m4TtE9itgNgL5pyWCP3v9XrJA2tiGvEFf5RwPWSnB3tplooFzXhZq132jnKomTTPsa7zbWSQ3LJU4A2BAD0bvxhb2jOdHja6O6GoQDo7qU%2FZUhf6EZjNfo3P%2FxO9tyI%2ByGeshJwKCNHVdjL%2Bi491MPLjw78GOqUBTco73Iaud4MGe9NGFYOZddlfRnHKg2yJbw0DxfJCGVGIMN1hN6H4W3zuvYqOR8BsWCHeiLQBftRZU9fcZkA%2FMN9fkgHqQOoORTTvmrBGIrGPNtPpZX0qkJa4YUQc3Sg9uoqpcsOOm3r%2FGROahXzSb0wCYC1zaSDuYLHNSlEBhUYlafY1%2F68%2FyRxU8ZQsGSBKcxfkMv%2BXvOR3iU%2BnJTBLVbFSY9Pi&X-Amz-Signature=9fc982ad47e5b306bd65e0f042f9d491973ddddc689b478bb6e8fb8b0c87ba07&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEGHHOP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqcFj8l%2FytWcR%2F18AQqRYR4ioC0oziwo6QI%2BLmUSTgFAiEAiMECGTrVfpSPu%2F96sQanHOooU2I2HQr%2B8G8dqhmxSD8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKOhrwDt0Tc1vl0LZyrcA%2B6O8QiNaj%2BM45apOQljThcKkQw0pG233O9hF%2BN1Y3fTdsU0rzQAWrgCCCNS50HRwnhNIH%2BYz%2BTUSs3hPAhUDMuBVeqZlxT%2BEN6ksO21WfACrZo%2BgQNwfZv8WGzVhCGXAj0NNCPyJbG9mrAMRa5hsuK1idzQqo6uM537vLUJuNs4jLXztj2w%2FhAt7o9eNbrfL5Gp%2Bz9xSz1BeJE9jwdK4%2FjfwXOntzrIihhaRfvn8w00QfWReN74GeQ97ruUaC88gEwUCFUKyZGl6iaXGZTWs7ieSihK8wABa08eYqWndsi%2BliLUxVgwIZ79rj0jbaVY2SuU9SoPMHpQwfVxAR%2F0NPT%2BAIqog8lJNxczNGe6UbWQLRHAlbMvg7ITUUNRxR2MePt8itO22Oy4NL1tq01HRoqoETk915hJjzIYu4ZVH7XuAtbnVuf9XelQjb7cnHJ6d3tDGXvHaRSHWpOBUfTsLbMxuzJweW%2Fn%2BKQVKXLwtw8uGMBphn%2BJXhCeOO9S%2F5vq0hvNN1xTs0eQJBh4JbYOB4hRWuDEiVFs3W0nm747ocZoRmHf2y7%2F%2BqmkbHG%2FilBimkaWoDrt%2BTEXx7qTVEXPhGfnwgoafcQ605%2BRazYCNmJ9v6ctX5hBfj%2BnIQOkMLfkw78GOqUBUv%2BPXHEWvJjcZSecwP1%2BdwE%2FUyuSU8T2jX91wIb4veVyGMuRGDadWCJpJEWLFa0%2Fc8COF7Udg6UIKoTA1t7yg4UVV7YOTjhIcuj61i8RvVB1QH%2FQxiaxUXmQaRtNcCe0EmPFzoCbAn%2Bsr7%2Fu9xJj4o4okuquwW4GsuOQHuTFZUD2tbS2zE84BLtA7nwLGxGAxCH6x115fVQVSkFaDjOxAr5UT4JT&X-Amz-Signature=96f3aa7c2854069e821aeab49afe8c8b6cfb185bc4311d03f2e53a2bb3391eb3&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHL2TYWQ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T141001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnYiEuloP3k79BNfbQxoxbYLkHv1xncs1CEHgfcxRJmgIgLyiNrC%2B0%2FUvhs7l64CINxpZd4xOhRrdi6d%2BbKFKDGKAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG4qig0b4%2FCE7adLfircA%2BZGObCpl2EhcLipqSLPs1wAOiLPc3E1Q7VbZRIJ7q3gG6Nqtkgwn5wkd29Xgol3ZOzMxc5%2BzmyV9Tbwnpl0JInV2tGJG1UCikMEBUUdhn4PFZLAfOjAe1tFD9dg2%2BBNmrlnFnjcibf0kPEUYddYmSc3ClOwLC5knzIeYPpa2de7rp2mf435Bajz2W1D8S7p%2BXCLO7ABZncaaXwhujOVeWUPqqhvXQV00ZaqjyQbDInnc3fnsjT0l5Mv6y%2Bs1frtlIlSBjBdNF0GG2yTnZHlhaMeKateWJ4awcfdXQh10X5fzpirZYvmXEMhHav%2FbD9CbVOmAeH06O31DhpS22EVFJ54vugchPwhz87%2BlCPdKCMkafJY%2BUHBtV6txTH6vZW%2BWYlfWrg4nk%2FRoJu4YASADCcbFbI%2B3DP4CDWBk3LTzc0pzq99cb%2FAXGODt8JJtyQk7gcG2OR0IhppwI5QiZZe5ZD57geykZIZIdsh0hOAE7D0y9Kd9s1YqDZOeWJ8fgelUgIrPcvBGuUKJamFEzPGka9Wspk6XVaQNtX4x%2FCWVBnNf1c3x11Nh5n6XtYe%2Bg82QHMTR%2FNib9fEdiwqtjVMvyVaw0szieocwv4Q%2FKJ5pYVnqs%2FcKeSlsVMvW%2FqzMObjw78GOqUBn5DqNO9aGmcEaKsLK5Am4P4zdpzhiK5zzLZh0cOptHv%2BV6sr0KzHfEsama0NEsDKYOgyB9T2Nxro7OeHukImT18PRSjZho9%2BJcy9GEVJMhTq1qcYZbka%2Fc%2FyhGBiJGo6G6MVLOHyAh%2BkgYh0MVn5r%2FEP58SRWEhk%2FlCpE4YcdC1opsPRb2yd0PWBweamu7LO0rK6QRvEFCWSkLftM7d3U7J3s%2Buz&X-Amz-Signature=3fc204f288580ee0cde08779b146c71d387574c87a911e24d7fe9c62adc451c3&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6KBWSY5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T141004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxjtMlg6U0RgZsvsjhKJf7qJjmWQ%2FLEECrUdzmR5xfXAiEAyeCOq0qvV6a%2FAiZpsrnMqDK956qaKn5O%2B7%2BmlknCkYwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMw6M0o1ZeFE8hI3ESrcAzuhT2P5eilPEBK6AdEMK4%2B%2F%2FG%2Fnczuyw9LMcogWbVFt91%2Fy4cmeb8ttCPrID5xRStQkN6ZBW%2B7OHCGBC9O71tdAm6o9mvZadEN7LG8oY6KV80rW0neH7OsU9xF73ftd%2FwXFDcUfxq%2FUpo2iqfmu87QHGFPkdaQBhTQD4GSj53v6RvLvo5JaYLBQe50r2BdJ07Ro94BeuB01hCAeRld5v7bBdFy1ARKRvSL%2FbyvRukC1OEP%2Fe5lSooRvAOfvBujVmeQL0uwjLqM%2BgycN%2FIiiTqeS3KJrT%2FDMvO2e0Fhb8%2BhQd1LqMrHvMoOrP8pRKnOp%2FrqKWae9x0h8uFwGqu9iynXUdkQAyEhd73dsX3I6QuubUep4%2BoAeP59Ngkvo%2Bna6qpVttQSKZyM2XnwXNrDwCdNCXprn6Rc7CfgZyu6J9abSkEUV0lx%2FJjTJ10JYKWrIfhA9BXpG92%2B7lSYT6S3sA9JsBrDnkJhlIJRwFLq%2Feo8FwL6bbDDQ71Miyy1vetI9G9LTmRaC6aL3vT9qq4aNn0UGDQfOXZcoO%2F%2BgUxp1nb7eFq05vsrzJ9wRypDLyaEU1%2F%2FjSMuEXzMlBrsoUl6aniMzZsc5mTSlJSylEew4aiiGSWODzxCEqLPKF9kbMPTkw78GOqUB8PRq9ti6dn3Xh344JDO56Az6INqvIDgjkiLeDoJ3%2BCVN3X4HH7b62jMIjarJXTxdFkmZM%2FM8s4pKJpeqeBFtCcQOYeUIUDJfHOz5DtXuF%2BOZOydmHhoVpsYnxSu5faGbsXpvo6l9MTrSk1KJAJZbU7PvTUjl3RLF%2B2394d%2BWW64W2a3g8DR3xZvXF%2FM%2FnW%2BeCoGslpOFgI1HiSUbhsl1Se29mY6f&X-Amz-Signature=733441b91cc91728f293996f2c1e2ed1752a39d36cca7a66af07b68561a09a10&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F6WHXKW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T141005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDy8PeSIIe9aDt7Vjj13Yha%2FZHJnN5LRPBlj5dlELFtQAiBKStoWgdO7krgUUWYe6Dn%2FbJVN1JDQYrcTLZHWeUVG0ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM9PlveQmJ2AibN%2BchKtwD9wG2aD%2Fw1BWFabAtE2x66col2R%2BizbB%2Bmnu4bH1CcE0whcZZJtb%2F9iWqC7tuY95TZsCd9YT7lx%2BDc1cixOFJLSiUd4aNaHDoJ8z0MBiAWRgVvbJXdCIF%2FfupUubWB37MSagSlyktf%2Fu2%2BPsrX5xJ3oMAfYOEZ1pdGkn%2FhAeNKcptRX73sIOzmtQQERyb7czh6dAxVlhLkLoyIFsJxygyZ5OgMQNPK3s09uMiiwXLJvKUBzFosflnzG6XuiUkxZlPzmspOAjtRbBGj6lR5dHffpGJQkoL895jGE%2FMWW55qACReUdl1ODOjEC%2FkD6i%2FGYCNW9Nuafl0AlQA2p%2Fp%2FOb40IUSVJuDocsseV3DA5ceoba8o1DXcz3HoPdOyesRoWC96%2BGgSgi84IWshQ9OQTm2FWEQ6nchap4tcmXQvP06%2FTvrCQt3vgI82gzo3JdADLb%2Bt4iTQDO6HY2X0wXKvmBFOKesF3VXahzj7aWRB8v8EHHsib6OJU8Yl9Fa%2FlPqahrlLpUFlqvidFmwApGx6GBr2F6NlMdctCNo15tPHNqFd876dQt4btFDoqXHiXpUqRzjTBUj20hWs%2B5OlFR%2FkdnFT7V42pUYNj6XcEB1eZWZeTs5QPjgFvCFQHioNIw0eTDvwY6pgGULBVDkUfQFHX%2B7VgdzA3WbyvzbimfBMyvboxKAW4mXNqBDKlMJhefEL%2FXpfrnDtIJvv7961fA1OvKNHN3DMEbP084VeAPQD5BirgXn2XT53f8QRN%2BU4MR9drgxY%2B80Ba7Euqy4Uw8iG38nRn25OEF%2Bmja%2FFXgi8o%2FMHt%2B8FMhvYO0J%2FyKyj0GnuiL8POs%2FqmceZRjooa1XoNiy8tdObE2gB4oiw7R&X-Amz-Signature=0a5df4660e6d624aa2ad228b98225500167896e95c3755ec423e68fcc391b71e&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CGUJQNX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T141007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk0HNbY7Yo7qA7Dp52WMon3dwZOGTJ0YchFA9v6dq1kAIgNaw%2BoDgQvrivlTpAouZd55nC%2FBC2BQQQGnyyOmQjwQ8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLdFSUaAQwXKBUAM8ircA7j95%2Frw%2FlR%2BZDzm8C90XqD%2F6ClOReQHLTS3b1exdEXVzE%2F8pz5cvU2KzLvkb4%2FiK7aKRy8WWYSUGL7lKNMtgVqB52nhjM1PUFDJWnlOpDo7Q6fybb8bGLBe4EVfgrjdclnRr%2BeuRWxYEbPQ%2F96qS%2BXj4WEVSnIvUFaPmD0FJgp2KkSg8saImws3jcNa%2BvVfPdGYwlEwR2leVYMAj6KrKkzppvSB72Hwm%2BNz7nrup5XUhMo1JqYj6FCuF6O6YmyneY8Ke%2FDodDz7WENm4hPQ4UOS8vARkV65kIuVBOlkAV9t8pa3uo3rB526EsBt6OEyqTRfcfxfMFYIKDcFPwDHwnUFsi3vhS%2BqhFTdHbngYbRPbtsUXMHL6Aek5KN20u3qFUkarI10hDyF2Ixris1LOmJ%2BesPA0sVjQG5uUxs%2BHDkb%2BJyjhIL7xzCohLYpESbBcJFNGkAX3miyWzmLkuydoGPaPc%2B7SOEBJJE%2FJ0h6oH0fV5Dih8YXrNbq7BCkAb5a09Qt9%2FNhuKrsCxtSvL7sHR2JeXztfi1RsAzAVp3pNs83B8sgyqcYOqMoeCd7RpCdveLByQNIpTt7JpqSnKfW6VS3pOWTM8B5cfPbmW1AqRpAlZvgWQMD9UWUazFHMOLjw78GOqUB0f4V43MQQZuT%2F4YImDx%2BQJi%2FbLbeiZ%2BNCG4PucuDycH61YcWBClG56wVIoDKiUPb1%2FA6vdgBdBu0FrXCvzBYaYur92Y7zs7lHoVLRuqHEZaj7nbvhcLCPAAE%2FwCmBKzA%2BO3wcPMp7MfMS6rwZARx3iUlUt4LeoCBe9U%2BCE%2FOsOsMu9ubCQhufmK507EvLuZCcfMyE3Ac9%2BWgtPGWZutcRzfPnmTl&X-Amz-Signature=b59b2dda4dd1604c8317b71074b3743a375e73611ae1111bf423bd80cb60cd3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW5A6NGT%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T141008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElIxV8yKi%2Flz6jToZteYNhncO5lhdyxb4AyVfuUqo7sAiEAzhE%2Bv6vKqjM9gL6OjVi8EIpK5bMUa55Hzj0zak4iMl4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD14pNZh1z6JWuyhoCrcA90shR%2FGrElQXjxEJP%2B7JU8zdnImD5qPrariwyp3m8nYAz3O%2B%2BZ7TgEr%2BBWWMxPEyO6qK6sTcykz%2FuSSRMefLKiI%2B9fjnGu2mpKM63CS%2FoGfLTZMEFbjBYPHS1Ccm6F4xBkayi9fIVu8%2BZsW%2BUjPbi6LGyoa1GDpfzmj%2B%2FEK%2FJrCdZWDvKDJKoj1d8XOGtWuPamFulF3GcIJnFGDGpn81EhJWSX5I%2BImnKWAPdu95By0gEYaMTO7h796eDa8l0FjzlWw4lfkIp77E0E1iNBhUgFUbM1IEz%2BbktnB224FJXNIIIkXnNpmJLgIioIFQhwcK%2FJMubMlx2plVP6bz7CYPoRcqR9MAPhdfTU1EbHMTNPWuJV2R9uGcEoyL6BjizehuKcXWOp%2FBYnCzcDOy2N1S5twP6uYwJ436XcqK6iQyDojm9rtIcmIRmQXHSQNmIkfJFVMMRX31S1agcTZcUQa4yMmyCHK%2FJiPNI7Hx5i9tCYq1k0774ybSCYx1GmTh1gTEvLL9UwJqG%2BAzVUYD33hocgb%2BTmRbwBjS93VJhmT3y7Ys889Qe1Wv%2FiQ3Qkae6gyMJoIy9%2FZ2m%2FBcXW3uKS%2Ffj4wyoMso9fqDUOR6ieBSUcP7ewCvlR1iBv6G2M%2BMP6%2FxL8GOqUBLYaJ%2BDF9XpLen1iQYwyEfUoMF0DA1IKe0b42EOh51AJOxIimIsQGR0G4booOKw5vs8tI%2Fc780knpuzL7DnSRwH3ViTAmEKy%2FF72yIsKfuE4LZjesiRXJTnO2JtqxmJbW%2FAVtmZXTnQ3BCHACgOJaD8zIWDnWl4eoPXSZ%2BPfbX947IBVHscXZ3%2F2hKMcYxuOcNhhgsoAyEyZ1gdhlEeck2p1W2roz&X-Amz-Signature=ea82e47800d6062f1b0386191728be4a58d9c2f6dd8730506e29a7b64b0dcaaa&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPK4VAI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDz6fH6oUy5SDkHs7n9EuYZMqNcuFzfZZbGOkPZ4v0jtAiBlfRhmpn4oLpY16%2Fm32B8VOBHQfpSqu8IzVWtuqxLqCSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2BPcJn%2FekMCfeh1F3KtwDUF6VlOOFINmq%2FGFVd3Pp%2FEDqLsyb5VCcwix9Dwdysc3NHWFBRizEyEi3UQ6R87d6CpjkQDtYD6fTd%2BTMJrw6e2OQgX5VaGMAG3JOwaJoxNpQ0nppD%2B1lqsnHNWFWSb8J9m%2FtMTISRAjJzCQsJpQASfMbXifzIk7mweco5jSAgF%2BftungtCY%2FcqkmpWwt8uPl7h%2FS6%2F0Dst3KJE%2B%2Bil%2BoKXR1alZzAvffaBao%2FeTVDA0ZYeMjkf8y%2Frp1iuJXkhtR8T65WUgZiVPzOuhv98zmxTytV5lRfs%2FLx5%2BN3ydQrC1fnmz4nzrsVnnx6hfYGrR3mvJLoZh3SwuOZxbONlNAOKbkAYLcHtDZi9mOiaDdGnmn0uXLwLe4HYVL9NS9A6REtoyWbd2%2F54HkD5kIvIJ6O5pQ1PuU0QsaWJmDu%2FqP2M%2FhbEIy7Rbx12jIQPnDugRRXbGSBtjTi0PNvRQV6toEo25uF4EAnSVyY3QxPBAywIrO5fqxaqEqFk4GM0siPJxe6rrDZfGapSyX9nPKoMujpusD7tAZvewggNSN8OzLAjajOhap9%2FCpZAA8HqO2ljwG7DtD7r9WwWkw4JH9TtKwLCLrDtgS%2BQ1dxFvyQux7AR94DPRYUzbSOh4Z%2FfAw9OTDvwY6pgElo5nRLZglxoiJFoN7KynmWeHMnRMn6AujXRxMX4EX3VgbYWozDJvs4p1F8IutdiB%2FkDJAS0Eu59CUTwIrVzBQxCEVNa8O1DpOJjvom6Kh7I3NeMZJxZTGpa4zY%2BGQT4AvBln9ppSlpoLKIAtl6IgRS4lVDZlIxx2I%2FtDVeYYUY50B7QAtx6KMbny1l%2BWvmEJd4254%2B29x4gwqYL95lTM%2FiWJ5TUgA&X-Amz-Signature=7cc0345f69f88cbba8c4d2bf08a1561dc7e2683062dd413aba9170e3c6bba034&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

