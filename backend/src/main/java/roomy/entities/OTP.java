package roomy.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "otp")
public class OTP {
    @Id @GeneratedValue private Long id;

    @ManyToOne private User user;
    private String otpCode;
    private boolean isUsed = false;
    private LocalDateTime expiresAt;

}
