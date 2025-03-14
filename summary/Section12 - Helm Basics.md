# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PPDQC3T%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCjy7ZMxAXVs353E4RVehXRGwAYHJ2cZYbBy%2B1oiHNsAiBoclO4aKUWt6kNUv9u%2FReiECRDSNR9%2BFm9BqX8Arq6TCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLvwRCoNbdIkqU9TFKtwDf6m3tUtoUdj7wQZyIVwFwiEeSQL6NNGvQGzPaOJA7SsqO4x6FB0Ad0C0wIDMiwkQvE3cVUgx41gbuY5CeOOeJvxY3VYiefJbNwP%2BZMNnGgqPi4UUGs76x8OLte54luzfnLebldogCRMDi9V28hfANYlUb57XXmaF2etDWDwVc4wwa769s%2B1QjSHih9%2FFypPhqoPU4Ns0aFpJBs5Zr6snmqTr87Bq5M6erass67jL0Q6r36mMKU16iLlp3tuhUjWo9%2BtytMjmUs0zqk214pzT6jg9JRl9UCIAEX1enpIqU4qrbRDFszoPX%2FUEiDgC2CEd%2FspQ%2BhrXVNHMyWR3TuB1sgF2knsO27PNOuo%2BaNltX9HUbYMUdzAoEly1ybMwm2MYnwOFqWlHEQrmCR5pXReci7PnIPiGIoT%2FfEvNaqYx5KystfU4WzLM%2Bn2nUJ04htJWXLDm6kK1NM7%2Fq6%2Brz6x77WH%2Feev214JJ%2BxgM3Bx2%2BUG%2FYI5iRYCKxoWYhJ%2FbzThW69PIr%2FkECynVONsQoUQd39h9v%2FyEtmtgytPQ9biGEpjqRE1U69DDhiSWniUJQgH6hfwOZRVr%2FAHW1csfXFFaSBzU0a0fd%2FzWEieAXc8QlpCZbcWi80sU6v76qpQwg7nQvgY6pgEcPnyWkdHlwdb277f8fTIeQw5n5S%2F3Yrh40Qs5ZT2eyKo%2BXEBbZkHMFl%2BOFnzL9rBtXCC4ccqF0UIykjdbdjno3jHNlWtLqyfDhZ1KO6QXoIBxuCxevLYCGfqKwi3lTA9e3fBX31r4qZV9KDqQMN02OYLJSuL0n%2BsSAMEpgjBdYnHhEBxpadVkxpsv2go3I6MG3qBkXp9q6Z3dQuSwdGcUNymvUusU&X-Amz-Signature=ef5eb543b631fa8094b45f4dcdbf25ea97c7d38e54a6eaf85c3696bff7d119fe&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QQH6HM%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGNJ2%2FK1a3DApN18qhKEmyGsGPn6H3rgAxbGXAlqq1mAIgcYl11A9uL293raZ%2BZNKWwjXxyWji8BUb1oKyeeJW36gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAXJ2qJcutHJNNi3CrcAznOiFoFG4lmgtvbhvaNt8QNLuHumLQ1UzVFeGt0KwVcwzSsk4nl8TiR5cubbUxxrsq3sQBysap%2FufjIlh2ULpWMiSANNfr%2B87%2F8TgUWl0wk%2FvSBZgR0nPgqXRS%2B0lxX6vgptef1h7NdGPdPRzm2pzTVzS7e3ZX5IK9kBgXaSDKekUlJf%2FuFXmn4x4he3V7kvx0Kur564nOsxsSBsEhtiz3lBPB8r8Z05TWMYhVp3LanjL6K2HL0KA03aUbX4b22d8%2BpQVFKwOp8QBwNVYiDtcVvX3DF%2BufRL%2FPm5xQvInorQYy3iWpFpE3F9fYYQ73km2UaaqeundYFewjk01LLlYJw97%2BeEXC7AUExbCPu4NWav3Cw9w9QXT%2FDD%2BC%2B6n4J%2FmZm1QtEHeiP6LyKx5PCuBSBHv6ThOLtrHsALxBabpCgey062Bb9pIqIy91NEWVD3atGOZBvRseHs5YhhhYLokEjjAF%2FOzdfx5n1pVdwj%2BEMEO0Gv9XqRvj2mxV4zk1i2TlThpDjWb08qO%2BqZeZaFhd1XhTdi6K3%2FHxOP34VpbMJrKW%2FnFMQc7CTTZG%2FP4f6CbLa1TEA%2BJ2XrSbA4nCI3K1n%2FmJTvFYslN%2FY0WlhjFIfOhIcZKdj%2FZMX3TcZMI%2B50L4GOqUBTsKAGiFU7xf2OL%2FAp4A3Dhi2APmSS6bxf7fkITkXeSsSCT1yKZ5mnSITvLXzeSJcPisnygTkP9fur%2FJlZIP995N1WJ6lOwQKZMJNormsXlsTDtDnM6QCGb2bMChjRi%2FQ2zotvf%2BtcZpdDvyLjnfaxHdl8URotcvzoCOfQ4%2F%2Fq1sz0w7tZ4BrpZQo8vUrwfaK9eb2p1Z%2Bcy2UPhqETZRDL53JTYPJ&X-Amz-Signature=90fa34e10624778de18b4867ea2aa607e35bf144172b6cfc17fad8b73b2964a3&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPY6WIX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJTXGbTIQGlx6KDaSViMNxfSAnoQaTY4L9wW5HB%2Fz9ygIhALQ%2BPcuKE0DQBZO5bwj1WmnG3HtK54lgiV0bOTpDeUazKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrXN%2BmDxzm0SYG0Hoq3AMbYQ2GrYjMI%2FB24kcTymabh8RhxOyRMPY1w8WZd2voBURJXTiU4olxBuU7u2iGtFtEOFmY8YRZwzhBvdux%2FP78Qd08vC%2FrUshoUCx3ThWCqUseOdGPcx3d3FbzHkuXkiZaUZEd6vbg66WSh4OTh1iYgbIlslZIoMCYp53HzhMQqmfZzR%2BI0swXMXWL4pPpOto9R7wAoT9nNKUErYrFhL1%2FdsuZVBPPfYBhJkcuX1qetCQNfMO2IHDklIp5ginRkuBLHd%2Bw%2FfwEyRCLwNk90Lx0iQiSybZbf%2BUar5oNvzqzEpDU%2BfUz1Pj3mU9D3ravAI6oNKxEuOKODy2tORW%2BSODqbGzeeiXszJWDodVuqRPZr6JJRJPppvUrvF5AFvBrtCdg6CERiqpDCgxtNJs1HOtPzz86DfOQdTeD5CwAHr9lK0XD%2BnwYVtFGDY%2B7vWmVcaq%2BNoUSQeYgacYjCr0UahcyBCbxXhI1zLaBd6Lq4TEChm6Ryis%2Bu6WjhrMiTQqla%2F0ZCYn47SJ3QWKutdrsQftCb0DBjftIH1dPL4wt3YeEO36hczqon5oMBQxpY6wblIMaY7uwObluCPsAfAA5FfuYMum1XpvbL1py29Onqkc0EnPRGyxis%2BlCDhwbUzDPudC%2BBjqkAfSFW6O%2FH8VcLKb8hiU2MqlG7HZZ%2BwZmKHjB2TtludbBjZmpcuTGAXlSc6GLC9koFkCJqxW60gzQGdcpRrJ3OSr46neMJT%2B7dmE%2BdpWpifsjtm8aHN3tbw5DpEIcxBctq%2FcJ8nGIHcDoSc8WyZ%2FMauvCDwZ3UhUWJRndy0EJXqzKTrwVAhOsiGEAe9QLc2Uqo6LKeTB2e4gIZ8nbf5SfZJr31FJf&X-Amz-Signature=c54347095d373e254347fa4cb7a4011c0f8e6d225c85f150ef75979ff624d1b5&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILRMWOU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMw%2Bb%2Butdi72zCqWnuBj6SnQBUaEzX3L8Ww6IU7tB%2FeAiAcph5lqV66UJk69QiD0ASfk1iX1usZjCUUX11R%2BoDHDyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMncSxLDmZLTdPBa06KtwDSkfLkSuN27S53AI%2BrOSYVURhaPdPPkGxxmnlJTBoztke9wnGpkc7m8%2BhtWhK5PagWqc5BQUwq8H1zb7oASJAfqbvrG3zGhJoK%2Bewvc%2Fe7zglEQsa5XG03Z45RwzHqATfuFyREVgXm3OlZOZNtnBH%2Ftg9KLdfI71Ls80U7gOVGgR1q73bQTqaiCeUE54J5VzdSDrmIBIqXuIx5XMtHLd1TzcOXNZthxwZ9k5VmLJEwX9dU2Eac9X4zJAX8Pjk8OTtHggPf7zMO%2Bbt2OwEmtW8%2FqvIHJIDyKZyfr%2FA5uCKzvSsYWI2WEqBWG7DsS9NfEtyzHoMZSMU6M3zeYHr9GFjHEFlu6mtKbk4nawnwFIgyIAYdAO5Aw5M6yK1EEdCCfa2DcHnLj%2F6Sr3EZI6HBqQ1O26YIox86pGHlEn3AX5jjCoPpGbQA2yW59UVZj1NKQ6HrOM%2FiCOAQoebn8yuVWxfj0hys6MIxQDdysK4fOsq%2FxAVSAF2RYQebHjnlGhPfdx2Vmsn9NvLLzG2GscKtTLfdU95iXPwORkOENHVFyhdNZHaK3zfY4tzhpjFlrFAFhDCp%2BqTQ94VyCI%2BbdMJR%2FPRXR3JIxq1KmPr2px4P709ngLUsiDll%2BQ3GygYDeswn7nQvgY6pgG9oD8DK2j03CDxPMi8q0ulmcH1yTe3lVlsQrJq5tcFiTYIDlj36P3DGZ3AzjqOKG6uzBgc24jW4QyPVYLw1k%2BGWVs2QCaIOV9vOikBgVugMcFWUAdvJ08CqrEP7yV0Tzd6zoCzzrmGwMnJZ%2F%2BW0IkaDQYRil8xs1hCLc%2BEYugqKvS3pAWs1l4xshMQdFWonfxSeA6OYmfOp5q5LtpccISH29kbwnCT&X-Amz-Signature=d425d082e6f50bcf3010c05e777bb0967e1ce9ccdd4d33f2bbf2daf0bb1e527d&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJXCCC2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCfTaMse30bFx49opieEMONt90bgCSdoTvX0Eda%2BkF1AiBwrGdB7Hc48cWpFyjDc3vpjXW7Pg%2FXg22lgWNeFncO%2ByqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIModaai6fazR0fb3sgKtwDZkeZclM0VNsO3hfh9sS%2FyofhqHnHXLi8Cxb%2FNiaMR1tAixcpnK31Te7wpnAq2KUIXDwoQR0K6ZsxPF718%2F27q4yIEYrkd2kdZzuvd6AK8ulCjjF2JKSiWxTyM8UgMwcUl3camxq%2FH0qzb9hfOeshIxc1Qr4QdhAJsosJsUowUfUaS8xmcXMGYGVq9wVB6SRlZTG9Btal%2BKQwMA2bzOtlOa3Pb%2FhCvubV8IGj989qI6pdSXOMty4LtZfdSzTbt3jVd%2B6mjPkjeuM%2B8gdsAJmT99QfDzez36oqSGZsIV5SWj%2BILeJkb%2Foobucud8oaCsTf7uZOWGV3DG0bQwYiIOeDRhs0re%2BN%2BlC6xm%2FUSmS2jViWCAFASt8UrHbVAlhUuVU2bDe61KJpchb2NEp%2BIoYvgns0w6a8Znn7Mni4TNwcyT6apgayCSwVHfWBNA%2Fub3BOwnDhQGBxcNaYYWw6fc43oQ3IDkI4Bu6DHol4aSTR4NWP0%2BDzW2mR2yUjWo6KQyBIiZbnJ5CWpzBepmetMiMsfRAEweNVQ6bilGqcjXCw%2BuaOtJdcRapmAVXL67vVDpySpe0%2FkBGTIFB6y4Q2eJeAl2srqEytz5hmzZqXGrvJ%2BFuAwq0h%2F0sZBNQlDy8wsLnQvgY6pgEwFDz6g6Wq66zrHAv4Qxm9b98jklqBtaqDdnudW0H2qQePGYF2aOb84hq1XHQ5BQodRjQacMzFB%2BmenLdemDdDXYo%2FqxP%2FBNgMytIbn2snGBJmJvZk1CAy7gKMqoCvKLi9OvV%2BKbDTGAGah%2BWrHRZkEyVYTO8LkALe6aTC4fKu0ZnkPdvwtfvx4VomzDlkAFdFuIjkFq4kNICtEVCLGtdakLU%2B7KNg&X-Amz-Signature=db3fbd75dd1042a27fa73f470412f3a81005f2078452e48d6c2b5ac3aa53b591&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623GAS2EH%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJYX%2FkW5I31KfLOC%2FknCy%2Fhsox5U1uor4%2BEBNfEN35TAiBhAxyBBQ0wx1wKk02KIWlP6PQn0Kx8x%2BMO6S7vjh5HtSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSLDRfe8yg1iX%2F3r%2BKtwD1dR2XY85nizML%2FNJVlqWplZW3kvW5gAtjrI04g3CAhuctrfs2%2FR8J4Oi04794NzaieDzY9ZG71PkctjnTK6A4DE6kZcC4mPi1XdbQk4pFmvqmp0nwsUPj12Z17B%2B1O6ohbRL5Rkc1DmeH9DfN7Znk8nQQLlHVSyzmq%2BH3v7VaztqOgE2JF9KI2ESBEMPNfwdqKPteKC1KBHJ7C5nDAzfxyHQUg0ZCVpDfTIc2NEaOoEToZ%2FxW3dsZvuFRBTyV%2B0GFxzxGQEE8SPDSi%2FTaBe%2FJyMWLdyv76pDf8kN9Ixj08J64utxvwI79IAcQAHXBPJT9YCmBnxduLscPy5huqBJvxgz5Og0gLyju0e9AVVNldxCI0UHLQMNIr9988PtGW%2Bb3jr0A3fmv7uL6RSDBeI1tMgUr6mnjhZjs1077ewg1ut%2FMhpMqL3%2FkKhH0tLI%2BNTf1h59QhgRgOMMMchuBBpszyCr2E2p5T5UvXRJge1XQqBzFzaf082zeBmUcEnzwxb9LEVazuV1khx%2B4HI4poYNIo5%2BDclmilqC5TN%2BvfCtK38eOwj3wqE5OnHzRT1iQ4U%2FX0Gl6RwWdIWA9KHHDRjTrKJ5w13if17lfovePU2rseO937CzT9Qy5vQL0qIw07nQvgY6pgFOlrLw4BRiuswS6Mr0InrGvEJrD%2FaEH2rW4ioekxclSvTHzt9oJVzotlVQqNy2ZBXw2wIlMBL5ZQ59E1i%2B9CAV66IdtETdrNViNBrpzIGmRQK5g6Q9%2BbW8nk0JJOLWgmjLzw%2Ft5jAmanKjItIImy0xL3xyRZVONDWhcxCKyzGHuXynikh%2BxjTV3oHeCmzL5wPIU%2F8gxYoS3EG9SckklupHNYSvbdbY&X-Amz-Signature=1f53b14f207dc8b0c4bf25dc0cb4fd28442a5d9d7748296026ba43ec26c645d5&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKSWDQIB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGynSqILik4s5hA9SeTZynR%2B2T%2Bs612v1sy%2BUtpKWzr2AiEAxH5A052sVrkI%2BllK%2BekKROGwrLmd1Q2G4%2Bmb2FDPnPMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmddOHXiD0sd6JqmyrcAyyPHh8iwyW1krffVseaNjBS9Drk%2FHDzG70k26sXl1t5sHG8cSewTqzOpwqrDmdVJcQScXe7bpREFr%2F60oacB1ew4Hv5Xxw0ouBkdNJPmgaiJ%2Bw4VRe8gcp%2FWK4G%2BRnuunQgNZ9UBImVwmsd4Bb7u7URlbQP3LdTJaaZZRZK1rNbGcPYODOZqRtlmxLtxV28QrU6XAeGgtguwSIgVa361dpcpgKE9QqW3ENKu7E3CJZPufkk%2FegE83OgKVM5p10XqZ1Tj55%2FwrswpGJctdPKzPWguD%2BStQc0Tev5tuGFSknHAdWgFnfb1yTgxuTBhaZRGCylkUbA5IuZ4aKe2ekNi7gvFykxV5mNM7DsvChzIvzW5qXYRQLltVYClc25lhFt5P6IvXivHM8229UkZBUvYT8Ha6bzCqAlvCIT4f9ORV334OFXPPsvrq3hRwHlRhRsTmMIo54Lvhyg3%2FS1CeYPXJUQmYsYni7WBpwvYy8ub%2Bdi%2Brg3CQ5%2FoiSIvqzsPXaJ%2Ba60yxy7ZZK4PwGrOkd5Ipx9Shlbd5oryvHLE2fXSFe4MuGnrPA5hfDquJR7ymLGNYMDahQ1GL2ET59w1XR0Bs8U656yBOlJXtlb1%2Fj09x7mpVf7xXuWKhyPYmzVMPm40L4GOqUBZ1hJ7eNC1pYRlrLucIGMJJtj%2FDFZjisTeh0CQrD6Ekw%2FWTjNGY7M1ndGdC5%2FxPg1dAmkJpkJUukrooyH1wz5%2FacaybZOW2YEmk6WlHkwakoDSgmIILA7SsZRXexiOKYMH1or4ffkLR%2FdVPIH%2Bn9ebrOdY29r5iyY8QMbffdD50z8GdtEVJo97N85Gfg868ZzZHpzHVmOKwgpEsgTgSYpGR1GbL0s&X-Amz-Signature=a1217f6f6f5463bca6b4837f5fa3bd9d12d5b03294d682c8a2682622ad37bdf6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTLIWLD6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC24hzd2dQzBb4Yc%2FM%2Fzh28ctcLskYbpmJB0MYbI4BN1wIhAJ2MSmpEP%2FNG1tM1M3OuHS5nUOQq%2FatgFtmRTakGA3l9KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpVHbQyGcbKi%2BgHfcq3AP3R%2FRH%2Baf6ngTR3lcXLJOIR4wdmIWho7KI%2B5MaapxDNzfdkBdsQMOah2rEWPbvhfAYutmy2TAUkylJe6Zl%2BATMy%2FSUUU2cJv3JaDLmy57kxn7DXLOcLjDqZ%2BGdFgoCdbiNnBN0uIqFsltGRqQAUl87bdrj2S0p41FsqKn9C6ruMYgflWjLGADerJSgebJsvbzEiaMHFWnTWvmQRb8LoItpnymo5%2BeQuzC7eg%2FWviAoiBRFVd2qgXm2awf%2Bl4pCE0O7R3D2Lz0%2FNjOUrtBA6dWREX%2BNi2lQ6vfqRl2ESFi5vIWEtz6xXdDscaAt%2FT%2FnSw%2FEMBlvAJWgrRSIZo7q2SF7XxzKSeX%2BD9DDfdPNPyLj99EBdVzpZRHuZ9BQGJwXQm3RcXI%2F8kFYENdbWz1l2ViXKhZPm9wH7UnDZZCHlK8vmBvQxgy3g3mlC2WlFCelPmlKA6fZ8bocETnI035ZAoZGIvHpZIGgTsXj0Glm9xnebbyesbKzT%2BCqiiZzpxqrru7HGdQQme1LqWY7IrS94s5zLADvzVcwe8z8rln1zy349IyIvjgKYMG9nQbVpq68xObV6eLSB3sJBBdtZMbtFRhgVkC4uGoGT4ql9rtS0IX%2BJRnUQpfbyNoQkNIMzzCTudC%2BBjqkAVuvJkE5K2Fmflzt33cDAhiNgKubG5KE5XXPdv987QVSt9iVPv%2FxDQJJ%2BzeZNsmm5PXh2o%2B4WPrdZ%2BCZEUWxblpt%2BeHiygMd2qMw8hEEJyK0muaR%2FlrtRhqaFpgIswoYPyG7ERfcAc4c1Jh2Lyzqj%2BsUkftKR2khkFNYNyoZ5hOgEdhhRy9LLbJkzbklzePa3s8TuFb00SRTSkOjoy9OzbOXJZ%2BL&X-Amz-Signature=c7e72ed155e41dafe5bf24d84f41b27db1b505bee2195f21a0cc999434e56d04&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645CQYTB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuE0apKXwmUN4dg7L1Myq0Vcex%2BUiF%2BdW6FpCWKxEXtAiAFFhTFltRurOonz74LqDszaHc4joNOFJuCtCUAxaujXiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbHGqHw%2F1fvM46lGnKtwD8YFcOydtiCfD8w2tZtQ5HOUD5FdGdv67y5emm4Qp704r4xtbPTNOWjZK4aGgVxNhWexj8kwmlb5tLXw82m%2BU9w7Ws%2FvSKO2HjGbnpbFL%2BuBSe%2BfwjS%2BKwUb6VQN7y6l1RGqW3guZHBQ9pRN6hksr1R2lfZYnxlCls159I0JNR9WRjcqNqpa2g0qe99Z%2BqsTKoipn8YxshJex9zs%2F9JC1rJ9iShPW24xb8wlbWZKoc7AuD6Ua5KVr33b4symWkyVG1mfFXdC309i8P6b6y3BijLww3WdEa5sr9hKPQJRawhxe8C2oXQe%2BfN4Y9vYM7Z8k6jCg0t3BgTChfVZXRWts5hU5Dlk%2Fy7VJ8djWBTWCUpJYK%2BlgkBFRigsgcnqeEVvx%2Bv2aOKJ4pOv6VWBlYF3CPLBeYxH5jAfzD5RTcaekGghJNu6zYXfKtX3UzJsrbOK76XVKpRV7lEBukb7h6l1LElRjEOwa5upLVQYKLoSmjWYyCuKgxL2QrOlYgPdzyWJJVPrS0UoElDlErIspcxmbaD1Hnd0fYtL6pqjtMkZxxNB6XaKzaWx1rMwumOoK18gjX2%2BGGK3PvYGTLvy5BfyTAZGXpPhU4ZaJsLigufDTf2VTlR4a4x4vxGJNdUUw8LnQvgY6pgEvWSgHFhcyzX5Bs%2BYNQTqlTOCGaIK0Bypn8gwGKoHi0yEPxjX%2FiFeD58TXfU5sM%2FEzcTJ4UhPLj6HiwLC29D2zKuiBp6Ku8qDyUTDD7Zatoy%2F7NbVEdZSMsx3h0v9%2F%2B%2FghJgmYBp%2Be1zJXYNzLWZoCZNOy3MIF694VPpvtg49NLvB7QCFVwbDQs%2BZRcMVRzSkKBErIopzFsyonJCHmY5caBxREVJAh&X-Amz-Signature=762059c0b9d7f9d7859d00e381e2d462b5de914623b0dba130534524323ccab1&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

