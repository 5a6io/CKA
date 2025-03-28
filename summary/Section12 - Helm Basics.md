# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCFFBJ5%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T141051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy8qKt%2BWvRXLbRtoHj6%2BSMA5r3cLh%2FDMzuvhpOI3GwAAiB0Kt1lFATFpTA9BDX6%2Ff2ITTaThtIBaJ94jSvUli64rCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMwZvLDMERenemylM0KtwDW39Rw1huk2RoRQ1Y0iPq9u6AgtUa4wFuLit1dI49HCCtaXT6skX8CJmmf5wyhSXrG0Do584TI%2BR%2FodounhUAMPM0mNn9T6NBptJrPs01O6Qjd0BnEzAFokcvqZfvmeZRjnKc6toR%2FUAMZE0Kxz5DT0Eyn8e2n5OvGB0ha25HpgGtDVBFUZ2deTmJ0bfo8%2BmEyhOKkweEVBC1A%2B8hQHQE%2BbRCzxElbcKSlJF4jrB%2BdNweOBEUgAEbocnwtiP8eNWTLfU6jmJ6u5cB7s4DqkePNNU%2BfduDucOEwL4ecMqShy6ATnXLhJlyl3XvVOLUCpo2by7DmJUpgdi7FR9wsWHA1KNdwyFIZAxVIdeQj1VQoKxY50QUVC2TEVztHTw58OwZG9gYoEQ5ushuzY1Z1MetxxIcc1s%2F97XwybJ2uZKWM7e0DDUnh7Tc5xD94VPzrM6AzlA37Ch6XIYTKkKqw0K8bttgb8r9vjSC1oPXKNY%2FdhXDIj51bhYrv98NRaIZO17OM%2BRUl%2BrFdtzeH6iIw1WK%2FgWvxTd9mHg3%2FXsLoOSSP8iuRun5%2BJQTgt4U2dRWydbwgK8%2BgQVJQKfCVPB5OJTHAHpCwMoj7b8OV7zZQLfcWB3sn7ikNLPAmHapG3Qw7dGavwY6pgFNGWRl%2FaSR%2FI87fHE06%2B%2BsUe8SUqTVQ%2Bo8E5X%2FTW5W6FOndcQxPG4lH9upJblQJbcOCQdVb5Qk9V7Ly8QOVpEI0SQYbDvbTcthjL2BOZk752GEXjugqx3kuPd2L7ghfquOxbMCVUwlzqvZoShP1nUemTPpj%2BjMVvEiOyfXnobWeXOGCjiwLU%2FvhFzGwt79o0qhOZlUPfiKpJJ5lA9kKoch0IDwafay&X-Amz-Signature=27d887209477171992e693e04bd7dde2bf94a91f9a41f4cb9f6f16c80fdafc09&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ74VZ6Z%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T141051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIy%2BWLNjhAHCb8Y%2B4mbhnhXaCg19U8AtdDcWiz2koNjAiAVvxiN%2B49VTFa%2FWUVQq%2B0y6V49aSIRq%2Bvh41YZ2EUzEir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMA547xfKUlmepsfTAKtwDeSSX6GCENZ2d2xC0omFc%2FTQmbzZbyf5bwGe742c9BThDbrFSAs1gZm1Yt9wLUTx2G1o4Pa%2Fzp5kttdes9k2jAKJHnihdh538m0C7kd2Kio3KIHHAhHICBq5a0LLbOZd9nM6ZNF16ssInXmMoSWFJ3J6%2BQy%2FErYqfzYaYi1Nf1o0eOGAKfeLS4Pk0SNRf8lZgP8FkYHuH1cTU3mfF8qJr87DqhJ7jhHWFepqu9V6G19IduSXcZTISy9GnSXP7iPI8%2BwqoC19Oxwgjcs6q2ARjbZBvMHB44GCFLRxbJezzWybvI0kWnctKqk5czrOGCJ1Dkj%2BKN5GJWU6OBaooEgKpQQgGjHgeqZr8q04s4E4rUnxvx2HA%2FOwKvK8FAnPQNR7mrDzj742vfN0cEVFtDpOKugVDH7CMCAFyzSrq7mIcNrLU9blZV7qhm9BXu1y45U97riBmYYnYXvfyzK2knEm3MulHPxHAJX6Ct3o1C5Jx3s8f192tyNucuZZoY0%2FIo1%2B3YLfNvYyYFnGvjNdNc0SfaOIY7X4Vp%2FIKB0a%2FNoFalvC%2F3x3WZLFGYgZwFfTDmhEPftzZBpHdzZDAdEhqaENKkmpS3KREZFoR5Bjo%2BYVEtwefxi1UytlYnt6OEscw9NGavwY6pgEi3EuPFYqf%2FlBWdG1NtR9xRhg21ff%2FG873GhoBk5rQF30kKn%2FJ9Sw9%2F3PVUScOXDF1C60shciqfd%2FY3BXayX2uPNigzwUdpNIlyez8ZcGKzN0s7%2FBgGnKk62eRnHUbbW6A4OwsPiuMJokN0rFBcjNHMNzmINkSsGcc7o5B2m8EmIqF%2B5vcHBsbGO63vliFaU28w5k2o6rv3hcrD45awAAb3t2ifnAu&X-Amz-Signature=7c3396379376f717c035b3d2469c4a636c6d87dd5605e431a30ca233908b9ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHTTQBL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T141052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM%2BIWufYCYKmhhI2KUBFpUGBhOxGW9FBMuevkLiN3KswIhAKU%2BPBdTT2HEscINMQrb%2BGdGZuoec26hzLiVaNsO9YW9Kv8DCF8QABoMNjM3NDIzMTgzODA1Igxc6pEWzvmSl3X%2BnFYq3AOao4hWprcWml%2BxfBsgBt9sjsAj41g1Fs8x1DEtC%2Fd%2BiKqp4nwZ%2BfdH0B0YduY3xIbEQLs5sP7WAJyMfnFPMI%2FLVX%2BCd%2FcPARBIIV3V1vOiHFrH%2Fb48nbUeMU%2FHdXOPS9CPe86AVqwcDS4oYLOK%2Fy2HLKgkBNyKBoDcRMNz88OY2tHd12qyX31%2FeYhgNdb6CwhiBuRsmX6sBpdKO%2BRerTrgVf1OfEjPQKY1w8HeacngWywdSEX23PH35pHLbfMtDXlm0EOWsWRs%2BiPzykpPhB89soV%2B%2B8ylPZUuUxnbowxlL8I1t22Waq7i7wKhYB3HrOypfAMEvicaYjG6Z%2FLgzHubYlvIhnAFPSndmsG9AgCOfqmAlTSkCaT9T1FCf5Sytr11HKLkGTVXOHAb2ZVZ86qFBpOKiDw7c7TVEDTbT2PiwzGm9XraDVJxcJM3gYiaQ%2B%2FxpqxUkZ3Lwn2fgTamTrwGMvXtQR3dI3a%2BFHxja589giiURcmi8V8eRwVT5ZYt99%2BqJ088TJ26cUy%2FVgfO7Fl1Jvs3fzUP94ViGKpyOBZoszwTvHj58NTgj7s18vojH8j8fxRMnSUqgFU%2FpIiunpNVmu7DhlZ8vnhjDceoQZ2KDeO9%2BGyuf2ApXUqHxzDx0Jq%2FBjqkAUM1Xmi3%2F%2BvKRd%2FjPyt7JkUn5M4HCUdIGyQ5q6yrfvI%2FOgq8dVsa2V03WFqzB5kL88Y3Miue%2FFTPjTagbeahulk%2B6rKl6e%2B1CpHwqBsLJn%2FAwO9JzeYQpUhcw4w6Un9lu%2F%2BtlSC%2BXDIYHRZl8l6JXIjp5AhTR9W%2FpybjY2XjCoQK3Uav2Cq%2BXq8yer2MwB%2F8f6neRyw09ecOgYwAVthN%2BEIqJ3ee&X-Amz-Signature=d87dfa63124f262f4ee4e9d6546fa0954fa449d1c33122c3575fca171fbeab49&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BIEOGLO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T141058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAE6pZvJaXfte%2BdDc4hz6uYTgvMMbJqLXQvE0RIT23xAiEA9zcHUlCersOgTSvTD1N7%2BmjWr8BEsgfd736hGNAjUCoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPysGVp2s5yvR7F4EyrcA4mXtFFlh3v7PsYCjId1bYzk9%2FtrpyARs5mr6sVCMihGgTqxKWIFwVwL0eG6eQpPCA2Ka8fPFtpoaAGS3ya%2B8nYnMVjx8r4RBJFXGA4gGR%2FkfBgHUzWqI35LEabs2jRFqjFMwevu7TqMYnRv3L7SVk05l6j0e9IKKxp6fqcrU63xxDuoCcdI3fl49J%2B1cUoEugHnWfloDaSjrYQafUdQI8FhjzRz%2FJU8ncCB0uPLPwiJYY3wjbfDRJspKEb7yOgqUz%2F8XUWX%2FSF5xV7B08mQeiF5V%2F4ub4Da91KVguJtFxcafaL%2BLK78OrVh8ApgcenAKBCGxSp9CIG%2BkRexc6BQdJrrPiVMlelgIM22Uv2aHqq%2FsiNmj6TETqfzZ5S6O8yGEFB1WdK2kHmWapA%2FZmdOQnlFcBB%2BcMv5jWmsVs9m3XYPCtZved7OeaQoDzjLkhNLP6mlqEC5d4as5%2B9E4N469QyCsM8njyzmPnjwXFOWr8yRWfwB%2FTifZSqMbHPTwpQY4EpOXLnDAA%2Bh41tzUbCrW%2BhEOn9AFZdEH6aIfaTW5GtPPQQ2gcoVMC87g3Z%2BJl6oLpKhhny5NZt%2F51%2B9nPg9HvhXFaAAWsfJ4dtYV3IrRmRLjAO2dpJG2XehRI13MIPSmr8GOqUB6oC3jxnxUaJ3MHdgZg%2FB1V0loJ0Yg0LplHqXySQ492brDmJ32Z6hzYclypuH9jM0bQ2B%2BE1AFTogdVXtcCCsiOAq7CFDUM01ouopM2HuyZF32HZsY3ceqm53q8sExF8wK44WellRS7hanRd7Yu5ceoWPq0nbGCOHqUaGMu6jpxhTyXOEI3ANHqrIQbxAR1HtbKbQGKMfJxd96%2FSiID1ZkM0Keb8e&X-Amz-Signature=6de7f40c5d1a73de5feecbd381541879938de1115dba9005c353d177320f6f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XESWA3JX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T141058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd3z%2BC9ZEScvCh7IdKv05OKstadTgeKF4r7IlbYO0biQIhALywmq3ZUTfWYh%2FHcerGeJcSjvTHMd%2FPw8bn1Sn1KG1zKv8DCF8QABoMNjM3NDIzMTgzODA1IgyRAcbxUljA%2BP5zw2gq3APhYVmMtkFm4xYN4WEL8CcEtMnB52jP08VYTPy87nJy%2F3D7mmeucM1K5x%2F2rov4Uk%2F3SHtJL5WQPXd00PM5uB0Iu2jPTdVmPXSDgd92%2FzZ%2FdY%2FAv57jPcTJwTnPDaoFZLCLMxhMKWQxMYO13UeXHyneR7MYlIVMHp6Gt%2BlKl92T9lEnF3x6gDN135w9CdxrqE0FE%2B8CPm1d%2FK1RqpV1ejWnYD8Z%2BF07UOgXGf6E%2BuVWo%2FDiUV0BAy5i746l4K2Jfz4q595E34GzbbQGYHbe%2BpRng6bqi9ll2c3cdVn2ifizBT%2Fsv6VNxE7aeaPDfOqf3sNxLclnubaujscBbYy7SriJNECHPU2JVWVG00lKo7IeNlXIs60uwE3mL0hS2KpYnvgL1RVc4%2FoZH1wWsrBs%2FRiUXGoa0GqcabcKUOq24QMpUJIVDMpf9dNlJEbrZIB2gnuItm95K8ALRjUbFXmowEjO%2FM52clzdqYmAAxptFIjjZcFpzoAFZlsLNT8pw6ea0KV31rIK5O4uOr3yiRQCGCOebOq7f7OAC%2BMmsnWxxWFwL1q7ziw8yVpVq4T6ksysidtdZWCzYMhOeMwkP6tflOr2RSIOn%2BXcM2wvzLlhhs5D8S5xd9%2BI9EIBSZWbwjDu0Zq%2FBjqkAVo8zWyecRIXEkdDQg1Cwq3KdC14So34nkAhgY%2BW159yqqyJfeH%2FaBYXka%2F%2F6FTxcMSOVtTzvON5Hbvuiq3p%2Be3stlqpigyX8EEKaRmVdrDAmHbW3PA%2F%2Bh2Plq34HSqmG3ek%2B5v3TH69S3HzDtTg5konOz01S5nerqWlxYUTAhbvUhUbwaPlztTTYfPu5x7QvbP0CKOWWCw%2Fey45K1207IZ4uRpy&X-Amz-Signature=0cfa450e0cd0646fb36585ad09c7210c97f9f17ba6c296ec76d5454dbeca5e08&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CZPCST%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T141100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUDYwkKp161tMPIxsLWQQDNoRhZzE7VoAOHE9paV9icAiBwjbJhWvl%2FrEdjV%2Fo7VNPgxUMwtUTwjR%2BEwEduTDrbDCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMWqd6cg14wWhL30BsKtwDlI1p3j1pwJlOAbqvgK6qjmG7j2N%2B8d4UvFH6srL94ZbQFY3pui33ncdF9blT%2FneiEq%2FDtfEKJZxYniVXjva06OwVUr4IR5oxCmb6j39rm90FymbTSkIUrFemsyvuKqRGR2sJfokBkGDOnPakcJvTIf55K1On88wDUq6A506PNKy6FADNk%2BkW2vYP9tYIn%2FJ2M9tyED8seD1iX9I4W9j2gslFPYmO8PbbzjiL0tLYtUk70CxjJg%2Bm6PFV4qAILYiSVOM2g5XM6VkwwCHbNbBIracqZ1JJRIL9TBrKX%2FSJPacgBAbsg6MzR0QWjLj%2FtR9CQKRH04DXmyglxhhdeVHNXKhPU01nX8K62kpwj9cnjSi6%2F47jSAu%2FyggCn9CyHYnq2MAOTYNKfkhLCaMQHaJB%2FT24GE%2FINM4p4%2Bhjato2mIW5jvmb%2FKKyn69kBz0KPrxBmkGJ71kmm%2Bf%2BKLXExw0zK%2FPOU7LWU4xuvfMt%2FSXkrbJh5ORaNN5ay3KTYS9l1Ab7T%2F9NqR76Pf%2Bc3oVjjOLRkIMdCMYx%2FyxyriwMsxbz7rcObSY%2BPjrCDRpKsMxrtA9MSxdeAOLe577FV0oXtW2AYNYJ9%2BkAd8%2F%2Fy2%2BuoDgNeG6RQ03S27y7ZvsPWlEw3tGavwY6pgFDElmT2S2QvBH9LTziWyXu9UpqqNcfnhgOiesHT1Ea0wisybJ2%2FlLM%2BLdTeJYO8p%2FNQ8KtOIEETMMP51vimKRogyjwzEBnLXprKQxXUScB3v9UV9LlLp32sVLS2EP6SwlkZ3e33NCI4p5KndOxi2WDs1hKq8mcW1DZ7CvXJbQs4%2BtAOl8OomOxI4ANPoxM8qLzDJThnIejzh7I3SmOS6ViqLcpFhFs&X-Amz-Signature=9f70316860dd4218fb97c1ced37e95b1e400cb2d38efdc7f98bd39d233742241&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DABIHF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T141101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B9QHCL%2FIdBC3%2FbE3al%2B%2FJ1XLESt6DEzLby2MqJg6dYQIgcyGjK6ALFRcdYdg8wcX1CLt2JXs5wYUF8uxiXCo1kTkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCc4rIxI1NDuG3jHDSrcA1eArW3L%2FSRFDbRe1yujsFjgMvdyCOPJ5jeYScSY8zNDiFuD3672aKuMS11XnxpcpyKlE38kZ4TbVPJ1bCmDZPi7FKvLqw3oHs0VnBG%2FyCNniW6hzKj7LT%2BlPfx3qkD%2BZi2kOgt8zhJdATTOCJUxO4EQvD1Nahr95IDQTc5GsdOUdHg9fvGeu%2F0Bp7PGiO1peAUbkleGOaPawBXcHxkpAORsh3aIPvmUFIzeTnsCmCZzMcYrCdvzCGUfYAnWefEaoXjN8H57xLJ1EX0GRS1WAt22AnBzcOSanfHv6yDp5sMdDrN0tolUk5NfkYGKXUYnb%2B%2BPhAxymR3dHDBgejIx44ykoNcaPKntH%2FGXGiyxPYk4PzK%2Fzf3l5Br3yAZndw%2BCbpzbXQgYgqs8XfYA3k2BUtKkS84BkibLOTC%2B%2FfczeoWjQllsnZK%2BzFl%2FhbsFELhGJ8jneAzIQvYGa%2FLNTOlsqfvaGeipJokWdYrfNTRP1ge5QR3W806K%2F0S%2Fa7iEumCMHPGctJEGWrQNgUFFmCaVdfSdSGNb1yfKpYV03eH10%2FWWcCNRUKggGA5NIThPV2zyCaqtSnMxtjnkapnNy9wouiM7uFvIIElxPJvdALk20GVsQxtPemlR40IkWq2yMIXSmr8GOqUBS2oYdnfrrybpebR8BYl%2B%2Fi7%2FGW7ZeDnnNxAHfWPMliVpOX%2FBQyfm2Kzx8K5KG9491VIp6LbxE7NeJqyt2eLtM6edHKz9jqKTYNNAMh9s0FNhMfKkivWmfrG6mIT8enHefL0hqp4ju7JcpYIKlrmZxB88PNFgvv7x6pjuJAKUOp1QfcPbXY2QpE%2BUrKGiATfOysKXv5k%2F63eK3Qqkk2FrHGIsJKZi&X-Amz-Signature=935a62460cc9e609be79922c7a455ee819bc004db74d8783f54ec95bf0e66ba9&X-Amz-SignedHeaders=host&x-id=GetObject)

