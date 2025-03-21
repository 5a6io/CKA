# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXX4OIB%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCN%2BySpZ%2F1V95BR%2BXeMo5MUP905BeD4PJw7UDBvQQE5bgIhALBgSAQo4%2F63VBQ9HwOL43XMcc0DHxog7sASok8UX5FtKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFZ3Cj%2Bfh3os7ZFsQq3AMXJEKo97kY7AQOveTsOr2V90%2FvR8EwOdv9Wc%2F78ZkSkyyjz%2BbcbB%2FreB7ol21BxrV0TgENqtQ8SoVv3L3IS6IViIC1RP7UFcQlWTjvpO293aGvILuoJXCLpfMjCYmHwcgSMiID4Y8XG%2BIvKuAI7QEL51wezysRK18P7Yocmnlbfayz1klqSDwiXE6x2hDwHwEZL1D4BJ7Q6%2FuGGvOgw92mEoevjLVCmPkw4EJ9ROCu5FbljsjgfIv3LFN6ZWuk5LOZe6HeVUEPApuMNwjRzOe5wWIb8C7bwYKEdq36N7N0FFvJun6HkpbgSGrfdJpCJrp52TztQF%2BCt1Gt%2Blm79dQOoLH1yrIj1OgH3ijp19ThnSmqE7cXrNNJcRCoBvqVRVaoVVLsWXvq16ASVVAK8DvqflQkcut4ZYBqxIaGo3ZEF8dOscv3zyf5Tm1tWhwnaQOhlcgz8TitDk84Q4r%2FGsPjGJWKdviqxiA8yxnST%2F21611%2F34pyL0Adw5ENoLAmKWijM2tq%2F106YfA4l7ivQasuNrDACiCSLdO1%2FFsg3e8kDrvNGQm1Pv66vVfdlGwhBWfEwTN35kZVYeFVgpGcoBnBvjMip7krsa%2BWXGxzMKdEamMUGm%2F8fayRM9epJjD62fW%2BBjqkAektB4AJmtAzuNdqO%2FbfbQUVJPWI5YNxWYRfQFq5SupoEzhYP9%2Fz%2FqrA4Gwt2%2BmzHu19cA0CqfFc9cLt5ej2XLMWapBB2TAI2w9a8odUfJke7eN2%2FpZIMVysLBa7Cl2FFnDvtuscP3izMwp6rw8LSoiKm8l7isxS%2BMaovJCcvVGTNXCvYTl42FTBQ8jcLKseSIbBa%2FDtISmbtwJqvkeVHNEYl04X&X-Amz-Signature=3596e427293305b0e551f7dcc0d775637632c5320af111c6fa35918f08f62493&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPKKX2BJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGWNPHjGMND2cmWO2SIJo9b7IdLvJLUo0gezV%2F5tUSKVAiEAv0YzA88UAdtEkfsgPQ38%2Fsqeeno%2FvVBOhlYY0ceikZwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIk18IwHE7BFeDhPCrcAyvq8NWoTQQ8pdMpmeBOMb3A254eWn1MA30CD%2BlmdNc7as9dcIhh%2Bqn1KxZeD4LDT9X83Rd%2B%2FGx4z6mz0j8%2Bhu0ilaDiy8P7tX%2FPFXM5ED5lSdMejPa8XlI9kmQHzdsHDTRTSfZDTAl7NVo6%2F3ztAv%2B5SyXGEr%2BQQCFGiID1PUt7btstx5bxGS2C60i4IMN6lyglzvL8AxYFNTkYwncc54426uts2zQkoV7ll%2BLUFuUwaV4EynmNnHEKLfPZWdawVAZvLpuYCLP96OG0wrVi04OKZeKDDBo2%2B1lGY0%2BiNa2kF94c3sh9RmTAc1KF710GNy8JGMkpgrXPXS4IWOMRlJfhQLXtpyVAgLey3Ct4T%2FgnxAdMehqFD0jI5n89kGjgA4lMcMQVt%2F3FbFmGzhejBZJR2PxWLFbFQgIjweF5GSfpf%2BGNOsj%2F6m%2FShQ%2B5Q%2BgAnmsK7wFr2PRE%2BjBAHX%2FYAsVP7Cm%2BxrTWHg7D0OqXEaZ7yc94TKVh%2BHc5yPGjhTIpXV8EkAd0wvmKbLAseKk0a5MWnBOIGzB9ykD6f6KxMdOyOhXbuuBuIebtKGjHE4X002ukw3KH811rtRc5J0I8k0dDea0CHHNHsD1MeqfQ1g3Hbcu%2F3F7lRampG7ORMPza9b4GOqUB8oL7fBYhoLPbYi4LtI8HasFPn9%2FTfz%2Bm1mzy98bAdcPbjhYcC9tnMq%2F72uJbegm4gMlNiC%2BZk1KYf5PkUaWhbZ9g1cp3hdQ7k7jYTkDHO99gKZjQnPKXuN2UMVLlBUbm7Pes%2BUU5GSTEt8G5va5%2FXjtOyxcDZbJ6ehgNI56HJQLEicz0rHyS9M7MBg7yH0HahMQlAcNXqPV8qNecJyC9Rw3hDJH4&X-Amz-Signature=2bde144c77cbdc958065c54fb6cb08341cb0e03091d435c46920d681ef84b3d7&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZP4CWR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIBwcIoD3lgjpnGF0Wcdme2FtNk1aiOuN%2FmZ%2F5Y4oC2VgAiEAnuEK7Y8mHuSO%2BZ%2BrlbdyqnNedThtNAwj39%2BlYrbvd1UqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBv%2FBZzqy8FNGA52oSrcAyT97ZbuOfxt06SUnsj7I%2BCAy6KbHVYKHvDOOABDSMNGkgBD32UO40rkN3meeRfDow0sAS8%2BSi2yLrCBfE5eA%2F74N%2FMelOUDepgqIX9%2FRVnF%2FIBYnPrnTcQ03v8Z8zPQTO%2BCTR6yo3Itn4ACJiVQSZluDeWMFRmNUyVExwOiqS0sJrJkWxnN8xqGKbokh2LJhsdfhtixyO%2BNMt56pUOIIrODeYrMzoa6oXR%2FRN460GP61QWkHZYHp4ULARL7f473RZe7Zb0dRiR6Qx66akyCT0vkVkTSPLkl5LplWmIndDX7FfnH%2FlXnp8CetJJopNIe1K4QafniFU9uVMEXODOOuvkLi%2Blqp1BXziTa4cCHD8uZ3vCDmoR2oWBWOhdKzNoApp4ZJ8BuCCRb5iqsPYi%2BrDQeiqcvIo%2FowtBNX%2BO%2FGLvPmMCaZnTx0SuyZQ2Isa5WsxU%2FqjvwEnGAhu9HuwPvy3P5frNDgF%2FuQllpgWzGiWdkgXGIP7oyw1ML2MpHnlLPZF8%2FovRV7MoTJij4ewIEzkBIxFnc8%2FGV89R%2FVObAipZUkBkbZG7bNhV3GPPNZrq43HkQS8m84mT3gt%2FbapiNwa0DJvyg6mXi9nMEphDOXy3EG2%2FZfU%2BOc1l1v3klMJ7b9b4GOqUBB8X6sjD%2FeTPv3LR3HUgNl9L%2FddtNI7we9nH%2F2lmiwSN6VGvfugHbTHrC9ZsIJQwzL4WYHrHajLsQ08DY1BMbfKlL52ZRgd%2BfHV5TX%2BeHIyuflI9t9f%2FTxjFEBVS7rO9bNyWaGbr19NPJ%2Fuw8CBEJyj%2Bc%2FjEH%2BFO%2FKeTOoXza%2Bd5R7F2KcJEgnMgBWtBTL3yztkgGY06EGUgnui2sFau1neD%2BK6b9&X-Amz-Signature=4e3c844d08ae1022fec2e336f4784457b888f30876be90d28ab5b5358e44f829&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3XHKFI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDuLhJrs8X8ftckuNKA4D01XC29ym6LfUDjR42ORultugIgZb%2B4zOWjlRC3YMys74YbcOifNYEhdYnmK3hXep7WZqgqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOt41Ok4SjT5d%2ByySrcA06YuH0GetGo6d2ExJV4ByMilBYvRaIZyicWt5Vs1mrHwINApJ1AOimwqeyEIT75gAXl3sl1W3%2BJaEf3%2FNHCZMDFMIbG7AzkKnCsHbll1p2EcTdkvy4%2FCG3VblWAGu45EvMlpanDL06btTTRg7E6nhCcK4lrbBFIWey2S3GjwzwKxuokkdf0bms5XOy56OZXiblSOTsloVhBsrL2EO21v28DjCGgolQ4vy5WN5MuEUlVH5%2FkCjQxocN0Um3xauis5%2BdGQiPkZD4i%2BP4CRoUYxJuljUHQ%2BFLDAuoWP719pf9Mh0U%2FlNO0il1TJHd1Y%2Baz%2BEM6CacPWjtncF%2Bsm4T%2F0OYf3E3BWN4JZJvE30Qg7C8tKSypTf6CMsDB8csp4nIYRURrxGGgaKQLUlpBaNkE%2FX1tVBJkd5c6SzdqjT9L77yNaolKffyUEz7Z0KSV3UbdOVz%2BMyFwefL1%2BDem%2F6Q8fSvzY6B88CTJT3IMOY3vTZSaj5bv%2FhdVDZepUh2Wjs3FgZ3kCi85ram6lxrC9%2FzOD1U7VQcKWxJa17FLwHI6QFKCvo5H6f1uuUA9RjffmaxcTVtSyexyj8hPXxoQ7gDQrKJd%2BIxyEV6A6saGPtvwpZcDFbGnKt3GUnTcbIAxMJjb9b4GOqUBDRfrP6ITSCbuuTHyzxVgozh%2FAcqD6iTiPysXnYJgqFW0Qcx90TQJj5u8hmdVikdHscM1x3XHK%2FPdJNpDXxLPIiHDqX5ogPdXgJ5HROl1u%2F%2Fdp6Yt%2FKz%2BOTr2XLBoehXGKMfpIpXe4SkNY5Egi71wUrezi5FUGEOx7OSkuKdnR6eez9mT%2B2zMI2mCxaMAl9vuUsUeBjLCBPT5tQ5dsLRmI0H1Juqr&X-Amz-Signature=ae333c7fbc68be75089e7355e72505ba228f11a8b9b638ff9b2e1e89bef71bac&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVLYBCKQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIGoAW%2BLhPAv9pR9nNFMMwO4OzVJpQIgG7fnXTWQVNnmtAiAZvlc3qMHqmSoB8RyNOGIZzoHTL7uaMpbq0gJcK2EZjyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW5Ib5PuIwFOICE9kKtwDAinqCHBShtmr%2FL8%2BjlHeDSrrsdWDJz5dcK392ulOi9OMtcwCPrzBL7LWm40DMGI7DnqbMT1D8wm8%2FuygF70INazQPX6glcKnLBxQNG3Fln5ukfuTF6kC2miXzGNbVmIKD%2Fd6RquL7eiezEI8RT8yMtRIH66KsEMp9iW037t7MFnRupq7MVgDnmZa8uFUbN2Ex9jtCKYAQh1dLzFMuwVpD174Axx8MomcpNo6ZFvpjF3BPMLGoV5Cj3NspKiEcAAJgqM2K8BqVVNLvWsB4WjgUk9W3gxqLhvqu5DPSVXYVgbe7hGldcY4TvnluBHa0E3LVvpjsIZQVLI%2BuwvJvg3erjHTWxSwAT0onkykVPKFqHj%2BpQYHYHCpthKJYV%2BRF7%2Bc%2BRJN3BJMtQ%2BMIswEdgZNvLasXnlE7Qeuqhx8fCXtUt1V4U%2F502K3UQCW7K9m%2FyRyQgdsxHMSPyLq1%2F9ktFD8q7OPyimJldi5a%2Bn9Jkt9tJl8bFVorNWsK6BxHOUUdsIw1KlCNC8MpHzkb3MEncf1uh4x%2F8UJHbwrwgm4NRbmbF%2Bc3npkKSpxx8LSxkpser1Zq2GBM%2FqdxDkcTtDpPh%2BtTeq5eS%2FwmzkRmKuY0ZHRIi8tvsw%2B3B9evZygoR8w%2BNn1vgY6pgEG5RdiP%2B3vVccIauBcR84rnlngxR6JeXHVdY7L4oIx5Ci7qsa54ugGXnK6jaU5UuCC%2BziNr0lc7cBC3lnKNeW1psF1M4Q67QmuixjDWMVPR%2BN%2FHB8VZ%2Bqbp91z7xPd6Kj8epPV36BEyqnHIHu6O4oV5mfyhCq6y6KarjBwGRjD4CSZDyfh8r2vLJH4h0wUCcHx1UsO%2Bu%2FEW14nJB%2FEghj%2Bs6GbrEMD&X-Amz-Signature=21552690c61fd47a5918166b16299302adb7c1da6f7e9ba9c37db2c98ab7e1f9&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QXSHV7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIFLTpRmX4ZAZj7xjem8sCgifLu2nMZbtwDDj16DFnWWCAiEAiLnlexRDvBzl1gpT1kFRGGJ%2FeELs%2BzBKZ4kdhaovVc0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2F%2FhpIuAKBOqtRuLyrcA7a1dCxJ2wSWSD%2FE9iGAAGEt2lF6kQ%2BdGYjnFuZ1ItBOSAZl9oPvQnE3iJ%2BSFHR3U9qnISAbpFLOWHGJmGfa5tqdE1RE96T1IRDrhQD8w80xKxEasswfU2rsfkBIBWZxYaqWOEWn%2BCoz6i8lYIok4ZEelrbwGd68d1a%2FnwOQVwGdKm0JdtuxnrpcKB%2F3RqX%2F9tq3cUMO2aiFICFqRR8ffXrRbPcSBxFfN%2B%2FPPuwLhK6iMbI7hGVA3Qj2gGKP97u5Q8kmZ5JwiHMM3Yy5o5kkX1TCveTUMPnoLvYE7Gp8kydH%2BgNxeBusNBKAmk3k0pHq2eQKn%2FyLk7y6ZMC8iEyuoDzH%2Fe8HHnGSjt8NXxvR%2F2UbxFRBPP0aU0pC79Jw2pG94cB%2BgOIW8tq3l50aqv6dkO3bcc05u%2Fw00lzYANuV7KitXpdI0oLRwPnvpAgYxYc62zZiq7cePF7YWF3Qmz9yFXA5vL%2FjXYZAHBs7l1fjoUQa15pi7yG9IH7Lj4vhv0xQJp3kPCqQaQ1jbEdyS6jAdUYan6O31tGMCLbkj41fDfmWoZa2klJvtC7rxZUr6X4VGOxidhWiOmgJFD9Aqn625ftmq7zqE7cuJ3bfWvRCOMfxynO9zmIxqnaeIaKHMO%2FZ9b4GOqUBSAYg80L5EPcMcQys1HKVaez0w8h9CVdB%2F5tu1vhTsaoV3Y%2BcQGNjhuQumuq9AA2sJV%2BkY3DBe%2BPxWpzjVISrt1gTC7AFVQOSy1V6iG8Qw82nL5IZms%2FU8FNgpgXNTKjGer%2FppnzLjmOv3huM92GrVlnC1eRPk5tTNffo93hYBozf6cfRZ1cf6k8qabw%2BvwVD1n1ZnYVMOYOlg3pxPlVbRhxw7Fhh&X-Amz-Signature=5a62a17d9db0bf4d8efe026ca7ba61a0c801298ceb2475ad1a7c8aac4b149f51&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDTYP532%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIFzs4zq4cEf3dPaOoJrHxtSlOBSZD1pdmSR1c7Bmhlq1AiEA4Y0NT4nqM7yJ2LunKcES5z1WXN%2BgMvYjHJybTPSF0NUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FjuSg0C6JW48FF6SrcA2OciovEjGhadIRwMlAzc82IT7sDlHZsOvhaU8pZh%2F8CSwPnyhv%2BO60vB2J%2FchWtiGXvpWkVM857OuEge%2BMohnZL6f0zuurpNaM9iaoEHEwM4u5Ondgk8vagwZwr7LACjrOq9izUkI2peEQSik4%2BzD8matyI%2FzEJwdN2eMuUj%2Bz%2FE5KNHa%2BCBCMPING7mIneEnXVQPLOOx3JxnZCYy%2Frev1MGXTZQA7UliXS9xibR5rWlYAIjuD%2B2WW%2FYK3aMmls9StivIpsCnyUsNCpXHDCGbUPiqjvhvd8P1y6GALn4D2Oes4gSrs0Dyq0uwD8E34fcB5kOmmxDRUt8kxW9k0beVtYu2sglbDmogl8Ut1WndH%2FjCe5s25gccLOI3a63J2iVqADwnHu0GCRpN%2FCcfkYt0%2B3bMrl4VPZdymtfTFJ9pYS8zNCms2HtEg2YSkowp9RcDzyXHme20ewtxi6990Lfx8QZE02cTkcwtsYF%2FHy5zjPr4umtsBrqSChQlwREKCOQdbxF9FzOsyyZlcJu9V0gY5U6i7wNTKNMG%2BmuZ94shC8nAGAASJg%2BV99NzUycpaWdJAQVok5j8vMF%2FsvY0D7ZqLy7rHaxhTeU19kIcAkvhg2cXGLZFOW6Iaa%2FcNXMPva9b4GOqUBOqpbK%2BpGy8loYOYd%2BQPnS9X936RCga1BGcHhNNpm5%2BvAQJGPiECPrWnD7UK86sPjGRPSWJR2GAVtgFaRyfX59XjDWBz%2BVGcRWC3Iax0b1lIOu8G9dQ8Hr0hd%2Fbvc%2B20Xy1sBhug%2BomCHavLZF04DGyIvwF2ttM90fvSGTEOAjD1XYmcl9wgCQXjR80vkzDH7UuEc%2FLN%2FTkdNhjYv244neNMCDYQP&X-Amz-Signature=63a89b946b2a8e10b99fcd63bcf363df3d0c0afc76f8e73b4384054c88f21a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SN732N%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIHW0oANWutCpOGxzIx6uvbPPJI2ntE0kB4o38iDUjXCBAiEAiMsG%2FkNcZgu5oGeIgEVu6ZlJQ5VBWtpI%2F%2BbrwUPH4uoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElyBsw1CzhKLuuzYircAzCSZH5%2FjVLhgnLLOAiPZMEPiuBa6CmBlWhWlTcY8yTRFHiUUbHMrCeTD882%2BMwMPVNauWXAOh0m3TgYhLqf4fq09VZrikga8fFywKExnkWnZY9Hno%2BCqVXijkn4UyJPUqj0FF0VyaUyqbdl3lCxaWl9zP8VSR9f%2BE8jMHD%2FqyJ7HAlWfJDw2FeDyDV2I1k8aDB5GdCIe9NpBHpIB%2FRIYOih1JqCp4Jf%2FuIk1wRfKQySUTjqZ0h%2BsX80gD%2BysPUitjlptm%2Fjw5yx03SDzNLecbrU51PMIt%2Bu4%2BP%2BFDH809nvJfw3RXZkRVJBmwxzXUi%2B8rrkLYAQCJpjczfpKVj4%2FglKX6HG85eB%2FaROzdPVG1OKEAwf%2F5XYWaPvC339dyjxKQvDLfgvcuxUIiByjZYPvGS9yWePIWjNpykl8rOllwGXEYSTI8hbZpYDtqSTvp9Onih1gXZcidtaDvrt5tA7EZkEnT8ZHtVi3q16%2FNDI1PDDJj%2F1YK%2FRdYZtLZcGApKtlHdKSdFXT4jVNH%2BPgD7GuKOh6o3dtrYPwfI8PbGqf%2FxYq%2FlAV4MuChaNp%2BzOTU0gYTGCLJPKuQb6OtvUHn7F%2FI%2B7hAYBY95ZyCEfqQz5KsUgkCdyWg8fhiW8nUKyMPHZ9b4GOqUB11fhaxSxF34kU9C%2FlYM0p7lJbU%2BM%2B52NtxoB8mJ%2Fp0rb49NmxOC%2Bam16Me7u0FamRJ3g67525hJ%2FIJhciOGS6Sx11Sd04WQ7jjGH0BxWeXgDhj%2FU8N%2BkeFU0RndTFcqV9GBfIIuCBpeTETfKvNUCizy%2FzN9hpHVLHbJ9wBurRAuROmxs121uqxvY5IHcFR5JfPpPq%2FbUr8NCvq%2F58RuYL%2BrW%2FbP6&X-Amz-Signature=80a5e10ad8a8195d63861c1fbc1624e06c612f336f4032bf4b93081fc6fcf28f&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYL6D4O%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEfcmcK1QTN8MEnWO3j7m5c3uivczFsHWl42eTAHJ3lkAiBtxARs5u8LHJ8Byy5UovjUq%2FzH5%2BHpjO1Kto1GjpUX5iqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8H8RY1uZJmTFsepgKtwDHIip7%2FDlzn6Ha6fbEgDKQAmuP1hF8%2BQvS2fM5WXg8m%2B%2F%2Fd3B6%2Bn87Bd%2BwPUAWpl%2BMvYRgDrTx4gwTm1bBpUZUdiz97ZeH1fYmSPfXdiOSjeddXHJhVBzVrmOa8ilRtbx312N%2F6zHZgjRNmkwWDHJxoSD5XRAJaXEX73yVHpGZapX7sOKGf6VVQfsKAtGQkf0EEqTDBHe64BLTsbt6dCG78msjp13fjBIjHFws6O2QVCnFlpNdmgizkfSAPz5oVZG9uZiqtPwaUw9tg1nxeu8TndHrVgRJMay7%2FEMpcfZHfDQAKqPyM4cmNgOS40cVuyv14zIJAMUlDKv9PtrcIEVqFoq3GlWiyCDJIBvw%2FtX2cooqPQZ0GXdn62WoaLd9nStklLpXbxOLIP%2F1%2B2BmmJKjX9uG49eTUG%2F%2FlEvmCNY3UqZCckP5pEnsd4h%2BGsjV0GCGxz2aNjRSSJZWs3x7Hrr586uxI57%2FsEuPpr296KlRIuduFZ2EJtcKtZm26CZoe3WzzJCH0Ey6Zm1U9eKs%2FetCWZTm%2BS10Iv7SyQYoYYbvSmI8%2FHbr3hL9Ad38JFAsIInRayWxfXMO5Zc1juD%2BY0x4qAMLQeg%2Fe8BXk4%2FerIY7fAcyJP1Iq9hy8NTEGswk9v1vgY6pgHcVSX8vgMnPwikcCbGd69W7Q058AP3OPWhiKtSOVmlLSf1PzaeJ%2BnGA3%2BKOyqy8Y7kGpryXut0VXZdJkwBplES8JsNUbKeGce%2FjLKnS9TVbAyxalk6H%2FMIZx8YEgvS%2B0h7DNdRxWE3AhP3rO7Oc25gyk1Bf6LWpob4YABHcctB7r3NklUIlYo%2BVwbZVVzXG5oAwTfrvNeitBVh5Ko5VZc%2By%2BSNHLC4&X-Amz-Signature=2325bc1f19b9f0efbd633472451da76bdf38080efadab28eb6dcaff98c636c68&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

