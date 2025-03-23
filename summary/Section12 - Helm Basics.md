# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNTQLXE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDX5D9%2BqzWJ%2F9PQHk3KtI8g8xg%2FvS%2BY31w7bmZrog1nCAIgXAtTJxb7da7sQDoatREXgeCyssHc%2BBNVtKhb9jZj%2FhcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG12T2avCA24oSY1%2FCrcA%2BaIedJB5w8w360b28wIG%2F90GmjCjXsrYGOEua1rGReXPHFFcosF%2FKr5ZkZHQrzsUK%2F%2Fii2htWnYVvPaIJ1QeuRlaV2YnpFWIVFQIIFkfeldIUqPOVkX0i6mWEZovf5BqrLQ6xX5NdndhIJrC88DRG4m4DuB5MgELX3xaiH1xHWjOiApv%2F92gfvBxQnesgtfUhUuuU8XWBoR%2B3%2B0jsQnw4Bi%2BqmLVuaInA0%2FBYDhRntrHvLZsPc2NeG38QyIDTKk1LIf1jGJA2TxtVdqhDM8lZJoIsNCJYP0Nmvs4sPtTnV4R%2FrH2BUXA%2FxDHGanGqnJlbE3PYPkQPYIBb%2B8YWzRbd20DgN4J8%2FTRfborKRPl7wDNElWX8xisnWdmZam4HQCM5CbyTVUfRTb%2BWNGK9nAm3hKqcWJ%2FGZryzNrYMTEE3iUE8F4TMdhYiWSBf4zm5qsxWT6DQEA5S6E5wsUWAnj%2BiaWfV7UXt01wXFH9cOtmAfO9N%2BNC0aAEsxIkIvL2vXfmz%2FDRq2uII%2F3Jf95np7pm4wnb6GaQ9jA2f7F7c58deqvdBXHbibcuNbqo6B8RLBWDj3n3AzuBYhXz3Tt2e9wNXdDwUUOFtoa9%2BSbT5Po4FSInEcaDPbwlNX9A2UwMInN%2F74GOqUBaENCgOg9avniWSwPqwE2jUfJmb933n8AFbEb4%2FM7KnlYWjzLIgQvvOHF8Jx%2BZJyk0K8sjD47n7DxeKZtY5mTqVRjjwwrBnSsgwItP4bKF8daozlav4OKtr1Nd3cjZBQkgynhDdHgQhUJieIgsj%2B5fpcyPEvPywll0%2BnO%2BRERTo9JnZCFwMFz%2FpxHe00KggwJRfzZJz82az%2BtY20p%2BGkmASz65Jkb&X-Amz-Signature=0fbed4d3867bb1bcbb2800ed7a45cf1b0308209efeb9ccb0d8eb736f07fb3315&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X3KJTYO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGLvwZuZz%2FkaML2x2qSXrbiU1O89jPcZ4jIemkpSdNPSAiACsS4PJ%2BHIEljB%2F1J3i4o%2FNpUT4PJHwoj1ijPE2hpI2SqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFPioUKVM4D8LTFnSKtwD4GVWrVjweGyrPm2%2BiNi%2BVAapbL22W6TEI9I3B5scT7ddc2mX9tfzRzXU5ZkpZUhR7wZ0Ml8Ws1uvsDh2EVqCcV3HbygRdvHeQ%2BL3U2UuhocevFBSXEXwOvsO4KJ9GYD8DIATAJ7WHgxkX%2BNHMCa6UkMB2fLCX%2F15YPirMObl2Qv%2FOuma%2BOQwsDBEAC2Ml9qor%2BnocuEt8TBlZGDvhxOmO%2Fy%2BC4XaAEBgwRLW2h1F2GxuDi0oD0LSVZg2XKUvSxklfkBqKNVDg5A%2FZU03x1dGWtUi4VqgrjSTi97JxJOMXOOJ7WOG9o1KhmISyWxuyBaLpxyl%2FiLJLjoOmROuXXrZmEf%2BI6Bn8sup9VHLk%2B4%2BOSSKv156mG6VdZGhztIoRvwn5ktP1zPlvDjBdKfqqXv91FNglzPghHXGJnvijomBii6WAr4yfcC5QzP%2BwQ48YGBpCFACB%2Flu7zlk%2FCt6eb7BV3AFwJZpulHFAoLk2WpxYZpd8n4F2oNz4jqu3D4EsqQifawGY8mesefW1pX4qt10oTmsQGKWUU0pRz%2BRAlGJruivzWhdhz%2FJf9alePgdKJa%2FT0I2Sn1CHPjnXWSJDLJD7Hk8ZKBzAz0LWc2%2FjmGbkXR0v5qrTX13Oe6U0IwwnMz%2FvgY6pgGSRbNOuRQTdgwZoZlxIPg%2Bnbdy9BEJ1atAouMBfoGcvGdJumN0KWC8EPOJI8d6o5WJihuz0Od1ps2eWcLsuTCHLOXXQdT49ZQ7LHlbzpiWs2W0B%2FOJgQe1GPEjTvchLZ0Lxz7WFrCZjytGskUMeM0aY7UocpukMNfdfBmmO03YeTlxL6Jgf0Y6nkO0AWS%2FSYx8kzoES3iFDPwx1pryNCrn8r8tW8sV&X-Amz-Signature=d84b283848cd831ce7727c62e529aa031fac655c09ffc95df274e4c3e85a05c0&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STDNZ7FA%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCtDQcHoxRCedh5dCI2btQeFBSUQN0EQe4IRmF5GXfY9wIhAIFNfaet%2F0Vz19zRKyLjSGxLVzwPLwzGY8Qqo45ODznJKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjJgCWtObSLtvCA1Eq3ANjFiDaDExOWOlYqKYurXUV30q6Uzz1c2gpdkp8Egb3GVMPWv1OQSU5xvg9qc4xFFFKiTvC663o7mZgYmzBSQDA4GGlyU9jk2uQtBZBYNQd4zRw9Wg%2FBn0lTkUFLhW%2BaagJgVeiPB8G%2F9npa5Y6KgJQsW72STCLHIJ74ggBQg5yQb6H7c4IlkDaJB5lNU82EjFHfjIsJGCHiaQv%2FP6banmcQAIhjnNYKMdm4vzbC39P2RjsmK4fv0b9whBre2RubuMb7lTy1r05FltwGblDkREtslqpnMzp2QL5dJyNpiuDrPTWboMCmbhAz3hjwZULFjyi1NEBZ53LzQZWzS8uYjKKo2cPQ56vqlI7QDDr21fF1V8GARzvCHYKsLUfV09HsDgdzvbUU7E1F4web%2BPMHR8KsTK8R52AoPM8S%2FUki0d1%2FuDZEQpZ5Ga97mwfiTiWxAv0oZwlApLp2RDRZnvvaay3OY4RqZLvGOvW6KCmESJ6LR9j%2B4t3OnENDpvwZi8SEq7gt0VmSPLS2OMQRWwPPWYKRrvGyOoMVHTqnQKM6fU69R4Ul09rEIZnJu1dNS%2BHT3vAfQ9J3PJ5rtBq%2BvMSMo434FNV7%2B22%2FcJemwqSDI3F8zw3tD%2FEHkUZjLua6TC5zP%2B%2BBjqkAc8yMQZiGQWTpwR7kf3d%2Fyn5WSmbn%2F1pfArr%2F%2FafT3SbpfjiksBsz8k4nRA4gL7ciS2nDh0gsVt%2B5kNWTYYBs0%2F2nVdhWgZ8iOmVDu%2BgjITL0rWzYg6i7k%2Fr8Y%2B6UlHUj2WJeOAsQ0G4nMVa7N3r0DJg3dAl8fYHgpQgmx62etA4KEheaGhjHSnavJn68SVTFtC3hPbDJb%2BmWumAQ0Xczpu7OpVG&X-Amz-Signature=d2babe0654171c1245013656fc171ff3a18177e6208b3fdc6e25d99b4f72c648&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNMRAZY2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD9cZrCQYwlPMMwkNckfYXgxeBuPtOHAPF%2BCA3fUsnIjAIgcmQcailCQ78Ju4TC3hFrjYnOPwzgZePi3Vze%2FIPlQEAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FQ6vZwVOlzd3hl5SrcA21dwNCAtRYcCsWckeC5QZiTPwGiPJkvuY%2FA95VkmU2VHu9yVhJoEv%2FhlMkuG5WE8tsLTvTZzRPPeGqywD5R8SVEElzj0tTtqECmgUOSLQvKjutwVKIA64ME6FqxnSbJ6NDNmCu0xehdYNxNeMm4ACOSzOIUFyCs0wm25DkFi6FWjmBywGR%2FD8AUUnD0gwsX0V7razuD%2BcO1yo4%2FyZdIOmVJKC1AhGgHslgddEGaOJR7DnmCFFVDLwBv3Bp6jluedStGoL5hpLFjnf%2F8F6NsLLclo0GqjCGnQhXKn2%2FoJNByObiwQ1zPOb9TJdhzlTSIw8GtjlBPqzkZQ2TouhH6IoHZRBzmx1uyxD33vt3V%2BPrBpIE5vUnUjVq%2FT6J4r6VacjLv8kU1DfeyXmkhlK%2BsHTBvgAte38w2O2VRFYc55ESjC9ehx1lRbSOUdVjGDJb1VaUELrS5kTmFJan7EGlQ8NVLgCJSO%2FfFzP0MSzuD0MEP8NZ0QK47w0Pbwd0Eodpw3tpIWB6ueMY8fNCHkbFpD0nmIJe%2FC%2Bn97KitNQxmyEMuE869n3mY9V0nuD2%2BLzC22CUtfB3kEyqJjoa8endETsaee5Dn3j6q0s%2F8N5XLnFn01tEdssO%2Fm78qnqpAMPvM%2F74GOqUBV%2F2U2Zl8yfofSv4vSB6t8wPbzRqh3BjjpbJSc8wuadLZxDsiOFiFIHRTADLerH94FbCAXKpkwsqBIkW5kitVOqCXok2MDSZKOxVukFb782hCzcmB6ntz8zJC7Ss0XdzqTYKUiAJq0zBoo3dlSNaZgmg7Y%2B2lXseZdGyOuMYDcnhR94FMxWj%2FXWhjqkZYLL3kT4CAdiERgYChbdQj04%2Bycn2VPXGl&X-Amz-Signature=b2d2d81aafce1cd5ca04f232236359e8dd07643d353fe1012777ca9a73007436&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EY7N6TT%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAW0Ero%2FuqsT30wI2KqGHNjOZ22kLFQUyM%2FSm6hPY2BmAiEA2OAZXOcHD1VGfZ1RCuKO%2FRPk0oS2L%2FzUepK0mOBkEVcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0JMarsELiGPq7txSrcA6S9cDQ1mqW4x5LCPiJiNdKR6uRpDF2a%2FqlFoaEymbWe76650cwi9qx67cyXuuifldhvpT59yAqx3sZ2Vd3qJLDrT9i%2Bq0IDNbOpw6W4Yb3NSnBM%2FdV3VE1wPSmfg4zra5KAT75C03nsRPA35oo4TjcdcHewV2CtESfmF7XRZC8TpwdcLkfY4V8cmWLLpR%2F3TnR8eMYz3xDolIS4VuFi7jys4Ai%2FyND5r7Ow%2Fr1Ri0kmjIuoYbRjrIXSmOi%2F%2F8D44eqy7Ye8jzOjkxov1j5GgRP6CwzeeJJRcUijrWK1bxheMkcjim3uy8z%2B1hAQPfoMmgcAYfYb7Bv0B8RTTyruwZfPhIASYo6VT0wTFvkMGZeYXY9tef3CAHl%2FoqoGqVga39nBbrgB07y2XL2723yLKyiye6p6RMckfFwecRlie42y00ENTPyj7gmczakQv7p6mRuTVd5UHdlA57%2BeIZUiVetlTWDbNkHrO0AbqR%2Fao3rYBZ7a8ocjx0cnDaQl7%2BHCwuTTNWjqRxkNoFDWH2t4pbyVm4KPA9qUC3FIPJ%2FQu9vGUqmdL9lq8FHg3uAfZU%2BFbH5MK%2BzsTqLJHAMYZ4DbX9MaTyIqg6zgE1beooVgKwHp8PsI4Xt1ZbfTNjkrMIXN%2F74GOqUBuk1Gg%2FGD72RfzNQb%2FW2OXiq%2BqX7tIIfCad7bUIpHerVUqGPTYvWAN8zGVjpYChe6JwAX49%2BczLfce0TbvDYXZAvtE4UCjpX%2FuObhnHe3cwFJxQ7fFRJoIzeIs8MCnJMu7qgrzFUCtIptTS%2FQ1J%2FhSwXJlHhM%2FwLKaUgIZLDaYbaTzFuorlJiw9%2F%2FfXOLwXQnrmPEZOWGN21smBggJ7tAlZBen7DN&X-Amz-Signature=a39269d37283e6ce562a0f3191015604a028dc1f3538fdafe36e4656b20cb679&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYVDZBI7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD8BKTXvBjbb%2Bzg%2F6TgGnUxmqxqxN3toNCm7R2Mvbq8QwIgIC1%2F7S3oF2AI8Ut0lUuOTBZHH1LQO2uzMByUUAnL4x8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FCaoX55OooUs5bwircA3WVuxdUopjJLXelkt5Seqs9DGM3fZm%2BX7cOWyZbkU8PNcxYdnFvEHqkycXe8Iaq2dIJPF65zro89sPx56fVmdbbvn7uAsGRtlyIpH5%2BuJvsLFqDPM0aGzHBcN7ynpPs7e60%2B%2FG0EHPrTWfVT6R032fedwg3htpX88hgA1dR3OiXGzEzTfxcYp%2F2H%2FIxsLONiRdcp%2BNf2RrBHmfGHrAt3X1zrNbVyKEcqln7Xrqhm1oq4%2FDol8%2FPVDePl19CM%2FqYgF%2BwwHBO9w3m%2BDWmwg8OVJD3PumDgZuXoMrExXdDei04zASpyfCUuvFtTfFwBKBbvRVJs83hdTr3T5pYZa4C7mdsIudUpl5%2BgADfDXDTQJ8mh5%2BXX1sqqG6Rtoc2hC1d9OlUNTQex53dOalNepwu4hMBCBcuDmTL2ADXj1wXoodvJ3dFrPM9NzstbG2nBDICAgwmoE4W%2BMR7EM0XQM%2B9FBnlFxbx9cDebDkafk5N9VgAA6wCfcsoNPUk5AoCy%2F38R%2FzfyfCTe0L%2BqWlx7HpmDouP16ZEdm4MVfm6mSMxuC6e%2FdEBYLn6AeUNuDdTs3npRzu5kUYl1i79odWYuymKEPihKPAnnxqTpQJN0YX1SIsQHXC7unE2jt7LYrbqMMXM%2F74GOqUBJ9h%2F0NAId1UY7x38QFZrTprL0In6wGJMF3zP8%2F2SBXef1wJjRBRZKVMGWYoY9NLht2iydECpoyMjcOLWPKIpDMAsKEFXRw%2Br8ynmPsqMXvXBLHC%2FoGxZvSZNF1bmqrZcFLvmON5%2BHxhHNyZjgtVPiUCN1IGLXhMM4Fi2B0e8D0Anc%2FRxGsz%2BnCOwruLKvFbfsNfWB%2FVJzc7Izt1gkJLb%2B9qEWjd3&X-Amz-Signature=7738f5db2c682c2aeb74f7d58795edf7878cac3cafa74e2daab0daf07ba7ef72&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQENP3N%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIF3e%2BfDUfWKM1m0f5XwnelYbMQVrruiA1lqwtz%2Fw%2BD9MAiAtz%2B6leWtiUZ0KWkKGyU20ULU9MI8acoRAsi3CwtWS2iqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPaBsF7BRdjhwopsFKtwDUeIomgiOcKou31cmbAPher36eQqK2tprqHQsNglJwjYjtptSZ46QQB1HBasoC0Csp9zgRbnVx7xTJC0gKB8kSVcMeS9GqvC2ToX89fzICYm3wnCDdvgHeuQUH4lrNfp107s2VIq0QZvgl54O0u6nrcrTj8nrAUrUyT1f2PNpEARTvbEoj4LNgWcAnWih7T1G2iATvVPO%2FtqBrKd5iBu8Z2BeBq7BwZVqaVpZcbUkiqGZ1Fc4DZ1p3pZVXSAMCvnw9ze5KXQMWFDDx2XldsUS%2FJVK1hmzH5cTwHtal%2B1btTdVdizGzfP5dpiUTnZ4dL6Tz05KXERMCvDjnl2%2BBYCKV0jdDYwWE9VNBw2fjO%2FtRbD8ijNasPYPyi3HSXBZwiL54X%2FKv%2FASyinmvTKBhsvvOqdj1ScEIYqH%2BXTFujvI9jYGjw5xsv6EqS1eNCaXszhYEtnQY0sBfkf%2B0Pi%2B57yDU6FeKHZgEmOhZIGssunUqtvG%2BOzLIqFQpwsZyk8Aj%2FPQEx0H3hrrsCOssC6w8wGkThZyiGmOWe3QAogcbehdsM49seIaY5SD7qBeq0dGuKXlVQGbZFsP3dFag1OdC4WMrq1j5j%2BIwevv8bs5sHETJF77hSh2dUegvD2Cqa8wm8z%2FvgY6pgH3kpOWBO53MKR7FuajYka7OxSNkWwD4tzcrojlKA8c5lxUoAEyq3m2vZSpZTGBqFR%2B%2Bv%2BmCVGvD6YB3GG1CW67gRCVpj8ZKkZA2Zf03bqZd6%2FVGEESixzBLJkz0Ml9ZQFIyKMIe%2BQ8eHiGKczijFolKUZFEkKP%2Fw3NnmCOOolAkwKGVSqKqA5865vz%2FlsldEPlWnWLirULaJOZPYxKezu2eIZxf%2FxX&X-Amz-Signature=bda2ac05419e05ce6832bd4a8a41b3ee56f9446c517d9cbcf7a8e5b19ec0328f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXFGAFW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDX5lL9I2gahoq%2BCLES9tIYDvkkLnntSCLTDMbOyQfq%2BQIhAMTPIpu1NuC%2FZsKN3wmwzFWNtroM5gLCQOb3OkJc0SHiKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaVU1cL53hadiil5Yq3ANyzt8Cyew%2Bwqj1vZGcmoPUH11m6u0BeWSNpNyzhZS2K97hIOgzzLmKeTzOfZlkbxAxfQ8qnf1co23c73wcYy%2BZvJyNyQ2RwycHJ3OzvMlk5AT%2BKTW0M6TfNvq1TLOXp2ZMr8eAIE7IBmAQtC%2FuXje2w1jSbYaLUpMnCflJmkFHi2rHTAAxdYuXFl%2FNBqEDCSyB2zj3dg6srVw7E8o1FIFTFH%2FFSesdDFRmJ8mYSrTGTvgIXGh9mexpRoLG49lIfePAA%2BbvSWg05V8VsLa7C6IM%2Be%2BUoo95zzi8wVo4LRW0Eg1rxlFRRZubzC%2BPqj9%2Bg3LglZHOSpMZPW5f10PtHzdifjWJQeyN6yNDhxmn9pSjGLJBbmr9v1StxwfbvZ55SSFP2DIUCP9hEIDbBkyazW4uKgrm4pNUwSrzwtVNKqrhAWWlkoxlOfLzcifDT2M7lL9cX5yUZxlPEF0WDCxzHdcRmasGkwy6PP6LKCb4kIt56cEGSplT7W1Mv8oswVdq9VXjAOZWLkZrE3GYenAJLJExlyqrpkQQ0lf6zX%2B636htSpxV6Gioogs15oAR%2F9O5VahlZ%2BKDr5X7QwZ%2FICF3VsW82S2UBPmmNmFw6CrefXgHZUQv3r4UYF8xc%2FpIWDCezP%2B%2BBjqkAWL%2FwU%2BzCtYlmrFiKEKEutx66MC318%2F8UFlbm9U7Dl7d2ZclIEuub8z6ncF6Gu52B7I%2BTKFinpXnfaCmlP1nyx44eblKTEqkbHjlILnUD%2ByUaKyL5u6KTZmT3095wuH4Zjayjb5kjAqwfiIRG0wCAzo3TILbBVgIIdbWftCKsPvDcITc9PGeR88vu2pmjRRwEnnrTDQEWNQwFtwp3RpDHxmL%2F1ho&X-Amz-Signature=5e3b80334f82c9d593e834763010046c450428ccb490c392f00af55c1f285cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTO2N564%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDO2TBYvrusEayxp6bvjhqQeAhpFrD1%2BRvS462iHiRfSgIgD5d%2Fuc2CAMcL4JIdlhs3b3QKL5LZfI%2FLD8qZcSJ17G0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmRI7NUArL9AgXISircA6aXeiH97%2BkuT2NV0%2F91AtwmV%2BeDzVUZ3PfQDu%2F0IPbmbqLGvAoY0I3AQEDYYI3YE6XJlxsaFyTN7HS1o38HupVggFgcB89Nbz3PvdSo120GwizI3GQuUKHX4xGf%2F%2FLVJ8tYptYPS5z9V%2FHf7cZ3aBw76BY1Gg%2BAkc0qlGEjyMWZHIMYh2PcSkHtjFWYD1g%2BGevKNnvh1keyJg7LohCbJEzqpTmZlnI6reBDvbcWsidYeQ%2FJPLSJ5sZ70vIf0VA1LzlP5X9E61NzDdEt2%2FuXEXEaoUt7HM7PwEosJDN1nQl8epQBM5rJW8lJPsWV%2BpPWPsOJtYoBW%2FM%2BfjK8UxIeKU6MTEFPTRMQHH7IwGvuq90rCWWPfQuvJpL%2BAr%2FMBqfBY2eYF0PAFPFCMYgTE9Xs3WXCLz1uwbZ7%2FdSgumTW5i8EC7dYaO8ie%2Bwd6ipc6FR5OlNO6JM3xEnNriv7EUtvqbNHwWtE5bAgUFixYH77vhtDHJ3fzg%2Fco%2FiL2fx6ITJHxlVggFXVXRMhhxOBLf78kx7zXw1kFMVKSbhYhMlvYEx%2F3i0IMQMUPAbOhAK1OmNJhuR7JRtDM8nfNUBDpijSgrDTrtrAgsgjKC0fYoKpZ%2Fzi2WzbE6UeYl1Nyd6tMNHM%2F74GOqUBaECNrw9HZ2r%2Bzr%2FcG7%2BczT9tCd5%2FbzuuUkhE8Z0JrExQ%2FnTkL9trZ6EVY8oaCqPw1g1%2But9sztVOBrbk1zbbuLJ5DAVUCOsJtGOqtsqzcUOK0tmWFoUL9xqj1cVUmU7pVaLJkTrLu97%2FkgXmVig4dyYxivRv0ZbfR1h3%2BRJeFg2kpAQvLC64M7tPt%2BNtnCnIpXI1V1JOaBlXYbEQiDRfyOfB0okj&X-Amz-Signature=d569fd1d932c100bba151c9a838ad5bbca3c18d11d03b7ae3a4744e38f4fbb30&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

