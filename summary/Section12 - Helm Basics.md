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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LX5OSTK%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T141125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDeVV3E3EfV%2FiVxXCjMU6rw2f%2FDgtNPFwRSfHNEoJ49bAiEA8Lhs5N07zqsvVsEY8Rf2MG2%2BMnGINaIS5U%2BGPmrGhUQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOY%2FFQ80jrv63FebyrcA9OukHuVjNRd%2BRha6d9TZqq9km5l%2F4dbRwWKT3aqpbnjZk1qrA6jZ0AFkbpiyOKeMGxs9p9AOMCizBooAWeJO8rKOIWBYUQ0jf2JIZhqsD1gEsQBrWObgUreBS0HdBbOPG6yNN0tZyoFUokBk%2FXOdhAzCV1ZZ4YQDwG4A40OjKCaiImPmoS%2BnVsM62MRqj3%2BIZMmhmnrQgWz%2BLzsiiv6YUdh7nqclgJD8eXbNGtUGVQCFSv1apITG%2Bw2%2BMWQSLBhXZ%2FbkhXM%2FaYXddMGLSTx49jWo10JzisLyi6cT2hHAHfw493Q75gHU6OzwgML9HHymqXVp9DODR3ERvxKzAsDFTWeCwBuCIKAFbOoOlH321d39XtgiLpqvq7%2BgxrX6bPYfH%2Fy7yBiPoMmAhYZaBAvrTaCSCzzRpivxnMC2kUKSSmuxde2%2BYylgUSUYVleUnMKlSQ%2F2RzfzXocZXmVKeSLwy5peOgcg3Q2ij9%2FJNqvUEtBQnz3mqkuU4dDTL17AWu7vui%2BG9%2FeZcEHr8s%2FsPEUyPmqqLHHZlTwoykiAINGf9kNzTy6tgMwghgXHkfCqU1bGrfJiEGWPKQSJKdirENNYskZOqESTOgCHR7Iv8ChhIZDwbnFi81fKUOKWukaMJj7tL8GOqUB8VwWQbgBWOzf5rVzO9qZc5ameBWatXUOKJ9zk4MPvR%2FPRX97AZOmuXGot2ObS0vZufR0wMoKmols%2FOUpbhnoKqADjcOGD06%2B2N%2FZOsWkk6PlvWWZPWGEiZlMVz41b2XgT3WlYF2e35NfOX0G6sC4win2Jh5fYsXqpTZQge%2BJWPlCAIoLhQ30cWY6URYOj%2F9GwB0khUkwu8fVzXKzCmAD0rM8eeIe&X-Amz-Signature=dd6aa2583819de9cc43451ef91b74b32c9ee342a252e988c450582385b427dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QYS7WSX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T141125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEbxx21YXSAd0v0KyKHJ5f7Slcyiyt9ci%2BGK56qILlHeAiA2FAgKRskRrSs49w9JZUjdAGgpaB3JAbiT%2FX3GDlkEqiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWlwQcwwCzt0XNf5KtwDKIhiGxgT%2Ft7x98PrlRJCN0MrqSqucpyLrhxZ9ghN%2BVZmLRCw%2FEgA8l1VYAgniFe%2B3POoUiNBz6lGiXWLbWNOjloLmDwQs0XGl%2FvhqN%2B16IyVdrg2sI2vWNErvMtxSqQrYdCDO%2BLD7hflGgaAFiJUHvgCcBtyXS%2BMo2LbTBBGNG70EBPKuGRd5uvTZkPSXnOkxJHZJGUxApHxz7Pd3LI8jQr3sa%2FNiySPPS3H31yI1NWn%2FzHIZHjmYjL%2FChakn8RHWTcmiPBOegl1pdDQDmeaWYdgGihLObQVoBbYEiL9%2FX5kEYRgX60rT%2FMdRH18%2FtKNncY3f6OpTsTnFAX39IHASOi9wMVwx6DM9HdIkxxiUug8AkVNvcxboImvo15m2jqGURRGDFKgbVkZnuIF7iOmbJ2L3bAFOc9FRkV7jpFIhuicmxVQ3WEhUspG%2F%2FyAxYxgVURGxirzhfOTjHCzHF9YV0H5U1s%2F2G63%2BSd4%2B0Y3Xc92mewFWGDAdZoOsi%2B%2BfY6mlVmNaiPtCa1sJgX5UKRBm6cFCjeAhyMjEtAj5UIz%2F0qiRCBiegkyeAyvFNwZGLbTbiMAJHN%2FfZxNkv%2FaDjJP%2BO7vI0nwqMYEDiu0x62HJ9zVrj%2BqhFfQkjhuWjwwwfq0vwY6pgGcp8BFSgPJjz7dow5REbzym7Kwyvht0iqLrFfcc39kUHxtZqOg1wzEnB61QxmybpxZ2q5k3RBikcDg1cZuC9GUZ7Blixbs3BlBUyusiBK1yZKkUbwcYKvLvVZ%2FWRlXJtQK69an2YCiMatyA8xfJ9AcQCxpSDT4OLt9nyn7sTERhdNI%2BJBqEPQPzt6TCmmyxqitILFZoOx5G4PiTsBdXa%2BT%2FyWfyb9q&X-Amz-Signature=331b0f4b1a8fc4f2ea48636bc9005dfbe322474492df6d16108c8f8b24a36f63&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAH6HMT6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T141126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFY%2BEVmG3nI%2FX57%2FeiPmMMqgYRyiffF07RK5WC7RD%2BT4AiBPWHQBf%2FmCIwyRaG2lniUdfTrepe3mrr3tFf4K7uR5uyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv2ASOVWVdiWe1F7RKtwD2lAzluivhy08X7sTfdWHijl5aEA1fGxQv%2F%2F5RIMrI3ClAI6p2PhSHU7xSo1xsK%2BfnnfJ%2FrKTYs6gFchC%2FRR4jNit8Ehf%2Fcl1I8yacMadO2wuqAtqG1wHro66llVvPBIe%2Fvx6Pk0sscj6%2F7j9AUentX%2FWZsQU5xHZYBn08tqShcdyiogAsTWZKmftJzJ9TmfFGKpZR5rn0kaCHueGakfECzoRO707tXiSc3lF600qnem9liCZsh%2Bij3%2FwXaPvdYUF2PBhhdx3Y6zGa4lw7zQMwsk2kjf6g8ZK%2FQt%2BQUnC9NK0N6yBV8XtVSeR0subZwPBJwRJykW7JvkaIm%2FoKW5BXcjjuoQdDTCprfxuJ5%2F9JLoIfVYrsxkpEqV2Jz4Y6XJb7t8Xu4lNmeDYbx3pxngCV5fBnAl%2Fc26le6yqolamTs6ubYbMxPTV2YtAYxDKDHl8Z8IMb1Z2ST9Ev2JWupsvudq9TA4WNORo%2FUMfWRT3aX2Os5Ythgqx9BoyNdAx1Z0xNoHWE8asl%2Fty6KAA1ZtR43qLSyRyLWvh%2Bug8EeyONvhic1BOomkCzDAIgWSKS63L4C%2FiDC9Yr7sngIcdsZqYQUfVc5792335nAOnesDFbRNb664BfoMJnEvwzKowwvq0vwY6pgEuK3ICpP40yVw7AzCn5TUMZ4iMYO7QSKU%2Bm2WFgwT4wZWQMdFZHQW%2BZjSHxfq%2F3R4VTa9vwud%2Bdju71HWADSws8%2FPglvZevQjZUAd9pyMCBER%2Bu6CcK168p%2Fc%2Fsu2RztGl98molojzOA0C6uSZm8%2FRd9ZXiWUUZYoEwG0rzAiEhKqlPLSxRncXwnaRSg74FO1MF1PuBG5oSaubv%2Ba1v7laI2oCGX4W&X-Amz-Signature=68d1f0633fdbd97e37bea2cdfcc5b8a907ff4f8c1d538d31ecb87098a8745fd9&X-Amz-SignedHeaders=host&x-id=GetObject)