11. 클러스터에서 nginx chart release happy-browse를 제거

    ```yaml
    helm uninstall happy-browse
    ```

12. 클러스터에서 Hashicorp helm repository 제거

    ```yaml
    helm repo remove hashicorp
    ```


## Lab:upgrading a helm chart

1. 클러스터에 bitnami helm repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

2. 현재 클러스터 내에 nginx의  release 수
3. 클러스터에 존재하는 nginx의 수정본 수 ➡️ 3
4. 클러스터에서 현재 실행 중인 nginx의 version

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2ISXQ3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T141103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUgDbgfw0x3UEYiykVFGMtkZSf7tMYsyFdDDRLdQuy4AiBH1qIQ1XBBB1L2n5mV3PQ9AaHKUIXN9n7uHPEoWpntvyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMRjTXsALQ%2BPKzAZj6KtwD6ief9oFI3H2UtPPN0Wtqw8m%2FEzMd%2BnNYl1%2FGXJ6jfCF93DNRemPclIYcBhFMbJg2zEPEkHW%2B5x0NCSvkuhpTbcT3euG%2BjdHFzGNn4SfHf0Tdu4VngF3cpFzrBoTJ1BfljnE28utg%2FrpBXlLhlPW%2B%2BSD0z2Jg4ziPpeN13xlScnfVcQ3nMMwQGJ2s39xCRFCkvo2hnFJqi99bz1GdyTKlxDysG%2F79fVe50nQwN%2BTyMSX8P9P1FChEE44Q3BDAzMNwzRnIZPbrSxKQBD3jLMhHl45rnz7Buoe8ko8BgTmRz3sYuvYZ2uES2AZrR7dGDYdP5QDbnuXTAikfqc4Ha%2BEMz%2B2pxz2REm%2BJYbFfXVwZXbiLYlJKLg%2FLRu0NfKmpLLkG69xVMI18M9oU34MiAzHBMmuwkRRz2cDT1wsDA5%2FX6eCqF5tUnkZJFbYhObOGwdx7qWrsHzZoUssz9Xyxx22zXkBZhQxcw6LKPgA2c3N42qPQ4arjn%2ByolIkeqHd57eGMThYNI7o9%2BuDYE0fWz54MYJevrloAeWLHfBNrdvNXYnH8mDLi22KUnTBknxGoIwDL5oZsFqo%2FZ3tkQcgKwzzK1GxpfKREKyTcGiss1geGvADtmAUAq7%2B59T2vfDowntGavwY6pgEg7xGZTtcyKXeW3Ike%2FGuQEllWQb34AoSzTUUnsiqI8vFc33WZd%2BAMsSAfaYmbjlTYwtYTc%2FrPEx0Tt7M3bCXvhBND%2BWPHp6iEROg0T2m%2FbdDObCSmwGebVjSUinAnWUgkmteZtPKwDYUasMNK1M%2Ft%2FQIJDYoP9izf1L98VRSMbMsZxXOxwewyQMHzXWyaIklo1tJ55jzvWCXmF2sdBhyx2h8ig%2BSs&X-Amz-Signature=0886f9b5c984d91c490f9ad07912a3377dfa6a1db0c8cc204c22a03f2a676ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WYMH5IA%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T141104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwoWhc16spKZqCCdGyKhTjSeIIiOGSBtoxDVhA3ejLyAiEA%2FnKInoPFMHSz3z1CTUGQGsLAceXiiTV%2BvZ9TOGSDcg0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPaZ%2F8VkcpGpjWadOyrcA0w3RbP84la5RLuOykY%2FHqb1iens9wk%2FHxeUTsz%2FhUAkyWgMGEgCbb6GX8YHRDgMfidAe52pkf2FnA%2FqDJpcHpIQPhj8ihfvGQwX1XmMaDPlafklJBvP%2B9Lokz8ztvaBwWEfJxmFxvnG%2F9YHMbnso%2BycD11s6Ix9dG2fuL3uTTpFUK3IcjxrGQP4v8%2Fl7ZIm6iY%2Bvpz62c1tfefwt%2FxWqEAp%2Bk2%2BQg%2FpQUM%2F9yeKt4%2FrTD1lbDpKGGZIzZ6MaNzokC7Tb4KmFEZLv55h%2FbRv3JantljE3FoJM1HndGkKOq%2FIBBfAkVnhF1bCMlhepNadosuljSPpLo2FCfI%2BMLWEse3xeu3ukU%2FTp6%2FTn5OUAn0dMTZ7hK04vBwoRpqAifLIQD1yHBTBg2WXK6aU934ubeE4%2Fax4bcggBf5C%2BU17wtrE1HmRCh7rNcrpVohFWi4ihLm3Iw9wbevZ2zQtObv3JOXvGuCq4Ok%2BUDU25dnq6r3%2BxdQ0GP51qzuuxtOV%2F%2BzW%2BLjH2JzXBqnUv4l%2FrYgidsAB2DOj4caSiHkwvEyR18ZT1AWPEXi8%2BsRwMMYW6t%2BPyGHh7vVXKLfAQmq7t70GzStHgjMbNEI%2F24XS8oHO0HCCWWAoWri4ZbjyjVnXMM7Rmr8GOqUBQyBuvi72SKXT47P3OIypWwJEq%2FCyFBwxJWYKvL8L8TGG5tpHwGXFpW5J%2BrsV5I3U2E8RvzQQrb5KIMtknmua%2BpHAy17E%2BibG%2BiG652PybOa%2FK%2Fr6tOtAuQOogVnvEyKyJRK%2BKNygjNlRbhD6gKDsqi7YQdOVusU5uGhwSPEueneHXKwM4fc6hLzEPIYRUhwBuNfGlvOAq6cH%2BNfSSaGcRjRFyyrF&X-Amz-Signature=c37de56bdcc061d833f634b4cc16c5f47297b2894e21d0c045c2635f8b325086&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

