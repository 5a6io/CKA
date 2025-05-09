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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IAOPH77%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T141235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FVPEs7yo9HR6u1XeGWrq%2B9SX3HefhArU9XTSM3fOAWAiBG0ePLwxLA21LRcoN%2B0Yj2xr45vktxlvmLME%2BEamroziqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG58BLp0xHjM1GL55KtwDfPZfOzYHBF5TsYTeJhEyWcabDrkJPQk8FCCR20jMNEMRzJtrqecdgV5KQAuYMkcU5dUF4iJJVZPgV4LTf%2B59dyfmR8%2B9j1dd7ttL47tYAqqOeDV709F9dPlccV4n5kXGwH24ucSxLdg1u8XwR%2BXdHb%2Bbr%2F%2F53Qbl4IrW3RK1rntE5E3Lp15SCP%2Fpx12gff2p5A2l5pE2hxDoZuI4YzjBOGQceImm8hR8nFvzL1RWBea9ksYA4OeRsFMM2jS6eV5rS%2BnQ36qsKycfzqb5DoW4iqkSwtM4ZiB9vyobXs9z1S9%2FnUl%2FWsgJHq0ezlr1cUPCOFu4Yn9b%2FIVlPF%2Bl7%2BWRZoznnP2XVE%2Bk7Y12YJaPXidsj7xreJEJ1ZW8J%2Bn51SpJTX1ObcroGFXPhVxKAKYqqp0KL%2FA9%2BelTDb23O0lZMDYXBiii8jlG%2FGHRAxng5CBAfiKBbicfaA6q8aMr06%2Bs6EWceF4vY%2Bwe5N0HT3WgMQ74wiwGv0Da4aFwzIUWM32pz8R4Qza7Qc7HO7gqk%2BTq32T5QVAyCDB4ENQLheI%2FmsaXp7Otsy2Kne%2FXGHUNOYGbnPI58Fvs18wG4NXER2vghRDCBZ%2FePcwOJGYY8GicCEheavrJws%2FN5StU6Zow04j4wAY6pgHKxAk897Fh4eSfiDSp3NlNCGWPt66UQntBqfi%2BSMJWy5FLl747tOpUDlF%2FhnHyAcBjjr5RdPufHfPoflRCxNjA7eLQqzeqk0%2BymWgucOC1cWfwgEm%2FhOq%2FWT4Ebzulv70NoeD2o4MFtzElaNrBcyIRRSU%2FdON9yVKU7v%2BJdwpbTz74rVEoC3ww3ErVccQ6zMvp6By8%2Fw4D5EwkOsOqjmAClp%2BUEYVn&X-Amz-Signature=6eaa397f5a435614e1bcbf00863d157794484962d27c311efc1fea88f904f2c1&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWJH4AX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T141235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZVIteP3yR0rl3H%2B0FaF02HE%2B16awgDevRD3lpZdgg8AIhAM95F%2Bl%2FY7KZLVBD0Vh19AocBWohn8sVc00Do95i%2FatAKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzswLTrLZ2n5eXa0pUq3AOkl5rdtkfhTY59PEuOPT2%2FJUxzyCfVmxrQAsehoSfFIr%2Brc8Ltb4UCY4oRKicwuqz8OyLDl3yAVtoKbDGnieM5Dxmxge1f1F4jYOgV5jnqUgU6qDVTjY8GW8L9JkRaLK7%2BHYYwzegyZr59LFcFlxWXP9CE4XcUGMxWy4rhP%2FU4es7NTST5LHY8ho%2FP32Qy8Oy0VzHH9oRDt9bILs10bNuvn8SIrZdqApDyzzu3%2FfljDtvJ%2BS%2Fu1OF%2F2qgXqGW7YwcuLBu8fapP8rcR3JrDxM0mVQUuxIG4z8SoB%2F57e3OBgz8J0HqHpshxRKhHzQt1%2B7ZVa8SWUTr0sdws0RfCW39L4oPpPbeReFJNcxGIIkqycVzyfGE8ND1SQ0TI4iMpgcEwmRAaveCwmP%2FBpNuFo3GxT5KV%2F5RnQ14FI6SMUgF5qQYEYyJ4XTY6OrcHwp8POdkpMMr27WiO9hMaoT1L2mzOagAVmOq67LHZWSPoH84bBBunnKCitPiA7lq2Hp3Ma5SKjh4%2Fhx8OQjmtXoZbh%2B4ADkexL%2FUCN2bCEloqVdZmnw5qD3b2A9i9HXhaYQqgAwgKqh2QzIuSkwacqZ3djsn%2FKUTqw2ZAdcQkBnDGhgTfkKsWTVGME1VJyWu0OjDEh%2FjABjqkAV%2BcOlTgFtckomsBuvrK73hug3pgYfpBeGyHXg4%2FwsiCR1D6xyNC754ar%2FfhmyvCjNjFq2mOq%2FNSUircAdCydKpkyjHEG6YzU3DoCUMzF2CAcTlPJYs%2FO6Jxgo0YurIiDC1sgq0BjAGgB11Ly0jL2ifQ1ypXri6m8zSdFOtJKVvkUUbAIjKhGmWFiWVviHMcBMPH3MToUsKkv%2FN6TWUhkzRTebMK&X-Amz-Signature=685acefb6dab5cf56af98525a2976e2d3f059665f46a41ebb684ccca385bf9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWI3DQFR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T141236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlvEh5ER1%2F3hJK6K5Lm97k96hWfU0NUgef3a33lWmjdAiBwvKVqJsKCvNxsnzvOpEOiXKwmEiOMjHT5hIj1BXdSuSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkfrJRamTl8M%2BOeeHKtwDvJh39JJvWJlG15x5lTx0DqVGWm%2F09XoqfzbIg6dQYDJQ9SFjVSoQ%2FZd1SuLL9RG0d%2Bkh9Rx78sIaUyX1asZaj0xr6KWrLYO%2FhIjYx8nuog1rJFM%2FQBirsb5SGE0RgnLWW%2BvcwKt5%2FDXE5%2FMuIqUMInbU66UV8m4UEjVOJq7mkkbHKi%2BqV5KOY4OwJGk2w2ziKW44ctrqLeXjTQZ%2Bt7XL6Alvorg0%2BRNqAI%2FKpFWy01%2FK1G0bQEW95fy1iTYmlqQvwd3C1xhFzaBIyJKiuAAUC%2FAkKBh3KaTwWu0eYpBLFU6%2Fxasi19u9yvDUB2EK35LZZpuA%2FsdT6V9Py%2Fc%2FxrfEB1bl%2FPiyXH4X0BPqg3Qrn3NcdYDT2hAStpPN11b7ZoCfdvZHlJWXYt2Mm%2FHsyg5uIKaNEWUHG7B6spXgQjfXmBCMsYGNKRaqeOR1R7t%2BceWjOy5tS%2BPJCHznh52a%2Fh3PAHPS5RbGcNbF3zzHV1Cjv6eAfBxfL2MTQ83vhyuoNHW3X9XVx4dn16Yoe9WIjaRFkY%2B0D23gZk8K7q8GfYzzT4774O1FQVRoc5A9wzkC%2F0%2BzV9MHdXv%2BfICfmB1JQKWru1j4OGd3jpR14rDwDgYevbf%2BRZtKJd4b3%2F34dUowyYf4wAY6pgFcPW5D3%2BVeYmpA8gzseGW2eE4n83lfjYeVE0dsSrn%2FRaHmdIfrKAmxx6CyKytN77k76KTcZiv%2F%2BSn%2Bvp9ERdd4W8uju9TIrC3L0fKif63mVJ9ZgIvb2idiHLQDFWkHDE95dVcNsPcJW3C3AeunCLcYASbJHVBgPL%2BnL2pt1A46EKQZwc9sB049fFb90ls1zqyw7IdYdBXorEYN0yAyUJI02oljP4tB&X-Amz-Signature=3e473930cc6916202db3e49053498aa661118f798bec76a7e11e00335c7fd244&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AA77GUQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T141238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB69vuLKB3Qhw2knCKI7KWov8qqG9eE1%2FtgXmtuSZ7EsAiBJFLpskTtJmVV1xO8upg7S4r7LuPcpnx5P6wYRtOuy1SqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmrQoDFWw1t4qOCSdKtwDSrVYZj%2FpO%2BqMcQgesTkzlzdoam30C4l4w0fUYgRGeT9lCFhaE1r16k5OrJUAQqDUowHk6FAhYsav1zX%2BFSjGUMpPt9E21mzTjv077%2FHAt9rsTRzObTLB0qBgxdHWYavsPPXPLJ7Spkmh3PlHtxVTDK8bK5DlO6uMZG%2FkNNkTuLgHtzsSB737AKDB3Ju2lL8Q%2Fw9cXoIyxz2cpB0IOt0N8YDsswSDQFL%2FH1jh949o2qSOiFJ00wt615bWE7X7uXOwof3QZw6WbUf%2FrMnL3G6Laq42O%2Bw4n%2FvmA0ILQgL%2BwZbAlEV%2BdN970EwqyaGhViEQcz7Tl36uMu72Bn7b%2B8RDqo1pFhBXgmKRLBKb%2FeAejjwiFxxRSaO6qnBXqKKvuiIVUaSM%2Fhnml0ZxQHUjZru%2BrTP72HKFqKM2bTcJUhrA7l5COTc8GjBWjdopRuwn8%2BbmQ7qfgxiyDfUrymWeRPKNKAstMTjWc0ZoY0bT4nU%2FmwMqbTeLwaT0yFBlKa%2F5oDGgdVPr72yXMMrgEFBsuWCnoJHzh9yFeNk6h51BgAfil2n0Au2G2p9ZNRBX0KzfUSnSRAuzQTAUG0xe1sYb50dBCzzSFV5SEe7OAY6IdorkXrYiIfEu8dIxgP5c%2Bsswq4f4wAY6pgEh4pvuUOccdlqC5pBu6kEk%2FNXd3zv1txtMAk4aPe%2FOnprl9bAJfgycV4VovEiguUsYqdvH5NnijjL%2BNt79A8LL5q%2FeYcYE7e3A8Zu%2FQ%2BvpRZKcE7RLMhrZ1HuAkRbpuQAOgT6GJgJuDQqp9XvAuKIFYpGdndvaj14fncJmxPd7SL1HGGFvK%2FI2oRmvdhQgj3LcBHjwYNEQrE4DPM0K0jrXAYyIR02I&X-Amz-Signature=de93b42cf2d57d3c3f0c8376099003949e50c24369f56a64db4911a16b920de0&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT47L7NY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T141239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeXiEp5N07%2F8joEVljqPLaQo%2BbhfQCaSPIX6%2BZ%2FmW5wAiEA60xbhI2%2Fk2UryJP%2FHnj2ISNtz1fGbuOlJ33ojtYk%2BWAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIF3YkP3QbEvsUu3yrcAwquZA8g7iDDwch2%2B2RYOz6lxQ0wp7LwTAfxlnHmZkE9RVGzh3Bxpp5nvIvkrJvF2EXF%2F8wOkp4EKHJ1TaDh8j%2BZ8CxD9IEOV9%2Bf0yzabKJ%2BfQsys4R4yKbxozLdQVVn2QSy%2BgN%2BjNav2U4DL0YWgY4z%2BP%2FIg6JTob5mFkZlY4hSSkHk3Kazy33qK7uavKsqlQRL5bOzWWM8GyzzOEuWUjVH%2FuWM6axCjeEwoxHw%2F8f1cvBw83KVEMRPKEKt8tzpA11uRdk3OBF0VAAj6%2FAGPJg9RUFc2YiQNlsmb6uqNNLpaAS%2B97ID4U1a8ZPdWpQTtjpyzMOQ3w45sncYWGyWoajaEDfBIe6Ve5j9VJMmF8oK%2F3C%2BVBEv1e1gXuwN6Z8sik57Sm0XIPbAmixM2%2Fhnm%2Fmj0vQ%2BE%2BmhELsQpOF4IUa9SYQXIhzxtCJKiic2v23nD41ek8xPNXj9i75b1f5Y524ctwq4OTVqNT4gGbWbe2woF18c6XRG%2B2JZsoFTKEdDvYYKsFiAveMEgBldsCtqdPQzqQugn0VOr%2Fkn7%2Bz9KQzltUiUCUP%2FTB3bKiMqRW%2F8Qny3qAnDvPihKTVZyerpoeFC4BQkbAuKiy0wxDbZzLJgx606tjlUyeQ60fhPMK2I%2BMAGOqUB1bxqwC0xi%2FoRqNodn6APSG56npMf496OswBMgBIvnlUc48txNJHD8gNuaXXSPQ%2FeL8Izjxixezmx9Vl6dzCWNnps9a1uLAZhzA85IDGoEoFOVhMsZe25ItoAaV2C61IXGblobGA9AZlLvf4zT%2Fbj2%2FXrEhNhxM%2B1zaS8jotbL88pioApX9inNy9%2BrOFj2bQt8Om7vGkvBbsMgRF8wpy2sELi9rNA&X-Amz-Signature=af57dfd7e481afb6fe66c5745ad109824905cb9eeed9cd2e709ff628e6cc1869&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7XUDEOD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T141240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPVLCGxxbklDDifrkokqwcjGrD1OiAdn0NMIj3rtkrGwIhAMK5fb2iXyabxzgR9gb3DLzBs7FgDVWy%2FKEfoWh9B8GVKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaMzPFy39mBu0pyOIq3ANcLxxyOVUglFiStotI6qbVzLCpFx4el8hohglWdv0VsMfoLvv0EoOCVnRpl%2FfP7eACUK%2Fn6vNZZx0DPI%2B840vvzUB31o2zXFppADrneD5nd9apq8cBDcuSD48U4GZVfRMMZZ9W6fPrR5RDHzLYq9cWnAAnhZltqkHhFdEl95WBAJ11JCUmXh7SvmafmTMQvnoSWmw5L95ouKvLVvSbAOCm6VwQvfe3koyMNrtEw4JRgCqZnP0hWQfbPnmZ3Wlw9aXC3Cw9LkIxiZft8XuLREYxrEFnL%2F%2Bd%2BGWyHzgNiaLVrGxrYhFPrllE5eQAMM3byIYB%2BERPJgn3NtVpodBTkqIls2Fc3tjFEwhzTmMjt5K1aEHzdmwvuEFD5xyAANsw3qTuPdSnCw96YIuT4TOocFoiiEb2huKltATjTDh6QEKzfkhy4%2Bg8H43mNZF1DToZna83Sgtt6gMVEwQEvUT4xupg%2FWZtMGcG61uqQSWLY0G3EFK3feH25ezqEkbqyL2wCyeM1ZPdsoN%2BD0YP1leKpWP9KfIN9JIKBTRa%2F%2BC6N58Hd2CZ7n1AE9H4M7zSM4v9lFFExvT4FkG2cQcQ%2FayV707r7ULYeW4zfjUapDjzUntQ3A%2F%2FLKBBfJWkEN9UBDDOh%2FjABjqkAYypTJVSZaGYjiTsGz3p6GCxet9dTfnMIvjTUnxA29SL1yNQiDeLXFr1gX%2FagdHbZfFGenufoZej2Gz738upvk3tSCiPIiNgcAYMp7i37zNWEyYyGp5toNM%2B8XiyMCzwb%2F7rCoN3jz8dzS9I9nfM0Jm%2BZvw%2FBxTp3CpG%2BiPmsfhgOcoYna6hob8yO7z0xh4s%2BsxCawxGq1QcFE%2BA3hhHbM1%2BHXKH&X-Amz-Signature=3cde945df2528f04ae36f70796f638b54dac93b3b28526f54073ab3d4fc33985&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKGHOAQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJkqNEypWLamyh4zjxgY8nnsz3wbzBdOrw28swpPpElgIhAKw%2FWM76bsw1BMZT2viZRMC4%2BbZ6zgG5CLWOjSkKScqsKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyxt9d5vQyVBnbT2Uq3AO2CW%2Bn495oU9WtlZdvMQxv0LdG%2FEoe%2BUGOpWiejMWfmNhuLmD9Eh5plQ1r%2BnBHRY2l6JxvMepmhhEWJUvC0gUOOuigHOZ0LxcF9sFVvQZHXg4MQPHJXGHCBnQnWDw30wCMJsGHJqad0B%2BdOTWY8mwzlzx4kanvsI4KhJ5PtbtZQG2m3sUMzBbVnaT8yrjommEuWuh%2Fmm4iGcA%2BI7GDWQDTLgttpQHcW4PNkGgeHOAN6q68J16qxanaIjHnnX%2FFH9hmXnG2sNrePWrVvDfNbSgVOiFwq2nMACN1Xf6JgYMenJ8x9typfiIXRk%2BfiI6IuKbVWxHMwwrVkcTRQIPYTdk%2B6lK26ZVOM0meuxC9kxKJvdK2oWYkaMUehXJ3%2BmhSNHFJxEQrlmLqsZ61GQOcKcY0uHrw3SAHs0PiyQ9sdkYUSDDWnFfFPLSSReuLq3voLheEgg95HLGdw%2FagAhSC42N2iRU1PAEYyhKc149Cmqgn7Wzf%2BUCpXEx6dK5PUkSiiHTE2iOhgDQxC8FWIBVRA%2F%2Fu79cZqbQwhmzV0x15Cb%2FXsy5RBsues02b0w9cMPtIZNCWMgm%2FCUSUioi9ts%2Bx6WWFQPfi5mnvSleNQ%2F6mFHR%2BUZHGidpVgTfywg032TCFiPjABjqkAVRcoNTpH2SlZMNOEhUSyOU7XOt8ZLemKPdjkOaE1i745GanAOvRensLN%2BBFK%2FYz8S1ThLNnTNJlEw9HRupNWmROAsaqeOByO3TAcAzt2m8iGm4riBppZtjjqUrvXp%2B96qEdBbNkDTh%2Fe6D%2BpTtnPbbnf%2FteV3o3mXJs9LESU%2FlmIWDzJkvG2yQPeIaH1C4YzOTVHK2WfQcHmzKlmyyaQHy0FAPX&X-Amz-Signature=120150554d1829667048e9a7114e061278f2364ddd3fadcae1f96fc79f3d0d30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFTBYEA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHM7mswqYQ67QRFiau3nMg%2BM6umpe0tj5GieLFaWEmaAiBVFRTk2c7h%2FI0d82UvSWnG2DTnFCa1H%2BMm5JvBlfAyvyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqrcbbik0cMXCYSaBKtwDOm65Al%2B%2FOZtm9KSmYO18N%2Bpx4W04lY8Y8QA17NAFOOzbdDKYM%2BEcXzCTosMCO4TZa%2Bd%2BsQFCNJRCZcgRWWHUbbfNs6uzWR2kHR0IN1B0lN%2B5VkK4XzwxHXh5I9etB9wRH%2BlzTrlUgeaFjTjRro2qEmuq37auEmSuN%2BmzhIc1pc1QlAqE2fXUb8zds%2BF4V7Xw0n4zVuMCK9wbbpMUdVHxLow%2B2xkaJvnRkzxIKpiaHqpMPb3egGA7EkQJ%2B7a4CKavO7FOFCftFmggAMIxIdH8NdHmcP9MkKAva9Vjrjfd8NUOi6J%2BItPf1kJ71PpQb7RfBqI6qmqydVQyekCdHVT1bwWCRBdSCy1ik9cIzxXO97uEfYA%2F1OMp2TYTtXAzezc3w879Gv00mo27VdhVCzDDNhCwOgjwIhm1PCOGWnchfcaLNcSI4UZEE8FzOmPHc5KJqQhAUOmXyYZCloE8QSTDK9aqGgN1AJpDqAHjejZaKM9YhnBzfZUnvnj5i4IzKd24tg7cLCaEEBtNG9oRZFtJLJX7UhVRiP0jPQcx3u5G%2F5xPdOnrYqkwjjJI%2BYVz7MGjKXIkEdHZ%2Fnw0vL%2FTAmZFKDpLxbuvKzP%2FzcdFT2FmDsyOD9MtGjBYUD3V8YYwpYf4wAY6pgGmcRYXCgKeOLkPBG1w8lAXPE9h%2FC4WSCDKal20mSHPDLTia0L28kPNb4xoPxhg4WgyNjk%2FfGyg1O8vt3ZwLSa4YiF5KlmKhsTukeCmDDs0z8WREdVmb7S3AqtaMcPnbfGEjHEYxDWOl3S7H5PQh%2BRRczi2%2F2Xsgo7t2d9TTBQbUNF9zQSMJHXetD88YJ9Q2gYExEMwNtmSKzW%2Be0xUy3WbA88cgCFE&X-Amz-Signature=76a2c5bd37ea6966c74613d99acd0e39d61461ffb2488f4b058657d6f9adc91f&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F767OC2%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T141249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxI6fOFVWimVVVXWuh45c8Rs%2B53IXTum1CY9So5smzmQIgQv2xvSPHCYZWTHLj1MrJw20ansvA3%2FY5Ny3B%2BagpRwAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChXMDLaO3sWw%2FXLWircA0hP7FhSRyQZhwBMf8VuuoNaSn%2FvsF98jad0HGWYAJ7AZ9k25OZfY2P2cJnMzMCTzrwUkbvJqqQO9cVHGEIeQDgjpGr6XWc3WJZnk2VO9eWICsDnft2SasuM48DUvmzUyhTiopyfNEXyqitznExPwt7UKvLtVssiVJXtP8m78F%2Boq5pw%2BT7I8q8U0tdwf2pA7R83ilURXBSHvSb4l70A0KxCnTWb%2FaoD28eG5ZIfV4Vj1GggH9QI5VHURC1aAyQCKEfty7ALogI4UAwddfy6Yqu4OK9oGaT6DsHhBtvFpB9hTsIG8gaQz7w6CAuIqMAAHDLve0o7Hbq1qH0Dhx9Z8%2FZIGhzIujElpU4NcGGNhvTEwXdFrBnJwH3Bo7nyiSuzwbXHnKEqrJIpbUxsVRtd3n1REN6BpObIMIlgfTzTOnr%2FzXmsQ9B6iL471tlBO%2FPLcv0Cr9iWBhcOMXd4w9ICOoIPZUXz0e%2BDpV7yJu55xhbzwZFtrWuwr0ZT5BK5BUhO%2FswLm164%2FZFg38%2FxHXw12fGNMhjCnGb8i6sZ848q8jW6RZmQlmDLv4m8Qs74HllSmfwEW2ikXOr0lQd6kGyJnWNaTZsqF07fx1oq430w90QDeLrSX6Y4dTWq1KmpMLCI%2BMAGOqUBVlOugUQwS6S1hV%2B3%2FPyRvW49TbXFsPckRjNwPAyMdGE24c0EUglm2hkZE7ataYoF%2ByLKMK1OlljJT%2BP07FlpXMG2mky%2FZufkxh7U00KbChkMMuCvioChdFh1Nn8snBsuhrK5OSoXKuP0BXTDe0XP21sI%2FJXqZn3vP9rMg9dYMReU1IvTgwda9YwELTy%2FlW3UihgkBenuyXMbNSagr8FnD8KB%2FFcf&X-Amz-Signature=82b484a4fc872e5dec3a1f3afd2164db76e07c353be55d70aaab854c792b6ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