## A quick note about Helm2 vs Helm3


## Helm Components


## Helm charts


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5G2JSH4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T141128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDNiv%2F8C%2BHor9t%2BltwCBlQLJj8XGMIHQMK75hKo94i6kwIgdQfO%2BmY%2F%2FI8KBFsKHGH4xMSu%2FyWX45l%2FgNKyMN3%2FnSMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHN175Lj5cjsQV%2FDpyrcA5E5y3E1Cb1chAdnyk92rr6hZlmMaWqHFccYEbr%2BgRE8TzpLHpOm%2FZl0sS%2BHf5c10upwf%2B2u1%2B1pVQY7QfTHcuI3lKuHIwd7NXPF431qAaLmdafTG6St0hIquDL1J8sym0Hpr0Y7suTRL09ogV5bhFvN3Ae%2FQi1UIs16zCBjD09thngzANPELwWSBTcKtfid%2BPx3Yb%2FnrptBIWzZ4mfc%2B%2BPFe7zdk1uXyq60ZR1pvCbyU%2FYzCfrSWcxqZNE4JhGiux7SaIcVSV7ALr6GgxRiKIH%2FrKptewTxLxrm0vE8Orjlx9htATf9EphIU3f97GVWEBL2%2BDLKdaCXY9N0NmNurYQ3FF%2FJgul2zLil9nMqqM4DHG2vWMNOgQkYNiKVcRxCh6iRHGTElXxK9QyNY56Rd1gfcqau5Bjo2mF0xaynMWGa%2BlOX0P3xP1rJFEofCXOq37NrGWZATqdlLvgg4zvB3QVDpiSknHMtCd7DZS0A7RAF4OsQuGGLxRON1lnDT0vk%2BxXggUeivhGqvSFkAbmf%2Bwv5Jixlj%2Bxro%2Bdwgjzn99V9i9KyC88sgxdTC7oLebvaInWQot8mbZRUabPVQdF0Zty3fHGkFKtru6B%2FutLHUacJjtyH9K0gBgCSKSwWMJb7tL8GOqUBv4Np3o%2Brwno%2FAk2MCQJKgs7Jy9j9E0wAcmav7195AoatLTAMPe4HVpsNhXSxSnicMcl1SNhXh%2FAN2SfmSgFPk1jdPOQkUNWw5YlHdqMoR8b15rBXcqzYy%2Bad%2BPFhFB10VvPBJK0eOZMXWLn07YxfWHh53YZ%2FKGlDX70FDgvesujMKkA%2FaQhKD24Y%2BWfk1lfEXOSWmL1s4f8b4F2TCVuXWMR4CTRe&X-Amz-Signature=f67c6a32bc16f598e05ba711e058b216607486beaa983f8c7361a1cce4766ddb&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGHTVK3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T141128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICyDABDIPcw6k587G4%2Fr4WDNq9568mYAg8lJrV27Ug9OAiAiR7aaA%2FQaRW2UuV58J%2BQl456pWcUvbptqGUR7Q6WqYCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVxo2CHQAmUoNKQunKtwDmuOjRbDh5nIAdeEhXnhtknjffreYoXYCln1DagWODFF%2Byp3X3PiYKqhXkA2x8JJbUZMctQ3iUERFX5rpcpTyaMAfGg2DzjKxBLCPlqjI%2FpEAF%2BE8MPdyVZo4006WfwsYxcpqX1Zu8Yj0PkesZadqI3bTKt%2FiVGWPMGXqjH8TIamSwH02NNpbDkWMPKMsxt%2BBA5kcFudK2H8PwG2DAbp2Ho9e%2BOITXsvbOiP4z5qcG3VInL9QHD9VSmxwY2bXWnPQ%2B%2FFkOQiHFr90R4A2cEiEK0kPm7nNZieCBcCmvZNzlR2AN779aZE2NmcJ3FUSj4dfiUWOoIIdoXyJvaP1Dl9f2EYlrVIJIKTRyBo9cmHIr%2F10d9aZPg9MlYvkzyCPXz7WEF6A4adCPqH1vbousNAqMRgPmIO5MhBsR1IIVBO%2FdU4dE6vnIVLhePQgOdpVA7BMDKh57RyOCo2u%2BjMgu09dl0n0K5kxmw%2FlexY%2BoQbp5DKzC%2BO5j4YYu%2B7kcvx5x%2FMgx7zpWt9fcoWmjIDncr%2B0jfgSNwZ2blIHPQkHkpt5auRrttYNdOlwiEFxFNB2QyKXW%2Bjk6Ghisu06HxvbArc4sWCihXBy0ucEeTJ2qTZkOZLers1h8JFneHMbIx4w1vu0vwY6pgG3QJD5vg4fHrk51iSIOGXn1Vnnl9Go7tk0Kt41HQGX%2FjfSCmjqb4heSif%2Ftmr8VdeMnptMyCclF13qblEq2PrYr%2B3SgwlLxygv9PXo9cpeShpvTim2qVMtvDL4NnRsbqOjzjbbOOfG%2BFKKt9ZGObQhngL1XvG0mWHWOplgUMeSpu06J31Xw8inzjD%2FXdDHVBT6N1Bac4EEiJtNpr%2BUCMQf%2BLP9OTk6&X-Amz-Signature=061f76c652b961028192aed785b796bb922ea7b10b1716f09599fa99a39173ba&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6MH2NLO%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T141128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDhYl0NtMlCosqEtWxHjimCXvmdqtSysygUNoRbsiydrAIhAK6%2FxZKqO0VuM48Wepn3I7Okr9s6Isj7qq32M6YWUIXIKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjQfM7PM0nxqVYDmoq3AMVqP95cFyTxVMDMc8UobY%2FkzAh6nvLKwsgVlNzuh7w%2BQhzHR0ydRV6LqfiKgtTAof0uDcukmhzZsgahxZc%2FbBHCmzJSH3mqZ0aANB8vcss%2FAOoBDKCLZUb%2BxTPT3dMyVjHDpOYuec3ftk8YWDfKZ%2BS7FXX7u3Qp5QSkZ11XtAsOKvU4xal9tfSLNzFYJnUZUQhFWecDO79YDHc%2FGc5n8Hd8JSClYUEv6%2BDs3mU6TB8uxPgRLn%2B%2B4jtKF0M51Jr1iiJCNBLAhC9PgK9Vz8ADPJ323JDgWW7m0VVeE%2BlSFOyii1WT5zazSPSTd9KlOrQfVrV40py9taCAqtpogrYGJbtR3svaLt7SmyoUUouM9KIFidlRSF5dgUrB%2F%2BR%2FoXhcnVRTzcr1%2FGxueAFllMoAoyujiwSuIZspibRYaukmuE6jG4g4%2B0c39c69mKVNuLlnAc3unSyP3PDzxTs%2FaWCtEokkokaoJ51smMQYH6GNB6S9EOeFr2peIkM23nFd18SARus%2FmHwLlrI3vqFA%2FcweICdcxeXuXOf8nfcRbs1lhARNM7nmJ32sxbEYExzOc%2F7qUi7p9tKl16%2FuPTCeT5HkUN%2F7FLrmfJ5VG%2Bwbar%2BliB%2FvJpsnPk09%2BTtWv%2BQBzDv%2B7S%2FBjqkATGdWuxDwlSw6pVulQarzes%2FJprm1L%2BROyfkLnffMk89M2%2BfD2RxCh45h1X1XBMk23v%2FoWrvuQFUZE6I8yIOsNkJhAOHnsyE9oNu2Yno7fhBPa2GUntetm%2F%2BuRG1%2BkAwYu8CJ%2BneGWjxDNv6XSxArIj645ijUKUWLvnJ0EZLREztDkD%2B4cDceqRIjKki%2FMMBAgpeq3%2Bj7wXSI%2FSHq730CRUoDx5J&X-Amz-Signature=14b1a0583fe30909f6b3d6cfb92f92976c51735af55467b0538733e6b30129e3&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GHXPIY%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T141129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIG4DSSSmU04A8qhc7w%2B5eSQhsSAtPDiCzQJHr8FG9oNGAiBPfUmLjw5MDs9Bvx7TEfwfv8GziyiXS8%2FlKBllg8dCjCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKxEtYBMEk88NXzutKtwDDKB1nxG2lI2BhuSrPri%2FkcGqhfBhoYhhvm0zNmZ7oEZ6NG6gxOcRLUCQmTpvIRNCadMQrA6We3YId4xxmXHbEtH9Tlr8RvQquTJiGeOFfM7gEm%2Bf%2BlcQ%2BnjYwsHb7Ow1IX4W8CLt%2FXXOhJOMv2MeoOT2FRWCpCnU27ARTI1N4imIyRulWiFjoGjs6myAJDHmURnOwZgxLhBuLkpzHWwifbltJ36vqE5gUntkGqc8lqdjyZ%2BrWxW8aBmL6RHPXINOinxpOb8TJR1%2BspVokpgOqw3pGwsnnuQh7WKsaPJ5sMVaAJDxpVM%2FK%2B2Kd1KyWijuoNV3i8hi9k0rn8gaE7KffoTNhqotyBp1Nq8KjcHd1%2B0XyHQzJTUtkBPQE20xB7YsgtssUrCsblFH%2BVPnjgCuwxHWZf0Py%2BVay9EZkwVvGlLaL6wtRmkXtW9XU2Hqv%2BBIAawo0kNtMPcMt8y2vVEPUk5jATgrbhPm%2BeZDjDBVfXQo%2FSbf3ge0eHqHimlbNoYzjP6HDa6ZDFPJ3WSyralgRi7Tq5UZskmsVigJDit%2B1%2Fd1FACeLYKYj33dTc1yy9we3xo8qlMqw%2B06ooalroO33s%2FtN43R61PWgm1mCQyh8yA%2Fy8Y2XDZbQ3rkUBcwuPu0vwY6pgHspqUaQ3%2FwV4CqTIsPpQ8eho31D%2BKcy1wBiQv51Ugv8BEaBhS6Gvr%2B1oolu1Cxhy4xmeSUvN2NYsLzo7SWkBeK6QvmHCcI8XqnGhcUMF69rSwECOw%2BqZGYcpS8KE%2BkK%2BDLVDyCKKIZEL55dyZRSFOva7uBxSHGT6DJcBTSFOw9hayD8MnUUWaIQEoQ8X2ZSUiaE4mMJnqdhhSDsYVKKdz1%2FgMnoFue&X-Amz-Signature=20d25fbdcc5f85fe5c8c2d2b17da6205b8018bdb6a5e11a68fd690849d483473&X-Amz-SignedHeaders=host&x-id=GetObject)

11. 클러스터에서 nginx chart release happy-browse를 제거

    ```yaml
    helm uninstall happy-browse
    ```

12. 클러스터에서 Hashicorp helm repository 제거

    ```yaml
    helm repo remove hashicorp
    ```


## Lifecycle management with Helm


## Lab:upgrading a helm chart

1. 클러스터에 bitnami helm repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

2. 현재 클러스터 내에 nginx의  release 수
3. 클러스터에 존재하는 nginx의 수정본 수 ➡️ 3
4. 클러스터에서 현재 실행 중인 nginx의 version

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKLGZIA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T141130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDAuy6Bnayv2lZegDmdIRVAiP%2BZUd5zI4ADZu6g%2B8hEJAIhAN%2FAV29aWPSnhlxj7tZtjXJgKyh%2BSS2sdzUnGaJS8xWoKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7ZqxByrOIgej2t%2BQq3AOhnwDjuyrC7OKGs3IgGkoQO6%2BQkkl8W986EX42N90wnZ%2BfYEO798B1mGtQOiPpsHFvv7s%2Bo3j1gqC3Kb0ZvC7%2B2Q6PYOjnV6CRPpokWR88ojtzREkviBFiGbMS8jiTIPkXRq7WgOFNXk7LotRRCK7sAA%2B0Cjbgcx%2FhccyWlJKBE1LlFLy1BnjS7B5xI7jD9OMP6Gq0PZ5DpHO%2BPX%2BRM9N3BaNmVDRZYlP%2BeG9Lg8OUZNgqcHwRays2rDZgkWF5aPeXGmxd9Td4yKoZMP489CeWWZuuefxuJ2b58737AS4r2%2BVyDT9rxJpgNXm5EfJG1bYtPd%2FNe64GuwA%2BZjG%2FAqofBXQHBqoHaRi76HbwY9m%2F9C4%2FO752mTiknGnEGrEwOETJQQ9tIuSdBtmtdud90Y4mhi7jzl0lm7DmogZlNEW60mB5apcXd004RYtTmP3b1QLMh7nU52BKgAKTMIBrLbV53mKBwSuR6GgpF3J2NlJZoAvr1wZLvg3aDeL465Xf5hXMXfB8EPikO8G5yJu9W4JJlwwqh%2FJmTXsUhj59oW4cJB853yEyuHjp%2FPxsrPf2pMoj%2FIsawP2u6x%2FdHI0MFXdOFk0cxL9BkmcvJXyaEv8ELk%2B4%2FnE6tg%2BUb902wDDT%2B7S%2FBjqkAc3OhrRtvJsVZCcX8BygUsPERS1TZ1HrdO%2F7N8xZ4tJUAuqRdq5X1PUot8XAb6W0G40oyk8ItPK6xgzR%2Fq6snuSKZ6aaDAs04j0WMXo3ul97Gav8ApH5JLJC8VrYowyN1O1j1PtBOilT9d7iQci%2BZ6o47QDafShR3Pd5I4I67XzdQrk%2BWF3CEmEZIlXWlfso8vvO5xZoIyXoifUAwGmks5KFPWOc&X-Amz-Signature=23a0535280903c08bc0d8ee88df7f3703474afce50ab1604d30d36a819f9a28c&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCL33HOI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T141131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBdQUtUrvHNSRu%2FOD%2F1g%2BGX5J5Pwypp%2FqcFv7VIucD4GAiEA%2B6FwgLXPKJeg87hqbh%2B7nL3l5o8ZLB31PVnZQBGFkDQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERKbrj3hjcd0bSB1SrcA%2BdawuHJA2wkA36NAAMw5XppRRLOcYBDWpwaZaz7zW2mjoUx19zy9Mm3nYIds0o%2FTG%2FPx9%2BiQO2JZ%2F%2F4xm2XYF7jijg91xUrKjKESHm%2BOn%2BBqgUS5NdRKMZ4To%2BFG3IKu8pvDroV5CN%2F3bLvDEitc1rZeeK8Cvzx3ML1N%2FX%2FsBqR2DB6okij85P51P0TzOcejz7jmP9iVgG1qPIvcmEq8ysfuYOdHaT8DK8h6atga6aOGxTP%2F0cQZ0BUfomCOP2rFN6rtcnRXW26S4NLIut9GAZx4UdAwKOhJiaq6eboSJq9LuedSgGyDMku767GG0I%2B0jMqg0iU9OrJbyvwRUqwK0rHsMeF5VHWQB7SfblBS4zS6dJRPSbNOcwKjVpbN9dhtnHeRH4irGg3qyEClBpOWQ8p6zU0OEtR2vRj1FhVdEdYpDKPnpeVTNYEEtrPDA1V4gqFP30wmG1OnuwcpBrhkhoSUVgtbB7vXXQNROrN3uuGGQMDhQu0KuuUQcMvCU09d7cv8fjg%2Fhv%2F6T0TdauxrG12%2B%2B%2Bq77eAbtIfmN7f2if3HxntU80zA7GdFNffqUZZnRReOyGRO78AZHQeiS9DZS4lz4ksaPeEDvA08rZFphuH%2FxE%2BeehPxa%2FXEFuNMIr7tL8GOqUBrExEav6iqJ2vw0CXvgGEMs1iYo0Ae6vuIlO9UPdnt5FnsPFlTO3G4AdxXo9Q2T%2FO7k5ksg4E7IOkFLXwtC%2BfO52LDHyy3AQyvriMd9QZcvw2Qav5a4IpX6tUjtFvpIFJfrOXM6tWnHwftXdr5LMoPc6B99P%2FrClLoON4wG2hmJHu63qX%2Fw4GzF0Yk5EYvaIu1grYUgT%2FIRrXk0t%2FcC5eQLD%2BJ2hc&X-Amz-Signature=a7eec85900e48a031288e70e96ff867d7ba0d286329f018d881719f7bfbfe980&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

